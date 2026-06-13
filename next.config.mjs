import { fileURLToPath } from 'url';
import path from 'path';
import { createMDX } from 'fumadocs-mdx/next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default withMDX(config);
