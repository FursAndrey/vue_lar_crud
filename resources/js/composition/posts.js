import axios from "axios";
import { ref } from "vue";

export default function usePosts() {
    let posts = ref([]);

    let getPosts = async () => {
        let response = await axios.get('/api/posts');
        posts.value = response.data.data;
    }

    return {
        posts,
        getPosts
    }
}