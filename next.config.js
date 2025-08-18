/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization
    images: {
        domains: [],
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 86400, // 24 hours
    },

    // Compression
    compress: true,

    // Bundle analyzer in development
    ...(process.env.ANALYZE === 'true' && {
        webpack: (config, { isServer }) => {
            if (!isServer) {
                const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
                config.plugins.push(
                    new BundleAnalyzerPlugin({
                        analyzerMode: 'static',
                        openAnalyzer: false,
                    })
                );
            }
            return config;
        },
    }),

    // Headers for better performance
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
            // Cache static assets
            {
                source: '/image/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig
