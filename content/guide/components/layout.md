---
title: Layout component
description: Vulmix allows you to create multiple layouts for your application.
---

# `<Layout>` component

Vulmix allows you to create multiple layouts for your application. You can use the `<Layout>` component to wrap your page content with a layout.

## Creating a layout

Say that you want to create a layout for the "about" page. Simply create an `about.vue` file inside the `layouts` folder:

![image](https://user-images.githubusercontent.com/8026741/193365247-ee9b9a17-a591-46f7-b0e6-954acc837f6e.png)

::alert
You can use `kebab-case` or `PascalCase` in the layout name.
::

Inside `layouts/about.vue`, create your HTML layout around a `<slot />` tag:

```html [layouts/about.vue] {2,6}
<template>
  <MyNavbar />

  <slot />

  <MyFooter />
</template>
```

## Using the `<Layout>` component

In the `pages/about.vue`, wrap the content inside a `<Layout>` component, passing the layout name as a prop:

```html [pages/about.vue]
<template>
  <Layout name="about"> That's my About page </Layout>
</template>
```

Your page will inherit all the `layouts/about.vue` components and styles.

::alert{type="warning"}
If you use the `<Layout>` component in the root `app.vue` file, the layout will be applied to every page.
::
