import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Jobs from "@/views/jobs.vue";
import AddJob from "@/views/addjob.vue";
import NotFound from "@/views/NotFound.vue";
import ViewJob from "@/views/ViewJob.vue";
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
    },
    {
      path: "/viewJob/:id",
      name: "viewJob",
      component: ViewJob,
    },
    {
      path: "/addjob",
      name: "addjob",
      component: AddJob,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
