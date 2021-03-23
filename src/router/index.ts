import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import HomeWithInput from "@/views/HomeWithInput.vue";
import HomeWithStore from "@/views/HomeWithStore.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/homeWithInput",
    name: "HomeWithInput",
    component: HomeWithInput
  },
  {
    path: "/homeWithStore",
    name: "HomeWithStore",
    component: HomeWithStore
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
