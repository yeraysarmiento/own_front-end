import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import BoardForm from "./BoardForm.vue";
import state from "../../../tests/mockedState";
import ImagePreview from "../ImagePreview/ImagePreview.vue";
import "@testing-library/jest-dom";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: {
        template: "Home",
      },
    },
    {
      path: "/home",
      name: "Home",
      component: {
        template: "Home",
      },
    },
    {
      path: "/login",
      name: "OwnLogin",
      component: {
        template: "OwnLogin",
      },
    },
    {
      path: "/register",
      name: "OwnRegister",
      component: {
        template: "OwnRegister",
      },
    },
    {
      path: "/desk",
      name: "Desk",
      component: {
        template: "Desk",
      },
    },
    {
      path: "/desk/new",
      name: "CreateBoard",
      component: {
        template: "CreateBoard",
      },
    },
    {
      path: "/:boardName",
      name: "BoardPage",
      component: {
        template: "BoardPage",
      },
    },
    {
      path: "/:boardName/new",
      name: "CreateNewPaper",
      component: {
        template: "CreatePaper",
      },
    },
    {
      path: "/:boardName/:idPaper",
      name: "PaperPage",
      component: {
        template: "PaperPage",
      },
    },
    {
      path: "/:boardName/edit/:paperId",
      name: "CreatePaper",
      component: {
        template: "CreatePaper",
      },
    },
    {
      path: "/notfound",
      name: "NotFound",
      component: {
        template: "NotFound",
      },
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/notfound",
    },
  ],
});

describe("Given a BoardForm Component", () => {
  describe("When it is rendered", () => {
    test("Then it should render one heading 'NEW BOARD'", async () => {
      // const store = createStore({
      //   state() {
      //     return state;
      //   },
      //   actions: {
      //     createBoardAction: jest.fn(),
      //     getTokenAction: jest.fn(),
      //   },
      //   getters: {
      //     redirectLogin: jest.fn(),
      //     redirectDesk: jest.fn(),
      //   },
      //   mutations: {
      //     STOP_LOADING: jest.fn(),
      //   },
      // });
      // const $router = {
      //   push: jest.fn(),
      // };
      // const $route = {
      //   push: jest.fn(),
      // };
      // await router.isReady();
      // const wrapper = mount(BoardForm, {
      //   global: {
      //     plugins: [router, store],
      //     mocks: {
      //       $route,
      //       $router,
      //     },
      //   },
      //   components: {
      //     ImagePreview,
      //   },
      //   stubs: ["router-link", "router-view"],
      // });
      // const form = wrapper.find("form");
      //  inputName.setValue("name");
      //  inputPassword.setValue("password");
      //  await wrapper.find("form").trigger("submit.prevent");
      //  expect(wrapper.vm.$data.username).toBe("name");
      //  expect(wrapper.vm.$data.password).toBe("password");
      //  expect(wrapper.vm.$data.isWrong).toBe(false);
      //  expect(wrapper.vm.$data.isDisabled).toBe(false);
      //  expect(store.state.currentUser).toBeDefined();
      //  expect(loginUserAction).toHaveBeenCalled();
    });
  });
});
