import { mount } from "@vue/test-utils";
import router from "@/router";
import Login from "./Login.vue";

describe("Given a Login Component", () => {
  describe("When it is rendered", () => {
    test("Then it should render 2 inputs and a button", async () => {
      const password =
        '<input id="password" type="password" placeholder="**********" class="">';
      const username =
        '<input id="username" placeholder="Mario Gonzalez" class="">';
      const button =
        '<button class="button disabled" type="submit" disabled="">Submit</button>';

      const wrapper = await mount(Login, {
        global: {
          plugins: [router],
        },
        stubs: ["router-link"],
      });

      expect(wrapper.html()).toContain(password);
      expect(wrapper.html()).toContain(username);
      expect(wrapper.html()).toContain(button);
    });
  });
  describe("When the fields are not filled", () => {
    test("Then it should show a disabled submit button", async () => {
      const wrapper = await mount(Login, {
        global: {
          plugins: [router],
        },
        stubs: ["router-link", "router-view"],
      });

      const button = wrapper.find("button");

      expect(button).toHaveProperty("isDisabled");
    });
  });
  describe("When the fields are filled and click on submit", () => {
    test("Then it should call the ", async () => {
      const $store = {
        methods: {
          checkForm: jest.fn(),
          onSubmit: jest.fn(),
        },
      };

      const wrapper = await mount(Login, {
        global: {
          plugins: [router],
        },
        stubs: ["router-link", "router-view"],
        $store: {
          $store,
        },
      });

      $store.methods.onSubmit = jest.fn();
      $store.methods.onSubmit();

      const username = wrapper.findAll("input")[0];
      const password = wrapper.findAll("input")[1];

      username.setValue("loling");
      password.setValue("loling");

      wrapper.find("form").trigger("submit");

      expect($store.methods.onSubmit).toHaveBeenCalled();
    });
  });
});
