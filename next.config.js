/** @type {import('next').NextConfig} */

const withVideos = require("next-videos");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withVideos(nextConfig);
