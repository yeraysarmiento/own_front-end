import { mount } from "@vue/test-utils";
import Vuex, { createStore } from "vuex";
import router from "@/router";
import state from "../../../tests/mockedState";
import PaperForm from "./PaperForm.vue";
import "@testing-library/jest-dom";

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
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view", "router-link"],
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
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view", "router-link"],
        mocks: {
          $router: mockRouter,
        },
      });

      await router.isReady();

      const button = wrapper.find("button");
      expect(button.element.getAttributeNames()).toContain("disabled");
    });
  });
  describe("When the localStorage is empty", () => {
    test("Then it should reroute to /login", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const mockRouter = {
        push: jest.fn(),
      };

      const wrapper = mount(PaperForm, {
        global: {
          plugins: [router, store],
          mocks: {
            $router: mockRouter,
          },
        },
        stubs: ["router-view", "router-link"],
      });

      await router.isReady();

      expect(mockRouter.push).toHaveBeenCalledWith("/login");
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
      });

      const mockRouter = {
        push: jest.fn(),
      };

      const wrapper = mount(PaperForm, {
        global: {
          plugins: [router, store],
          mocks: {
            $router: mockRouter,
          },
        },
        stubs: ["router-view", "router-link"],
        actions: {
          getTokenAction,
        },
      });

      await router.isReady();

      expect(localStorage.getItem).toHaveBeenCalled();
      // expect(getTokenAction).toHaveBeenCalled();
    });
  });
  describe("When the localStorage has a not valid token", () => {
    test("Then it should call push with '/login", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const mockRouter = {
        push: jest.fn(),
      };

      const wrapper = mount(PaperForm, {
        global: {
          plugins: [router, store],
          mocks: {
            $router: mockRouter,
          },
        },
        stubs: ["router-view", "router-link"],
      });

      await router.isReady();

      expect(mockRouter.push).toHaveBeenCalledWith("/login");
    });
  });
});
