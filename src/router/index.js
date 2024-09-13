import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import NotFound from "../views/NotFound.vue";
import SinglePost from "../views/SinglePost.vue";
import AddPost from "../views/AddPost.vue";
import UpdatePost from "../views/UpdatePost.vue";

const routes = [
    {
        path: "/",
        component: () => Home
    },
    {
        path: "/blogs",
        children: [
            { path: "", component: Blog },
            { path: ":id", component: SinglePost, props: true },
            { path: ":id/update", component: UpdatePost, props: true }
        ],
    },
    {
        path: "/addPost",
        component: AddPost
    },
    {
        path: "/:catchAll(.*)",
        component: () => NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;