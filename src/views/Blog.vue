<script setup>
import { inject, ref } from 'vue';
import Posts from '../components/Posts.vue';
const posts = inject('posts');

const search = ref('');


</script>

<template>
    <div class="bg-green-200">
        <div class="flex justify-between px-5 py-3">
            <h1>Blogs - ({{ posts.posts.length }})</h1>
            <!-- <input v-model="search" class="border focus:outline-none placeholder:capitalize p-2" type="search" placeholder="Search posts" /> -->
        </div>
        <div class="px-4 flex justify-center items-center flex-col flex-wrap md:flex-row gap-2">
            <Posts 
            :posts="posts"  
            />
        </div>
    </div>
</template>