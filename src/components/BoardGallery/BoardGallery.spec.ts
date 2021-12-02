import { mount } from "@vue/test-utils";
import BoardGallery from "./BoardGallery.vue";
import Board from "../Board/Board.vue";
import router from "@/router";

describe("Given a BoardGallery component", () => {
  describe("When it receives an array of boards", () => {
    test("Then it should render as many <li> as boards plus one", async () => {
      const boards = [
        { name: "Name1", logo: "Logo1" },
        { name: "Name2", logo: "Logo2" },
        { name: "Name3", logo: "Logo3" },
      ];
      const wrapper = await mount(BoardGallery, {
        components: {
          Board,
        },
        props: {
          boards,
        },
        global: {
          plugins: [router],
        },
        stubs: ["router-link"],
      });

      const elements = await wrapper.findAllComponents(Board);

      expect(elements).toHaveLength(boards.length + 1);
    });
  });
});
