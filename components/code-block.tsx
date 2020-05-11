import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';

// Remove this, once `react-syntax-highlighter` is updated to support `toml` lang
import toml from 'refractor/lang/toml';
import { log4rs } from '@utils/prism-langs';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';
import { makeStyles, Theme } from '@material-ui/core';
import WindowControlIcons from './window-control-icons';

SyntaxHighlighter.registerLanguage('js', jsx);
SyntaxHighlighter.registerLanguage('ts', tsx);
SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('toml', toml);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('log4rs', log4rs);

export interface ICodeBlockProps {
  showLines?: boolean;
  className: string;
  children: React.ReactChild;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 32,
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
    padding: '0 0 64px 0 !important',

    '& *::selection': {
      background: 'rgba(255,171,0,0.2)',
    },
    '& *::-moz-selection': {
      background: 'rgba(255,171,0,0.2)',
    },
  },
}));

export default function CodeBlock({
  children,
  className,
  showLines = false,
}: ICodeBlockProps) {
  const classes = useStyles();
  const details = className.replace(/language-/, '');
  // eslint-disable-next-line prefer-const
  let [language, linesEnabledStr] = details.split('.');
  const linesEnabled = /true/i.test(linesEnabledStr);
  switch (language) {
    case 'rs':
      language = 'rust';
      break;
    case 'sh':
    case 'bash':
      language = 'bash';
      break;
    case 'log':
      language = 'log4rs';
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
          language={language}
          className={classes.codeBlock}
          style={atomDark}
          showLineNumbers={linesEnabledStr == null ? showLines : linesEnabled}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
