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
  });
  describe("When the user clicks in Logout", () => {
    test("Then it should call the logout method", async () => {
      router.isReady();

      // const wrapper = await mount(BoardHeader, {
      //   global: {
      //     plugins: [router],
      //     mocks: {
      //       $store: {
      //         state,
      //       },
      //     },
      //   },
      //   stubs: ["router-link", "router-view"],
      // });

      // const select = await wrapper.find("select");
      // select.setValue("All projects");

      // expect(select.element.value).toBe("All projects");
    });
  });
});
