import { mount } from "@vue/test-utils";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, fas } from "@fortawesome/free-solid-svg-icons";
import Vuex, { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";
import state from "../../../tests/mockedState";
import PaperForm from "./PaperForm.vue";
import Editor from "@/components/Editor/Editor.vue";
import "@testing-library/jest-dom";

library.add(faChevronLeft);

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

describe("Given a PaperForm component", () => {
  describe("When its rendered", () => {
    test("Then it should render a form with class 'paper-form'", async () => {
      const mockRouter = {
        push: jest.fn(),
      };

      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(PaperForm, {
        components: {
          "font-awesome-icon": FontAwesomeIcon,
          editor: Editor,
        },
        getters: {
          redirectLogin: jest.fn(),
        },
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view", "router-link", "FontAwesomeIcon", "Editor"],
        mocks: {
          $router: mockRouter,
        },
      });

      await router.isReady();

      expect(wrapper.html()).toContain(
        ' <h2 class="create-paper__title">NEW PAPER</h2>'
      );
    });
  });
  describe("When the inputs are empty", () => {
    test("Then it should show a disabled button", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const mockRouter = {
        push: jest.fn(),
      };

      const wrapper = mount(PaperForm, {
        components: {
          "font-awesome-icon": FontAwesomeIcon,
          editor: Editor,
        },
        getters: {
          redirectLogin: jest.fn(),
        },
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view", "router-link", "FontAwesomeIcon", "Editor"],
        mocks: {
          $router: mockRouter,
        },
      });

      await router.isReady();

      const button = wrapper.find("button");
      expect(button.element.getAttributeNames()).toContain("disabled");
    });
  });
  describe("When the localStorage has a valid token", () => {
    test("Then it should call the getTokenAction", async () => {
      const getTokenAction = jest.fn();
      Storage.prototype.setItem = jest.fn();
      Storage.prototype.getItem = jest.fn();

      const store = createStore({
        state() {
          return state;
        },
        actions: {
          getTokenAction,
        },
        getters: {
          redirectLogin: jest.fn(),
        },
      });

      const $router = {
        push: jest.fn(),
      };
      const $route = {
        push: jest.fn(),
        params: "paperId",
      };

      const wrapper = mount(PaperForm, {
        components: {
          "font-awesome-icon": FontAwesomeIcon,
          editor: Editor,
        },
        global: {
          plugins: [router, store],
          mocks: {
            $route,
            $router,
          },
        },
        stubs: ["router-view", "router-link", "FontAwesomeIcon", "Editor"],
        actions: {
          getTokenAction,
        },
      });

      await router.isReady();

      expect(localStorage.getItem).toHaveBeenCalled();
    });
  });
  describe("When the localStorage is empty", () => {
    test("Then it should call push with '/login", async () => {
      const redirectLogin = jest.fn();

      const store = createStore({
        state() {
          return state;
        },
        getters: {
          redirectLogin,
        },
      });

      const $router = {
        push: jest.fn(),
      };
      const $route = {
        push: jest.fn(),
        params: "paperId",
      };

      const wrapper = mount(PaperForm, {
        components: {
          "font-awesome-icon": FontAwesomeIcon,
          editor: Editor,
        },
        global: {
          plugins: [router, store],
          mocks: {
            $route,
            $router,
          },
        },
        stubs: ["router-view", "router-link", "FontAwesomeIcon", "Editor"],
      });

      await router.isReady();

      expect(redirectLogin).toHaveBeenCalled();
    });
  });
});
