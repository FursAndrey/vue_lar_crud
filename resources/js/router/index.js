import { createRouter, createWebHistory } from "vue-router";

import PostIndex from '../components/posts/PostIndex.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'post.index',
        component: PostIndex,
    }
]

export default createRouter(
    {
        history: createWebHistory(),
        routes: routes
    }
)