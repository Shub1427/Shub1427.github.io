import { Tags } from './tags';

export interface IArchiveItem {
  key: string;
  link: string;
  title: React.ReactNode;
  description: React.ReactNode;
  tags: Tags[];
  createdAt: Date;
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
    updateAt: new Date('2020/04/11'),
  },
];
