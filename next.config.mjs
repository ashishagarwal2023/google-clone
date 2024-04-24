/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
        pathname:
          "/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      },
    ],
  },
};

export default nextConfig;
