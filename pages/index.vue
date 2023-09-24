<template>
    <div>
        <Head>
            <title>Manning Library</title>
        </Head>
        <div class="splash">
            <div class="splash__logo">
                <NuxtLink to="/">
                    <img src="/logo.png" alt="Logo" />
                </NuxtLink>
            </div>
            <div class="splash__text text">
                <h1>Manning County Library</h1>
                <p>Find your next book to read</p>

                <div class="splash__search">
                    <input type="text" placeholder="Search for a book" v-model="input" />
                    <button @click="filteredList">Search</button>
                </div>
                <div class="splash_buttons">
                    <NuxtLink to="/books/database">
                        <button>Browse through our books</button>
                    </NuxtLink>
                    <NuxtLink>
                        <button @click="randomBook">I'm feeling lucky</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { supabase } from '@/supabase';
import { useRouter } from 'vue-router';

const router = useRouter();

let input = ref('');

async function filteredList() {
    console.log(input.value);
    const { data } = await supabase
        .from('books')
        .select('*')
        .eq('title', `%${input.value}%`)
    input.value = data;
    if (input.value == '') {
        router.push('/books/database');
        alert("No books found, redirecting to database");
    } else if (input.value) {
        console.log(data);
        let book_id = data[0].book_id;
        router.push('/books/' + book_id);
        
    }

}

async function randomBook() {
    let random = Math.floor(Math.random() * 190);
    const { data } = await supabase
        .from('books')
        .select('*')
        .eq('book_id', random)
    console.log(data);
    let book_id = data[0].book_id;
    router.push('/books/' + book_id);
}

</script>

<style scoped>
    .splash {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .splash__logo {
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
    }

    .splash__text {
        text-align: center;
    }

    .splash__text h1 {
        font-size: 5rem;
        margin-bottom: 10px;
    }

    .splash__text p {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .splash__search {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .splash__search input {
        width: 300px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px 0 0 5px;
        padding: 0 10px;
        font-size: 1.2rem;
    }

    .splash__search button {
        width: 100px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 0 5px 5px 0;
        background-color: #fff;
        font-size: 1.2rem;
        cursor: pointer;
    }

    .splash_buttons {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .splash_buttons button {
        width: 200px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
        font-size: 1.2rem;
        cursor: pointer;
        margin: 10px;
    }
</style>