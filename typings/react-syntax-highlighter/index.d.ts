// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import * as reactSyntaxHighlighter from 'react-syntax-highlighter';

declare module 'react-syntax-highlighter' {
  export { default as createElement } from 'react-syntax-highlighter/dist/esm/create-element';
}

declare module 'react-syntax-highlighter/dist/cjs/create-element' {
  const createElement: any;
  export default createElement;
}

// Languages
declare module 'react-syntax-highlighter/dist/esm/languages/prism/jsx' {
  const language: any;
  export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/rust' {
  const language: any;
  export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/toml' {
  const language: any;
  export default language;
}

// Styles
declare module 'react-syntax-highlighter/dist/cjs/styles/prism' {
  export { default as atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark' {
  const style: any;
  export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/vs-dark' {
  const style: any;
  export default style;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/darcula' {
  const style: any;
  export default style;
}
