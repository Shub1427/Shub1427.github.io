import { halArchiveRecord, size } from '@constants/gfx-hal-archive-list';
import { archiveRecord } from '@constants/archive-list';
import { rustArchiveRecord } from '@constants/rust-reference-list';

export const record = halArchiveRecord['render-pass'];

export const prevRecord = halArchiveRecord['swap-chain'];

<PolkaContainer
  pageTitle={record.title}
  pageTitleString={record.titleString}
  pageDescription={record.description}
  keywords={['Vulkan', 'Basics', 'Render Pass', 'Beginner', 'gfx-hal']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 id={record.titleString} updatedAt={record.updatedAt}>
  T-{`${size - 4}`}: {record.title}
</H1>

<Blockquote type="warn">
    I won't talk about this topic much, as I have little to no
    knowledge about Render Passes, but will surely update this
    topic when I do.
</Blockquote>

In simple words (in my view), a RenderPass is a rendering
phase where we connect a particular Rendering task to spit
out a desired modified image. Think of it as a machine,
which can take some details and output something.

A RenderPass in gfx-hal take details like `Attachment`
and `SubpassDesc`riptor.

An Attachment contains details
on image, operations that will be performed on that image,
etc. As per `gfx-hal` docs *an Attachment is a description
of a resource provided to a render subpass. It includes
things such as render targets, images that were produced
from previous subpasses, etc*.

In this post, we will just create an instance of
RenderPass.

## Code

```rs
struct Renderer<B: Backend> {
    ...
    // Render Pass instance
    render_pass: ManuallyDrop<B::RenderPass>,
}
impl<B: Backend> Renderer<B> {
    pub fn new(
        instance: B::Instance,
        mut surface: B::Surface,
        init_extent: hal_window::Extent2D,
    ) -> Result<Self, &'static str> {
        ...
        let render_pass = {
            let color_attachment = Attachment {
                format: Some(format),
                samples: 1,
                ops: AttachmentOps::INIT,
                stencil_ops: AttachmentOps::DONT_CARE,
                layouts: Layout::Undefined..Layout::Present,
            };

            let subpass = SubpassDesc {
                colors: &[(0, Layout::ColorAttachmentOptimal)],
                depth_stencil: None,
                inputs: &[],
                resolves: &[],
                preserves: &[],
            };

            unsafe {
                device
                    .create_render_pass(&[color_attachment], &[subpass], &[])
                    .expect("Out of memory")
            }
        };
        Renderer {
            ...
            render_pass: ManuallyDrop::new(render_pass),
        }
    }
}

impl<B: Backend> Drop for Renderer<B> {
    fn drop(&mut self) {
        unsafe {
            self.device
                .destroy_render_pass(ManuallyDrop::into_inner(ptr::read(&self.render_pass)));
            ...
        }
    }
}
```


<MoveOtherPage
  prev={prevRecord.link}
  prevLabel={prevRecord.titleString}
/>

</PolkaContainer>
