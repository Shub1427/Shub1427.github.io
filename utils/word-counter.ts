import React from 'react';

const regex = new RegExp(/code/i);
type Children = string | IJSX | Array<string | IJSX>;

interface IJSXProps {
  children: Children;
  mdxType: string;
  // There could be more props, could be anything, not to worry for now
}

interface IJSX {
  $$typeof: symbol;
  key: string | number;
  props: IJSXProps;
  ref: React.Ref<any>;
  type: any;
}

function countWord(jsxEle: Children): number {
  if (Array.isArray(jsxEle)) {
    return jsxEle.reduce((count, ele) => {
      if (ele instanceof String || typeof ele === 'string') {
        count += countWord(ele);
      } else {
        if (!regex.test(ele.props.mdxType)) {
          count += countWord(ele.props.children);
        }
      }
      return count;
    }, 0);
  } else if (jsxEle instanceof String || typeof jsxEle === 'string') {
    return jsxEle.split(/\s+/).filter((word) => /\w+/.test(word)).length;
  } else {
    if (jsxEle) {
      if (!regex.test(jsxEle.props.mdxType)) {
        return countWord(jsxEle.props.children);
      }
    }
  }
  return 0;
}

export const wordCounterAsync = (jsx: React.ReactChildren) =>
  new Promise<number>((res) => {
    let total = 0;
    if (Array.isArray(jsx)) {
      total = jsx.reduce((wordCount: number, jsxEle) => {
        if (jsxEle.props.mdxType !== 'code') {
          wordCount += countWord(jsxEle.props.children);
        }
        return wordCount;
      }, 0);
    }
    res(total);
  });

export const wordCounter = (jsx: React.ReactChildren) => {
  let total = 0;
  if (Array.isArray(jsx)) {
    total = jsx.reduce((wordCount: number, jsxEle) => {
      if (jsxEle.props.mdxType !== 'code') {
        wordCount += countWord(jsxEle.props.children);
      }
      return wordCount;
    }, 0);
  }
  return total;
};
