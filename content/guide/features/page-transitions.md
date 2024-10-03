---
title: Page Transitions
description: ...
---

# Page Transitions

Vulmix provides a simple way to add page transitions to your Vue application.

## Creating a transition

To create page transitions during navigation, first you need to add the following configuration to your `vulmix.config.ts` file:

```ts [vulmix.config.ts]
export default defineVulmixConfig({
  transition: {
    name: 'name-of-transition', // e.g. 'fade'
  },
})
```

Then, you create your transition using CSS. Here is an example of a simple fade transition:

```css
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
```

::alert
To learn more about Vue transitions, check the [official documentation](https://vuejs.org/guide/built-ins/transition.html).
::

That's it! Now, when you navigate between pages, the transition will be applied.
