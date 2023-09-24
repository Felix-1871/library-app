<template>
    <div class="navbar">
        <NuxtLink to="/">
            <img src="/logo.png" alt="">
        </NuxtLink>
        <div class="search_bar">
            <input type="text" v-model="input" placeholder="Search">
            <button @click="filteredList">Search</button>
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
        .ilike('title', `%${input.value}%`)
    input.value = data;
    if (input.value == '') {
        router.push('/books/database');
        alert("No books found, please try again");
    } else if (input.value) {
        let book_id = data[0].book_id;
        router.push('/books/' + book_id);
        
    }

}

</script>

<style scoped>

.navbar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: var(--primary);
    color: var(--text);
}

.navbar img{
    width: 100px;
}

.search_bar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    background: var(--secondary);
    padding: 10px;
    border-radius: 10px;
}

.search_bar input{
    width: 80%;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
}

.search_bar button{
    width: 20%;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
}

</style>