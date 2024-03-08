import { computed } from "vue";
import { ref } from "vue";

export function useTheme() {
  const currentTheme = ref(localStorage.getItem("user-theme"));

  const isDarkMode = computed(() => {
    return currentTheme.value == "dark";
  });

  const  toggleTheme = ()=> {
    const newTheme =
      currentTheme.value == "dark" ? "light" : "dark";
    localStorage.setItem("user-theme", newTheme);
    document.documentElement.className = newTheme;
    currentTheme.value = newTheme
  }

  const  initTheme = ()=> {
    if (!currentTheme.value){
        currentTheme.value = "dark"
    }
    localStorage.setItem("user-theme", currentTheme.value);
    document.documentElement.className = currentTheme.value;
  }
  return { isDarkMode, toggleTheme, initTheme };
}
