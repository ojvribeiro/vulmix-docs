<template>
  <div>
    <Container class="mt-14">
      <div class="grid grid-cols-8 gap-10 py-8">
        <aside class="col-span-8 lg:col-span-2">
          <SideMenu />
        </aside>

        <main class="col-span-8 lg:col-span-6">
          <ContentDoc />
        </main>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    titleTemplate: titleChunk => {
      return titleChunk ? `${titleChunk} - Vulmix` : 'Vulmix'
    },
  })

  defineOgImageStatic({
    component: 'ContentOgImage',
  })
</script>
