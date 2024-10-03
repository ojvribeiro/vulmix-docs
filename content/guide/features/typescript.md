---
title: TypeScript support
description: ...
---

# TypeScript support

Vulmix provides first-class TypeScript support out of the box. You can use `.ts` files in your project right away, without any additional configuration.

You can also use TypeScript in your `.vue` files by adding a `lang="ts"` attribute to the `<script>` tag.

```vue [app.vue]{5}
<script setup lang="ts">
  import { ref } from 'vue'

  const count = ref<number>(0)
  const givesError = ref<number>('string') // This will give a TypeScript error
</script>
```
