import { mount } from "@vue/test-utils";
import router from "@/router";
import Paper from "./Paper.vue";
import state from "../../../tests/mockedState";

jest.mock("@/store/actions");

describe("Given a Paper Component", () => {
  describe("When it is rendered with a isNew: false", () => {
    test("Then it should render a <li> with an img", async () => {
      const paper = {
        title: "Name",
        author: "Author",
        images: ["LogoURL"],
      };

      const imageExpected = `<img class="paper__image editing" src="${paper.images}" alt="Image of ${paper.title}, by ${paper.author}" width="350" height="350">`;

      const wrapper = await mount(Paper, {
        props: {
          paper,
          isEditing: false,
        },
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
            },
          },
        },
        stubs: ["router-link", "router-view"],
      });

      expect(wrapper.html()).toContain(imageExpected);
    });
  });
});
