import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
// Remove this, once `react-syntax-highlighter` is updated to support `toml` lang
import toml from 'refractor/lang/toml';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import { makeStyles } from '@material-ui/core';

SyntaxHighlighter.registerLanguage('js', jsx);
SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('toml', toml);
SyntaxHighlighter.registerLanguage('bash', bash);

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
  const details = className.replace(/language-/, '');
  // eslint-disable-next-line prefer-const
  let [language, linesEnabledStr] = details.split('.');
  console.log(language, linesEnabledStr);
  const linesEnabled = /true/i.test(linesEnabledStr);
  switch (language) {
    case 'rs':
      language = 'rust';
      break;
    case 'sh':
    case 'bash':
      language = 'bash';
      break;
  }
  return (
    <div className={classes.root}>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        showLineNumbers={linesEnabledStr == null ? showLines : linesEnabled}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
