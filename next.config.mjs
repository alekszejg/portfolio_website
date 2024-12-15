/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: false,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains; preload',
                    },
                    {
                        key: "Content-Security-Policy",
                        value: "default-src 'self'; script-src 'self' https://www.google.com https://www.gstatic.com https://www.recaptcha.net 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' https://www.google.com https://www.gstatic.com data:; font-src 'self'; frame-src https://www.google.com https://www.recaptcha.net; connect-src 'self' https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self';",
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options', 
                        value: 'DENY',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'no-referrer',
                    },
                ]
            }
        ]
    },
};

export default nextConfig;
