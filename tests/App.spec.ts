import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../src/router";
import state from "./mockedState";
import App from "../src/App.vue";
import "@testing-library/jest-dom";

describe("Given the App", () => {
  describe("When its rendered", () => {
    test("Then it should render a div with a class container", async () => {
      localStorage.setItem("user", "token");

      const store = createStore({
        state() {
          return state;
        },
        actions: {
          getTokenAction: jest.fn(),
        },
      });

      const wrapper = mount(App, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view"],
      });

      const getTokenAction = jest.fn();
      getTokenAction();

      expect(wrapper.html()).toContain('<div class="container">');
      expect(getTokenAction).toHaveBeenCalled();
    });
  });
});
