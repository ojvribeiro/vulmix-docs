<template>
  <div class="container">
    <span v-if="filename" class="filename-text">
      {{ filename }}
    </span>

    <slot />

    <div class="bottom-container">
      <div class="copy-container">
        <span class="copied-text" v-if="copied">Copied!</span>
        <button @click="copy(code)" title="Copy this code">
          <Icon name="lucide:copy" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { copy, copied, text } = useClipboard()

  const props = defineProps({
    code: {
      type: String,
      default: '',
    },
    filename: {
      type: String,
      default: null,
    },
  })
</script>

<style scoped lang="scss">
  .container {
    position: relative;
    overflow: hidden;
  }

  slot {
    padding-top: 24px;
  }

  .bottom-container {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 28px;
    right: 4px;
  }

  .copy-container {
    display: flex;
    align-items: center;

    button {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;

      &:hover {
        background-color: rgba(#000, 20%);
      }

      &:active {
        background-color: rgba(#000, 30%);
      }
    }
  }

  .copied-text {
    margin-right: 1em;
  }

  .filename-text {
    position: absolute;
    font-family: 'Inconsolata', monospace;
    top: 4px;
    right: 4px;
    padding: 0.25em 0.5em;
    font-size: 14px;
    background-color: rgba(#000, 20%);
    border-radius: 8px;
    width: fit-content;
    display: block;
  }

  :slotted(pre) {
    @apply rounded-xl px-4 mb-6;

    background-color: rgba(#fff, 5%);
    display: flex;
    flex: 1 1 0%;
    overflow-x: auto;
    padding-block: 16px;
  }

  :slotted(pre code) {
    @apply p-2;

    width: 100%;
    display: flex;
    flex-direction: column;
  }

  :slotted(pre code .line) {
    display: inline-table;
    min-height: 1rem;
  }

  :slotted(pre code .highlight) {
    background-color: rgba(#fff, 5%);
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f3a1f0;
  }
</style>
