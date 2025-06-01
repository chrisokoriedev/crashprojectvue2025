import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Jobs from "@/views/jobs.vue";
import AddJob from "@/views/AddJob.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: Jobs,
    },{
      path: "/addjob",
      name: "addjob",
      component:AddJob,
    },
  ],
});

export default router;
