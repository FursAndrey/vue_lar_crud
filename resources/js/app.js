import './bootstrap';

import { createApp } from "vue";
import router from './router';
import PostIndex from './components/posts/PostIndex.vue';

createApp({
    components: {
        PostIndex
    }
}).use(router).mount('#app');