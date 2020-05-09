import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';
import DiffItem from './item';
import WindowControlIcons from '@components/window-control-icons';

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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 16,
    marginBottom: 48,
    padding: 0,
    borderRadius: 4,
    background: theme.palette.primary.main,
    overflow: 'hidden',
    boxShadow: 'rgba(0, 0, 0, 0.55) 0px 10px 32px',
  },
  windowBlock: {
    position: 'relative',
    padding: 16,
    borderRadius: 4,
  },
  windowControls: {
    position: 'relative',
    paddingBottom: 8,
  },
  codeBlock: {
    marginBottom: '-64px !important',
    padding: '0 0 64px 16px !important',

    '& *::selection': {
      background: 'rgba(255,171,0,0.2)',
    },
    '& *::-moz-selection': {
      background: 'rgba(255,171,0,0.2)',
    },
  },
}));

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
      <div
        className={classes.windowBlock}
        style={{
          background:
            atomDark[':not(pre) > code[class*="language-"]'].background,
        }}
      >
        <div className={classes.windowControls}>
          <WindowControlIcons />
        </div>
        <SyntaxHighlighter
          className={classes.codeBlock}
          language={language}
          style={atomDark}
          showLineNumbers={!props.hideLines}
          wrapLines
          renderer={rowRenderer(
            props.addedLineNumbers,
            props.removedLineNumbers
          )}
        >
          {props.children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
