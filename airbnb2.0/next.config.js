
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "localhost",
      "i.pinimg.com",
      "www.pinterest.co.uk",
      "www.ephotozine.com",
    ], // <== Domain name
  },
  env: {
    NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
