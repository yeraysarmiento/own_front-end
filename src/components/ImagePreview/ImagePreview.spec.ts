import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../router/index";
import state from "../../../tests/mockedState";
import ImagePreview from "./ImagePreview.vue";

describe("Given the ImagePreview component", () => {
  describe("When its rendered", () => {
    test("Then it should render a div with a class image-preview__container", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(ImagePreview, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view"],
      });

      expect(wrapper.html()).toContain(
        '<div class="image-preview__container">'
      );
    });
  });
});
