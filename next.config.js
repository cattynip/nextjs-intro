/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
       {
        source: "/old-blog/:path*",
        destination: "/new-sex-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      }
    ];
  },
};

const API_KEY = process.env.API_KEY;

module.exports = nextConfig
