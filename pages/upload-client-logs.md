import { archiveRecord } from '@constants/archive-list';

<PolkaContainer>

<H1 updatedAt={archiveRecord['upload-client-logs'].updatedAt} wordCount={564}>
  Up And Up (up-n-up)
</H1>

>
> Up and Up our logs you go. <br/>
> To give an insight <br/>
> Of what should you Hope. :musical_score:
>

### What/Why the hell???

This project is meant to get essential logs from client's browser, so as to later verify what went wrong.
Usually, in Front-end development, developers tend to disable logs to improve performance and
many other good reasons, but in intial days of development of a product sometimes require's
us to monitor how tha app is performing on the end-user's browsers. This project is developed
to support an idea that I had yesterday, to get small chunks of performance related data, on a constant
interval, that we can later on verify what went wrong, or where an improvement can be made.

## Concept

The thought behind building this library is simple:

* Keep the Library as small as possible and with less overhead.
* We will be creating a Class (_UpNUp_), that will provide us with few APIs
  * `log` - to add debug logs
  * `info` - to add info logs
  * `warn` - to add warn logs
  * `error` - to add error logs
* These APIs can be called anytime and they all will update specific queues, to push the
  logs in the queue, so as to keep the logging burden off the shelf (I think I can later on add Webworkers
  to move the burden off the main thread.)
* On every interval, which the user will configure, chunk of each queue would be popped out and an
  HTTP request will be made the endpoint configured before.

  <Image src="https://user-images.githubusercontent.com/11786283/80553996-65693380-89e9-11ea-9d90-b078ea747199.png" placeholder="https://user-images.githubusercontent.com/11786283/80554208-05bf5800-89ea-11ea-8e7f-2c59d0d4fbf6.png" alt="Flow Diagram for Log Upload" />

<Blockquote type="warn">
If we do use&nbsp;
<b>Webworkers</b>, someday in future, all the above logic will become parallel and it will become trivial to
use <i>Mutex/Locks</i> to manage manipulation of queues, which also gives us more control over when the data chunk should
be extracted, i.e. should we get the chunk after 2 seconds or should we get the chunk when it crosses a
size threshold of let's say 100kb, so that the API calls we make are more effective.
</Blockquote>

## Solution

Using `RxJS`, to simplify the concept of buffering. Understanding `RxJS` took
me a lot of time. There are four main concepts for `RxJS`.

1. Observable/Observer (Publisher/Subscriber)
2. Cold and Hot Publisher
3. Schedulers
4. Operators

I will discuss these in a separate Note. For now we will just talk about
buffering.

### Logic:

* Create an instance of the Logger.
  * The moment the instance is created, create just one `RxJS Subjects` which
    will manage the buffers and simultaneously `subscribe` them as well.
* On any API call for `log`, `warn` etc., a call to `subject.next` would be
made, so as to publish the log string.
* Which when received to the `subscriber` will be piped with some compression
  operator then `buffer` operator, and for each `buffer` complete, we
  will make an HTTP call pushing the buffer to our remote server.


</PolkaContainer>
