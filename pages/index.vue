<template>
    <div>
        <Head>
            <title>Manning Library</title>
        </Head>
    <div class="splash">
        <div class="splash__logo">
            <img src="/logo.png" alt="Logo" />
        </div>
        <div class="splash__text text">
            <h1>Manning County Library</h1>
            <p>Find your next book to read</p>

            <div class="splash__search">
                <input type="text" placeholder="Search for a book" />
                <button>Search</button>
            </div> 
            <div class="splash_buttons">
            <NuxtLink to="/books/database">
                <button>Browse through our books</button>
            </NuxtLink>
                <NuxtLink>
                <button>I'm feeling lucky</button>
                </NuxtLink>
            </div>
        </div>
    </div>
    </div>
</template>

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

<script setup lang="ts">
const route = useRoute()
definePageMeta({
    title: 'My home page',
    description: 'This is my home page'
})
console.log(route.meta.title) // My home page
</script>

