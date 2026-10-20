/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/collections/wedding", destination: "/collections/atelier-tote", permanent: false },
      { source: "/collections/wedding-favor", destination: "/collections/atelier-tote", permanent: false },
      { source: "/collections/bride-gift", destination: "/collections/saddle-crossbody", permanent: false },
      { source: "/collections/welcome-bag", destination: "/collections/weekend-duffle", permanent: false },
      { source: "/collections/gift", destination: "/collections/leather-journal", permanent: false },
      { source: "/collections/luxury-gift", destination: "/collections/leather-journal", permanent: false },
      { source: "/collections/ribbon-box", destination: "/collections/zip-pouch", permanent: false },
      { source: "/collections/boutique", destination: "/collections/saddle-crossbody", permanent: false },
      { source: "/collections/boutique-bag", destination: "/collections/slim-card-wallet", permanent: false },
      { source: "/collections/paper-tote", destination: "/collections/atelier-tote", permanent: false },
      { source: "/collections/events", destination: "/collections/weekend-duffle", permanent: false },
      { source: "/collections/event-bag", destination: "/collections/weekend-duffle", permanent: false },
      { source: "/collections/brand", destination: "/collections/classic-bifold", permanent: false },
      { source: "/collections/brand-bag", destination: "/collections/hand-stitched-belt", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
