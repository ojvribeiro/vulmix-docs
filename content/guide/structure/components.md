# The `components` folder

Place your Vue components in this folder. Components are reusable pieces of code that can be used in multiple places in your project. Components can be as simple as a button or as complex as a form.

For example, you can create a `Button.vue` component in the `components` folder and use it in multiple places in your project like this:

```vue [components/Button.vue]
<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
  .button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
```

```vue [pages/index.vue]{3,8}
<template>
  <div>
    <Button @click="handleClick">Click me</Button>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'

function handleClick() {
  console.log('Button clicked')
}
</script>
```

In the example above, the `Button.vue` component is used in the `pages/index.vue` file. The `Button.vue` component is imported at the top of the `pages/index.vue` file and used in the template section of the file.

## Enabling auto-imports

By default, auto-imports are disabled. To enable auto-imports for the `components` folder, you need to set the `enabled` option in the `vulmix.config.ts` file to `true`.

```ts [vulmix.config.ts]{3-5}
export default defineVulmixConfig({
  // ...
  imports: {
    enabled: true,
  },
  // ...
})
```
