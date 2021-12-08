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
  describe("When all the inputs are correctly filled", () => {
    test("Then it should call createPaperAction", async () => {
      const getTokenAction = jest.fn();
      const createPaperAction = jest.fn();
      const editTrue = jest.fn();
      const editPaperAction = jest.fn();

      const event = {
        srcElement: [{}, {}, {}, {}, {}, {}, {}, { files: {} }],
      };

      const store = createStore({
        state() {
          return state;
        },
        actions: {
          getTokenAction,
          createPaperAction,
          editTrue,
          editPaperAction,
        },
      });

      const mockRouter = {
        push: jest.fn(),
      };

      const mockRoute = {
        push: jest.fn(),
        params: { paperId: "1" },
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
          $route: mockRoute,
        },
      });

      await router.isReady();

      const [title, author, year, location, photograph, image] =
        wrapper.findAll("input");

      const type = wrapper.find("select");
      const text = wrapper.find("textarea");

      title.setValue("Title");
      author.setValue("Author");
      year.setValue("2021");
      location.setValue("Location");
      photograph.setValue("Photograph");
      image.setValue("");
      type.setValue("Architecture");
      text.setValue("Text");

      expect(wrapper.vm.$data.title).toBe("Title");
      expect(wrapper.vm.$data.author).toBe("Author");
      expect(wrapper.vm.$data.year).toBe("2021");
      expect(wrapper.vm.$data.location).toBe("Location");
      expect(wrapper.vm.$data.photograph).toBe("Photograph");
      expect(wrapper.vm.$data.type).toBe("Architecture");
      expect(wrapper.vm.$data.text).toBe("Text");

      expect(wrapper.vm.$data.isDisabled).toBe(false);
    });
  });
});
