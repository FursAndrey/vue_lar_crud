<template>
    Hello World.
    <table cellspacing="0" cellpadding="0">
        <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Body</th>
        </tr>
        <tr v-for="post in posts" :key="post.id">
            <td>{{ post.author }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
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
        const { posts, getPosts } = usePosts();

        onMounted(getPosts);

        return {
            posts,
            // getPosts
        }
    }
}
</script>