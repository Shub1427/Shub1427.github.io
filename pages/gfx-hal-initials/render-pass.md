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

> **Quoting directly from [LunarG Tutorials](https://vulkan.lunarg.com/doc/view/1.2.131.2/linux/tutorial/html/10-init_render_pass.html)**
>
> *A render pass describes the scope of a rendering
> operation by specifying the collection of attachments,
> subpasses, and dependencies used during the rendering
> operation. A render pass consists of at least one subpass.
> The communication of this information to the driver
> allows the driver to know what to expect when rendering
> begins and to set up the hardware optimally for the
> rendering operation.*

As we all know, a Train cannot fly or sail, as it's
scope is limited to rails. Similarly, RenderPass helps
to define a scope for rendering, i.e., what kind of rendering
will happen when commands are executed on GPU. For e.g. a
shader pass will only handle shading an image while
rendering.

Since GPU can handle many parallel tasks in one go, we can
create different render passes to do different scoped
rendering per thread.

<Blockquote type="warn">
  I won't discuss this topic in-depth, as even I have
  to explore this topic a lot more.

  <br />

  For now, I would
  suggest you read <Link external href="https://vulkan.lunarg.com/doc/view/1.2.131.2/linux/tutorial/html/10-init_render_pass.html">LunarG RenderPass Post</Link>.

</Blockquote>

*In this section, we will only be creating and defining
the render pass and not using it in a command buffer
until later.*

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

[Attachment](https://docs.rs/gfx-hal/0.5.0/gfx_hal/pass/struct.Attachment.html)s
are details about resources that will be passed in this RenderPass.
For example, we will be initially working with only Colors;
thus, a Color Attachment (which would be an Image for a color) will
be passed as an Attachment to Render Pass.

Later on, we will also be adding an attachment to Depth Buffer,
which will be used as Z depth of the cube.

`Subpass` here is used for defining which attachment to use
while rendering during the subpass.

<MoveOtherPage
  prev={prevRecord.link}
  prevLabel={prevRecord.titleString}
/>

</PolkaContainer>
