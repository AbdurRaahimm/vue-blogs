<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
const createPost = inject('createPost');

const router = useRouter();

const countCharacters = ref(0);

const handleCountCharacters = (e) => {
    countCharacters.value = e.target.value.length;
};



const handleAddPost = async (e) => {
    const title = e.target.title.value;
    const category = e.target.category.value;
    const content = e.target.content.value;
    const author = e.target.author.value;
    const date = e.target.date.value;

    if (!title || !category || !content || !author || !date) {
        alert('Please fill all fields');
        return;
    }

    const post = {
        id: Math.floor(Math.random() * 1000).toString(),
        title,
        category,
        content,
        author,
        date
    };

    await createPost(post);
    router.push('/blogs');
};
</script>
<template>
    <div class="bg-green-200">
        <div class="flex justify-center items-center flex-col py-3">
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-2xl mb-5 py-5 px-5 md:w-6/12 ">
                <h3 class="text-center text-2xl font-bold"> Create Posts </h3>

                <form class="" @submit.prevent="handleAddPost">
                    <div class="mb-4">
                        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                        <input type="text" id="title" name="title" placeholder="Enter title"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-4">
                        <label for="category" class="block text-gray-700 text-sm font-bold mb-2">Category</label>
                        <input type="text" id="category" name="category" placeholder="Enter category"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-4">
                        <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Content</label>
                        <textarea 
                            @input="handleCountCharacters"
                         id="content" name="content" placeholder="Enter content"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight resize-none focus:outline-none focus:shadow-outline"></textarea>
                        <p class="text-xs text-gray-500">
                            Enter a short description of the post content minimum<span class="text-green ml-2">{{ countCharacters }}/100</span> characters 
                        </p>
                    </div>
                    <div class="mb-4">
                        <label for="author" class="block text-gray-700 text-sm font-bold mb-2">Author</label>
                        <input type="text" id="author" name="author" placeholder="Enter author"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-4">
                        <label for="date" class="block text-gray-700 text-sm font-bold mb-2">Date</label>
                        <input type="date" id="date" name="date" placeholder="Enter date"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="flex items center justify-between">
                        <button type="submit"
                            class="bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center text-white">Create
                            post</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>