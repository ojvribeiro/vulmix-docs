<template>
  <div>
    <div class="md:h-[70vh]">
      <Container class="h-full mt-20">
        <div
          class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center h-full"
        >
          <div
            class="col-span-12 md:col-span-8 xl:col-span-6 flex order-2 md:order-1 items-center"
          >
            <div>
              <h1>Create <em class="mr-3 text-vx-brand-pink inline-block vx-neon-pink">faster</em> Vue single page apps</h1>

              <ul class="list-disc">
                <li>Components auto import</li>
                <li>File based routing</li>
                <li>Image asset optimization</li>
                <li>Multi layout support</li>
                <li>
                  ...
                  <NuxtLink to="/guide/get-started">and a lot more</NuxtLink>.
                </li>
              </ul>

              <div class="flex gap-2 items-center">
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
          class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center justify-between h-full"
        >
          <div class="flex col-span-5 items-center justify-center">
            <VueLoveMix class="w-1/2 md:w-max" />
          </div>

          <div class="flex col-span-7 items-center">
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
                (powered by Webpack 5) as its build step for compiling your Vue
                and Sass files. Vulmix does all the configuration for you so you
                can focus on you app.
              </p>

              <div class="flex gap-2 items-center">
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

          <p class="md:text-lg text-center">
            Start using Vulmix by running this command or
            <NuxtLink to="/guide/get-started">read the docs</NuxtLink> for more
            info.
          </p>

          <div class="w-full md:w-1/2">
            <div
              class="vx-neon-pink before:top-[-30%] text-center mt-8 rounded-xl bg-[#222222] p-8 text-lg"
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

<style lang="scss" scoped>
  a:not(.vx-button, .vx-button-flat, .vx-icon-link) {
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

  a.vx-icon-link {
    @apply text-3xl hover:text-white/50;
  }

  h1 {
    @apply text-4xl md:text-5xl lg:text-6xl mb-12;
  }

  h2 {
    @apply text-3xl md:text-4xl lg:text-5xl mb-6;
  }

  ul {
    @apply text-lg md:text-xl mb-12;

    list-style: disc;
    margin-left: 20px;

    li {
      @apply md:mb-3 pl-4;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .vx-neon-pink {
    position: relative;

    &::before {
      position: absolute;
      content: "";
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
