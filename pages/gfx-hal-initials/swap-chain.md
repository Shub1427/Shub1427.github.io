import { halArchiveRecord } from '@constants/gfx-hal-archive-list';
import { archiveRecord } from '@constants/archive-list';

export const record = halArchiveRecord['swap-chain'];

<PolkaContainer
  pageTitle={record.title}
  pageDescription={record.description}
  keywords={['Vulkan', 'Basics', 'Fundamental', 'Beginner', 'gfx-hal']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 updatedAt={record.updatedAt}>
  {record.title}
</H1>

Before deep diving, let's first understand what Double Buffering is.
A great video on [Double Buffering](https://www.youtube.com/watch?v=tfzCcN2aIhI&feature=emb_logo),
to get a very basic understanding.

As you can see in the video, double buffering is nothing but
a way to cache images in a buffer. One of the Buffer is used
to draw on the Window Surface, while other acts as a hidden
canvas to draw the next frame and keep it in cache, so as to
get a better performance and framerate.

<Image alt="Swapchain to Surface to Window Draw" src="https://user-images.githubusercontent.com/11786283/82650037-b8748600-9c37-11ea-9ac2-f8f7125dbd23.png" placeholder="https://user-images.githubusercontent.com/11786283/82640981-33827000-9c29-11ea-9137-79e0fe3e47e6.png" />

Swapchain is very similar. It basically can be used to achieve
double buffering. In simple words, Swapchain is a collection
Images (Stored in Image Buffers), that can be used to draw frames and present
them on screen when needed.

> **Quoting directly from [falseidolfactory.com](https://www.falseidolfactory.com/2020/04/01/intro-to-gfx-hal-part-1-drawing-a-triangle.html)**
>
> *Swapchain is a chain of images that we can render onto and then*
> *present to our window. While we’re showing one of them*
> *on screen, we can render to a different one. Then once*
> *we’re done rendering, we can **swap** them.*
>
> *This is one of the few places where `gfx` departs*
> *significantly from the **Vulkan API**. In Vulkan, you create*
> *and manage the `swapchain` yourself. In `gfx`, the surface*
> *mostly does it for you. You can read more about the*
> *decision behind that [here](https://gfx-rs.github.io/2019/10/01/update.html#new-swapchain-model).*

Thus, Swapchain in `gfx-rs` can be described in simple words:

* Get Swapchain instance from already created `device`
  instance and `swap` config.
* Attach/Link this swapchain instance to `surface`, so as
  to draw images from it.
* Maintain a swapchain state, to get details on `window`
  getting invalidate (dirty, like when it's resized or made
  fullscreen etc.). This `state` which changes on each
  invalidation of the `window`, should re-configure `swap`
  config, and re-create swapchain for that new `surface`.

<Image alt="gfx-hal Swapchain flow" src="https://user-images.githubusercontent.com/11786283/82650223-038e9900-9c38-11ea-8ae4-c6b464ac7007.png" placeholder="https://user-images.githubusercontent.com/11786283/82650444-56685080-9c38-11ea-960d-770db9795773.png" />

## Let's Code



You can find the full code for this Doc,
here [004-swap_chain](https://github.com/Shub1427/rustschool/blob/master/gui/draw-cube/src/004-swap_chain/main.rs)


</PolkaContainer>
