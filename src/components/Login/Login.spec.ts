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
      const store = createStore({
        state() {
          return state;
        },
        actions: { loginUserAction: jest.fn() },
      });

      await router.isReady();

      const wrapper = mount(Login, {
        global: {
          plugins: [router, store],
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

      const onSubmit = jest.fn();
      onSubmit();

      const usernameInput = wrapper.get("input[id='username'");
      const passwordInput = wrapper.get("input[id='password'");

      const form = wrapper.get("form");
      await usernameInput.setValue("loling");
      await passwordInput.setValue("loling");
      form.trigger("submit");
      expect(onSubmit).toHaveBeenCalled();
      expect(store.state.currentUser).toBeDefined();
    });
  });
});
