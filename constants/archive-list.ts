import { Tags } from './tags';
import { ISortParams } from '@utils/sort-by';
import { toArray } from '@utils/array-utils';

export interface IArchiveItem extends ISortParams {
  key: string;
  link: string;
  title: React.ReactNode;
  description: React.ReactNode;
  tags: Tags[];
  updatedAt: Date;
  isPublished: boolean;
}

// I know, it is good to have a DB and a Backend, but
// for simplicity and saving cost, I am ignoring the Backend
export const archiveRecord: Record<string, IArchiveItem> = {
  'performance-reactjs': {
    key: 'performance-reactjs',
    link: '/performance-reactjs',
    title: 'Performance Improvements in JS and ReactJS',
    description:
      'Recent Performance related findings of mine, which I am jotting down here for later reference',
    tags: [Tags.RESEARCH, Tags.JS, Tags.REACT],
    createdAt: new Date('2020/05/07 09:15:00'),
    updatedAt: new Date('2020/05/09 23:15:00'),
    isPublished: true,
  },
  'upload-client-logs': {
    key: 'upload-client-logs',
    link: '/upload-client-logs',
    title: 'Client Browser Log to your Server',
    description:
      "Sometimes (like to get details on performance) there is a requirement to log data \
      from end-user's browser to you own servers, for which this note will talk about.",
    tags: [Tags.PROJECT, Tags.JS, Tags.REACT],
    createdAt: new Date('2020/04/29 08:30:00'),
    updatedAt: new Date('2020/05/09 12:30:00'),
    isPublished: true,
  },
  'word-counter': {
    key: 'word-counter',
    link: '/word-counter',
    title: 'Word Counter in Rust',
    description:
      'Just a fun bin script for my project, to count words in my MDX files.',
    tags: [Tags.PROJECT, Tags.RUST],
    createdAt: new Date('2020/04/26 22:00:00'),
    updatedAt: new Date('2020/04/26 22:00:00'),
    isPublished: true,
  },
  'gfx-hal-basics': {
    key: 'gfx-hal-basics',
    link: '/gfx-hal-initials',
    title: 'Basics on Vulkan using gfx-hal',
    description:
      'Reference Notes for me (and others) to help get started with Rust and Vulkan',
    tags: [Tags.TUTORIAL, Tags.RUST],
    createdAt: new Date('2020/04/26 10:00:00'),
    updatedAt: new Date('2020/04/26 16:00:00'),
    isPublished: true,
  },
  'astro-v2': {
    key: 'astro-v2',
    link: '/astro-v2',
    title: 'Astro Blaster v2 in Rust',
    description: 'A very minimal game making tutorial in Rust using ggez',
    tags: [Tags.TUTORIAL, Tags.RUST],
    createdAt: new Date('2020/04/10'),
    updatedAt: new Date('2020/04/12'),
    isPublished: true,
  },
};

export const archiveList = toArray(archiveRecord);
