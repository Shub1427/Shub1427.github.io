/* eslint-disable @typescript-eslint/no-var-requires */
const emoji = require('remark-emoji');
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');
const rehypeSlug = require('rehype-slug');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [emoji, remarkMath],
    rehypePlugins: [rehypeKatex, rehypeSlug],
  },
});
module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
});
