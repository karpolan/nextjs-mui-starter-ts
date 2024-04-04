/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },

  env: {
    AUTHOR: 'KARPOLAN',
    // npm_package_name: process.env.npm_package_name,
    // npm_package_version: process.env.npm_package_version,
  },

  reactStrictMode: true,
  // reactStrictMode: false,

  // Note: redirects() is not working with "next export" :(
  // async redirects() {
  //   const articleRedirects = ARTICLES.map((article) => {
  //     const slug = article.replace(/ /g, '-');
  //     return {
  //       source: `/articles/${slug}`,
  //       destination: `/article/${slug}`,
  //       permanent: true,
  //     };
  //   });
  //   return [...articleRedirects];
  // },
};

export default nextConfig;
