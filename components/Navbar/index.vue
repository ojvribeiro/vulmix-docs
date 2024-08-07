<template>
  <div
    class="fixed left-0 top-0 z-10 h-16 w-full backdrop-blur-md transition-colors duration-300"
    :class="y > 50 && 'bg-vx-grey-400/80'"
  >
    <Container class="h-full">
      <div class="flex h-full items-center justify-between py-3">
        <NuxtLink to="/" class="h-full">
          <NavbarLogo />
        </NuxtLink>

        <div class="flex items-center gap-6">
          <div>
            <ul class="nav-menu flex gap-4">
              <li>
                <NuxtLink to="/guide/introduction">Documentation</NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <a
                  href="https://github.com/ojvribeiro/vulmix"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  <Icon name="fa:github" class="text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
  const { y } = useWindowScroll()
</script>

<style lang="scss" scoped>
  ul {
    li {
      a {
        @apply text-white hover:text-white/70;

        &.router-link-exact-active {
          @apply text-vx-brand-green;
        }
      }
    }
  }
</style>
