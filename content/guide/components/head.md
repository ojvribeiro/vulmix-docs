# `<Head>` component

Powered by [@vueuse/head](https://github.com/vueuse/head), now Vulmix allows to use the auto-imported `<Head>` component to change the page `title` for example like this:

```html [page/test-page.vue] {2-6}
<template>
    <Head>
        <title>
            My page
        </title>
    </Head>

    <!-- Page content goes here -->
</template>
```

So, when we navigate to this page, we get the title:

![image](https://user-images.githubusercontent.com/8026741/192713387-328b8c67-ab67-4515-a6bc-a7757f84d50a.png)

Check the <a href="https://github.com/vueuse/head" target="_blank" rel="noopener nofollow noreferrer">VueUse/Head documentation</a> for more info.
