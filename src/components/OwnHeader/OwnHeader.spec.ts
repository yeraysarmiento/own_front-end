import { mount } from "@vue/test-utils";
import OwnHeader from "@/components/OwnHeader/OwnHeader.vue";
import router from "@/router";
import state from "../../../tests/mockedState";

describe("Given an OwnMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a heading with 'own.' text", async () => {
      const title = "own.";
      const wrapper = await mount(OwnHeader, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
            },
          },
        },
      });

      expect(wrapper.text()).toContain(title);
    });
    test("Then it should render 2 li elements with 'Login' & 'Register", async () => {
      const registerText =
        '<li class="nav__element nav__element--register">Register</li>';
      // const loginText =
      //   '<li class="nav__element nav__element--login">Login</li>';
      const logoutText =
        '<li class="nav__element nav__element--logout"> Logout </li>';
      const wrapper = await mount(OwnHeader, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
            },
          },
        },
      });

      expect(wrapper.html()).toContain(logoutText);
      expect(wrapper.html()).toContain(registerText);
    });
  });
});
