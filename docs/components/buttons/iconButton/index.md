# Ap-IconButton

## Example

<presentationContainer>
    <ap-iconButton icon="ap-stacks" :active="valueExample" @click="handleclick"/>
</presentationContainer>

<script setup>
    import { ref } from 'vue';

    const valueExample=ref(false)
    const handleclick = ()=>{valueExample.value = !valueExample.value}
</script>