<template>
  <div class="side-menu">
    <h5 class="mt-0">Introduction</h5>

    <ul>
      <li>
        <NuxtLink to="/guide/introduction"> Introduction </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/get-started"> Get started </NuxtLink>
      </li>
    </ul>

    <h5>Features</h5>

    <ul>
      <li>
        <NuxtLink to="/guide/features/auto-imports"> Opt-in Auto-imports </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/features/routing"> Routing </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/features/hot-module-replacement">
          Hot Module Replacement
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/features/page-transitions">
          Page Transitions
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/features/typescript">
          TypeScript support
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/features/sass"> Sass support </NuxtLink>
      </li>
    </ul>

    <h5>Built-in components</h5>

    <ul>
      <li>
        <NuxtLink to="/guide/components/head"> &lt;Head&gt; </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/components/icon"> &lt;Icon&gt; </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/components/layout"> &lt;Layout&gt; </NuxtLink>
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
        <NuxtLink to="/guide/structure/dotvulmix">
          <div class="flex items-center gap-2">
            <Icon name="bi:folder" />

            <span>.vulmix</span>
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
        <NuxtLink to="/guide/structure/public">
          <div class="flex items-center gap-2">
            <Icon name="bi:folder" />
            <span>public</span>
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
        <NuxtLink to="/guide/structure/package.json">
          <div class="flex items-center gap-2">
            <span>package.json</span>
          </div>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/structure/tsconfig.json">
          <div class="flex items-center gap-2">
            <span>tsconfig.json</span>
          </div>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/guide/structure/vulmix.config.ts">
          <div class="flex items-center gap-2">
            <span>vulmix.config.ts</span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  aside {
    .side-menu {
      @apply sticky top-20 overflow-y-scroll pb-14;

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
