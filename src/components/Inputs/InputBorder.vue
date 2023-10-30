<template>
  <span class="input-border input-border-bottom"></span>
  <span class="input-border input-border-right"></span>
  <span class="input-border input-border-top"></span>
  <span class="input-border input-border-left"></span>
</template>

<script setup lang="ts"></script>
<style></style>
<style scoped>
.input-border {
  position: absolute;
  background-color: var(--primary);
  transition: transform 0.5s ease;
}

.input-border-bottom,
.input-border-top {
  height: 1px;
  left: 0;
  right: 0;
  transform: scaleX(0);
}

.input-border-left,
.input-border-right {
  width: 1px;
  top: 0;
  bottom: 0;
  transform: scaleY(0);
}

.input-border-bottom {
  bottom: 0;
  transform-origin: bottom right;
}

input:focus ~ .input-border-bottom {
  transform-origin: bottom left;
  transform: scaleX(1);
}

.input-border-right {
  right: 0;
  transform-origin: top right;
}

input:focus ~ .input-border-right {
  transform-origin: bottom right;
  transform: scaleY(1);
}

.input-border-top {
  top: 0;
  transform-origin: top left;
}

input:focus ~ .input-border-top {
  transform-origin: top right;
  transform: scaleX(1);
}

.input-border-left {
  left: 0;
  transform-origin: bottom left;
}

input:focus ~ .input-border-left {
  transform-origin: top left;
  transform: scaleY(1);
}
</style>
