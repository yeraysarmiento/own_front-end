import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Desk from "../views/Desk.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/desk",
    name: "Desk",
    component: Desk,
  },
  // {
  //   path: "/desk",
  //   name: "Desk",
  //   component: () => import("../views/Desk.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
