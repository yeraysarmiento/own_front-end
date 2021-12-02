import { mount } from "@vue/test-utils";
import router from "@/router";
import Login from "./Login.vue";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";

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
        stubs: ["router-link", "router-view"],
      });

      expect(wrapper.html()).toContain(password);
      expect(wrapper.html()).toContain(username);
      expect(wrapper.html()).toContain(button);
    });
  });
  describe("When the fields are not filled", () => {
    test("Then it should show a disabled submit button", () => {
      const wrapper = mount(Login, {
        global: {
          plugins: [router],
        },
        stubs: ["router-link", "router-view"],
      });

      const button = wrapper.find("button");

      expect(button).toHaveProperty("isDisabled");
    });
  });
});
