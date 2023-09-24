<template>
<div>
    <Head>
        <title></title>
    </Head>
    <Navbar />
    <div class="splash">
        <h1>{{ author.name }}</h1>
        
        <p v-if="author.date_of_birth">Born: {{ author.date_of_birth }}</p> 
         <p v-else>There is no date of birth for this author</p>
        <p v-if="author.bio">{{ author.bio }}</p>
       <p v-else>There is no bio for this author</p>
    </div>
    <div class="books">
        <h2>Books by {{ author.name }}</h2>
        <div class="book" v-for="book in books" :key="book.id">
            <NuxtLink class="link" :to="`/books/${books.id}`">
                <img :src="books.image" alt="">
                <div class="book_info">
                    <h3>{{books.title}}</h3>
                    <p v-if="books.description">{{books.description}}</p>
                    <p v-else>There is no description for this book</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { supabase } from '@/supabase'
import { useRoute } from 'vue-router'

const id = useRoute().params.id
const author = reactive({
    name: '',
    bio: '',
    date_of_birth: '',
})

const books = reactive( [
    {
        id: '',
        title: '',
        description: '',
        image: '',
    },
] as any);
async function getAuthor() {
    const { data } = await supabase.from('authors').select('*').eq('author_id', id)
    author.name = data[0].author_name
    author.bio = data[0].bio
    author.date_of_birth = data[0].date_of_birth
    
}

async function getBooks() {
    const { data } = await supabase.from('books').select('*').eq('author_id', id)
    books.id = data[0].book_id
    books.title = data[0].title
    books.description = data[0].description
    books.image = data[0].image
}

onMounted(() => {
    getBooks()
    getAuthor()
})


</script>

<style scoped>

.splash{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50%;
    margin-bottom: 150px;
}

.splash h1{
    font-size: 5rem;
    margin-bottom: 10px;
}

.splash p{
    font-size: 1.5rem;
    margin-bottom: 20px;
}

.books{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.books h2{
    font-size: 5rem;
    margin-bottom: 10px;
}


.books .book img{
    height: auto;
    border-radius: 10px;

}

.books .book_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.books .book_info h3{
    font-size: 20px;
    margin: 10px;
}

.books .book_info p{
    font-size: 16px;
    margin: 10px;
}

.link {
    text-decoration: none;
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: var(--secondary);
    padding: 10px;
    border-radius: 10px;
}





</style>