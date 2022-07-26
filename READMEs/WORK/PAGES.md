# How to Work : pages

This project has many kinds of directories.

Because NextJS is a Framework not a Libaray, so it calls all of your codes.
So, if you put the files and folders well, NextJS will run well,
if you put the files and folders worng, NextJS will crush.

## Basic

In the `pages` directory, you just put many `.tsx` files.
Then, NextJS will create route using title of the your `.tsx` files that are inside of `pages` directory.
For example, if you create a `about.tsx` inside of `pages` directory, then NextJS will create a new route that is named `/about`.
Then, if you oepn `http://localhost:3000/about` <- this site, it will show you the web page that is returns of the `about.tsx` file.

But, the `index.tsx` file is jsut `/` <- Home route of this service.
So, if you create a `index.tsx` file inside of the `pages` folder, NextJS will create a new route that is named `/`.

[Reference - NextJS routing](../../pages)
[Reference - index.tsx](../../pages/index.tsx)

## Routes

If you create a new folder inside of the `pages` directory, NextJS will create a new route that is named by the title of the folder.
then, NextJS creates a new route page if you create a `index.tsx` files inside of the directory that is created by you.

So, If you create `movies` folder inside of the `pages` directory and create `index.tsx` file inside of it, then visite `http://localhost:3000/movies/` <- this site, you will be able to meet the web page that is returns of your `/pages/movies/index.tsx`.

[Reference - Create a new route](../../pages/movies)

## Params

There are many ways to grab the params from the url.
NextJS will return a params to the files that is named `[.${paramsNameThatYouWantToCall}].tsx`.
Then, if you create this file inside of the `movies` folder, NextJS will give the params to your code.
Actually, NextJS just creates a new route and your code just get the params from the url using `useRouter` hook.

And, NextJS will give the all of the routes to your code if you create file name like this `[...${paramsNameThatYouWantToCall}].tsx`.
It will give you all of the routes to your code as array.

Also, you can create a params on the secret url that user can not watch it, but url is doing like it is really plcaed link that.
For example, If you want to create a new route that contains information that are `title` and `id` but also want to hide the `id` information, then, you just input `as` props when you Linked to that route using `href` attribute or `push` function that is in the `useRouter` react hook.

[Reference - Put the url params using file name](../../pages/movies/[...pattern].tsx)

## _app.tsx

_app.tsx file will be run by NextJS when user visite any site.
So, you can put to _app.tsx file the components that is required by any pages such as Header, Layout, etc.
And we called `Custom`.

And you need to create a `export default function` that receives Component and pageProps.

Component is just a component that the page that will loaded.
pageProps is required some of the explain. Watch Reference.

[Reference - _app.tsx](../../pages/_app.tsx)
[Reference - pagePorps](SSR.md)
[Reference - components](COMPONENTS.md)

## 404.tsx

It just file that return a 404 pages.
