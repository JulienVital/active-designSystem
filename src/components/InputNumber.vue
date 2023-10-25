<template>
  <div>
    <input
      type="number"
      class="input"
      :value="props.value"
      :step="props.step"
      @input="updateValue"
      placeholder="auto"
    />
    <span class="bottom"></span>
    <span class="right"></span>
    <span class="top"></span>
    <span class="left"></span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

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
    type: String,
    required: false,
    default: "medium",
  },
});
export type payloadNumber = {
  value: number;
};
const emit = defineEmits<{
  /**
   * Trigger when value is updated
   * * payload -> number
   */
  (event: "onChange", payload: payloadNumber): void;
}>();

const updateValue = (event: Event) => {
  const inputValue = parseFloat((event.target as HTMLInputElement).value);
  emit("onChange", { value: inputValue });
};

const width = computed(() => {
  if (props.size == "small") {
    return 5;
  }
  if (props.size == "large") {
    return 7;
  }
  return 7;
});

const height = computed(() => {
  if (props.size == "small") {
    return 3;
  }
  if (props.size == "large") {
    return 5;
  }
  return 4;
});
</script>

<style scoped>
div {
  width: calc(var(--gutter) * v-bind(width));
  height: calc(var(--gutter) * v-bind(height));
}
input {
  background-color: var(--grey-dark3);
  border: solid 1px;
  color: var(--white);
  border: none;
  outline: none;
  width: calc(var(--gutter) * v-bind(width));
  height: calc(var(--gutter) * v-bind(height));
  border-radius: 5px;
  opacity: 1;
  text-align: right;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out;
}
input:focus {
  outline: none;
}

input::placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

span {
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

input:focus ~ .bottom {
  transform-origin: bottom left;
  transform: scaleX(1);
}

.right {
  right: 0;
  transform-origin: top right;
}

input:focus ~ .right {
  transform-origin: bottom right;
  transform: scaleY(1);
}

.top {
  top: 0;
  transform-origin: top left;
}

input:focus ~ .top {
  transform-origin: top right;
  transform: scaleX(1);
}

.left {
  left: 0;
  transform-origin: bottom left;
}

input:focus ~ .left {
  transform-origin: top left;
  transform: scaleY(1);
}
</style>
