# How to Work : SSR

SSR is Server Side Rendering, which is the method used by NextJS.

So, you can use the server of the NextJS using `getServerSideProps`.
This `getServerSideProps` function is a function that will be run in server side then return a some porps when the correct route is visited.
and the returns props will be received to `_app.tsx` as `pageProps`.

This function is useful when you want to hide API key.
Basicly, if you build a client side to fetch, it shows to visitor the all of the `Network` status in DevTools.
But, by calling this `getServerSideProps` funciton on server side, then this server receives all of the information that was fetched by `getServerSideProps` from server to client, the visotor only can see the data not any history of fetching.

To grab the information from the server is not hard.
If you want to it, you just type `pageProps` inside of _app.tsx files(check reference)
If you want to create a `getServerSideProps` function, you just create a `export getServerSideProps` to any files that you want to run in specific route. 

[Reference - Grab information from the server](../../pages/_app.tsx)
[Reference - Run function server side](../../pages/index.tsx)
