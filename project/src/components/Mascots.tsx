interface MascotProps {
  className?: string;
}

export function CuteOwl({ className = '' }: MascotProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="100" cy="120" rx="55" ry="60" fill="#facc15" />
      <ellipse cx="100" cy="125" rx="40" ry="45" fill="#fef3c7" />
      {/* Wings */}
      <ellipse cx="55" cy="115" rx="18" ry="35" fill="#f59e0b" transform="rotate(-15 55 115)" />
      <ellipse cx="145" cy="115" rx="18" ry="35" fill="#f59e0b" transform="rotate(15 145 115)" />
      {/* Head */}
      <circle cx="100" cy="70" r="45" fill="#facc15" />
      {/* Ear tufts */}
      <path d="M65 40 L72 58 L58 55 Z" fill="#f59e0b" />
      <path d="M135 40 L128 58 L142 55 Z" fill="#f59e0b" />
      {/* Eye whites */}
      <circle cx="82" cy="70" r="18" fill="white" />
      <circle cx="118" cy="70" r="18" fill="white" />
      {/* Pupils */}
      <circle cx="84" cy="72" r="9" fill="#1a4731" />
      <circle cx="120" cy="72" r="9" fill="#1a4731" />
      {/* Eye sparkle */}
      <circle cx="87" cy="69" r="3" fill="white" />
      <circle cx="123" cy="69" r="3" fill="white" />
      {/* Beak */}
      <path d="M100 80 L92 88 L100 96 L108 88 Z" fill="#f97316" />
      {/* Blush */}
      <circle cx="68" cy="82" r="6" fill="#fb7185" opacity="0.5" />
      <circle cx="132" cy="82" r="6" fill="#fb7185" opacity="0.5" />
      {/* Feet */}
      <path d="M85 175 L80 185 M85 175 L88 185 M85 175 L92 185" stroke="#f97316" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M115 175 L110 185 M115 175 L118 185 M115 175 L122 185" stroke="#f97316" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function CuteBook({ className = '' }: MascotProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Book base */}
      <rect x="40" y="60" width="120" height="90" rx="8" fill="#4ade80" />
      <rect x="40" y="60" width="120" height="90" rx="8" fill="none" stroke="#16a34a" strokeWidth="3" />
      {/* Spine */}
      <rect x="40" y="60" width="14" height="90" fill="#16a34a" />
      {/* Pages lines */}
      <line x1="68" y1="80" x2="145" y2="80" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="68" y1="95" x2="145" y2="95" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="68" y1="110" x2="130" y2="110" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="68" y1="125" x2="140" y2="125" stroke="white" strokeWidth="3" strokeLinecap="round" />
      {/* Star on cover */}
      <path d="M100 40 L105 52 L118 52 L108 60 L112 73 L100 65 L88 73 L92 60 L82 52 L95 52 Z" fill="#facc15" stroke="#f59e0b" strokeWidth="2" />
      {/* Cute face */}
      <circle cx="80" cy="140" r="3" fill="#1a4731" />
      <circle cx="120" cy="140" r="3" fill="#1a4731" />
      <path d="M90 148 Q100 155 110 148" stroke="#1a4731" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="72" cy="145" r="4" fill="#fb7185" opacity="0.5" />
      <circle cx="128" cy="145" r="4" fill="#fb7185" opacity="0.5" />
    </svg>
  );
}

export function CutePencil({ className = '' }: MascotProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Pencil body - diagonal */}
      <g transform="rotate(-30 100 100)">
        <rect x="70" y="50" width="30" height="100" rx="4" fill="#f472b6" />
        <rect x="70" y="50" width="30" height="100" rx="4" fill="none" stroke="#ec4899" strokeWidth="2" />
        {/* Wood tip */}
        <path d="M70 150 L100 150 L85 175 Z" fill="#fcd34d" />
        {/* Lead */}
        <path d="M78 162 L92 162 L85 175 Z" fill="#1a4731" />
        {/* Eraser */}
        <rect x="70" y="40" width="30" height="14" rx="3" fill="#fb7185" />
        {/* Metal band */}
        <rect x="68" y="52" width="34" height="6" fill="#9ca3af" />
        {/* Cute face */}
        <circle cx="78" cy="85" r="4" fill="white" />
        <circle cx="92" cy="85" r="4" fill="white" />
        <circle cx="78" cy="85" r="2" fill="#1a4731" />
        <circle cx="92" cy="85" r="2" fill="#1a4731" />
        <path d="M78 98 Q85 104 92 98" stroke="#1a4731" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="72" cy="95" r="3" fill="#f97316" opacity="0.4" />
        <circle cx="98" cy="95" r="3" fill="#f97316" opacity="0.4" />
      </g>
    </svg>
  );
}

export function CuteStar({ className = '' }: MascotProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 25 L120 75 L175 80 L132 115 L148 170 L100 140 L52 170 L68 115 L25 80 L80 75 Z"
        fill="#facc15"
        stroke="#f59e0b"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Face */}
      <circle cx="85" cy="100" r="6" fill="white" />
      <circle cx="115" cy="100" r="6" fill="white" />
      <circle cx="86" cy="101" r="3" fill="#1a4731" />
      <circle cx="116" cy="101" r="3" fill="#1a4731" />
      <path d="M88 115 Q100 125 112 115" stroke="#1a4731" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="78" cy="110" r="5" fill="#fb7185" opacity="0.5" />
      <circle cx="122" cy="110" r="5" fill="#fb7185" opacity="0.5" />
    </svg>
  );
}

export function CuteCloud({ className = '' }: MascotProps) {
  return (
    <svg viewBox="0 0 200 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="70" rx="35" ry="30" fill="white" opacity="0.9" />
      <ellipse cx="100" cy="60" rx="40" ry="35" fill="white" opacity="0.9" />
      <ellipse cx="140" cy="70" rx="35" ry="30" fill="white" opacity="0.9" />
      <ellipse cx="100" cy="80" rx="50" ry="20" fill="white" opacity="0.9" />
      {/* Cute face */}
      <circle cx="85" cy="68" r="3" fill="#1a4731" />
      <circle cx="115" cy="68" r="3" fill="#1a4731" />
      <path d="M88 78 Q100 85 112 78" stroke="#1a4731" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="78" cy="74" r="4" fill="#fb7185" opacity="0.4" />
      <circle cx="122" cy="74" r="4" fill="#fb7185" opacity="0.4" />
    </svg>
  );
}
