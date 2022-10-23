<template>
  <div class="side-menu">
    <h5 class="mt-0">Introduction</h5>

    <ul>
      <li>
        <NuxtLink to="/guide/get-started">Get started</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/why-vulmix">Why Vulmix?</NuxtLink>
      </li>
    </ul>

    <h5>Core features</h5>

    <ul>
      <li>
        <NuxtLink to="/guide/core-features/dynamic-routes">Dynamic routes</NuxtLink>
      </li>
    </ul>

    <h5>Built-in components</h5>

    <ul>
      <li>
        <NuxtLink to="/guide/components/image">&lt;Image&gt;</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/components/head">&lt;Head&gt;</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/components/icon">&lt;Icon&gt;</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/components/layout">&lt;Layout&gt;</NuxtLink>
      </li>
    </ul>

    <h5>Project structure</h5>

    <ul>
      <li>
        <NuxtLink to="/guide/structure/_dist">
          <div class="flex items-center gap-2">
            <Icon name="bi:folder" />

            <span>_dist</span>
          </div>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/structure/assets">
          <div class="flex items-center gap-2">
            <Icon name="bi:folder" />
            <span>assets</span>
          </div>
        </NuxtLink>

        <ul>
          <li>
            <NuxtLink to="/guide/structure/icons">
              <div class="flex items-center gap-2">
                <Icon name="bi:folder" />
                <span>icons</span>
              </div>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/guide/structure/img">
              <div class="flex items-center gap-2">
                <Icon name="bi:folder" />
                <span>img</span>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </li>

      <li>
        <NuxtLink to="/guide/structure/components">
          <div class="flex items-center gap-2">
            <Icon name="bi:folder" />
            <span>components</span>
          </div>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/structure/layouts">
          <div class="flex items-center gap-2">
            <Icon name="bi:folder" />
            <span>layouts</span>
          </div>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/structure/pages">
          <div class="flex items-center gap-2">
            <Icon name="bi:folder" />
            <span>pages</span>
          </div>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/structure/app.vue">
          <div class="flex items-center gap-2">
            <span>app.vue</span>
          </div>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/structure/webpack.mix.js">
          <div class="flex items-center gap-2">
            <span>webpack.mix.js</span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  aside {
    .side-menu {
      @apply sticky pb-14 top-20 overflow-y-scroll;

      height: calc(100vh - 110px);

      &::-webkit-scrollbar {
        width: 8px;

        &-track {
          @apply bg-transparent;
        }

        &-thumb {
          @apply bg-vx-grey-300/20;

          border-radius: 4px;
        }
      }

      &:hover {
        &::-webkit-scrollbar {
          &-thumb {
            @apply bg-vx-grey-300;
          }
        }
      }

      h5 {
        font-weight: 400;
      }

      ul {
        li {
          a {
            color: rgba(#fff, 80%);
            padding: 8px 16px;
            display: block;
            border-left-width: 1px;
            border-left-style: solid;
            border-left-color: rgba(#fff, 5%);
            border-radius: 0 12px 12px 0;

            &:hover {
              border-left-color: rgba(#fff, 20%);
              color: #fff;
            }

            &.router-link-exact-active {
              @apply border-vx-brand-pink text-vx-brand-green;
              border-left-style: solid;
            }
          }

          ul {
            li {
              a {
                padding-left: 40px;
              }
            }
          }
        }
      }
    }
  }
</style>
