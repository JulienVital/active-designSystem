<template>
  <div class="themeswitchWrapper">
    <InputSwitch :class="['apSwitchTheme', {'isLight': !isDarkMode}]" :modelValue="isDarkMode"  @update:modelValue="toggle"/>
  </div>
</template>

<script setup lang="ts">
import InputSwitch from 'primevue/inputswitch';
const props = defineProps({

  isDarkMode: {
  required: true,
  type: Boolean
},
toggle: {
  required: true,
  type: Function
},

})

</script>

<style >

.themeswitchWrapper{
  position: relative;
}
.apSwitchTheme {
  position: relative;
  border-radius: 40px;
  background: var(--background-input);
  width: 44px;
  height: 24px;
  flex-shrink: 0;
}

.apSwitchTheme .p-inputswitch-slider:before {
    background: var(--background-main);
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: 0.1rem;
    border-radius: 50%;
    transition-duration: 0.4s;
    z-index:1;
}
.apSwitchTheme.isLight .p-inputswitch-slider:after {
  font-family: 'Actpublishing family';
  font-size: 16px;
  content: "\e07e";
  right: 3px;
  display: block;
  position: absolute;
}
.apSwitchTheme.p-inputswitch-checked .p-inputswitch-slider:before {
    transform: translateX(1.2rem);
    z-index: 1;
    
}
.apSwitchTheme.p-inputswitch-checked::before{
font-family: 'Actpublishing family';
  font-size: 16px;
  content: "\e07f";
  left: 2px;
  display: block;
  position: absolute;
  z-index:0;
 }

</style>