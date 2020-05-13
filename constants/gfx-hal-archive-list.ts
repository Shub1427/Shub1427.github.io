import { IArchiveItem } from '@constants/archive-list';
import { Tags } from '@constants/tags';

export const halArchiveRecord: Record<string, IArchiveItem> = {
  'rust-cargo-basics': {
    key: 'rust-cargo-basics',
    link: '/gfx-hal-initials/rust-cargo-basics',
    title: 'Basics on Rust & Cargo',
    description: 'Basics on Rust & Cargo',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/81770497-0c77c000-94fe-11ea-95bc-44e5e432b1d8.jpg',
    tags: [Tags.RUST],
    createdAt: new Date('2020/04/26 22:00:00'),
    updatedAt: new Date('2020/04/26 22:00:00'),
    isPublished: true,
  },
  'display-window': {
    key: 'display-window',
    link: '/gfx-hal-initials/display-window',
    title: 'Display Window',
    description:
      'Displaying Window using winit and bind it to gfx-hal surface instance',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/81770634-814afa00-94fe-11ea-9235-0684a37dd4ae.jpg',
    tags: [Tags.RUST],
    createdAt: new Date('2020/04/25 17:00:00'),
    updatedAt: new Date('2020/05/09 23:50:00'),
    isPublished: false,
  },
};
