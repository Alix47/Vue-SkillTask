import { defineStore } from 'pinia';

export const useDarkMode = defineStore('main', {
  state: () => ({
    dark: false
  }),
  actions: {
    toggleMode() {
      this.dark = !this.dark;
    },
  }
});