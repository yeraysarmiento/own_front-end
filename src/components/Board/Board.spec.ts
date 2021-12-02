import { mount } from "@vue/test-utils";
import router from "@/router";
import Board from "./Board.vue";

describe("Given a Board Component", () => {
  describe("When it is rendered with a isNew: false", () => {
    test("Then it should render a <li> with an img", async () => {
      const board = {
        name: "Name",
        logo: "LogoURL",
      };
      const imageExpected = `<img class="board__image" src="${board.logo}" alt="Logo of ${board.name}" width="125" height="125">`;

      const wrapper = await mount(Board, {
        props: {
          board,
          isNew: false,
        },
        global: {
          plugins: [router],
        },
        stubs: ["router-link", "router-view"],
      });

      expect(wrapper.html()).toContain(imageExpected);
    });
  });
  describe("When it is rendered with a isNew: true", () => {
    test("Then it should render a <li> with an + text", async () => {
      const board = {
        name: "",
        logo: "",
      };
      const textExpected = "+";

      const wrapper = await mount(Board, {
        props: {
          board,
          isNew: true,
        },
        global: {
          plugins: [router],
        },
        stubs: ["router-link", "router-view"],
      });

      expect(wrapper.text()).toContain(textExpected);
    });
  });
});
