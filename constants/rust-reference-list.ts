import { IArchiveItem } from '@constants/archive-list';
import { Tags } from '@constants/tags';

export const rustArchiveRecord: Record<string, IArchiveItem> = {
  'rust-cargo-basics': {
    key: 'rust-cargo-basics',
    link: '/rust-reference/rust-cargo-basics',
    title: 'Basics on Rust & Cargo',
    titleString: 'Basics on Rust & Cargo',
    description: 'Basics on Rust & Cargo',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/81770497-0c77c000-94fe-11ea-95bc-44e5e432b1d8.jpg',
    tags: [Tags.RUST],
    createdAt: new Date('2020/04/26 22:00:00'),
    updatedAt: new Date('2020/04/26 22:00:00'),
    isPublished: true,
  },
  'rust-smart-pointers': {
    key: 'rust-smart-pointers',
    link: '/rust-reference/rust-smart-pointers',
    title: 'Smart Pointers',
    titleString: 'Smart Pointers',
    description: 'Some notes on Box<>, Rc<>, RefCell<> etc.',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/81770497-0c77c000-94fe-11ea-95bc-44e5e432b1d8.jpg',
    tags: [Tags.RUST],
    createdAt: new Date('2020/05/22 17:45:00'),
    updatedAt: new Date('2020/05/22 17:45:00'),
    isPublished: true,
  },
};
