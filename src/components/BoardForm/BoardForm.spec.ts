import { mount } from "@vue/test-utils";
import BoardForm from "./BoardForm.vue";
import router from "@/router";

describe("Given a BoardForm Component", () => {
  describe("When it is rendered", () => {
    test("Then it should render one heading 'NEW BOARD'", async () => {
      // const $store = {
      //   methods: {
      //     checkForm: jest.fn(),
      //     onSubmit: jest.fn(),
      //   },
      //   // mounted: jest.fn().mockResolvedValue(true),
      // };
      // const wrapper = await mount(BoardForm, {
      //   global: {
      //     plugins: [router],
      //   },
      //   stubs: ["router-link", "router-view"],
      //   $store: {
      //     $store,
      //   },
      // });
      // // expect(title).toBeInTheDocument();
    });
  });
});
