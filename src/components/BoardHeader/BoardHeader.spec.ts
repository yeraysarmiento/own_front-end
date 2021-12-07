import { mount } from "@vue/test-utils";
import BoardHeader from "@/components/BoardHeader/BoardHeader.vue";
import router from "@/router";
import state from "../../../tests/mockedState";

describe("Given an BoardHeader component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a heading with the title text uppercased", async () => {
      const title = "AMALLECTIVE";
      const wrapper = await mount(BoardHeader, {
        props: {
          boardName: title,
          boardLogo: "logoURL",
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

      expect(wrapper.text()).toContain(title.toUpperCase());
    });
    // describe("When the li element is clicked", () => {
    //   test("Then it should call the loadBoard function with an id", async () => {
    //     const title = "Title";
    //     const $store = {
    //       state: {
    //         ...state,
    //         isAuthenticated: true,
    //       },
    //       methods: {
    //         loadBoard: jest.fn(),
    //       },
    //     };

    //     const wrapper = await mount(BoardHeader, {
    //       props: {
    //         boardName: title,
    //         boardLogo: "logoURL",
    //       },
    //       global: {
    //         plugins: [router],
    //         mocks: {
    //           $store: {
    //             $store,
    //           },
    //         },
    //         stubs: ["router-link", "router-view"],
    //       },
    //     });

    //     $store.methods.loadBoard = jest.fn();
    //     $store.methods.loadBoard();

    //     wrapper.find("input").trigger("click");

    //     expect($store.methods.loadBoard).toHaveBeenCalled();
    //   });
    // });
  });
});
