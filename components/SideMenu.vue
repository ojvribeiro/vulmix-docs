<template>
  <aside class="col-span-2">
    <div class="side-menu">
      <h5 class="mt-0">Introduction</h5>

      <ul>
        <li>
          <NuxtLink to="/get-started" class="active">Get started</NuxtLink>
        </li>

        <li>
          <NuxtLink to="/about">Why Vulmix?</NuxtLink>
        </li>
      </ul>

      <h5>Built-in components</h5>

      <ul>
        <li>
          <NuxtLink to="#">&lt;Image&gt;</NuxtLink>
        </li>

        <li>
          <NuxtLink to="#">&lt;Head&gt;</NuxtLink>
        </li>

        <li>
          <NuxtLink to="#">&lt;Icon&gt;</NuxtLink>
        </li>

        <li>
          <NuxtLink to="#">&lt;Layout&gt;</NuxtLink>
        </li>
      </ul>

      <h5>Project structure</h5>

      <ul>
        <li>
          <NuxtLink to="#">
            <div class="flex items-center gap-2">
              <Icon name="bi:folder" />

              <span>_dist</span>
            </div>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="#">
            <div class="flex items-center gap-2">
              <Icon name="bi:folder" />
              <span>assets</span>
            </div>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="#">
            <div class="flex items-center gap-2">
              <Icon name="bi:folder" />
              <span>components</span>
            </div>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="#">
            <div class="flex items-center gap-2">
              <Icon name="bi:folder" />
              <span>layouts</span>
            </div>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="#">
            <div class="flex items-center gap-2">
              <Icon name="bi:folder" />
              <span>pages</span>
            </div>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="#">
            <div class="flex items-center gap-2">
              <Icon name="fa6-brands:vuejs" />
              <span>app.vue</span>
            </div>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="#">
            <div class="flex items-center gap-2">
              <Icon name="mdi:webpack" />
              <span>webpack.mix.js</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
  aside {
    .side-menu {
      position: sticky;
      top: 100px;

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

            &.active {
              @apply border-vx-brand-pink text-vx-brand-green;
              border-left-width: 2px;
              border-left-style: solid;
            }
          }
        }
      }
    }
  }
</style>
