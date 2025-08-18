// Performance utility functions

/**
 * Debounce function to limit the rate of function execution
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;

    return function executedFunction(...args: Parameters<T>) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function execution frequency
 */
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;

    return function executedFunction(...args: Parameters<T>) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * Lazy load images with IntersectionObserver
 */
export function lazyLoadImage(img: HTMLImageElement): void {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target as HTMLImageElement;
                lazyImage.src = lazyImage.dataset.src || '';
                lazyImage.classList.remove('lazy');
                imageObserver.unobserve(lazyImage);
            }
        });
    });

    imageObserver.observe(img);
}

/**
 * Preload critical resources
 */
export function preloadResource(href: string, as: string): void {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
}

/**
 * Check if the user is on a slow network
 */
export function isSlowNetwork(): boolean {
    if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
    }
    return false;
}

/**
 * Get optimal image format based on browser support
 */
export function getOptimalImageFormat(): 'webp' | 'avif' | 'jpg' {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) return 'jpg';

    // Check for AVIF support
    if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
        return 'avif';
    }

    // Check for WebP support
    if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
        return 'webp';
    }

    return 'jpg';
}
