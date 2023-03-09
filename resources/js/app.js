import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import AppComponent from './components/App.vue';
import router from './components/router/index.js';

createApp({
    components: {
        AppComponent,
    }
}).use(router).mount('#app');
