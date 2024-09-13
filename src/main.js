import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { state, fetchSinglePost, deletePost, createPost, updatePost } from './state/posts.js'


const app = createApp(App)
app.use(router)
app.provide('posts', state);
app.provide('fetchSinglePost', fetchSinglePost);
app.provide('deletePost', deletePost);
app.provide('createPost', createPost);
app.provide('updatePost', updatePost);


app.mount('#app')


