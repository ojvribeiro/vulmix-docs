---
title: Head component
description: The Head component allows you to set head tags directly from the template.
---

# `<Head>` component

Powered by [@vueuse/head](https://github.com/vueuse/head), Vulmix allows to use the auto-imported `<Head>` component to set the page title or other head tag (like the favicon) directly from the template.

```html [page/test-page.vue] {3-5}
<template>
  <div>
    <head>
      <title>My page</title>
    </head>

    <!-- Page content goes here -->
  </div>
</template>
```

So, using the example above, when we navigate to `/test-page`, we get the right title in the browser tab:

![image](https://user-images.githubusercontent.com/8026741/192713387-328b8c67-ab67-4515-a6bc-a7757f84d50a.png)

## `useHead` composable

You can also use the auto-imported `useHead` composable to set the page title and meta tags from the script:

```html [page/test-page.vue]{8-10}
<template>
  <div>
    <!-- Page content goes here -->
  </div>
</template>

<script setup>
  useHead({
    title: 'My Title',
  })
</script>
```

::alert{type="warning"}
It is important to note that this in only intended to use as a visual tool, because it will only work during runtime, so you won't see the title and meta tags in the browser source code or in the search engine results. For that, you should use the `head` option in [`vulmix.config.ts`](/guide/structure/vulmix.config.ts), which will generate the `<head>` tags during build time.
::
