<template>
    <Ap-InputNumber size="small" v-model="refNumberSmall"/>
    <Ap-InputNumber v-model="refNumberMedium"/>
    <Ap-InputNumber size="large" v-model="refNumberLarge"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';

    const refNumberSmall = ref()
    const refNumberMedium = ref()
    const refNumberLarge = ref()
</script>