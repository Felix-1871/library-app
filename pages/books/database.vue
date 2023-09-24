<template>
    <div>
        <Head>
            <title>Our books</title>
        </Head>
        <Navbar/>
        <div class="site_content">
            <div class="search_results">
                
                <div class="book" v-for="book in books" :key="book.id">
                  <NuxtLink class="link" :to="`/books/${book.book_id}`">
                    <img :src="book.image" alt="">
                    <div class="book_info">
                        <h3>{{book.title}}</h3>
                        <p>{{book.author}}</p>
                        <p v-if="book.description">{{book.description}}</p>
                        <p v-else>There is no description for this book</p>
                    </div>
                  </NuxtLink>
                </div>
              
                
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { supabase } from '@/supabase'

export default {
    data() {
        return {
            books: [] as any
        }
    },
    async mounted() {
        const { data } = await supabase
            .from('books')
            .select('*')
        this.books = data

    }
}


</script>

<style scoped>

body {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        background: var(--background);
    }

.site_content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.search_results{
    display: grid;
    grid-template: auto / auto auto auto auto;
    grid-gap: 70px;
    align-items: center;
    width: 100%;
    margin-right: 10px;
}



.book{

    width: 100%;
    background: var(--secondary);
    border-radius: 10px;
    margin: 10px;
}

.book img{
    width: 100%;
    height: 100%;
}

.book_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.book_info h3{
    font-size: 20px;
    margin: 10px;
    text-decoration: none;

}

.link {
    text-decoration: none;
    color: var(--text);
}

.book_info p{
    font-size: 16px;
    margin: 10px;
    text-decoration: none;

}





</style>