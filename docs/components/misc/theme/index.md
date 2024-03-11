<script setup lang="ts">
    import { useTheme } from '@/composables/useTheme';
    import {ref } from 'vue';
    const {initTheme,toggleTheme, isDarkMode} = useTheme();
    initTheme()
</script>

# Ap-Theme

A component that is responsible for switching the site theme

<ApTheme :isDarkMode="isDarkMode" :toggle="toggleTheme"/>


```ts 
<ApTheme/>

<script>
    import { useTheme } from '@/composables/useTheme';
    const {initTheme} = useTheme();
    initTheme()
</script>

```

