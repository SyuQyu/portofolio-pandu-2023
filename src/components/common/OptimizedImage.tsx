'use client'
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onError' | 'onLoad'> {
    fallbackSrc?: string;
    showPlaceholder?: boolean;
    placeholderClassName?: string;
}

export default function OptimizedImage({
    src,
    alt,
    fallbackSrc = '/image/placeholder.jpg',
    showPlaceholder = true,
    placeholderClassName = 'bg-gray-200 animate-pulse',
    className = '',
    ...props
}: OptimizedImageProps) {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
        if (fallbackSrc && imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
        }
    };

    return (
        <div className={`relative ${className}`}>
            {/* Placeholder */}
            {isLoading && showPlaceholder && (
                <div className={`absolute inset-0 ${placeholderClassName}`} />
            )}

            {/* Optimized Image */}
            <Image
                {...props}
                src={imageSrc}
                alt={alt}
                className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                    } ${className}`}
                onLoad={handleLoad}
                onError={handleError}
                priority={props.priority}
                quality={hasError ? 75 : 90}
                placeholder={props.placeholder || 'blur'}
                blurDataURL={props.blurDataURL || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='}
            />

            {/* Error state */}
            {hasError && !isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
                    Failed to load image
                </div>
            )}
        </div>
    );
}
