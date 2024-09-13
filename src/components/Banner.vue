<script setup>
defineProps(['title', 'subtitle'])
</script>

<template>
    <h1 class="text-2xl md:text-3xl font-bold text-white">{{ title }}</h1>
    <p class="text-gray-300">{{ subtitle }}</p>
</template>