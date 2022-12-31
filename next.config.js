/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"], //Para decirle a next que confiamos en este dominio
  },
};

module.exports = nextConfig;
