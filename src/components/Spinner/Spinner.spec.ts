import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "@/router";
import state from "../../../tests/mockedState";
import Spinner from "./Spinner.vue";

describe("Given an Spinner component", () => {
  describe("When it is rendered", () => {
    test("Should render div class 'lds-spinner'", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(Spinner, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-link", "router-view"],
      });

      await router.isReady();
      expect(wrapper.html()).toContain('<div class="lds-spinner">');
    });
  });
});
