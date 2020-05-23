import { halArchiveRecord } from '@constants/gfx-hal-archive-list';
import { archiveRecord } from '@constants/archive-list';
import { rustArchiveRecord } from '@constants/rust-reference-list';

export const record = halArchiveRecord['shaders'];

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

</PolkaContainer>
