<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width"
    :height="props.height"
    viewBox="0 0 500 500"
    role="presentation"
    :class="[{ disable: isDisable }, 'svg']"
  >
    <g>
      <slot></slot>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  width: {
    type: [Number, String],
    default: 18
  },
  height: {
    type: [Number, String],
    default: 18
  },
  iconColor: {
    type: String,
    default: 'var(--color-icon)'
  },
  background: {
    type: String,
    default: null
  },
  backgroundHover: {
    type: String,
    default: null
  },
  iconColorHover: {
    type: String,
    default: null
  },
  isDisable: {
    type: Boolean,
    default: false
  }
})
const backgroundHover = computed(() =>
  props.backgroundHover && !props.isDisable ? props.backgroundHover : props.background
)

const iconColorHover = computed(() =>
  props.iconColorHover && !props.isDisable ? props.iconColorHover : props.iconColor
)
</script>

<style scoped>
.svg {
  background-color: v-bind(background);
  fill: v-bind(iconColor);
}

.svg:hover {
  background-color: v-bind(backgroundHover);
  fill: v-bind(iconColorHover);
}

.disable {
  opacity: 0.3;
}
</style>
