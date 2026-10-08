import { useEffect, useRef, useState, type CSSProperties } from "react";

import ashenPressSource from "./sources/ashen-press.html?raw";

export type AshenPressProps = {
  className?: string;
  style?: CSSProperties;
};

export function AshenPress({ className = "", style }: AshenPressProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [documentVisible, setDocumentVisible] = useState(() => (
    typeof document === "undefined" || !document.hidden
  ));
  const [hostVisible, setHostVisible] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      setHostVisible(entry?.isIntersecting ?? true);
    }, { rootMargin: "80px" });
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    const update = () => setDocumentVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  const mounted = hostVisible && documentVisible;

  useEffect(() => {
    setReady(false);
  }, [mounted]);

  return (
    <div
      ref={hostRef}
      className={`threeui-background ashen-press${className ? ` ${className}` : ""}`}
      role="group"
      aria-label="Interactive Sovereign Passport and Visa Shelf"
      data-state={!mounted ? "paused" : ready ? "ready" : "loading"}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#eef3f9",
        pointerEvents: "auto",
        ...style,
      }}
    >
      {mounted ? (
        <iframe
          title="Global Visa & Passport Services — Consular Archive Shelf"
          srcDoc={ashenPressSource}
          sandbox="allow-scripts"
          loading="eager"
          onLoad={() => setReady(true)}
          style={{
            position: "absolute",
            inset: 0,
            display: "block",
            width: "100%",
            height: "100%",
            border: 0,
            background: "#eef3f9",
            opacity: ready ? 1 : 0,
            pointerEvents: ready ? "auto" : "none",
            transition: "opacity 240ms ease-out",
          }}
        />
      ) : null}
    </div>
  );
}
