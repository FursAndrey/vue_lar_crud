import { createRouter, createWebHistory } from "vue-router";

import PostIndex from '../components/posts/PostIndex.vue';
import PostCreate from '../components/posts/PostCreate.vue';
import PostEdit from '../components/posts/PostEdit.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'post.index',
        component: PostIndex,
    },
    {
        path: '/post/create',
        name: 'post.create',
        component: PostCreate,
    },
    {
        path: '/post/:id/edit',
        name: 'post.edit',
        component: PostEdit,
        props: true
    }
]

export default createRouter(
    {
        history: createWebHistory(),
        routes: routes
    }
)