---
title: Hot Module Replacement
description: Hot Module Replacement (or HMR) is a feature that allows you to update your application code without having to refresh the page.
---

# Hot Module Replacement

::alert
The reading of this section is **not required** since it's just a feature to improve <prose-abbr title="Developer Experience">DX</prose-abbr>.
::

## What is Hot Module Replacement?

Hot Module Replacement (or HMR) is a feature that allows you to update your application code without having to refresh the page. It is a very useful feature for development since it allows you to see the changes you make to your code in real time. It is also very useful for debugging since you can see the changes you make to your code without losing the state of your application.

## HMR in Vulmix

Vulmix comes with HMR enabled by default. You can see it in action by running the `dev` command:

```bash
# With NPM
npm run dev

# Or with Yarn
yarn dev
```

As an example, let's create a new component called `ComponentOne.vue` in the `components` folder with the following content:

```vue [components/ComponentOne.vue]
<template>
  <h1>I'm the ComponentOne!</h1>
</template>
```

Now, create another component called `ComponentTwo.vue`, this time with a counter, in the same folder with the following content:

```vue [components/ComponentTwo.vue]
<template>
  <div>
    <h1>I'm the ComponentTwo!</h1>
    <p>
      Counter: {{ counter }}
      <button @click="counter++">Increment</button>
    </p>
  </div>
</template>

<script setup>
  const counter = ref(0)
</script>
```

Now, let's use both components in the `app.vue` file:

```vue [app.vue]
<template>
  <div>
    <ComponentOne />
    <ComponentTwo />
  </div>
</template>
```

You should see the following result:

![HMR Example](/img/vulmix-hmr-sample-1.png)

Now, let's increment the value and make some changes to the `ComponentOne.vue`. Notice how the counter value of the `ComponentTwo.vue` component is not reset and the changes to the `ComponentOne.vue` are reflected in real time:

![HMR Example](/img/vulmix-hmr-sample-2.gif)
