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
      'https://user-images.githubusercontent.com/11786283/82109997-98852400-9758-11ea-84a0-aa3996c67f86.jpg',
    tags: [Tags.RUST],
    createdAt: new Date('2020/04/25 17:00:00'),
    updatedAt: new Date('2020/05/09 23:50:00'),
    isPublished: true,
  },
  'physical-logical-devices': {
    key: 'physical-logical-devices',
    link: '/gfx-hal-initials/physical-logical-devices',
    title: 'Physical & Logical Devices',
    description:
      'We would be looking into all \
      instances devices from gfx-hal, \
      which resembles Vulkan devices. \
      We will also learn some basics on enumerating these devices and stuff.',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/82111231-485e8f80-9761-11ea-9f21-8843d4a66752.jpg',
    tags: [Tags.TUTORIAL, Tags.RUST, Tags.GFX_HAL],
    createdAt: new Date('2020/05/16 8:45:00'),
    updatedAt: new Date('2020/05/16 19:30:00'),
    isPublished: true,
  },
  'command-buffers': {
    key: 'command-buffers',
    link: '/gfx-hal-initials/command-buffers',
    title: 'Command Buffers & Pool',
    description:
      'We would be looking into Command Buffers and how to instantiate them',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/82124794-f0567600-97be-11ea-9023-ea1467a6b734.jpg',
    tags: [Tags.TUTORIAL, Tags.RUST, Tags.GFX_HAL],
    createdAt: new Date('2020/05/16 21:45:00'),
    updatedAt: new Date('2020/05/16 21:45:00'),
    isPublished: true,
  },
};
