<script setup>
import { ref, inject, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const countCharacters = ref(0);

// Handle character counting for content input
const handleCountCharacters = (e) => {
  countCharacters.value = e.target.value.length;
};

// Get route and router
const route = useRoute();
const router = useRouter();
const postId = route.params.id;

// Inject fetch and update methods
const fetchSinglePost = inject('fetchSinglePost');
const updatePost = inject('updatePost');

// Create a reactive post object
const post = ref({
  title: '',
  category: '',
  content: '',
  author: '',
  date: ''
});

// Fetch the single post when the component is mounted
const getPost = async () => {
  const data = await fetchSinglePost(postId);
  post.value = data; // Populate the form fields with the fetched post data
  countCharacters.value = data.content.length; // Initialize character count
};

onMounted(() => {
  getPost();
});

// Handle post update
const handleUpdatePost = async () => {
  await updatePost(post.value); // Call updatePost method with updated post data
  router.push('/blogs'); // Redirect to the blogs page after successful update
};

</script>

<template>
  <div class="bg-green-200">
    <div class="flex justify-center items-center flex-col py-3">
      <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-2xl mb-5 py-5 px-5 md:w-6/12">
        <h3 class="text-center text-2xl font-bold">Update Post</h3>

        <form @submit.prevent="handleUpdatePost">
          <!-- Title Field -->
          <div class="mb-4">
            <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input v-model="post.title" type="text" id="title" name="title" placeholder="Enter title"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>

          <!-- Category Field -->
          <div class="mb-4">
            <label for="category" class="block text-gray-700 text-sm font-bold mb-2">Category</label>
            <input v-model="post.category" type="text" id="category" name="category" placeholder="Enter category"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>

          <!-- Content Field -->
          <div class="mb-4">
            <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Content</label>
            <textarea v-model="post.content" @input="handleCountCharacters" id="content" name="content"
              placeholder="Enter content" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight resize-none focus:outline-none focus:shadow-outline">
            </textarea>
            <p class="text-xs text-gray-500">
              Enter a short description of the post content, minimum <span class="text-green ml-2">{{ countCharacters }}/100</span> characters
            </p>
          </div>

          <!-- Author Field -->
          <div class="mb-4">
            <label for="author" class="block text-gray-700 text-sm font-bold mb-2">Author</label>
            <input v-model="post.author" type="text" id="author" name="author" placeholder="Enter author"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>

          <!-- Date Field -->
          <div class="mb-4">
            <label for="date" class="block text-gray-700 text-sm font-bold mb-2">Date</label>
            <input v-model="post.date" type="date" id="date" name="date" placeholder="Enter date"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>

          <!-- Submit Button -->
          <div class="flex items-center justify-between">
            <button type="submit"
              class="bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center text-white">
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
