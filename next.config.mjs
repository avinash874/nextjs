/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  image: {
    remotePatterns: [{
      hostname: 'example.com',
    }]
  }
  // reactCompiler: true,
};

// module.exports = {
//   outputFileTracingRoot: __dirname,
// }

export default nextConfig;
