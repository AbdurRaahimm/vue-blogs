<script setup>
defineProps({
    limit: Number,
    search: String,
    posts: {
        type: Object,
        required: true
    },

})

// console.log(posts)

</script>

<template>
    <p v-if="posts.isLoading">
        Loading...
    </p>
    <div v-else-if="posts.error">
        {{ posts.error }}
    </div>
    <div v-else class="flex justify-center items-center flex-col flex-wrap md:flex-row gap-2 ">
        <div v-for="post in posts.posts.slice(0, limit) " :key="post.id" class="">
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 ">
                <div class="p-3">
                    <span className="rounded-full border border-green-600 px-3 py-1 text-xs text-green-600">{{
                        post.category }}</span>
                </div>
                <div class="p-5">
                    <a href="#">
                        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2"> {{ post.title }} </h5>
                    </a>
                    <p class="font-normal text-gray-700 text-justify mb-3"> {{ post.content.substring(0, 88) }}... </p>
                    <div class="flex justify-between items-center space-y-3">
                        <div>
                            <span class="text-gray-500">Published on {{ post.date }}</span>
                        </div>
                        <div>
                            <span class="text-gray-500">By {{ post.author }}</span>
                        </div>
                    </div>
                    <RouterLink
                        class=" text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                        :to="`blogs/${post.id}`">
                        Read more
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>

</template>