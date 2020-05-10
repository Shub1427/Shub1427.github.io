import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import Github from '@material-ui/icons/Github';
import EmailIcon from '@material-ui/icons/Email';
import LinkedIn from '@material-ui/icons/LinkedIn';

const StackOverflow = (props: any) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-icon="stack-overflow"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 384 512"
      {...props}
    >
      <path
        fill="inherit"
        d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"
      />
    </svg>
  );
};

export const socialLinks = [
  {
    key: 'twitter',
    mode: 'light',
    link: 'https://twitter.com/Shub7241',
    color: 'rgb(29, 161, 242)',
    icon: TwitterIcon,
  },
  {
    key: 'github',
    mode: 'light',
    link: 'https://github.com/Shub1427',
    color: '#24292e',
    icon: Github,
  },
  {
    key: 'stackoverflow',
    mode: 'light',
    link: 'https://stackoverflow.com/users/2849127/subroto',
    color: '#adb5bd',
    icon: StackOverflow,
  },
  {
    key: 'gmail',
    mode: 'light',
    link: 'mailto:sub14biswas@gmail.com',
    color: '#D44638',
    icon: EmailIcon,
  },
  {
    key: 'linkedin',
    mode: 'light',
    link: 'https://www.linkedin.com/in/shub1427/',
    color: '#0077b5',
    icon: LinkedIn,
  },
];

export const socialLinksDark = [
  {
    key: 'twitter',
    mode: 'dark',
    link: 'https://twitter.com/Shub7241',
    color: 'rgb(29, 161, 242)',
    icon: TwitterIcon,
  },
  {
    key: 'github-light',
    mode: 'dark',
    link: 'https://github.com/Shub1427',
    color: '#f2f2f2',
    icon: Github,
  },
  {
    key: 'stackoverflow',
    mode: 'dark',
    link: 'https://stackoverflow.com/users/2849127/subroto',
    color: '#adb5bd',
    icon: StackOverflow,
  },
  {
    key: 'gmail',
    mode: 'dark',
    link: 'mailto:sub14biswas@gmail.com',
    color: '#D44638',
    icon: EmailIcon,
  },
  {
    key: 'linkedin',
    mode: 'dark',
    link: 'https://www.linkedin.com/in/shub1427/',
    color: '#0088d7',
    icon: LinkedIn,
  },
];
