import React, { useState, useEffect, useRef } from 'react';
import { 
  Camera, 
  CameraOff, 
  Hand, 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sliders, 
  Volume2, 
  VolumeX, 
  CheckCircle2,
  HelpCircle,
  Maximize2
} from 'lucide-react';
import { playGestureSound } from '../utils/audio';

interface AiGestureControllerProps {
  isOpen: boolean;
  onClose: () => void;
  onSwipeNext: () => void;
  onSwipePrev: () => void;
  onSelectAction: () => void;
  onPauseAction: () => void;
  isEcoMode: boolean;
}

export const AiGestureController: React.FC<AiGestureControllerProps> = ({
  isOpen,
  onClose,
  onSwipeNext,
  onSwipePrev,
  onSelectAction,
  onPauseAction,
  isEcoMode,
}) => {
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [detectedGesture, setDetectedGesture] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const prevFrameData = useRef<Uint8ClampedArray | null>(null);
  const lastGestureTime = useRef<number>(0);

  // Trigger gesture action helper with sound & toast
  const triggerGesture = (name: string, action: () => void) => {
    const now = Date.now();
    if (now - lastGestureTime.current < 900) return; // Debounce 900ms
    lastGestureTime.current = now;

    setDetectedGesture(name);
    if (soundEnabled) {
      playGestureSound(name.includes('Next') || name.includes('Prev') ? 'swipe' : 'select');
    }
    action();

    setTimeout(() => {
      setDetectedGesture(null);
    }, 1800);
  };

  // Start Camera
  const startCamera = async () => {
    try {
      setCameraError(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240, facingMode: 'user' }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setCameraActive(true);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Camera access declined or unavailable';
      setCameraError(errorMsg);
      setCameraActive(false);
    }
  };

  // Stop Camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    setCameraActive(false);
  };

  // Motion Detection Processing Loop
  useEffect(() => {
    if (!cameraActive) return;

    let isRunning = true;
    const canvas = canvasRef.current || document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 48;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const processFrame = () => {
      if (!isRunning || !videoRef.current || !ctx) return;
      if (videoRef.current.readyState === 4) {
        ctx.drawImage(videoRef.current, 0, 0, 64, 48);
        const imgData = ctx.getImageData(0, 0, 64, 48);
        const currentData = imgData.data;

        if (prevFrameData.current) {
          let leftMotion = 0;
          let rightMotion = 0;
          let totalDiff = 0;

          // Downsampled pixel difference scan
          for (let i = 0; i < currentData.length; i += 16) {
            const diff = Math.abs(currentData[i] - prevFrameData.current[i]);
            if (diff > 35) {
              const pixelIdx = i / 4;
              const x = pixelIdx % 64;
              if (x < 32) leftMotion += diff;
              else rightMotion += diff;
              totalDiff += diff;
            }
          }

          // Evaluate motion vectors
          if (totalDiff > 12000) {
            if (leftMotion > rightMotion * 1.8) {
              triggerGesture('Wave Left 👈 (Previous)', onSwipePrev);
            } else if (rightMotion > leftMotion * 1.8) {
              triggerGesture('Wave Right 👉 (Next)', onSwipeNext);
            } else if (totalDiff > 25000) {
              triggerGesture('Palm Stop ✋ (Pause)', onPauseAction);
            }
          }
        }

        prevFrameData.current = new Uint8ClampedArray(currentData);
      }

      animFrameRef.current = requestAnimationFrame(processFrame);
    };

    animFrameRef.current = requestAnimationFrame(processFrame);

    return () => {
      isRunning = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [cameraActive, onSwipeNext, onSwipePrev, onPauseAction, soundEnabled]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  if (!isOpen) {
    // If closed but a gesture is triggered in background, show quiet toast
    if (!detectedGesture) return null;
    return (
      <div 
        role="status" 
        aria-live="polite"
        className="fixed bottom-6 right-6 z-50 bg-slate-900/90 text-white px-4 py-2.5 rounded-xl shadow-2xl border border-violet-500/50 backdrop-blur-md flex items-center gap-2.5 text-xs font-semibold animate-bounce"
      >
        <Sparkles className="w-4 h-4 text-violet-400" />
        <span>Gesture: {detectedGesture}</span>
      </div>
    );
  }

  return (
    <aside
      aria-label="AI Gesture Navigation System"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl border transition-all duration-300 bg-slate-950/95 border-violet-500/40 text-white backdrop-blur-xl"
    >
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-violet-600/30 border border-violet-500/50 flex items-center justify-center text-violet-400">
            <Hand className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-tight">AI Gesture Controls</h3>
            <p className="text-[11px] text-slate-400">Hands-Free Spatial Navigation</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            aria-label={soundEnabled ? 'Mute gesture sound chimes' : 'Enable gesture sound chimes'}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close AI Gesture Controller"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-4 space-y-4">
        
        {/* Active Gesture HUD Badge */}
        {detectedGesture ? (
          <div 
            role="status" 
            aria-live="assertive"
            className="p-3 rounded-xl bg-violet-600/30 border border-violet-400 text-violet-200 flex items-center justify-center gap-2 text-xs font-bold animate-pulse"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span>Detected: {detectedGesture}</span>
          </div>
        ) : (
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Status: Ready for Air / Touch Gestures</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        )}

        {/* Section 1: Webcam Vision Air-Gestures */}
        <div className="rounded-xl p-3.5 bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-violet-400" />
              <span>Camera Air Wave Detection</span>
            </span>

            {cameraActive ? (
              <button
                type="button"
                onClick={stopCamera}
                className="text-[11px] font-bold text-rose-400 hover:underline flex items-center gap-1"
              >
                <CameraOff className="w-3 h-3" /> Stop Camera
              </button>
            ) : (
              <button
                type="button"
                onClick={startCamera}
                className="text-[11px] font-bold text-violet-300 hover:underline flex items-center gap-1"
              >
                <Camera className="w-3 h-3" /> Enable Camera
              </button>
            )}
          </div>

          {cameraActive ? (
            <div className="relative rounded-lg overflow-hidden bg-black aspect-video border border-violet-500/30 mb-2">
              <video
                ref={videoRef}
                playsInline
                muted
                className="w-full h-full object-cover scale-x-[-1]"
              />
              <div className="absolute top-2 left-2 bg-black/60 px-2 py-0.5 rounded text-[10px] text-emerald-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Tracking Active
              </div>
              <div className="absolute bottom-2 inset-x-2 text-center bg-slate-950/70 py-1 rounded text-[10px] text-slate-300">
                Wave hand Left / Right across camera
              </div>
            </div>
          ) : (
            <p className="text-[11px] text-slate-400 mb-2 leading-relaxed">
              Enable your camera to navigate slides and destinations completely hands-free by waving your hand in front of your screen.
            </p>
          )}

          {cameraError && (
            <p className="text-[11px] text-amber-400 bg-amber-950/40 p-2 rounded-lg border border-amber-800/60 mt-1">
              {cameraError}. You can still use the Air Touch Pad below!
            </p>
          )}
        </div>

        {/* Section 2: Universal Air Touch Trackpad (Universal compatibility for phone/tablet/PC) */}
        <div className="rounded-xl p-3.5 bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-200">
              Virtual Air Gesture Pad
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Touch / Swipe Surface</span>
          </div>

          <div
            tabIndex={0}
            role="region"
            aria-label="Gesture touch pad: swipe left or right to trigger navigation"
            onTouchStart={(e) => setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY })}
            onTouchEnd={(e) => {
              if (!touchStart) return;
              const deltaX = e.changedTouches[0].clientX - touchStart.x;
              if (deltaX > 40) triggerGesture('Swipe Right 👉', onSwipePrev);
              else if (deltaX < -40) triggerGesture('Swipe Left 👈', onSwipeNext);
              setTouchStart(null);
            }}
            onMouseDown={(e) => setTouchStart({ x: e.clientX, y: e.clientY })}
            onMouseUp={(e) => {
              if (!touchStart) return;
              const deltaX = e.clientX - touchStart.x;
              if (deltaX > 40) triggerGesture('Swipe Right 👉', onSwipePrev);
              else if (deltaX < -40) triggerGesture('Swipe Left 👈', onSwipeNext);
              setTouchStart(null);
            }}
            className="h-24 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-3 text-center cursor-ew-resize hover:border-violet-500/50 transition-colors select-none focus:outline-none focus:ring-1 focus:ring-violet-400"
          >
            <div className="flex items-center gap-4 text-violet-400 mb-1">
              <ChevronLeft className="w-5 h-5 animate-pulse" />
              <Hand className="w-6 h-6 text-white" />
              <ChevronRight className="w-5 h-5 animate-pulse" />
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              Swipe or drag left / right on this pad
            </p>
          </div>
        </div>

        {/* Section 3: Instant Spatial Action Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => triggerGesture('Left 👈 (Previous)', onSwipePrev)}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-violet-900/40 border border-slate-800 text-xs font-semibold flex flex-col items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-violet-400" />
            <span>Prev Slide</span>
          </button>

          <button
            type="button"
            onClick={() => triggerGesture('Palm Stop ✋ (Hold)', onPauseAction)}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-violet-900/40 border border-slate-800 text-xs font-semibold flex flex-col items-center gap-1 transition-colors"
          >
            <Hand className="w-4 h-4 text-teal-400" />
            <span>Pause Auto</span>
          </button>

          <button
            type="button"
            onClick={() => triggerGesture('Right 👉 (Next)', onSwipeNext)}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-violet-900/40 border border-slate-800 text-xs font-semibold flex flex-col items-center gap-1 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-violet-400" />
            <span>Next Slide</span>
          </button>
        </div>

        {/* Quick Hint */}
        <p className="text-[10px] text-slate-400 text-center">
          Keyboard shortcut: Press <kbd className="px-1 py-0.5 rounded bg-slate-800 font-mono text-slate-300">Alt+G</kbd> anytime to open/close.
        </p>

      </div>
    </aside>
  );
};
