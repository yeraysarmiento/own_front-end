import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import OwnLogin from "../views/OwnLogin.vue";
import OwnRegister from "../views/OwnRegister.vue";
import NotFound from "../views/NotFound.vue";
import Desk from "../views/Desk.vue";
import CreateBoard from "../views/CreateBoard.vue";
import BoardPage from "../views/BoardPage.vue";
import PaperPage from "../views/PaperPage.vue";
import CreatePaper from "../views/CreatePaper.vue";

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
    name: "CreateBoard",
    component: CreateBoard,
  },
  {
    path: "/:boardName/:idPaper",
    name: "PaperPage",
    component: PaperPage,
  },
  {
    path: "/:boardName/new",
    name: "CreatePaper",
    component: CreatePaper,
  },
  {
    path: "/:boardName",
    name: "BoardPage",
    component: BoardPage,
  },
  {
    path: "/:boardName/edit/:paperId",
    name: "CreatePaper",
    component: CreatePaper,
  },
  {
    path: "/notfound",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/notfound",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
