<script setup>
// import { RouterLink } from 'vue-router'
import vueLogo from '../assets/vue.svg'
import {menus} from '../data/menus'

</script>

<template>
    <nav class="bg-green-600 flex justify-between px-5 py-1 border-b border-white sticky top-0">
        <RouterLink to="/" class="flex justify-center items-center space-x-1">
            <img :src="vueLogo" class="bg-white rounded-full size-8 p-1" alt="log">
           <span class="font-bold text-2xl text-white capitalize hidden sm:block"> vue Blog</span>
        </RouterLink>
        <ul class="flex justify-around items-center space-x-4">
            <li v-for="menu in menus" :key="menu.id" class="font-bold text-white capitalize">
                <RouterLink 
                :to="menu.link"
                activeClass="bg-green-900 opacity-100 px-2 py-[3px] rounded"
                >{{menu.name}}</RouterLink>
            </li>
        </ul>

    </nav>


</template>