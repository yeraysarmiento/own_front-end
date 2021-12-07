import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "@/router";
import state from "../../../tests/mockedState";
import About from "./About.vue";

describe("Given an About component", () => {
  describe("When it is rendered", () => {
    test("Should render a heading containing 'AMALLECTIVE'", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(About, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-link", "router-view"],
      });

      await router.isReady();
      expect(wrapper.html()).toContain(
        '<h2 class="about__title">AMALLECTIVE</h2>'
      );
    });
  });
});
