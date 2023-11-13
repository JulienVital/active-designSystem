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
      <path
        d="m 483.51901,87.654155 c 19.36725,-19.367243 19.36725,-50.81965 0,-70.186893 -19.36724,-19.3672396 -50.81965,-19.3672396 -70.18689,0 L 250.18247,180.77185 86.877879,17.622207 c -19.367244,-19.3672471 -50.819645,-19.3672471 -70.186889,0 -19.3672424,19.367243 -19.3672424,50.819638 0,70.186881 L 179.99558,250.95875 16.845929,414.26334 c -19.3672435,19.36724 -19.3672435,50.81964 0,70.18688 19.367242,19.36724 50.819644,19.36724 70.186887,0 L 250.18247,321.14563 413.48706,484.29529 c 19.36725,19.36724 50.81964,19.36724 70.18689,0 19.36724,-19.36725 19.36724,-50.81965 0,-70.1869 L 320.36936,250.95875 Z"
      />
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
    default: '#ffffff'
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
