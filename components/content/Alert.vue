<template>
  <div class="flex gap-4" :class="`vx-alert vx-alert-${props.type}`">
    <div>
      <Icon
        name="uiw:warning-o"
        class="text-[#ffd200]"
        v-if="props.type === 'warning'"
      ></Icon>
      <Icon
        name="ic:outline-dangerous"
        class="text-[#ff0000]"
        v-else-if="props.type === 'danger'"
      ></Icon>
      <Icon
        name="emojione-v1:construction"
        v-else-if="props.type === 'progress'"
      />
      <Icon name="fluent:info-24-regular" class="text-[#40b9ff]" v-else></Icon>
    </div>

    <div class="vx-alert-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'note',
    },
  })
</script>

<style lang="scss" scoped>
  .vx-alert {
    @apply mb-6 rounded-xl p-4;

    .vx-alert-content p {
      margin-bottom: 0;
    }

    &-warning,
    &-progress {
      background-color: rgba(#fffb00, 10%);
      @apply text-xl;
    }

    &-note {
      background-color: rgba(#0089ff, 16%);
      @apply text-xl;
    }

    &-danger {
      background-color: rgba(#ff0000, 16%);
      @apply text-2xl;
    }
  }
</style>
