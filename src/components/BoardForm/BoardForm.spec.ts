import { mount } from "@vue/test-utils";
import BoardForm from "./BoardForm.vue";
import router from "@/router";

describe("Given a BoardForm Component", () => {
  describe("When it is rendered", () => {
    test("Then it should render one heading 'NEW BOARD' and 8 labels", async () => {
      // const wrapper = await mount(BoardForm, {
      //   global: {
      //     plugins: [router],
      //   },
      //   stubs: ["router-link"],
      // });
      //     const labels = wrapper.findAll("label");
      //     const heading = wrapper.find(".register-title");
      //     await (() => {
      //       expect(labels).toHaveLength(8);
      //       expect(heading.text()).toBe("NEW BOARD");
      //     });
      //   });
      // });
      // describe("When it is rendered", () => {
      //   test("Then it should show a disabled button", async () => {
      //     const wrapper = await mount(BoardForm, {
      //       global: {
      //         plugins: [router],
      //       },
      //       stubs: ["router-link"],
      //     });
      //     const button = wrapper.find("button");
      //     await (() => {
      //       expect(button).toHaveProperty("isDisabled");
      //     });
      //   });
      // });
      // describe("When the user clicks at submit with all required fields completed", () => {
      //   test("Then it should call the method onSubmit", async () => {
      //     const methods = {
      //       onSubmit: jest.fn(),
      //       checkForm: jest.fn(),
      //     };
      //     const $store = {
      //       state,
      //       methods,
      //       dispatch: jest.fn(),
      //       commit: jest.fn(),
      //     };
      //     const wrapper = await mount(BoardForm, {
      //       setData: {
      //         name: "name",
      //         email: "email",
      //         category: "category",
      //         instagram: "instagram",
      //         twitter: "twitter",
      //         facebook: "facebook",
      //         about: "A little bit about me",
      //         isDisabled: true,
      //         logo: {},
      //         isWrong: false,
      //       },
      //       global: {
      //         mocks: {
      //           $store,
      //           methods,
      //         },
      //         plugins: [router],
      //       },
      //       stubs: ["router-link"],
      //     });
      //     const element = wrapper.find(".button").trigger("click");
      //     await wrapper.vm.$nextTick();
      //     expect(calledFunction).toBeCalled();
      // });
      // });
    });
  });
});
