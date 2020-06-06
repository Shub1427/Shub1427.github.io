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

<H1 updatedAt={record.updatedAt}>
  T-{`${size - 4}`}: {record.title}
</H1>


<MoveOtherPage
  prev={prevRecord.link}
  prevLabel={prevRecord.titleString}
/>

</PolkaContainer>
