import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import { makeStyles } from '@material-ui/core';

SyntaxHighlighter.registerLanguage('js', jsx);
SyntaxHighlighter.registerLanguage('rust', rust);

export interface ICodeDiffProps {
  lang: 'rs' | 'jsx';
  hideLines?: boolean;
  addedLineNumbers: number[];
  removedLineNumbers: number[];
  children: React.ReactChild;
}

const useStyles = makeStyles({
  root: {
    marginBottom: 16,
  },
});

export default function CodeDiff(props: ICodeDiffProps) {
  const classes = useStyles();
  let language: string = props.lang;
  switch (language) {
    case 'rs':
      language = 'rust';
      break;
    default:
      language = 'jsx';
      break;
  }

  return (
    <div className={classes.root}>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        showLineNumbers={!props.hideLines}
        wrapLines
        lineProps={(lineNumber: number) => {
          const style: any = { display: 'block' };
          if (props.addedLineNumbers.includes(lineNumber)) {
            style.background = 'rgba(139, 195, 74, 0.5)';
          } else if (props.removedLineNumbers.includes(lineNumber)) {
            style.background = '#ffecec';
          }
          return { style };
        }}
      >
        {props.children}
      </SyntaxHighlighter>
    </div>
  );
}
