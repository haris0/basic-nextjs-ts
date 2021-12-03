/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/about',
      destination: '/',
      permanent: false,
    },
    {
      source: '/old-blog/:id',
      destination: '/new-blog/:id',
      permanent: true,
    },
  ],
  devIndicators: {
    buildActivity: false,
  },
};
