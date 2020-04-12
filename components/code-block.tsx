import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import { makeStyles } from '@material-ui/core';

SyntaxHighlighter.registerLanguage('js', jsx);
SyntaxHighlighter.registerLanguage('rust', rust);

export interface ICodeBlockProps {
  showLines?: boolean;
  className: string;
  children: React.ReactChild;
}

const useStyles = makeStyles({
  root: {
    marginBottom: 16,
  },
});

export default function CodeBlock({
  children,
  className,
  showLines = true,
}: ICodeBlockProps) {
  const classes = useStyles();
  let language = className.replace(/language-/, '');
  switch (language) {
    case 'rs':
      language = 'rust';
      break;
  }
  return (
    <div className={classes.root}>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        showLineNumbers={showLines}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}