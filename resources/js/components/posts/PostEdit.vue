<template>
    <div v-if="errors !== ''">
        <p v-for="(er, field) in errors" :key="field">
            <span v-for="error in er" :key="error" class="text-sm">
                {{ error }}
            </span>
        </p>
    </div>
    <form @submit.prevent="savePost">
        <h4>Редактирование поста</h4>
        <p>
            <input
                v-model="post.title"
                type="text"
                placeholder="Название"
            />
        </p>
        <p>
            <textarea v-model="post.body"></textarea>
        </p>
        <p>
            <input
                v-model="post.author"
                type="text"
                placeholder="Автор"
            />
        </p>
        <p>
            <button style="margin-top: 15px">
                Сохранить
            </button>
            <router-link :to="{ name: 'post.index' }">
                Закрыть
            </router-link>
        </p>
    </form>
</template>

<script>
import { onMounted } from 'vue';
import usePosts from '../../composition/posts';
export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },

    setup(props) {
        const { errors, post, getPost, updatePost } = usePosts();

        // должно быть так, но не работает из-за наличия "(props.id)"
        // onMounted(getPost(props.id))
        const getCurrentPost = () => {
            getPost(props.id);
        }

        const savePost = async () => {
            await updatePost(props.id);
        }

        onMounted(getCurrentPost);
        
        return {
            errors,
            post,
            savePost
        }
    }
}
</script>