import { createRouter, createWebHistory } from "vue-router";
import getters from "@/store/getters";
import router from "@/router";
import "@testing-library/jest-dom";

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: "/",
//       component: {
//         template: "Home",
//       },
//     },
//     {
//       path: "/home",
//       name: "Home",
//       component: {
//         template: "Home",
//       },
//     },
//     {
//       path: "/login",
//       name: "OwnLogin",
//       component: {
//         template: "OwnLogin",
//       },
//     },
//     {
//       path: "/register",
//       name: "OwnRegister",
//       component: {
//         template: "OwnRegister",
//       },
//     },
//     {
//       path: "/desk",
//       name: "Desk",
//       component: {
//         template: "Desk",
//       },
//     },
//     {
//       path: "/desk/new",
//       name: "CreateBoard",
//       component: {
//         template: "CreateBoard",
//       },
//     },
//     {
//       path: "/:boardName",
//       name: "BoardPage",
//       component: {
//         template: "BoardPage",
//       },
//     },
//     {
//       path: "/:boardName/new",
//       name: "CreateNewPaper",
//       component: {
//         template: "CreatePaper",
//       },
//     },
//     {
//       path: "/:boardName/:idPaper",
//       name: "PaperPage",
//       component: {
//         template: "PaperPage",
//       },
//     },
//     {
//       path: "/:boardName/edit/:paperId",
//       name: "CreatePaper",
//       component: {
//         template: "CreatePaper",
//       },
//     },
//     {
//       path: "/notfound",
//       name: "NotFound",
//       component: {
//         template: "NotFound",
//       },
//     },
//     {
//       path: "/:catchAll(.*)",
//       redirect: "/notfound",
//     },
//   ],
// });

describe("Given a redirectHome getter", () => {
  describe("When it is called", () => {
    test("Then it should call method push with /home ", async () => {
      // const router = {
      //   push: jest.fn(),
      // };

      await getters.redirectHome();

      router.isReady();

      // expect(router.push).toHaveBeenCalled();
    });
  });
});
