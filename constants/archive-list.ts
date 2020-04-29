import { Tags } from './tags';
import { ISortParams } from '@utils/sort-by';

export interface IArchiveItem extends ISortParams {
  key: string;
  link: string;
  title: React.ReactNode;
  description: React.ReactNode;
  tags: Tags[];
  updateAt: Date;
  isPublished: boolean;
}

// I know, it is good to have a DB and a Backend, but
// for simplicity and saving cost, I am ignoring the Backend
export const archiveList: IArchiveItem[] = [
  {
    key: 'upload-client-logs',
    link: '/upload-client-logs',
    title: 'Client Browser Log to your Server',
    description:
      "Sometimes (like to get details on performance) there is a requirement to log data \
      from end-user's browser to you own servers, for which this note will talk about.",
    tags: [Tags.TUTORIAL, Tags.RUST],
    createdAt: new Date('2020/04/29 08:30:00'),
    updateAt: new Date('2020/04/28 22:30:00'),
    isPublished: false,
  },
  {
    key: 'word-counter',
    link: '/word-counter',
    title: 'Word Counter in Rust',
    description:
      'Just a fun bin script for my project, to count words in my MDX files.',
    tags: [Tags.TUTORIAL, Tags.RUST],
    createdAt: new Date('2020/04/26 22:00:00'),
    updateAt: new Date('2020/04/26 22:00:00'),
    isPublished: true,
  },
  {
    key: 'gfx-hal-basics',
    link: '/gfx-hal-initials',
    title: 'Basics on Vulkan using gfx-hal',
    description:
      'Reference Notes for me (and others) to help get started with Rust and Vulkan',
    tags: [Tags.TUTORIAL, Tags.RUST],
    createdAt: new Date('2020/04/26 10:00:00'),
    updateAt: new Date('2020/04/26 16:00:00'),
    isPublished: false,
  },
  {
    key: 'astro-v2',
    link: '/astro-v2',
    title: 'Astro Blaster v2 in Rust',
    description: 'A very minimal game making tutorial in Rust using ggez',
    tags: [Tags.TUTORIAL, Tags.RUST],
    createdAt: new Date('2020/04/10'),
    updateAt: new Date('2020/04/12'),
    isPublished: false,
  },
];
