const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "localhost",
      "i.pinimg.com",
      "www.pinterest.co.uk",
      "www.ephotozine.com",
      "parade.com",
      "cdn.dribbble.com",
      "media.geeksforgeeks.org",
    ], // <== Domain name
  },
  env: {
    NEXT_PUBLIC_MAPBOX_API_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN,
  },
};

module.exports = nextConfig;
