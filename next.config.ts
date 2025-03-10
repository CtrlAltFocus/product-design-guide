import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Necessary for static HTML export
  // Needed if hosted on github pages. Remove if hosted on a custom domain.
  // basePath: process.env.NODE_ENV === 'production' ? '/product-design-guide' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/product-design-guide' : '',
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Helps with GitHub Pages routing
};

export default nextConfig;
