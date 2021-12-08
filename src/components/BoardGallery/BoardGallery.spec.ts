import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { mount } from "@vue/test-utils";
import BoardGallery from "./BoardGallery.vue";
import Board from "../Board/Board.vue";
import router from "@/router";

library.add(faXmark);

describe("Given a BoardGallery component", () => {
  describe("When it receives an array of boards", () => {
    test("Then it should render as many <li> as boards plus one", async () => {
      const boards = [
        { name: "Name1", logo: "Logo1", id: "1" },
        { name: "Name2", logo: "Logo2", id: "2" },
        { name: "Name3", logo: "Logo3", id: "3" },
      ];
      const wrapper = await mount(BoardGallery, {
        components: {
          Board,
          "font-awesome-icon": FontAwesomeIcon,
        },
        props: {
          boards,
        },
        global: {
          plugins: [router],
        },
        stubs: ["router-link", "router-view", "FontAwesomeIcon"],
      });

      const elements = await wrapper.findAllComponents(Board);

      expect(elements).toHaveLength(5);
    });
  });
});
