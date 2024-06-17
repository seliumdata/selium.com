import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);