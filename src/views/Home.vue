<script setup>
import { inject } from 'vue';

import Banner from '../components/Banner.vue';
import Posts from '../components/Posts.vue';
const posts = inject('posts');
console.log(posts);

</script>

<template>
    <div class="bg-green-200 pb-5">
        <div class="bg-green-600 flex justify-center items-center flex-col  py-20">
            <Banner title="Welcome to Vite + Vue 3 Blog" subtitle="This is a simple blog built with Vue 3 and Vite." />
        </div>
        <div class="text-center my-4">
            <h1 class="text-3xl font-bold"> Blogs </h1>
        </div>
        <div class="px-4 flex justify-center items-center flex-col flex-wrap md:flex-row gap-2">
            <Posts :posts="posts" :limit="3" />
        </div>
        <!-- see all -->
        <div class="text-center space-y-4">
            <RouterLink to="/blogs" class="bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center text-white capitalize">See all posts</RouterLink>  
        </div>

    </div>



</template>