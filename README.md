<h1 align="center">My Portfolio</h1>

<p align="center">
	<img src="./public/images/logo-small.png" />
	<br />
  <span>Check my Portfolio <a href="https://shub1427.github.io/">here</a></span>
</p>


## Note to Self:

NextJS is not a good framework to build statically built sites.
You can still use it to generate static builds though, with some workarounds.

The biggest problem I faced was to use `localStorage` or any other Browser
specific methods. To use such methods, we need to use `Redux` in our app.

Simplest way is to use `useReducer` hook. But, since I have already once set
up a complex Redux configuration, using `@reduxjs/toolkit`, I just re-used that
setup.

For simple solution on this NextJS issue: Check this [blog](https://dev.to/jaklaudiusz/next-js-persistent-state-with-react-hooks-and-localstorage-how-to-make-it-work-3al6)
