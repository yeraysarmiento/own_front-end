import {
  fireEvent,
  getByPlaceholderText,
  render,
  screen,
} from "@testing-library/vue";
import "@testing-library/jest-dom";
import { mount } from "@vue/test-utils";
import Register from "@/components/Register/Register.vue";
import router from "@/router";

describe("Given a Register component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a heading with the text 'REGISTER'", () => {
      const { getByRole } = render(Register);

      const title = getByRole("heading", { name: /register/i });

      expect(title).toBeInTheDocument();
    });
  });
  test("Then it should render a textbox username and password", () => {
    const { getByRole } = render(Register);

    const usernameInput = screen.getByRole("textbox", { name: /username:/i });
    const emailInput = screen.getByRole("textbox", { name: /email:/i });

    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });
  test("Then it should render a disabled button", () => {
    const { getByRole } = render(Register);

    const button = getByRole("button", { name: /register/i });

    expect(button).toBeDisabled();
  });
  describe("When the fields are correctly filled and submit is clicked", () => {
    test("Then it should call the method onSubmit", async () => {
      // const $store = {
      //   methods: {
      //     checkForm: jest.fn(),
      //     onSubmit: jest.fn(),
      //   },
      // };
      // const wrapper = await mount(Register, {
      //   global: {
      //     plugins: [router],
      //   },
      //   stubs: ["router-link", "router-view"],
      //   $store: {
      //     $store,
      //   },
      // });
      // $store.methods.onSubmit = jest.fn();
      // $store.methods.onSubmit();
      // const username = wrapper.findAll("input")[0];
      // const email = wrapper.findAll("input")[1];
      // const password = wrapper.findAll("input")[2];
      // const repeatPassword = wrapper.findAll("input")[3];
      // username.setValue("loling");
      // email.setValue("loling@gmail.com");
      // password.setValue("loling");
      // repeatPassword.setValue("loling");
      // wrapper.find("form").trigger("submit");
      // expect($store.methods.onSubmit).toHaveBeenCalled();
    });
  });
  // describe("When the email has not correctly format", () => {
  //   test("Then it should show a disabled button", async () => {
  //     const $store = {
  //       methods: {
  //         checkForm: jest.fn(),
  //         onSubmit: jest.fn(),
  //       },
  //     };
  //     $store.methods.onSubmit = jest.fn();
  //     $store.methods.onSubmit();

  //     const wrapper = await mount(Register, {
  //       global: {
  //         plugins: [router],
  //       },
  //       stubs: ["router-link", "router-view"],
  //       $store: {
  //         $store,
  //       },
  //     });

  //     const email = wrapper.findAll("input")[1];

  //     console.log(email);

  //     email.setValue("ef");

  //     expect(wrapper.vm.isWrongEmail).toBe(true);
  //   });
  // });
});
