# Routing

Although you can create one-page applications only using the `app.vue` file, if you want to create more pages you will need a routing system. If you are familiar with Nuxt, you will feel right at home with Vulmix's file-based routing system.

![vulmix-pages-directory](/img/vulmix-file-routing-page-index.png)

## File-based Routing

Vulmix automatically generates the routes for your application based on the files in the `/pages` directory. This means that you can create a new page by simply creating a new `.vue` file in the `/pages` directory, being `index.vue` the root of your application.

To activate routing, you just need to add the built-in `<App />` component to your `app.vue` file.

```vue [app.vue] {3}
<template>
  <div>
    <App />
  </div>
</template>
```

This way the content of the `.vue` files inside `/pages` will be rendered inside the `<App />` component.

![vulmix-pages-directory](/img/vulmix-file-routing-page-index-rendered.png)

## Nested Routes

You can also create nested routes by nesting files inside the `/pages` directory. For example, if you create a file named `bar.vue` inside the `/pages/foo` directory, the route `/foo/bar` will be automatically generated.

::alert
The `index.vue` file is a special case. If you create a file named `index.vue` inside the `/pages/foo` directory, you can access it by going directly to `/foo`.
::

::alert{type="warning"}
All your page files must have only one root element so [Page Transitions](/guide/features/page-transitions) can work. HTML comments also count as elements. So as a good practice, always wrap your page content in a `<div>` tag.
::

## Dynamic Routes

Vulmix allows you to create dynamic routes by creating a file with the name between square brackets inside the `/pages` directory. For example, if you create a file named `[slug].vue`, any route will be matched by this file. The value of the dynamic segment will be available in the `params` property of the `route` object. You can access it using the auto-imported <a href="https://router.vuejs.org/guide/advanced/composition-api.html" target="_blank" rel="nofollow noreferrer noopener">Vue Router's `useRoute` composable</a>.

```vue [pages/[slug].vue] {2-4}
<script setup>
  const route = useRoute()

  const slug = route.params.slug // This value is reactive!
</script>

<template>
  <div>
    {{ slug }}
  </div>
</template>
```

This way, if you go to `/hello-world`, the `slug` variable will be equal to `hello-world`.

![vulmix-pages-directory](/img/vulmix-file-routing-dynamic-rendered.png)

You can use dynamic routes to create pages with dynamic content, like a blog post or a product page by passing the route parameter to an API call. In the example bellow, we are using the <a href="https://vueuse.org/core/useFetch/" target="_blank" rel="nofollow noreferrer noopener">VueUse's `useFetch`</a> composable to fetch the data from the <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="nofollow noreferrer noopener">JSON Placeholder API</a>.

```vue [pages/[slug].vue]
<script setup>
  import { useFetch } from '@vueuse/core'

  const route = useRoute()

  const { data: user } = useFetch(
    `https://api.github.com/users/${route.params.slug}`
  ).json()
</script>

<template>
  <div>
    <img :src="user.avatar_url" alt="Profile Picture" />

    <span>
      {{ user.name }}
    </span>
  </div>
</template>

<style scoped>
  /* some nice styles */
</style>
```

![vulmix-pages-directory](/img/vulmix-file-routing-dynamic-rendered-2.png)

::alert
Creating a dynamic page will overwrite the "not found" behavior on its nesting level. For example, if you create a `[slug].vue` inside the `/pages/post/` folder, there will be no `404` fallback for the route `/post`.
::
