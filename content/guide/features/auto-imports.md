---
title: Opt-in Auto-imports
description: Vulmix auto-imports components, composables, Pinia stores and Vue functions for you, so you don't have to import them manually in your Vue files.
---

# Opt-in Auto-imports

Normally, in a Vue application, you have to import components, composables and Vue functions manually in your Vue files. This can be a bit tedious and time-consuming, especially when you have a lot of files and components.

```vue [app.vue]{2}
<script setup>
  import { ref } from 'vue'

  const count = ref(0)

  function increment() {
    count.value++
  }
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
```

Auto-imports is a feature inspired by <a href="https://nuxt.com/" target="_blank" rel="nofollow noreferrer noopener">Nuxt</a> that allows you to use components, composables, Pinia stores and Vue functions without having to import them manually. This gives you a cleaner code and a faster development process.

You can enable auto-imports in Vulmix easily by setting the `imports.enable` option to `true` in the `vulmix.config.ts` file:

```ts [vulmix.config.ts]{2-4}
export default defineVulmixConfig({
  imports: {
    enabled: true,
  },
})
```

## Vue functions

Vulmix auto-imports the built-in Vue functions like `ref`, `computed`, `watch`, `onMounted`, etc. This way you can call them right away in your script tag.

```vue [app.vue]
<script setup>
  const count = ref(0) // No need to import `ref`

  function increment() {
    count.value++
  }
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
```

## Components

Vulmix auto-imports components from the `components` directory. This means that you can use any component in your `.vue` file without having to import. Just create it and use it, simple as that.

Say you have a `MyComponent.vue` file in the `/components` directory:

```vue [components/MyComponent.vue]
<template>
  <div>I am a component!</div>
</template>
```

You can use it in your `.vue` file directly, without having to import it first:

```vue [app.vue]
<template>
  <div>
    <MyComponent />
  </div>
</template>
```

And it should work just fine!

::alert
You can use PascalCase or kebab-case for your component names. Both will work. But, as a best practice, it is recommended to use PascalCase for your component names.
::

## Composables

Composables are a great way to share logic between components. They are functions that return an object with the data and methods that you want to share. You can read more about composables in the <a href="https://vuejs.org/guide/reusability/composables.html" target="_blank" rel="nofollow noreferrer noopener">Vue Composition API documentation</a>.

Vulmix auto-imports your composables from the `/composables` directory. So if you have a `useCounter.js` (or `.ts`) file in the `/composables` directory:

```js [composables/useCounter.js]
export default function useCounter() {
  const count = ref(0) // No need to import `ref` in your composables too!

  const increment = () => {
    count.value++
  }

  return {
    count,
    increment,
  }
}
```

You can use it like this in your `.vue` file:

```vue [app.vue]{2}
<script setup>
  const { count, increment } = useCounter()
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
```

::alert
It is recommended to use the same name for the composables and the variables that you use to import them. This way, you can easily identify which composables are being used in your `.vue` file.
::

## Custom imports

You can set custom directories for auto-imports in the `vulmix.config.ts` file. For example, if you want to auto-import functions from a `/utils` directory, you can set it like this:

```ts [vulmix.config.ts]{2-4}
export default defineVulmixConfig({
  imports: {
    dirs: ['utils'],
  },
})
```

Now, all the functions in the `/utils` directory will be auto-imported in your `.js` or `.ts` files.

```ts [utils/myFunction.ts]
export function myFunction() {
  console.log('Hello from myFunction!')
}
```

```vue [app.vue]
<script setup>
  myFunction() // -> Hello from myFunction!
</script>
```

You can also set <a href="https://github.com/antfu/unplugin-auto-import/tree/main/src/presets" target="_blank" rel="nofollow noreferrer noopener">auto-imports presets</a> in the `vulmix.config.ts` file:

```ts [vulmix.config.ts]
export default defineConfig({
  imports: {
    presets: ['@vueuse/core', 'axios'],
  },
})
```
