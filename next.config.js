const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/assets/cash',
                permanent: true,
            },
            {
                source: '/assets',
                destination: '/assets/cash',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
