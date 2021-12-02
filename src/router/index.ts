import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import OwnLogin from "../views/OwnLogin.vue";
import OwnRegister from "../views/OwnRegister.vue";
import NotFound from "../views/NotFound.vue";
import Desk from "../views/Desk.vue";
import CreateBoard from "../views/CreateBoard.vue";
import BoardPage from "../views/BoardPage.vue";

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
    path: "/desk",
    name: "Desk",
    component: Desk,
  },
  {
    path: "/desk/new",
    component: CreateBoard,
  },
  {
    path: "/:boardName",
    component: BoardPage,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
