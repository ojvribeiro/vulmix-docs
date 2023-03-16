# Dynamic routes

You can create a dynamic route by wrapping the page file name in square brackets:

![image](https://user-images.githubusercontent.com/8026741/193370390-e1b4e822-c66f-4384-9e5a-5a589b7eadec.png)

Then you can access any route and get the url parameter with the <a href="https://vueuse.org/router/userouteparams/" target="_blank">@vueuse/router `useRouteParams`</a> composable:

```html [pages/[id].vue] {6-8}
<template>
  {{ userId }}
</template>

<script setup>
  import { useRouteParams } from '@vueuse/router'

  const userId = useRouteParams('id')
</script>
```

Will generate:

![image](https://user-images.githubusercontent.com/8026741/193370548-df0f82af-e6c7-455d-ba35-daab10da038d.png)

Then, you can use the generated `userId` within an API call.

::alert
  Creating a dynamic page will overwrite the "not found" behavior on its nesting level. For example, if you create a `[file].vue` inside the `/pages/posts/` folder, there will be no `404` fallback for the route `/post`.
::
