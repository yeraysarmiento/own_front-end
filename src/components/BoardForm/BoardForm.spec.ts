import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import BoardForm from "./BoardForm.vue";
import router from "@/router";
import state from "../../../tests/mockedState";
import ImagePreview from "../ImagePreview/ImagePreview.vue";
import "@testing-library/jest-dom";

describe("Given a BoardForm Component", () => {
  describe("When it is rendered", () => {
    test("Then it should render one heading 'NEW BOARD'", async () => {
      // localStorage.setItem("user", "token");
      // const $route = { path: "/login" };
      // const store = createStore({
      //   state() {
      //     return state;
      //   },
      //   actions: {
      //     getTokenAction: jest.fn(),
      //   },
      // });
      // const wrapper = mount(BoardForm, {
      //   components: {
      //     ImagePreview,
      //   },
      //   global: {
      //     plugins: [router, store],
      //   },
      //   stubs: ["router-link", "router-view"],
      //   methods: {
      //     onImage: jest.fn(),
      //     checkForm: jest.fn(),
      //   },
      //   mocks: {
      //     $route,
      //   },
      // });
      // console.log(wrapper.html());
      // // expect(wrapper.vm.$route.path).toContain($route.path);
      // expect(wrapper.html()).toContain('<div class="own-register">');
    });
  });
});
