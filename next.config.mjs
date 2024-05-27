/** @type {import('next').NextConfig} */
import mdx from '@next/mdx';

const withMDX = mdx();

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
