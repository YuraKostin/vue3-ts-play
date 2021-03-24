import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeWithStore from "@/views/HomeWithStore.vue";
import TemplateVariableIssue from "@/views/TemplateVariableIssue.vue";
import EventHandlingIssue from "@/views/EventHandlingIssue.vue";
import StoreIssue from "@/views/StoreIssue.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Template Variable issue",
    component: TemplateVariableIssue
  },
  {
    path: "/eventHandlingIssue",
    name: "EventHandlingIssue",
    component: EventHandlingIssue
  },
  {
    path: "/storeIssue",
    name: "StoreIssue",
    component: StoreIssue
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
