import { NextRouter } from 'next/router';

export const getSiteLink = (router: NextRouter) => {
  const baseDomain = 'https://shub1427.github.io';
  return baseDomain + router.pathname;
};
