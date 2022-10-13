<template>
  <div
    class="fixed top-0 left-0 w-full h-16 bg-vx-grey-400/80 backdrop-blur-md z-10"
  >
    <Container class="h-full">
      <div class="flex items-center justify-between h-full py-3">
        <NavbarLogo />

        <div class="hidden md:flex items-center gap-6">
          <div>
            <ul class="nav-menu flex gap-4">
              <li>
                <NuxtLink to="/guide/get-started">Guide</NuxtLink>
              </li>

              <li>
                <NuxtLink to="/faq">FAQs</NuxtLink>
              </li>

              <li>
                <NuxtLink to="/showcase">Showcase</NuxtLink>
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
