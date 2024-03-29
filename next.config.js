/* @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  env: {
    BASE_URL_SERVER: process.env.BASE_URL_SERVER,
  },
  async rewrites(x) {
    return {
      fallback: [
        // product
        {
          source: "/z:id/:slug",
          destination: "/z/:id/:slug",
        },
        // exposant
        {
          source: "/pp:id/:slug",
          destination: "/pp/:id/:slug",
        },
        // typeprod
        {
          source: "/p:id/:slug",
          destination: "/p/:id/:slug",
        },
        // univers
        {
          source: "/u:id/:slug",
          destination: "/u/:id/:slug",
        },
        // superunivers
        {
          source: "/su:id/:slug",
          destination: "/su/:id/:slug",
        },
        // cpp
        {
          source: "/cpp:id/:slug",
          destination: "/cpp/:id/:slug",
        },
        // category
        {
          source: "/c:id/:slug",
          destination: "/c/:id/:slug",
        },
      ],
    };
  },
};

module.exports = nextConfig;
