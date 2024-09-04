/** @type {import('next').NextConfig} */
import { join } from 'path';

const nextConfig = {
    sassOptions: {
        includePaths: [join('Styling')],
    },
};

export default nextConfig;
