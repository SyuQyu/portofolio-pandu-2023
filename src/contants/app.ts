// Application constants for better maintainability and performance

// Animation constants
export const ANIMATION_DURATION = {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
} as const;

export const ANIMATION_EASING = {
    EASE_IN_OUT: [0.4, 0, 0.2, 1],
    EASE_OUT: [0, 0, 0.2, 1],
    EASE_IN: [0.4, 0, 1, 1],
} as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
} as const;

// SEO constants
export const SEO = {
    SITE_NAME: 'Pandu Utomo Portfolio',
    SITE_DESCRIPTION: 'Computer Science student specializing in full-stack web development and 3D environment design.',
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio.panduutomo.com',
    TWITTER_HANDLE: '@panduutomo',
    LOCALE: 'en_US',
} as const;

// Contact information
export const CONTACT = {
    EMAIL: 'pandu.utomo.2002@gmail.com',
    PHONE: '+6282137138687',
    LOCATION: 'Jakarta, Indonesia',
    LINKEDIN: 'https://www.linkedin.com/in/pandu-utomo/',
    GITHUB: 'https://github.com/SyuQyu',
} as const;

// Performance constants
export const PERFORMANCE = {
    IMAGE_QUALITY: 90,
    IMAGE_BLUR_DATA_URL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
    DEBOUNCE_DELAY: 300,
    THROTTLE_DELAY: 100,
} as const;

// Navigation sections
export const NAVIGATION = {
    HOME: 'homeSection',
    ABOUT: 'aboutMeSection',
    EXPERIENCE: 'experienceSection',
    EDUCATION: 'educationSection',
    PORTFOLIO: 'portofolioSection',
} as const;