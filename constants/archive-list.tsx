import React from 'react';

import { Tags } from './tags';
import { ISortParams } from '@utils/sort-by';
import { toArray } from '@utils/array-utils';
import InlineCode from '@components/inline-code';

export interface IArchiveItem extends ISortParams {
  key: string;
  link: string;
  title: React.ReactNode;
  titleString: string;
  description: React.ReactNode;
  ogImage: string;
  tags: Tags[];
  updatedAt: Date;
  isPublished: boolean;
}

// I know, it is good to have a DB and a Backend, but
// for simplicity and saving cost, I am ignoring the Backend
export const archiveRecord: Record<string, IArchiveItem> = {
  'rust-reference': {
    key: 'rust-reference',
    link: '/rust-reference',
    title: 'Advance Rust Reference',
    titleString: 'Advance Rust Reference',
    description:
      'Some advance concepts in Rust that were difficult for me to understand. \
      This Doc is trying to keep a reference of all those topics, for me to take \
      a reference from later for easier understanding',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/82665354-47da6300-9c51-11ea-87c7-bb996eb79de1.jpg',
    tags: [Tags.RUST],
    createdAt: new Date('2020/05/22 17:25:00'),
    updatedAt: new Date('2020/05/22 17:25:00'),
    isPublished: true,
  },
  'performance-reactjs': {
    key: 'performance-reactjs',
    link: '/performance-reactjs',
    title: 'Performance Improvements in JS and ReactJS',
    titleString: 'Performance Improvements in JS and ReactJS',
    description:
      'Recent Performance related findings of mine, which I am jotting down here for later reference',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/81769128-6f675800-94fa-11ea-99d6-57dc42166eaa.jpg',
    tags: [Tags.RESEARCH, Tags.JS, Tags.REACT],
    createdAt: new Date('2020/05/07 09:15:00'),
    updatedAt: new Date('2020/05/09 23:15:00'),
    isPublished: true,
  },
  'upload-client-logs': {
    key: 'upload-client-logs',
    link: '/upload-client-logs',
    title: 'Client Browser Log to your Server',
    titleString: 'Client Browser Log to your Server',
    description:
      "Sometimes (like to get details on performance) there is a requirement to log data \
      from end-user's browser to you own servers, for which this note will talk about.",
    ogImage:
      'https://user-images.githubusercontent.com/11786283/81769041-37601500-94fa-11ea-98f7-f353dca53e6b.jpg',
    tags: [Tags.PROJECT, Tags.JS, Tags.REACT],
    createdAt: new Date('2020/04/29 08:30:00'),
    updatedAt: new Date('2020/05/09 12:30:00'),
    isPublished: true,
  },
  'word-counter': {
    key: 'word-counter',
    link: '/word-counter',
    title: 'Word Counter in Rust',
    titleString: 'Word Counter in Rust',
    description:
      'Just a fun bin script for my project, to count words in my MDX files.',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/81768977-fd8f0e80-94f9-11ea-8425-953f8639d80e.jpg',
    tags: [Tags.PROJECT, Tags.RUST],
    createdAt: new Date('2020/04/26 22:00:00'),
    updatedAt: new Date('2020/04/26 22:00:00'),
    isPublished: true,
  },
  'gfx-hal-basics': {
    key: 'gfx-hal-basics',
    link: '/gfx-hal-initials',
    title: (
      <span>
        Learn to Draw a Cube using&nbsp;
        <InlineCode>gfx-hal</InlineCode>
      </span>
    ),
    titleString: 'Learn to Draw a Cube using gfx-hal',
    description:
      'Learn to draw a cube using gfx-hal. Also understand \
      concepts of Vulkan while learning to draw a cube',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/81768708-514d2800-94f9-11ea-95d3-36796815a31f.jpg',
    tags: [Tags.TUTORIAL, Tags.RUST],
    createdAt: new Date('2020/04/26 10:00:00'),
    updatedAt: new Date('2020/04/26 16:00:00'),
    isPublished: true,
  },
  'astro-v2': {
    key: 'astro-v2',
    link: '/astro-v2',
    title: 'Astro Blaster v2 in Rust',
    titleString: 'Astro Blaster v2 in Rust',
    description: 'A very minimal game making tutorial in Rust using ggez',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/81768159-f1a24d00-94f7-11ea-83e3-8b9212d4851c.jpg',
    tags: [Tags.TUTORIAL, Tags.RUST],
    createdAt: new Date('2020/04/10'),
    updatedAt: new Date('2020/04/12'),
    isPublished: true,
  },
};

export const archiveList = toArray(archiveRecord);
