import { IArchiveItem } from '@constants/archive-list';
import { Tags } from '@constants/tags';

export const halArchiveRecord: Record<string, IArchiveItem> = {
  'display-window': {
    key: 'display-window',
    link: '/gfx-hal-initials/display-window',
    title: 'Setup & Display Blank Window',
    description:
      'Learn Displaying a Blank Window using winit and bind it to gfx-hal surface instance',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/82109997-98852400-9758-11ea-84a0-aa3996c67f86.jpg',
    tags: [Tags.RUST],
    createdAt: new Date('2020/04/25 17:00:00'),
    updatedAt: new Date('2020/05/28 23:50:00'),
    isPublished: true,
  },
  'physical-logical-devices': {
    key: 'physical-logical-devices',
    link: '/gfx-hal-initials/physical-logical-devices',
    title: 'Adapters & Physical/Logical Devices & Device Queues',
    description:
      'Learn to Instantiate Vulkan Physical/Logical Devices and get Device Queue from gfx-hal adapters',
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
      'Understanding Command Pools and Command Buffers in Vulkan and gfx-hal',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/82124794-f0567600-97be-11ea-9023-ea1467a6b734.jpg',
    tags: [Tags.TUTORIAL, Tags.RUST, Tags.GFX_HAL],
    createdAt: new Date('2020/05/16 21:45:00'),
    updatedAt: new Date('2020/05/16 21:45:00'),
    isPublished: true,
  },
  'swap-chain': {
    key: 'swap-chain',
    link: '/gfx-hal-initials/swap-chain',
    title: 'SwapChain in gfx-hal',
    description:
      'Learning about Swapchain & Double Buffering. Understanding the implementation of SwapChain in gfx-hal',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg',
    tags: [Tags.TUTORIAL, Tags.RUST, Tags.GFX_HAL],
    createdAt: new Date('2020/05/22 10:20:00'),
    updatedAt: new Date('2020/05/23 14:30:00'),
    isPublished: true,
  },
  shaders: {
    key: 'shaders',
    link: '/gfx-hal-initials/shaders',
    title: 'Shaders',
    description:
      'Understanding Shaders & writing minimal Shader using GLSL Shading language',
    ogImage:
      'https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg',
    tags: [Tags.TUTORIAL, Tags.RUST, Tags.GFX_HAL],
    createdAt: new Date('2020/05/23 19:30:00'),
    updatedAt: new Date('2020/05/23 19:35:00'),
    isPublished: true,
  },
};

export const size = Object.keys(halArchiveRecord).length;
