<script setup lang="ts">
  const props = defineProps({
    title: String,
  })

  // inherited attrs can mess up the satori parser
  defineOptions({
    inheritAttrs: false,
  })
</script>

<template>
  <div class="relative h-full w-full bg-[#181818] text-white">
    <div class="absolute right-0 top-0">
      <img src="/img/pink-orb.png" />
    </div>

    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <div class="absolute flex flex-col items-center justify-center gap-5">
        <div class="mb-12">
          <img src="/img/vulmix-logo.svg" height="144" />
        </div>

        <div class="mb-8">
          <span class="text-7xl font-black"> {{ title }} </span>
        </div>

        <div class="text-4xl font-bold text-white/70">vulmix.dev</div>
      </div>

      <div class="absolute bottom-0 left-0">
        <img src="/img/green-orb.png" />
      </div>
    </div>
  </div>
</template>
