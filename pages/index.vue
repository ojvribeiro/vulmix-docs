<template>
  <div class="h-[80vh]">
    <Container class="h-full mt-20">
      <div class="grid grid-cols-2 items-center h-full">
        <div class="flex items-center">
          <div class="vx-neon-green">
            <h1 class="text-6xl mb-12">Create faster Vue single page apps</h1>

            <ul class="text-lg list-disc">
              <li>Components auto import</li>
              <li>File based routing</li>
              <li>Image asset optimization</li>
              <li>Multi layout support</li>
              <li>
                ...
                <NuxtLink to="/guide/get-started/">and a lot more</NuxtLink>.
              </li>
            </ul>

            <div class="flex gap-2 items-center">
              <NuxtLink class="vx-button" to="/guide/get-started/">
                Read the docs
              </NuxtLink>

              <NuxtLink class="vx-button-flat" to="https://github.com/ojvribeiro/vulmix" target="_blank">
                <Icon name="fa:github" />
                GitHub
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center">
          <LogoNeon />
        </div>
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
  a:not(.vx-button, .vx-button-flat) {
    @apply text-vx-brand-green;

    padding: 2px 0;

    &:hover {
      border-bottom: 1px dashed rgba(#fff, 20%);
    }
  }

  a.vx-button {
    @apply bg-vx-green-100 transition block w-fit rounded-lg text-white px-4 py-2;

    &-flat {
      @apply bg-transparent transition text-white flex w-fit rounded-lg items-center gap-2 px-4 py-2;

      &:hover {
        @apply bg-white/20;
      }
    }

    &:hover {
      @apply bg-vx-green-200;
    }
  }

  ul {
    @apply text-xl mb-12;

    list-style: disc;
    margin-left: 20px;

    li {
      @apply mb-3 pl-4;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .vx-neon-green {
    position: relative;

    &::before {
      position: absolute;
      content: '';
      width: 284px;
      height: 284px;
      background: rgba(243, 161, 240, 0.2);
      filter: blur(143.291px);
      z-index: -1;
    }
  }
</style>
