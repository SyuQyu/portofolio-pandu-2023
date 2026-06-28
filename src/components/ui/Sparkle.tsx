// A crisp 8-spoke asterisk/sparkle drawn as SVG so it never falls back to a
// color emoji (the "✳" glyph renders as a green emoji box on many platforms).
// Colour it by setting `text-…` on the element; it inherits via currentColor.
export const Sparkle = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        className={className}
        aria-hidden
    >
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
        <line x1="18.4" y1="5.6" x2="5.6" y2="18.4" />
    </svg>
);
