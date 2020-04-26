import { Tags } from './tags';
import { ISortParams } from '@utils/sort-by';

export interface IArchiveItem extends ISortParams {
  key: string;
  link: string;
  title: React.ReactNode;
  description: React.ReactNode;
  tags: Tags[];
  updateAt: Date;
}

// I know, it is good to have a DB and a Backend, but
// for simplicity and saving cost, I am ignoring the Backend
export const archiveList: IArchiveItem[] = [
  {
    key: 'astro-v2',
    link: '/astro-v2',
    title: 'Astro Blaster v2 in Rust',
    description: 'A very minimal game making tutorial in Rust using ggez',
    tags: [Tags.TUTORIAL],
    createdAt: new Date('2020/04/10'),
    updateAt: new Date('2020/04/12'),
  },
  {
    key: 'gfx-hal-basics',
    link: '/gfx-hal-initials',
    title: 'Basics on Vulkan using gfx-hal',
    description:
      'Reference Notes for me (and others) to help get started with Rust and Vulkan',
    tags: [Tags.TUTORIAL],
    createdAt: new Date('2020/04/26'),
    updateAt: new Date('2020/04/26'),
  },
];
