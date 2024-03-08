<script setup lang="ts">
    import { useTheme } from './theme';
    import {ref } from 'vue';
    const {initTheme,toggleTheme, isDarkMode} = useTheme();
    initTheme()
</script>

# Ap-Theme

A component that is responsible for switching the site theme

<ApTheme :isDarkMode="isDarkMode" @click="toggleTheme"/>


```ts 
<ApTheme/>

<script>
    import { useTheme } from '@/composables/theme';
    const {initTheme} = useTheme();
    initTheme()
</script>

```

