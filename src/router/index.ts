import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import OwnLogin from "../views/OwnLogin.vue";
import OwnRegister from "../views/OwnRegister.vue";
import NotFound from "../views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "OwnLogin",
    component: OwnLogin,
  },
  {
    path: "/register",
    name: "OwnRegister",
    component: OwnRegister,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
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
