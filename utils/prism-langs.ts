/**
 * This file is a plugin for language highlight for
 * log4rs.
 *
 * I am trying to mimic how PrismJS actually parses languages to highlight
 * them in JS.
 *
 * How to create a plugin is difficult, I still don't understand what is happening
 * in this code, just a small understanding that's it.
 *
 * Details on how to create a new language plugin, see this:
 * https://prismjs.com/extending.html
 */

function log4rs(Prism: any) {
  Prism.languages.log4rs = {
    string: {
      pattern: /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+\+\d{2}:\d{2})\s+(\w+)\s+(?:.*)/,
      inside: {
        datetime: {
          pattern: /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+\+\d{2}:\d{2})/,
          alias: 'number',
        },
        keyword: {
          pattern: /debug|info|warn|error/i,
        },
      },
    },
  };
}

log4rs.displayName = 'log4rs';
log4rs.aliases = ['log'];

export { log4rs };
