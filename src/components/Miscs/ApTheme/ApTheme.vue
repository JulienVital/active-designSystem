<template>
  <label class="vc-switch">
    <input type="checkbox" class="vc-switch-input" :checked="isDarkMode" @change="toggleTheme" />
    <span class="vc-switch-label" data-on="Yes" data-off="No"></span>
    <span class="vc-handle"></span>
  </label>
</template>

<script setup lang="ts">
import {useTheme}  from '@/composables/useTheme'

const {isDarkMode, toggleTheme} = useTheme();

</script>

<style>

.vc-toggle-container * {
  -webkit-transition: 0.15s ease-out;
  -moz-transition: 0.15s ease-out;
  -o-transition: 0.15s ease-out;
  transition: 0.15s ease-out;
}

.vc-switch {
  border-radius: 12px;
  position: relative;
  width: 44px;
  height: 24px;
  cursor: pointer;
  display: inline-block;
}

.vc-toggle-container label {
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
}

.vc-switch-input {
  position: absolute;
  transform: translate3d(5px, 5px, 0);
}

.vc-switch-label {
  position: relative;
  display: block;
  height: inherit;
  background: var(--background-input);
  border-radius: inherit;
}

.vc-switch-label:before,
.vc-switch-label:after {
  position: absolute;
  top: 50%;
  margin-top: -0.5em;
  line-height: 1.1;
}

.vc-switch-label:before {
  font-family: 'Actpublishing family';
  font-size: 16px;
  content: "\e07e";
}

.vc-switch-label:after {
  font-family: 'Actpublishing family';
  font-size: 16px;
  content: "\e07f";
  opacity: 0;
}

.vc-switch-label:before {
  right: 3px;
}

.vc-switch-label:after {
  left: 3px;
}

.vc-switch-input:checked ~ .vc-switch-label {
  background: var(--background-input);
}

.vc-switch-input:checked ~ .vc-switch-label:before {
  opacity: 0;
}

.vc-switch-input:checked ~ .vc-switch-label:after {
  opacity: 1;
}

.vc-handle {
  position: absolute !important;
  top: 5px;
  left: 5px;
  background: var(--background-main);
  border-radius: 40px;
}

.vc-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 2px;
}

.vc-handle:before {
  content: "";
  top: 50%;
  left: 5%;
  position: absolute !important;
  margin: -6px 0 0 -6px;
  width: 12px;
  height: 12px;
}

.vc-switch-label:active ~ .vc-handle, .vc-handle:active {
  width: 30px;
}

.vc-switch-input:checked ~ .vc-handle {
  left: unset;
  right: 5px;
}

</style>