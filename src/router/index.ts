import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import OwnLogin from "../views/OwnLogin.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "OwnLogin",
    component: OwnLogin,
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
