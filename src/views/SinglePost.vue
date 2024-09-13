<script setup>
import { inject, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Setup route and router
const route = useRoute();
const router = useRouter();

// Get postId from route params
const postId = route.params.id;

// Inject posts and deletePost from the parent component or a global store
const fetchSinglePost = inject('fetchSinglePost');
const deletePost = inject('deletePost');


// Create a reactive post variable
const post = ref(null);

// Fetch the single post data
const getPost = async () => {
  post.value = await fetchSinglePost(postId);
};

// Call the function to fetch the post when the component is mounted
onMounted(() => {
  getPost();
});

// Function to handle post deletion
const handleDeletePost = () => {
  const confirmDelete = confirm('Are you sure you want to delete this post?');
  if (confirmDelete) {
    deletePost(postId);
    router.push('/blogs'); // Redirect to the blogs page after deletion
  }
};
</script>

<template>
  <div class="bg-green-200">
    <div class="px-3">
      <RouterLink to="/blogs" class="text-green-600 hover:text-green-800">Back to blogs</RouterLink>
    </div>

    <div class="flex justify-center items-center flex-col py-20">
      <div v-if="post" class="bg-white shadow-md border border-gray-200 rounded-lg max-w-2xl mb-5">
        <div class="p-3">
          <span :class="'rounded-full border border-green-600 px-3 py-1 text-xs text-green-600'">
            {{ post.category }}
          </span>
        </div>
        <div class="p-5">
          <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {{ post.title }}
          </h5>
          <p class="font-normal text-gray-700 mb-3">
            {{ post.content }}
          </p>
          <div class="flex justify-between items-center">
            <div>
              <span class="text-gray-500">Published on {{ post.date }}</span>
            </div>
            <div>
              <span class="text-gray-500">By {{ post.author }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading post...</p>
      </div>
    </div>

    <!-- Action buttons -->
    <div class="flex justify-center items-center space-x-2 pb-2">
      <RouterLink :to="`${postId}/update`" 
        class="bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center text-white">
        Edit post
      </RouterLink>
      <!-- Confirm before delete and redirect -->
      <button
        class="bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center text-white"
        @click="handleDeletePost">
        Delete post
      </button>
    </div>
  </div>
</template>
