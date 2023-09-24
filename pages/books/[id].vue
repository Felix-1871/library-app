<template>
    <div>

        <Head>
            <title>{{ book.title }}</title>
        </Head>
        <Navbar />
        <div class="splash">
            <img :src="book.coverUrl" :alt="book.title">
        </div>
        <div class="details">
            <h1>{{ book.title }}</h1>
            <p>{{ book.author }}</p>
            <p v-if="book.description">{{ book.description }}</p>
            <p v-else>There is no description for this book</p>
        </div>
        <div class="links">
            <NuxtLink to="/books/database">
                <button>Back to books</button>
            </NuxtLink>
            <NuxtLink :to="`/authors/${book.authorId}`">
                <button>View author</button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { supabase } from '@/supabase'
import { useRoute } from 'vue-router'

const id = useRoute().params.id
const book = reactive({
    title: '',
    author: '',
    description: '',
    coverUrl: '',
    authorId: ''
})

async function getBook() {
    const { data } = await supabase.from('books').select('*').eq('book_id', id)
    book.title = data[0].title
    book.author = data[0].author_name
    book.description = data[0].description
    book.coverUrl = data[0].image
    book.authorId = data[0].author_id
}

onMounted(() => {
    getBook()
})
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: var(--background) !important;
}

.splash {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
}

.splash img {
    width: 300px;
    height: 300px;
}

.details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.details h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

.details p {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 0 25%;
    width: 50%;
}

.links button {
    width: 200px;
    height: 50px;
    border: none;
    outline: none;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
}

.links button:nth-child(1) {
    background: var(--secondary);
    color: var(--text);
}

.links button:nth-child(2) {
    background: var(--secondary);
    color: var(--text);
}

.link {
    text-decoration: none;
    color: var(--text);
}
</style>
