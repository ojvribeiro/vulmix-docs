<template>
  <div>
    <div class="md:h-[70vh]">
      <Container class="h-full mt-20">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center h-full">
          <div class="col-span-12 md:col-span-8 xl:col-span-6 flex order-2 md:order-1 items-center">
            <div class="vx-neon-pink">
              <h1>Create faster Vue single page apps</h1>

              <ul class="list-disc">
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

                <NuxtLink
                  class="vx-button-flat"
                  to="https://github.com/ojvribeiro/vulmix"
                  target="_blank"
                >
                  <Icon name="fa:github" />
                  GitHub
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            class="col-span-12 md:col-span-4 xl:col-span-6 hidden md:flex order-1 md:order-2 items-center md:justify-end"
          >
            <LogoNeon class="xl:w-max" />
          </div>
        </div>
      </Container>
    </div>

    <div>
      <Container class="my-20">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between h-full"
        >
          <div class="flex items-center justify-center">
            <VueLoveMix class="w-1/2 md:w-max" />
          </div>

          <div class="flex items-center">
            <div>
              <h2>The power of Vue joins the flexibility of Laravel Mix</h2>

              <p class="mb-6 md:text-lg">
                Vulmix uses Laravel Mix (powered by Webpack 5) as its build step
                for compiling your Vue and Sass files. Vulmix do all the
                configuration for you so you can focus on you app.
              </p>

              <div class="flex gap-2 items-center">
                <NuxtLink class="vx-button" to="/guide/get-started/">
                  Get started
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
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
