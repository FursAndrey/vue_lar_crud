<template>
    <div v-if="errors !== ''">
        {{ errors }}
    </div>
    <form @submit.prevent>
        <h4>Создание поста</h4>
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
            <button style="margin-top: 15px" @click="createPost">
                Сохранить
            </button>
            <router-link :to="{ name: 'post.index' }">
                Закрыть
            </router-link>
        </p>
    </form>
</template>

<script>
import { reactive } from '@vue/runtime-core'
import usePosts from '../../composition/posts';
export default {
    setup() {
        let post = reactive({
            'title': '',
            'author': '',
            'body': '',
        });

        const { errors, storePost } = usePosts();

        const createPost = async () => {
            await storePost({...post});
        }

        return {
            errors,
            post,
            createPost
        }
    },
}
</script>