/* eslint-disable @typescript-eslint/no-var-requires */
const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap({
  baseUrl: 'https://willofindie.com',
  ignoreIndexFiles: true,
  pagesDirectory: path.resolve(__dirname, '../../pages'),
  targetDirectory: 'out/',
  nextConfigPath: path.resolve(__dirname, '../../next.config.js'),
  ignoredExtensions: ['png', 'jpg'],
});

console.log(`✅ sitemap.xml generated!`);
