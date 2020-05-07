import { archiveRecord } from '@constants/archive-list';

<PolkaContainer>

<H1 updatedAt={archiveRecord['performance-reactjs'].updatedAt} wordCount={971}>
  Improve Performance in JS and ReactJS
</H1>

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
re-redering data of components in Flame-Graph. This flame graph was
developed by [Brian Vaughn](https://github.com/bvaughn), creator
of [react-window](https://github.com/bvaughn/react-window), which
he is using to virtualize the flame graphs as well.

> Bt default, you do not need to
> `import { unstable_Profiler as Profiler } from "react";`
> as for v16.4+ (I guess), Profiler is by default added to development
> builds. If you do face that the Profiler in Devtools is not working,
> try importing the above Profiler Component, and wrap your Root Component
> with `<Profiler />`.

These Flame Graphs are easy to understand, and pin-points which Components
are getting rendered unnecessarily.

Once you get to know which Components are getting re-rendered, due to some
prop changes that shouldn't re-render them, you can use:

* `shouldComponentUpdate` - is a React Component Lifecycle Method to render
  the component only according to your own logic. Apply some shallow
  comparisons here, and you are good to go.
* `React.memo` - If you are not using Class Components, `React.memo` is
  required to make your Functional component act as PureComponents. Also,
  `React.memo` takes function as argument, where you can shallow compare
  previous props with new props to decide when to render.

Above steps helps _memoizing_ React Components, but that's not enough if you
use Connected (or Container) Components. Vanilla Connected Components can
have `mapStateToProps` that affect the render cycle, whenever some state
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

***

## Defer Rendering When Mounting & Unmounting Many Components

You can find a better explaination [here](https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3)

<br/>

**TLDR;** Deferring a Render just means call any state updates behind
`requestAnimationFrame`. What this will do is put the load off your
Browser's main thread for sometime and allow the user to intract with UI
without jankiness.

***

## Long lists needs to be Virtualization or Pagination

Lists can be one of the bottlenecks in performance, if not done right.
Most of the UI libraries out there are vanilla `<ul />` lists.

Using 3rd-party Virtualization libs like `react-window` or
`react-vitualized` could help improve performance as well as
FPS of Scrolling.

You can get a very detailed explaination of what virtualization is, and
what hurdles we need to resolve while building a Virtualized List,
[here @ Complexities of Infinite Scroller](https://developers.google.com/web/updates/2016/07/infinite-scroller).

I think I will try to build a virtualized list in Rust. Let's see!!! <img class="emoji" title=":bowtie:" alt=":bowtie:" src="https://github.githubassets.com/images/icons/emoji/bowtie.png" width="20" height="20" align="absmiddle" />

<br />

Virtualization is difficult to integrate in *Chat apps*, where the list
needs to be scrolled bottom-up and can have dynamic height for each
list item.

So my implementation was to use a simple non virtualized list (relatively
positioned list items). Most of the *Chat apps* in real world, like in
Facebook or in Hangouts, all use the same principle. They paginate the
chat with infinite scroll and use relatively poisitioned list.

> Hope to create a separate blog, for Infinite Scrollable
> List using [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API),
> which I worked on while working on Chat App at
> [upGrad](https://www.upgrad.com/).

***

## Buffering Events that change state in less than Animation Frame

<Blockquote type="warn">
I would suggest you to read this blog before going forward <Link href="https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7" target="_blank" rel="noopener noreferrer">Handle Too many Socket events creating Backpressure</Link>, as it elaborates on basic concepts of
Back Buffering.
</Blockquote>

For details on implementation check this&nbsp;<Link href={archiveRecord['upload-client-logs'].link}>blog</Link>.

TLDR; I am giving a small reference on how to implement buffering of events
using `rxjs`.

```js
rxjs.fromEvent(socket, 'message').pipe(
  () => source => source.pipe(
    rxjs.operators.buffer(source.pipe(waitForAnimationFrame()))
  ),
);
```

***

## TODOs:

I want to add more stuff here, regarding performance research
which I am still exploring:

* Using Pupeteer to get stats on performance
* Bundle Size optimizations, using `webpack`
* Preloading/Lazy loading scripts and css.
* Prefetching/Lazy Loading images
* SSR is also a way to optimize your performance, but I don't want to
  cover that.
* Statically serve your pages. This is something I am unaware of how to do
  it manually, but to support this feature, I suggest you to use `NextJS`
  and do not use `getInitialProps` for Page components, and NextJS spits
  out static htmls for React App on build.

</PolkaContainer>
