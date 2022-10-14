# `<Layout>`

This PR adds support for multiple layouts by simply creating a Vue file inside the `layouts` folder.

## Creating a layout

Let's say that you want to create a layout for the "about" page. Simply create an `about.vue` file inside the `layouts` folder:

![image](https://user-images.githubusercontent.com/8026741/193365247-ee9b9a17-a591-46f7-b0e6-954acc837f6e.png)

> You can use `kebab-case` or `PascalCase` in the layout name.

Inside `layouts/about.vue`, create your HTML layout around a `<slot />` tag:

```vue
<!-- layouts/about.vue -->

<template>
  <!-- Put your layout around the slot -->
  <slot />
  <!-- Put your layout around the slot -->
</template>
```

## Using the `<Layout>` component

In the `pages/about.vue`, wrap the content inside a `<Layout>` component, passing the layout name as a prop:

```vue
<!-- pages/about.vue -->

<template>
  <Layout name="about">
    That's my About page
  </Layout>
</template>
```

Your page will inherit all the `layouts/about.vue` components and styles.

> ℹ️ **Tip:** If you use the `<Layout>` component in the root `app.vue` file, the layout will be applied to every page.
