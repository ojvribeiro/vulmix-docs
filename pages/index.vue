<template>
  <div>
    <div class="md:h-[70vh]">
      <Container class="mt-20 h-full">
        <div
          class="grid h-full grid-cols-1 items-center gap-8 md:grid-cols-12 lg:gap-12"
        >
          <div
            class="order-2 col-span-12 flex items-center md:order-1 md:col-span-8 xl:col-span-6"
          >
            <div>
              <h1>
                Create
                <em class="vx-neon-pink mr-3 inline-block text-vx-brand-pink"
                  >faster</em
                >
                Vue single page apps
              </h1>

              <ul class="list-disc">
                <li>Auto-imports</li>
                <li>File-based routing</li>
                <li>Hot Module Replacement</li>
                <li>TypeScript and Sass support</li>
                <li>
                  ...
                  <NuxtLink to="/guide/get-started">and a lot more</NuxtLink>.
                </li>
              </ul>

              <div class="flex items-center gap-2">
                <NuxtLink class="vx-button" to="/guide/get-started">
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
            class="order-1 col-span-12 hidden items-center md:order-2 md:col-span-4 md:flex md:justify-end xl:col-span-6"
          >
            <LogoNeon class="xl:w-max" />
          </div>
        </div>
      </Container>
    </div>

    <div>
      <Container class="my-20">
        <div
          class="grid h-full grid-cols-1 items-center justify-between gap-6 md:grid-cols-12"
        >
          <div class="col-span-5 flex items-center justify-center">
            <VueLoveMix class="w-1/2 md:w-max" />
          </div>

          <div class="col-span-7 flex items-center">
            <div>
              <h2>The power of Vue joins the flexibility of Laravel Mix</h2>

              <p class="mb-6 md:text-lg">
                Vulmix uses
                <NuxtLink
                  to="https://laravel-mix.com/"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                  >Laravel Mix</NuxtLink
                >
                (powered by Webpack 5) under the hood for compiling your Vue
                files. It does all the configuration for you, so you can focus
                on building your app.
              </p>

              <div class="flex items-center gap-2">
                <NuxtLink class="vx-button" to="/guide/get-started">
                  Get started
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>

    <div class="vx-neon-string-pink">
      <NeonStringPink />

      <Container class="my-20">
        <div class="flex flex-col items-center justify-center">
          <h2>Get started now</h2>

          <p class="text-center md:text-lg">
            Start using Vulmix by running this command or
            <NuxtLink to="/guide/get-started">read the docs</NuxtLink> for more
            info.
          </p>

          <div class="w-full md:w-1/2">
            <div
              class="vx-neon-pink mt-8 rounded-xl bg-[#222222] p-8 text-center text-lg before:top-[-30%]"
            >
              <code> npx create-vulmix-app my-app </code>
            </div>
          </div>
        </div>
      </Container>
    </div>

    <div class="flex items-center justify-center py-6">
      <NuxtLink
        class="vx-icon-link"
        to="https://github.com/ojvribeiro/vulmix"
        target="_blank"
      >
        <Icon name="fa:github" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  defineOgImage({
    title: '',
    component: 'OgImageHome',
  })
</script>

<style lang="scss" scoped>
  a:not(.vx-button, .vx-button-flat, .vx-icon-link) {
    @apply text-vx-brand-green;

    padding: 2px 0;

    &:hover {
      border-bottom: 1px dashed rgba(#fff, 20%);
    }
  }

  a.vx-button {
    @apply block w-fit rounded-lg bg-vx-green-100 px-4 py-2 text-white transition;

    &-flat {
      @apply flex w-fit items-center gap-2 rounded-lg bg-transparent px-4 py-2 text-white transition;

      &:hover {
        @apply bg-white/20;
      }
    }

    &:hover {
      @apply bg-vx-green-200;
    }
  }

  a.vx-icon-link {
    @apply text-3xl hover:text-white/50;
  }

  h1 {
    @apply mb-12 text-4xl md:text-5xl lg:text-6xl;
  }

  h2 {
    @apply mb-6 text-3xl md:text-4xl lg:text-5xl;
  }

  ul {
    @apply mb-12 text-lg md:text-xl;

    list-style: disc;
    margin-left: 20px;

    li {
      @apply pl-4 md:mb-3;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .vx-neon-pink {
    position: relative;

    &::before {
      position: absolute;
      content: '';
      width: 240px;
      aspect-ratio: 1;
      background: rgb(243 161 240 / 26%);
      filter: blur(145px);
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;

      @media (min-width: 768px) {
        animation-name: pulse;
        animation-duration: 10000ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
      }
    }

    @keyframes pulse {
      0%,
      100% {
        background: rgba(243 161 240 / 30%);
      }
      50% {
        background: rgba(243 161 240 / 70%);
      }
    }
  }

  .vx-neon-string-pink {
    position: relative;
  }
</style>
