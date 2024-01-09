import { createRouter, createWebHistory } from "vue-router";

// import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/Signup.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Login },
    { path: "/signup", component: SignUp },
    // { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
  ],
});

// Export the router instance
export default router;
