import { archiveRecord } from '@constants/archive-list';

export const record = archiveRecord['upload-client-logs'];

<PolkaContainer
  pageTitle={record.title}
  pageDescription={record.description}
  keywords={['Client Logs']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 updatedAt={record.updatedAt}>
  Up And Up <InlineCode>up-n-up</InlineCode>
</H1>

<Blockquote type="warn">
  This blog is a <b>Work in Progress</b>, and I am hoping to work on it part by part when I will really start
  implementing th idea mentioned in here. Gradually noting down what hurdles I faced or
  if some changes I made, that needs to be reflected here as well.

  <br />
  <br />

  :warning: &nbsp;For now, read it at your own risk!!!
</Blockquote>

>
> Up and Up our logs you go. <br/>
> To give an insight <br/>
> Of what should you Hope. :musical_score:
>

### What/Why the hell???

This project is meant to get essential logs from client's browser, so as to later verify what went wrong.
Usually, in Front-end development, developers tend to disable logs to improve performance and
many other good reasons, but in initial days of development of a product sometimes requires
us to monitor how tha app is performing on the end-user's browsers. This project is developed
to support an idea that I had yesterday (it's similar to what Google Analytics or Rollbar or Sentry does),
to get small chunks of performance related data, on a constant
interval, that we can later on verify what went wrong, or where an improvement can be made.

## Pseudo Implementation:

<Blockquote type="warn">
  Following implementation is not tested or written in real code. It's just for
  explanatory purpose.
</Blockquote>

### Payload structures:

#### `DefaultPayload`
This payload will be extended by every other `LogPayload` that end-user would want to log to the service.

```ts
interface DefaultPayload {
  /**
   * Name of the OS, like Windows/Android etc.
   */
  client_os: string;
  /**
   * Version of the OS being used, would come handy to figure out what CPU processor might
   * be used
   */
  client_version: number | null;
  /**
   * Browser details, still don't know how to read this
   */
  user_agent: string;
  /**
   * Following Log Level doesn't actually refer to Log Levels, but they denote the weight
   * of a Log, depending on the feature.
   *
   * `debug`: being the least weighted, and these logs should be removed, once we are done with improvements
   * `error`: being the medium weighted.
   * `perf`: being the medium weighted, which we can keep to track performance details of end-user's per browser
   * `data`: Never to be removed, they denote a Log, required by Data-Analysts.
   */
  log_level: 'error' | 'debug' | 'perf' | 'data';
}
```

#### `LogPayload`
This is a custom payload and might differ as per developer's implementation, since
various apps have various logs they want to track or later on do elastic search or something.

```ts
interface LogPayload extends DefaultPayload {
  /**
   * Could relate to various features/modules being used in an App.
   */
  feature: string;
  /**
   * Internal task related to a feature like `chat-send` or `blog-post`
   * This is an array, because in a feature we can have multiple sub-features batched into one
   * single API call.
   *
   * Having an array of sub-features will also help us to batch performance logs into one single API call
   *
   * sub_features are basically a one-to-one map for `measures`, but it won't be case everytime.
   */
  sub_features?: string[];
  /**
   * User's ID to log for
   */
  user_id: number;
  /**
   * Current User's Email
   */
  email: string;
  /**
   * Performance measures: providing us Time Deltas, so as to figure
   * out if any feature or sub-feature is taking time, and what exactly is causing it
   *
   * Measure data is not required for log_level: ['debug', 'data'];
   */
  measures?: MeasurePayload[];
  /**
   * Extra meta data, could be present or not, nobody knows ;P
   */
  meta?: Record<string, any>;
};
```

#### `MeasurePayload`

This payload defines the details on what performance measure were for a particular sub-feature.
Will help to get details on performance of our app.

```ts
interface MeasurePayload {
  /**
   * name: correlates to the sub_feature we are working on, so that it is easier to understand
   * for which feature time delta was taken for.
   */
  name: string;
  /**
   * Time Delta, between Start Time and End Time for this sub-feature.
   *
   * delta = 0, if sub_feature is instantaneous, i.e., we don't want to log perf delta
   */
  delta: number;
  /**
   * Should always be an timestamp number
   *
   * whether or not delta is present, we should have Timestamp details when logging any
   * sub-feature, for later references
   *
   * Maps to `Date.note()`
   */
  timestamp: string;
};
```

***

## We need to create server, which will listen to some HTTP endpoints

Endpoints like:

* `/debug`
* `/error`
* `/perf`
* `/data`

Following APIs will need an array as payload, as they will have a batch of data
to be sent to server.
* `/batch/debug`
* `/batch/error`
* `/batch/perf`
* `/batch/data`

Whatever Logs we receive in server, can be put into a log file, that can be dumped into some warehouse
or can be processed in an Elastic Search or completely sent to some Analytics server like Google Analytics
without saving them to file.

What I am thinking is, any payload that come to `/data` or `/bulk/data` will be sent to whatever
analytics backend we will link to our server, like Google Analytics or Segment or anything.

***

## We need to create a Frontend library as well that will manage all these calls to backend

Since we want to send single or batched payloads to server, we need a library to manage that
burden from a dev, and provide a clean API that the dev can usee to

### Concept

The thought behind building this library is simple:

* Keep the Library as small as possible and with less overhead.
* We will be creating a Class (_UpNUp_), that will provide us with few APIs
  * `debug` - to add debug logs
  * `error` - to send errors on any UI failure, like Rollbar does.
  * `perf` - performance logs that can be used to get a better insight on what feature is bloating the app
  * `data` - data analysis logs. These logs will be directly sent to some other third party libraries like
    Google Analytics from our Backend Server.
* These APIs can be called anytime and they all will update specific queues, to push the
  logs in the queue, so as to keep the logging burden off the shelf (I think I can later on add Webworkers
  to move the burden off the main thread.)
* On every interval, which the user will configure, chunk of each queue would be popped out and an
  HTTP request will be made the endpoint configured before.


<Image src="https://user-images.githubusercontent.com/11786283/81470865-cde6ba80-920a-11ea-8429-6df2a2ac0595.png" placeholder="https://user-images.githubusercontent.com/11786283/81470875-de973080-920a-11ea-99a3-5397f40b85b0.png" alt="Flow Diagram for Log Upload" fullWidth />


<Blockquote type="warn">
If we do use&nbsp;
<b>Webworkers</b>, someday in future, all the above logic will become parallel and it will become trivial to
use <i>Mutex/Locks</i> to manage manipulation of queues, which also gives us more control over when the data chunk should
be extracted, i.e. should we get the chunk after 2 seconds or should we get the chunk when it crosses a
size threshold of let's say 100kb, so that the API calls we make are more effective.
</Blockquote>

### Solution

> Using `RxJS`, to simplify the concept of buffering. Understanding `RxJS` took
> me a lot of time. There are four main concepts for `RxJS`.
>
> 1. Observable/Observer (Publisher/Subscriber)
> 2. Cold and Hot Publisher
> 3. Schedulers
> 4. Operators
>
> I will discuss these in a separate Note. For now we will just talk about
> buffering.

* Create an instance of the Logger.
  * The moment the instance is created, create just one `RxJS Subjects` which
    will manage the buffers and simultaneously `subscribe` them as well.
* On any API call for `debug`, `perf` etc., a call to `subject.next` would be
made, so as to publish the log string.
* Which when received to the `subscriber` will be piped with some compression
  operator then `buffer` operator, and for each `buffer` complete, we
  will make an HTTP call pushing the buffer to our remote server.

</PolkaContainer>
