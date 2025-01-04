import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Framework7 from 'framework7/lite-bundle';
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';
import App from './App.vue';
import 'framework7/css/bundle';
import router from './router';

const app = createApp(App);
app.use(router)
app.use(createPinia());
Framework7.use(Framework7Vue);
app.use(Framework7Vue);
registerComponents(app);
app.mount('#app');
