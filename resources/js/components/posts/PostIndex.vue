<template>
    <p>
        <router-link :to="{ name: 'post.create' }">Create post</router-link>
    </p>
    <table cellspacing="0" cellpadding="0">
        <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
        </tr>
        <tr v-for="post in posts" :key="post.id">
            <td>{{ post.author }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
            <td>
                <router-link :to="{ name: 'post.edit', params:{ id: post.id } }">
                    Редактировать
                </router-link>
                <button @click="deletePost(post.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<style scoped>
table {
    width: 100%;
    border: 1px solid silver;
}

th, td {
    border: 1px solid silver;
    padding: 10px;
    width: 30%;
}
</style>

<script>
import { onMounted } from 'vue';
import usePosts from '../../composition/posts.js';
export default {
    setup() {
        const { posts, getPosts, destroyPost } = usePosts();

        onMounted(getPosts);

        const deletePost = async (id) => {
            if (!window.confirm('Are you sure?')) {
                return false;
            }
            await destroyPost(id);
            await getPosts();
        }

        return {
            posts,
            deletePost
        }
    }
}
</script>