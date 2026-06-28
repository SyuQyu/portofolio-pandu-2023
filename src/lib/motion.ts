import type { Variants } from 'framer-motion';

// Signature easing — exponential ease-out (no bounce, no elastic).
export const EASE = [0.16, 1, 0.3, 1] as const;

// Re-triggering trigger: animate IN on enter and OUT on leave, every time.
export const viewportEach = { once: false, amount: 0.2 } as const;

// transition used when animating back OUT (to "hidden")
const OUT = { duration: 0.5, ease: EASE };

/* ----- single-element entrance variants (enter + leave) ----- */

export const riseIn: Variants = {
    hidden: { opacity: 0, y: 30, transition: OUT },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

// Soft focus-pull: blurred + lifted into place. The "premium" default.
export const blurRise: Variants = {
    hidden: { opacity: 0, y: 32, filter: 'blur(8px)', transition: OUT },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: EASE } },
};

// Letterbox wipe — good for images / plates.
export const clipReveal: Variants = {
    hidden: { opacity: 0, clipPath: 'inset(14% 0% 14% 0%)', transition: OUT },
    show: { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1, ease: EASE } },
};

// Settle-in scale, for framed/standalone modules.
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.965, filter: 'blur(6px)', transition: OUT },
    show: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE } },
};

// Masked slide-up — pair with an overflow-hidden wrapper. For headings.
export const maskUp: Variants = {
    hidden: { y: '115%', transition: OUT },
    show: { y: 0, transition: { duration: 0.9, ease: EASE } },
};

/* ----- stagger container ----- */

export const staggerParent = (stagger = 0.08, delayChildren = 0.05): Variants => ({
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
});

// Child for use inside a staggerParent.
export const staggerChild: Variants = {
    hidden: { opacity: 0, y: 22, transition: OUT },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
