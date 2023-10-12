/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = {
//   ...nextConfig,
//   webpack: (config) => {
//     config.resolve.modules.push(__dirname + '/node_modules/swiper');
//     return config;
//   },
// };
