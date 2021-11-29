import { shallowMount } from "@vue/test-utils";
import OwnHeader from "@/components/OwnHeader/OwnHeader.vue";

describe("Given an OwnMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a heading with 'own.' text", () => {
      const title = "own.";
      const wrapper = shallowMount(OwnHeader);

      expect(wrapper.text()).toContain(title);
    });
    test("Then it should render 2 li elements with 'Login' & 'Register", () => {
      const loginText = "Login";
      const registerText = "Register";
      const wrapper = shallowMount(OwnHeader);

      expect(wrapper.find("ul li:nth-of-type(2)").text()).toBe(loginText);
      expect(wrapper.find("ul li:nth-of-type(1)").text()).toBe(registerText);
    });
  });
});
