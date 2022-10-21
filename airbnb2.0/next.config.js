

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
    mapbox_key:
      "pk.eyJ1IjoibnNzdGFyciIsImEiOiJjbDlpa2FtaWYxbjM3M3dsOW51ZHdyMXh1In0.ztew08twWxbqBvoGxuTanA",
  },
};

module.exports = nextConfig;