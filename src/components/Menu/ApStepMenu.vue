<template>
    <Steps :model="props.items" :activeStep="props.currentStep" :readonly="false" >
    <template #item="{ item, index }" >
        <span :class="['p-step-item-icon', { 'p-step-item-icon-active': index == props.currentStep}]" @click="changeActive(item)">
            <i :class="item.icon"></i>
        </span>
        <span :class="[{ 'p-step-item-active':  index == props.currentStep }, 'p-step-item-span']" @click="changeActive(item)" >{{ item.label }}</span>
    </template>
</Steps></template>

<script setup lang="ts">
import Steps from 'primevue/steps'
const props = defineProps({
    items: {
        required: true,
        type: Array,
    },
    currentStep: {
        required: false,
        type: Number,
        default: 0
    }
})

const emit = defineEmits<{
  (e: 'update:currentStep', newStep: number): void
}>()
const emitEvent = (newStep) => {
  emit('update:currentStep', newStep)
}

const changeActive = (item)=>{
    const finded = props.items.findIndex((currentItem)=> currentItem == item)
    emitEvent(finded);
}

</script>
<style>
.p-steps{
    width: 100%;
}
.p-step-item-icon{
    cursor: pointer;
    background-color: var(--background-card);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}
.p-step-item-icon-active{
    background-color: var(--color-pink);
    color: var(--color-white);

}
.p-step-item-icon .ap-icon{
    line-height: 16px;
    font-size:16px;
    
}
 .p-steps-item:not(:first-child):before {
    font-family: 'Actpublishing family';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
    content: "\e5cc";
    left: 0;
    display: block;
    position: absolute;
}

.p-step-item-span{
    cursor: pointer;
    color: var(--color-text-secondary);

font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.p-step-item-active{
    color: var(--color-text);

}
.p-steps-item{
    align-items: center;

}
</style>
