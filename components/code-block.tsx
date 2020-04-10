// src/CodeBlock.js
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

SyntaxHighlighter.registerLanguage('js', jsx);
SyntaxHighlighter.registerLanguage('rust', rust);

export default function CodeBlock({
  children,
  className,
}: {
  children: any;
  className: any;
}) {
  let language = className.replace(/language-/, '');
  switch (language) {
    case 'rs':
      language = 'rust';
      break;
  }
  return (
    <SyntaxHighlighter language={language} style={atomDark}>
      {children}
    </SyntaxHighlighter>
  );
}
