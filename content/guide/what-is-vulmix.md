# What is Vulmix?

Vulmix is a small and experimental <a href="https://vuejs.org/" target="_blank" rel="nofollow noreferrer noopener">Vue</a> meta-framework made by <a href="https://ojvribeiro.me/" target="_blank" rel="nofollow noreferrer noopener" title="Victor Ribeiro">@ojvribeiro</a>. It is totally inspired by <a href="https://nuxt.com/" target="_blank" rel="nofollow noreferrer noopener">Nuxt</a> and it aims to provide a simple and powerful way to create Vue.js single page applications (SPAs) with little effort and a minimal setup from the start.

Vulmix uses <a href="https://laravel-mix.com" target="_blank" rel="nofollow noreferrer noopener">Laravel Mix</a> under the hood to handle the build process and it provides a set of tools to make the development process easier and faster.

This is what a brand new Vulmix project looks like when you run [`npx create-vulmix-app my-app`](/guide/get-started):

![vulmix-starter-template](/img/vulmix-starter-template.png)

And after installing the dependencies and running the project with the `dev` script (in this case, `yarn dev`):

![vulmix-starter-template-with-deps](/img/vulmix-starter-template-with-deps.png)

::alert
The [`.vulmix` folder](/guide/structure/dotvulmix) contains all the runtime and type definitions files. You can safely ignore it since it's automatically generated and managed by Vulmix.
::

And you're good to go! You can start building your application right away in the `app.vue` file.

## Why?

> _Since we already have Nuxt, why would we need another meta-framework?_

To be honest, Vulmix started as a personal project to learn more about <a href="https://vuejs.org/" target="_blank" rel="nofollow noreferrer noopener">Vue</a> and the ecosystem around it, but I happened to put more effort and love on it than previously expected and it has grown to be a very useful tool for me and I hope it can be useful for you too.

Nuxt is great and Vulmix took a lot of inspiration from it (auto-imports is such a nice feature). I tried to keep the same simplicity and ease of use that Nuxt has, but with a more minimal approach and a smaller scope (so no SSR or SSG). Vulmix aims to provide tools for building PWAs and web games with almost no configuration or optimization needed.
