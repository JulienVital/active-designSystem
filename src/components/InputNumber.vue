<template>
  <div :class="inputNumberSize">
    <input
      type="number"
      :class="['inputNumber', inputNumberSize]"
      :value="props.value"
      :step="props.step"
      @input="onChange"
    />
    <span class=" border bottom"></span>
    <span class=" border right"></span>
    <span class=" border top"></span>
    <span class=" border left"></span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  /**
   * Actual value to display
   */
  value: {
    type: Number,
    required: false,
  },
  /**
   * Step increment/decrement value
   */
  step: {
    type: Number,
    required: false,
    default: 1,
  },
  /**
   * Size of input
   */
  size: {
    validator(value: string) {
      // The value must match one of these strings
      return ['small', 'medium', 'large'].includes(value)
    },
    required: false,
    default: "medium",
  },
});
const emit = defineEmits<{
  (e: "change", value:number): void;
}>();

const inputNumberSize = computed(() => ({
  [`inputNumber--${props.size}`]: true,
}));


const onChange = (event: Event) => {
  const inputValue = parseFloat((event.target as HTMLInputElement).value);
  emit("change", inputValue)

};

</script>
<style>
.inputNumber--medium {
  width: calc(var(--gutter) * 7);
  height: calc(var(--gutter) * 4);
}
.inputNumber--large {
  width: calc(var(--gutter) * 7);
  height: calc(var(--gutter) * 5);
}
.inputNumber--small {
  width: calc(var(--gutter) * 5);
  height: var(--smallForm);
}

.inputNumber {
  background-color: var(--grey-dark3);
  border: solid 1px;
  color: var(--white);
  border: none;
  outline: none;
  border-radius: 5px;
  opacity: 1;
  text-align: right;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out;
}
.inputNumber:focus {
  outline: none;
}


.border {
  position: absolute;
  background-color: var(--primary);
  transition: transform 0.5s ease;
}

.bottom,
.top {
  height: 1px;
  left: 0;
  right: 0;
  transform: scaleX(0);
}

.left,
.right {
  width: 1px;
  top: 0;
  bottom: 0;
  transform: scaleY(0);
}

.bottom {
  bottom: 0;
  transform-origin: bottom right;
}

.inputNumber:focus ~ .bottom {
  transform-origin: bottom left;
  transform: scaleX(1);
}

.right {
  right: 0;
  transform-origin: top right;
}

.inputNumber:focus ~ .right {
  transform-origin: bottom right;
  transform: scaleY(1);
}

.top {
  top: 0;
  transform-origin: top left;
}

.inputNumber:focus ~ .top {
  transform-origin: top right;
  transform: scaleX(1);
}

.left {
  left: 0;
  transform-origin: bottom left;
}

.inputNumber:focus ~ .left {
  transform-origin: top left;
  transform: scaleY(1);
}
</style>
