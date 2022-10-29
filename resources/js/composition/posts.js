import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function usePosts() {
    let posts = ref([]);
    let router = useRouter();
    let errors = ref('');

    let getPosts = async () => {
        let response = await axios.get('/api/posts');
        posts.value = response.data.data;
    }

    let storePost = async (data) => {
        errors.value = '';
        try {
            await axios.post('/api/posts', {'title': data.title, 'author': data.author, 'body': data.body});
            await router.push({ name: 'post.index' });
        } catch(e) {
            //построчный вывод ошибок (доделаю позже)
            // if (e.response.status === 422) {
            //     errors.value = e.response.data.errors
            // }
            if (e.response.status === '422') {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }
    
    let destroyPost = async (id) => {
        await axios.delete('/api/posts/'+id);
    }

    return {
        posts,
        errors,
        getPosts,
        storePost,
        destroyPost
    }
}