import { createStore } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
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
import state from "../../../tests/mockedState";

library.add(faChevronLeft);

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
      const loginUserAction = jest.fn();

      const store = createStore({
        state() {
          return state;
        },
        actions: {
          loginUserAction,
        },
        getters: {
          redirectDesk: jest.fn(),
        },
        mutations: {
          STOP_LOADING: jest.fn(),
        },
      });

      const $router = {
        push: jest.fn(),
      };
      const $route = {
        push: jest.fn(),
      };

      const wrapper = mount(Register, {
        global: {
          plugins: [router, store],
          mocks: {
            $route,
            $router,
          },
        },
        components: {
          "font-awesome-icon": FontAwesomeIcon,
        },
        stubs: ["router-link", "router-view", "FontAwesomeIcon"],
      });

      await router.isReady();

      const [username, email, password, repeatPassword] =
        wrapper.findAll("input");

      username.setValue("name");
      email.setValue("email@gmail.com");
      password.setValue("password");
      repeatPassword.setValue("password");

      await wrapper.find("form").trigger("submit.prevent");

      expect(wrapper.vm.$data.username).toBe("name");
      expect(wrapper.vm.$data.email).toBe("email@gmail.com");
      expect(wrapper.vm.$data.password).toBe("password");
      expect(wrapper.vm.$data.repeatPassword).toBe("password");
    });
  });
  describe("When the password are different filled and submit is clicked", () => {
    test("Then it should set isWrong to true", async () => {
      const loginUserAction = jest.fn();
      const registerUserAction = jest.fn();

      const store = createStore({
        state() {
          return state;
        },
        actions: {
          loginUserAction,
          registerUserAction,
        },
        getters: {
          redirectDesk: jest.fn(),
        },
        mutations: {
          STOP_LOADING: jest.fn(),
        },
      });

      const $router = {
        push: jest.fn(),
      };
      const $route = {
        push: jest.fn(),
      };

      const wrapper = mount(Register, {
        global: {
          plugins: [router, store],
          mocks: {
            $route,
            $router,
          },
        },
        components: {
          "font-awesome-icon": FontAwesomeIcon,
        },
        stubs: ["router-link", "router-view", "FontAwesomeIcon"],
      });

      await router.isReady();

      const [username, email, password, repeatPassword] =
        wrapper.findAll("input");

      username.setValue("name");
      email.setValue("email");
      password.setValue("wrongpassword");
      repeatPassword.setValue("password");

      await wrapper.find("form").trigger("submit.prevent");

      expect(wrapper.vm.$data.isWrong).toBe(true);
    });
  });
  describe("When the email has not email format and submit is clicked", () => {
    test("Then it set isWrongEmail to true", async () => {
      const loginUserAction = jest.fn();
      const registerUserAction = jest.fn();

      const store = createStore({
        state() {
          return state;
        },
        actions: {
          loginUserAction,
          registerUserAction,
        },
        getters: {
          redirectDesk: jest.fn(),
        },
        mutations: {
          STOP_LOADING: jest.fn(),
        },
      });

      const $router = {
        push: jest.fn(),
      };
      const $route = {
        push: jest.fn(),
      };

      const wrapper = mount(Register, {
        global: {
          plugins: [router, store],
          mocks: {
            $route,
            $router,
          },
        },
        components: {
          "font-awesome-icon": FontAwesomeIcon,
        },
        stubs: ["router-link", "router-view", "FontAwesomeIcon"],
      });

      await router.isReady();

      const [username, email, password, repeatPassword] =
        wrapper.findAll("input");

      username.setValue("name");
      email.setValue("email");
      password.setValue("password");
      repeatPassword.setValue("password");

      await wrapper.find("form").trigger("submit.prevent");

      expect(wrapper.vm.$data.isWrongEmail).toBe(true);
    });
  });
  describe("When the request register send an error", () => {
    test("Then should set isWrong to true and call STOP_LOADING", async () => {
      const loginUserAction = jest.fn();
      const registerUserAction = jest.fn().mockRejectedValue({});
      const STOP_LOADING = jest.fn();

      const store = createStore({
        state() {
          return state;
        },
        actions: {
          loginUserAction,
          registerUserAction,
        },
        getters: {
          redirectDesk: jest.fn(),
        },
        mutations: {
          STOP_LOADING,
        },
      });

      const $router = {
        push: jest.fn(),
      };
      const $route = {
        push: jest.fn(),
      };

      const wrapper = mount(Register, {
        global: {
          plugins: [router, store],
          mocks: {
            $route,
            $router,
          },
        },
        components: {
          "font-awesome-icon": FontAwesomeIcon,
        },
        stubs: ["router-link", "router-view", "FontAwesomeIcon"],
      });

      await router.isReady();

      const [username, email, password, repeatPassword] =
        wrapper.findAll("input");

      username.setValue("name");
      email.setValue("email");
      password.setValue("password");
      repeatPassword.setValue("password");

      await wrapper.find("form").trigger("submit.prevent");

      expect(wrapper.vm.$data.isWrong).toBe(true);
      expect(STOP_LOADING).toHaveBeenCalled();
    });
  });
});
