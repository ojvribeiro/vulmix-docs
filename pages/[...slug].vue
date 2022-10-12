<template>
  <div>
    <Navbar />

    <Container class="mt-14">
      <div class="grid grid-cols-8 gap-10 py-8">
        <SideMenu />

        <main class="col-span-6">
          <ContentDoc data-vx-content />
        </main>
      </div>
    </Container>
  </div>
</template>

<style lang="scss">
  [data-vx-content] {

    pre, p>code {
      background-color: rgba(#fff, 15%);
    }

    pre {
      @apply rounded-xl px-4 mb-6;
    }

    code {
      @apply rounded p-1;
    }

    h1 {
      @apply text-5xl;
    }

    h2 {
      @apply text-4xl;
    }

    h3 {
      @apply text-3xl;
    }

    h4 {
      @apply text-2xl;
    }

    h5 {
      @apply text-xl;
    }

    h6 {
      @apply text-lg;
    }

    p {
      @apply text-lg mb-6;
    }
  }
</style>
