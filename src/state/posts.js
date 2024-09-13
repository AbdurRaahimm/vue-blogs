import { reactive } from 'vue';

const state = reactive({
    posts: [],
    isLoading: true,
    error: null
});

const fetchPosts = async () => {
    try {
        const response = await fetch('http://localhost:3001/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts server error ');
        }
        state.posts = await response.json();
    }
    catch (error) {
        state.error = error.message || 'Failed to fetch posts';
    }
    finally {
        state.isLoading = false;
    }

};

fetchPosts();

// single post fetch 
const fetchSinglePost = async (postId) => {
    try {
        const response = await fetch(`http://localhost:3001/posts/${postId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch post');
        }
        return await response.json();
    }
    catch (error) {
        state.error = error.message || 'Failed to fetch post';
    }
};


// delete Post 
const deletePost = async (postId) => {
    try {
        const response = await fetch(`http://localhost:3001/posts/${postId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete post');
        }
        state.posts = state.posts.filter(post => post.id !== postId);
    }
    catch (error) {
        state.error = error.message || 'Failed to delete post';
    }
};

// create Post 
const createPost = async (post) => {
    try {
        const response = await fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        if (!response.ok) {
            throw new Error('Failed to create post');
        }
        const newPost = await response.json();
        state.posts.unshift(newPost);
    }
    catch (error) {
        state.error = error.message || 'Failed to create post';
    }
};

// update Post 
const updatePost = async (post) => {
    try {
        const response = await fetch(`http://localhost:3001/posts/${post.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        if (!response.ok) {
            throw new Error('Failed to update post');
        }
        const updatedPost = await response.json();
        const index = state.posts.findIndex(p => p.id === post.id);
        state.posts.splice(index, 1, updatedPost);
    }
    catch (error) {
        state.error = error.message || 'Failed to update post';
    }
};


export { state, fetchSinglePost, deletePost, createPost, updatePost };
