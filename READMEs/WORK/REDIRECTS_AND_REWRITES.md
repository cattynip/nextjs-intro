# How to Work : Redirects and Rewrites

`Redirects` and `Rewrites` is just the others way to fetch data without showing the API key to visitor of this site.
This options is configured on [next.config.js](../../next.config.js).

## Redirects

`Redirects` is just an array of start routes and destination routes.
If user comes to router that is matched to one of the `redirects` routes, NextJS will redirect user from there to the destination routes.
`destination` will be just a routes or another site that has different domain name.

As you can see on [next.config.js](../../next.config.js), value of source and destination key has a string that is end with `:path*`. This mean that I want to redirect user from the routes that is start with `/old-blog` to `/new-sexy-blog` with a same routes.

## Rewrites

`Rewrites` is an array of alias.
Because, when developer build a source code to fetch a data or send a request on client to a specific routes that is already configured, NextJS will fetch a data or send a requst to specific routes that has different domain name.
I think that is a another way to fetch a data without showing the API key to visitor.
