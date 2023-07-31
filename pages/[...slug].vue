<template>
  <div>
    <Container class="mt-14">
      <div class="grid grid-cols-8 gap-10 py-8">
        <aside class="col-span-8 lg:col-span-2">
          <SideMenu />
        </aside>

        <main class="col-span-8 lg:col-span-6">
          <ContentRenderer :key="page._id" :value="page" />
        </main>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
  const { page } = useContent()

  useContentHead(page)

  defineOgImage({
    component: 'OgImageContent',
  })
</script>
