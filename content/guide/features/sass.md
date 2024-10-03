---
title: Sass support
description: ...
---

# Sass support

To use Sass in your Vue application, you need to install the `sass` package:

```bash
npm install -D sass
```

Then, you can use the `lang="scss"` attribute in the `<style>` tag of your Vue files:

```vue [app.vue]
<style lang="scss">
  $primary-color: #3498db;

  div {
    span {
      color: $primary-color;
    }
  }
  </style>
```
