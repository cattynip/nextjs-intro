# How to Work : components

This project has many components.
Actually, this project has 3 components, Layout, NavBar and Seo(Header).

Layout component will be run by _app.tsx file to add a NavBar component that is required by any site.
NavBar component is a component that is return a NavBar that is placed on the top.
Seo(Header) component is a component that is like a <head /> tag. So, in Seo component, it configure the meta data such as title, globalStyles.

If you want to use your components to your web-app, just <ComponentName /> then import it, then editor that you are using will add `import` grammer to your file automaticly.

All of this components is placed inside of `components` directory.
At all first, NextJS did not create this folder, but it will be better if NextJS create this folder when user create this Next-App.

[Reference - _app.tsx](PAGES.md)
