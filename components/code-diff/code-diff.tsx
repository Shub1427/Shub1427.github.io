import React from 'react';
import { makeStyles } from '@material-ui/core';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import DiffItem from './item';

SyntaxHighlighter.registerLanguage('js', jsx);
SyntaxHighlighter.registerLanguage('rust', rust);

export interface ICodeDiffProps {
  lang: 'rs' | 'jsx';
  hideLines?: boolean;
  addedLineNumbers: number[];
  removedLineNumbers: number[];
  children: React.ReactChild;
}

export interface IRowRenderer {
  rows: any[];
  stylesheet: string;
  useInlineStyles: any;
}

const useStyles = makeStyles({
  root: {
    marginBottom: 16,
  },
});

const rowRenderer = (addedLines: number[], removedLines: number[]) => ({
  rows,
  stylesheet,
  useInlineStyles,
}: IRowRenderer) => {
  return rows.map((row: any, index: number) => {
    return (
      <DiffItem
        key={`code-segement${index}`}
        isAddedLine={addedLines.includes(index + 1)}
        isRemovedLine={removedLines.includes(index + 1)}
        index={index}
        row={row}
        stylesheet={stylesheet}
        useInlineStyles={useInlineStyles}
      />
    );
  });
};

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
        renderer={rowRenderer(props.addedLineNumbers, props.removedLineNumbers)}
      >
        {props.children}
      </SyntaxHighlighter>
    </div>
  );
}
