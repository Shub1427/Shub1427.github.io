import { archiveRecord } from '@constants/archive-list';

export const record = archiveRecord['performance-reactjs']'

<PolkaContainer
  pageTitle={record.title}
  pageDescription={record.description}
  keywords={['Performance']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 updatedAt={record.updatedAt} wordCount={971}>
  Improve Performance in JS and ReactJS
</H1>

<Blockquote type="warn">
  This blog is a <b>Work in Progress</b>, and I am hoping to work on it part by part when I
  would have already worked on it once. Parts of the doc are complete as I have worked on
  it before and can assure, that they will surely benefit in Improving Performance.

  <br />
  <br />

  :warning: &nbsp;For now, read it at your own risk!!!
</Blockquote>

## References to take a look at:

* [Addy Osmani's Profiling ReactJS](https://addyosmani.com/blog/profiling-react-js/)
* [Twitter's Blog on their Performance Improvements for Twitter Lite](https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3)
* [Handle Too many Socket events creating Backpressure](https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7)
* [React Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html)

> These guides were enough to boost my app performance.
>
> Backpressure is something that is not exactly related to ReactJS
> and can occur to any JS app. To handle Backpressure, we have various ways,
> one of which I used in our Project.

***

## React Profiling

Ok. So, if you are lazy and don't want to put too much effort on
finding Performance glitches, Profiling is the best option.

React DevTools provides a developer with `Profiler`, which provides
re-rendering data of components in Flame-Graph. This flame graph was
developed by [Brian Vaughn](https://github.com/bvaughn), creator
of [react-window](https://github.com/bvaughn/react-window), which
he is using to virtualize the flame graphs as well.

> By default, you do not need to
> `import { unstable_Profiler as Profiler } from "react";`
> as of v16.4+ (I guess), `Profiler` is by default added to react development
> builds. If you do face that the Profiler in Devtools is not working,
> try importing the above Profiler Component, and wrap your Root Component
> with `<Profiler />`.

These Flame Graphs are easy to understand, and pin-points which Components
are getting rendered unnecessarily.

Once you get to know which Components are getting re-rendered, due to some
prop changes that shouldn't re-render them, you can use:

* `shouldComponentUpdate` - is a React Component life cycle Method to render
  the component only according to your own logic. Apply some shallow
  comparisons here, and you are good to go.
* `React.memo` - If you are not using Class Components, `React.memo` is
  required to make your Functional component act as PureComponents. Also,
  `React.memo` takes function as argument, where you can shallow compare
  previous props with new props to decide when to render.

Above steps helps _memoizing_ React Components, but that's not enough if you
use Connected (or Container) Components. Vanilla Connected Components can
have `mapStateToProps` that re-renders the whole component, whenever some state
changes which is not even mapped to connected component.

<br/>

For such cases, simplest solution is to use Selectors with Redux, specially
[ReSelect](https://github.com/reduxjs/reselect).

If you don't want to introduce [ReSelect](https://github.com/reduxjs/reselect), and do things by yourself, then you need to create your own
selectors and memoize them. Best and less complex library to memoize
functions is [memoize-one](https://github.com/alexreardon/memoize-one).

<br/>

Combining both of the above solutions, will improve your app performance
a lot. For me it gave a 50% increase in performance.

### Browser Profiling

We are not limited to React DevTools Profiler, and I highly recommend to do
Profiling in Browser DevTools as well, as it gives a broader insight on what
is going on.

[Details on How to read Profiling on Browser DevTools](https://nolanlawson.com/2018/09/25/accurately-measuring-layout-on-the-web/)

***

## Defer Rendering When Mounting & Unmounting Many Components

You can find a better explanation [here](https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3)

<br/>

**TLDR;** Deferring a Render just means call any state updates behind
`requestAnimationFrame`. What this will do is put the load off your
Browser's main thread for sometime and allow the user to interact with UI
without jankiness (or having an un-responsive UI).

***

## Long lists need to have Virtualization or Pagination

Lists can be one of the bottlenecks in performance, if not done right.
Most of the UI libraries out there are vanilla `<ul />` lists.

Using 3rd-party Virtualization libs like `react-window` or
`react-virtualized` could help improve performance as well as
FPS of Scrolling.

You can get a very detailed explanation of what virtualization is, and
what hurdles we need to resolve while building a Virtualized List,
[here @ Complexities of Infinite Scroller](https://developers.google.com/web/updates/2016/07/infinite-scroller).

*I think I will try to build a virtualized list in Rust,someday. Let's see!!!* <img className="emoji" title=":bowtie:" alt=":bowtie:" src="https://github.githubassets.com/images/icons/emoji/bowtie.png" width="20" height="20" align="middle" />

<br />

Virtualization is difficult to integrate in *Chat apps*, where the list
needs to be scrolled bottom-up and can have dynamic height for each
list item.

So my implementation was to use a simple non virtualized list (relatively
positioned list items). Most of the *Chat apps* in real world, like in
Facebook or in Hangouts, all use the same principle. They paginate the
chat with infinite scroll and use relatively positioned list.

> Hope to create a separate blog, for Infinite Scrollable
> List using [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API),
> which I worked on while working on Chat App at
> [upGrad](https://www.upgrad.com/).

Infinite Scrolling (without Virtualization) is fine, till the time we don't see our list getting
bombarded with too many DOM elements. In Chat, I haven't figured out a proper way to virtualize
the list, but I am feeling that it will become very crucial when a Chat App is used by thousands
of user at the same time, all bombarding messages in an instant populating chat messages in thousands,
in a list which is not virtualized, the DOM will eat too much memory due to too many list items.

I will try `react-window` this time, for virtualization, but I have a feeling it won't be easy.
One of the bugs I faced and thought was related to virtualization (but was not) is listed [here,
with a workaround solution](https://github.com/bvaughn/react-window/issues/455).

`react-window` does not support dynamic item sizes, [it's still a work in progress](https://github.com/bvaughn/react-window/issues/6), but I do hope instead of focusing on supporting grids, and
just working on Vertical Lists would be easier for me to work on, using the approach that is
mentioned in the issue. [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
is something worth looking at, has OKayish support in major browsers.

***

## Buffering Events that change state in less than an Animation Frame

<Blockquote type="warn">
I would suggest you to read this blog before going forward <Link href="https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7" target="_blank" rel="noopener noreferrer">Handle Too many Socket events creating Backpressure</Link>, as it elaborates on basic concepts of
Back Buffering.
</Blockquote>

**TLDR;** I am giving a small reference on how to implement buffering of events
using `rxjs`.

```js
rxjs.fromEvent(socket, 'message').pipe(
  () => source => source.pipe(
    rxjs.operators.buffer(source.pipe(waitForAnimationFrame()))
  ),
);
```

*If say our Browser (or the Monitor in whole) supports only 60FPS, each `requestAnimationFrame` will run
every 16ms, we can conclude:*

Above code is buffering all incoming messages, for each `requestAnimationFrame`. What this solve is:

* If I get 100 messages in less than `16ms` (for 60FPS screen), they all will be buffered into an
  array, and pushed to the subscriber all in one go after every `requestAnimationFrame` completes.

This handles back-pressure, by allowing only 60 re-renders per second, which our Browser can really
handle, and not allow any unnecessary re-renders in-between.

Since, we are sure every `16ms` our buffer will be emptied, we don't have to worry too much on
memory overflows.

***

## Lazy Loading Images:

*I don't want to repeat things which are already done properly before, so to get details on*
*Lazy Loading of Image, you can follow [Addy Osmani's blog](https://addyosmani.com/blog/lazy-loading/)*
*on the same, for better explanation. (To be honest I don't like writing that much, so saving myself*
*some effort here as well* :sweat_smile: :grimacing:*)*

One think I want to add here is that, if you do use Virtualized list, where each item contains
images, they are lazy loaded anyways, so this attribute is not required for virtualized lists.

### Preloading Image Src Sets (Not related to Perf, though):

[Preload Images](https://web.dev/preload-responsive-images/)

## Pre-Loading and Pre-Fetching Links:

### Pre-Loading Links:

* [Preload: What is it Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)
* [Preload critical assets to improve loading speed](https://web.dev/preload-critical-assets/)

### Pre-Fetching Links:

* [MDN Prefetch Doc](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ)
* [CSS Tricks Pre-*](https://css-tricks.com/prefetching-preloading-prebrowsing/)

***

## Some Side Notes:

* SSR is also a way to optimize your performance, but I don't want to
  cover that.
* Statically serve your pages. This is something I am unaware of how to do
  it manually, but to support this feature, I suggest you to use `NextJS` or
  some similar Statically generated framework like `Gatsby`. In `NextJS`,
  do not use `getInitialProps` for Page components, and NextJS spits
  out static HTMLs for React App on build.

## TODOs:

I want to add more stuff here, regarding performance research
which I am still exploring:

* Using Puppeteer to get stats on performance
* Bundle Size optimizations, using `webpack`
  * Something to research on later [Granular Chunking](https://web.dev/granular-chunking-nextjs/)
  * Not sure if this link will be alive later, but still something to look into later
    [WebBundles](https://docs.google.com/document/d/11t4Ix2bvF1_ZCV9HKfafGfWu82zbOD7aUhZ_FyDAgmA/edit?usp=sharing)
  * [Fast Production Asset Builds using Webpack](https://codeascraft.com/2020/02/03/production-webpack-builds/)

</PolkaContainer>
