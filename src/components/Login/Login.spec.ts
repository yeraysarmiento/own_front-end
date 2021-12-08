import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "@/router";
import Login from "./Login.vue";
import state from "../../../tests/mockedState";

library.add(faChevronLeft);

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
    test("Then it should show a disabled submit button", async () => {
      const wrapper = await mount(Login, {
        global: {
          plugins: [router],
        },
        components: {
          "font-awesome-icon": FontAwesomeIcon,
        },
        methods: {
          onSubmit: jest.fn(),
          checkForm: jest.fn(),
        },
        stubs: ["router-link", "router-view", "FontAwesomeIcon"],
      });

      const button = wrapper.find("button");

      expect(button).toHaveProperty("isDisabled");
    });
  });
  describe("When the fields are filled and click on submit", () => {
    test("Then it should call the ", async () => {
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

      await router.isReady();

      const wrapper = mount(Login, {
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

      const [inputName, inputPassword] = wrapper.findAll("input");

      inputName.setValue("name");
      inputPassword.setValue("password");
      await wrapper.find("form").trigger("submit.prevent");

      expect(wrapper.vm.$data.username).toBe("name");
      expect(wrapper.vm.$data.password).toBe("password");

      expect(wrapper.vm.$data.isWrong).toBe(false);
      expect(wrapper.vm.$data.isDisabled).toBe(false);
      expect(store.state.currentUser).toBeDefined();
      expect(loginUserAction).toHaveBeenCalled();
    });
  });
});
