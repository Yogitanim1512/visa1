import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'dark';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'color',
  showText = true,
}) => {
  const navyFill = variant === 'white' ? '#FFFFFF' : '#0A3670';
  const blueFill = variant === 'white' ? '#93C5FD' : '#1565C0';
  const ribbonFill = variant === 'white' ? '#FFFFFF' : '#FFFFFF';
  const globeFill = variant === 'white' ? '#3B82F6' : '#1565C0';

  if (!showText) {
    // Only the globe + airplane icon
    return (
      <svg
        viewBox="0 0 210 190"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Global Visa and Passport Services Icon"
      >
        <defs>
          <clipPath id="globe-clip-icon">
            <circle cx="115" cy="100" r="62" />
          </clipPath>
        </defs>

        <path d="M 135 22 C 160 30 182 50 188 78" stroke={navyFill} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.85" />
        <path d="M 45 135 C 38 105 45 70 65 48" stroke={navyFill} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.85" />

        <circle cx="115" cy="100" r="62" fill={globeFill} />

        <g clipPath="url(#globe-clip-icon)" fill={ribbonFill} opacity="0.95">
          <path d="M 75 58 Q 90 48 115 50 Q 130 54 135 68 Q 120 75 110 82 Q 100 70 85 75 Z" />
          <path d="M 82 82 Q 95 86 98 100 Q 90 108 84 98 Z" />
          <path d="M 98 112 Q 115 110 120 122 Q 115 145 105 155 Q 96 142 98 125 Z" />
          <path d="M 148 72 Q 162 70 168 85 Q 160 100 152 95 Z" />
          <path d="M 152 105 Q 170 110 165 138 Q 155 145 150 130 Z" />
        </g>

        <path d="M 45 150 C 58 165 82 170 110 162 C 85 162 65 154 52 142 Z" fill={navyFill} />
        <path d="M 40 135 C 55 152 80 156 108 146 C 80 148 60 138 48 126 Z" fill={navyFill} />
        <path d="M 38 120 C 52 138 78 140 106 128 C 76 132 55 122 45 110 Z" fill={navyFill} />

        <path d="M 38 108 C 45 125 70 132 108 120 C 145 108 178 72 208 38 C 172 68 135 98 95 104 C 62 108 48 98 42 90 Z" fill={navyFill} />
        <path d="M 44 100 C 52 118 80 120 118 106 C 152 94 182 62 206 38 C 176 64 142 88 106 94 C 72 98 56 90 48 84 Z" fill={ribbonFill} stroke={navyFill} strokeWidth="2.5" />

        <g transform="translate(195, 42) rotate(-42)">
          <path d="M 0 -22 C 3 -18 4 10 3 24 C 2 28 0 30 0 30 C 0 30 -2 28 -3 24 C -4 10 -3 -18 0 -22 Z" fill={navyFill} />
          <path d="M 0 -4 L 28 14 L 26 19 L 0 8 L -26 19 L -28 14 Z" fill={navyFill} />
          <path d="M 0 20 L 12 28 L 10 31 L 0 26 L -10 31 L -12 28 Z" fill={navyFill} />
          <rect x="8" y="7" width="3" height="7" rx="1.5" fill={navyFill} />
          <rect x="-11" y="7" width="3" height="7" rx="1.5" fill={navyFill} />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 560 190"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Global Visa & Passport Services"
    >
      <defs>
        <clipPath id="globe-clip-full">
          <circle cx="115" cy="100" r="62" />
        </clipPath>
      </defs>

      {/* Orbit arcs */}
      <path d="M 135 22 C 160 30 182 50 188 78" stroke={navyFill} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M 45 135 C 38 105 45 70 65 48" stroke={navyFill} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.85" />

      {/* Globe */}
      <circle cx="115" cy="100" r="62" fill={globeFill} />

      {/* Continents */}
      <g clipPath="url(#globe-clip-full)" fill={ribbonFill} opacity="0.95">
        <path d="M 75 58 Q 90 48 115 50 Q 130 54 135 68 Q 120 75 110 82 Q 100 70 85 75 Z" />
        <path d="M 82 82 Q 95 86 98 100 Q 90 108 84 98 Z" />
        <path d="M 98 112 Q 115 110 120 122 Q 115 145 105 155 Q 96 142 98 125 Z" />
        <path d="M 148 72 Q 162 70 168 85 Q 160 100 152 95 Z" />
        <path d="M 152 105 Q 170 110 165 138 Q 155 145 150 130 Z" />
      </g>

      {/* Ribbon and lower swooshes */}
      <path d="M 45 150 C 58 165 82 170 110 162 C 85 162 65 154 52 142 Z" fill={navyFill} />
      <path d="M 40 135 C 55 152 80 156 108 146 C 80 148 60 138 48 126 Z" fill={navyFill} />
      <path d="M 38 120 C 52 138 78 140 106 128 C 76 132 55 122 45 110 Z" fill={navyFill} />

      <path d="M 38 108 C 45 125 70 132 108 120 C 145 108 178 72 208 38 C 172 68 135 98 95 104 C 62 108 48 98 42 90 Z" fill={navyFill} />
      <path d="M 44 100 C 52 118 80 120 118 106 C 152 94 182 62 206 38 C 176 64 142 88 106 94 C 72 98 56 90 48 84 Z" fill={ribbonFill} stroke={navyFill} strokeWidth="2.5" />

      {/* Jet Airplane */}
      <g transform="translate(195, 42) rotate(-42)">
        <path d="M 0 -22 C 3 -18 4 10 3 24 C 2 28 0 30 0 30 C 0 30 -2 28 -3 24 C -4 10 -3 -18 0 -22 Z" fill={navyFill} />
        <path d="M 0 -4 L 28 14 L 26 19 L 0 8 L -26 19 L -28 14 Z" fill={navyFill} />
        <path d="M 0 20 L 12 28 L 10 31 L 0 26 L -10 31 L -12 28 Z" fill={navyFill} />
        <rect x="8" y="7" width="3" height="7" rx="1.5" fill={navyFill} />
        <rect x="-11" y="7" width="3" height="7" rx="1.5" fill={navyFill} />
      </g>

      {/* Typography */}
      <text x="225" y="90" fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" fontSize="70" fontWeight="900" fill={navyFill} letterSpacing="0.04em">
        GLOBAL
      </text>

      <text x="228" y="132" fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" fontSize="28" fontWeight="700" fill={blueFill} letterSpacing="0.18em">
        VISA &amp; PASSPORT
      </text>

      <text x="228" y="168" fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" fontSize="28" fontWeight="700" fill={blueFill} letterSpacing="0.48em">
        SERVICES
      </text>
    </svg>
  );
};
