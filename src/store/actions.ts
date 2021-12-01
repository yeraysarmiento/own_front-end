import axios from "axios";
import { ActionContext } from "vuex";
import { State, UserLogin, UserRegister } from "@/types/interface";
import router from "@/router";

const urlOWN = process.env.VUE_APP_OWN_SERVER;

const actions = {
  async getProfileAction(
    { commit }: ActionContext<State, State>,
    token: UserLogin
  ): Promise<void> {
    const { data: allData } = await axios.get(`${urlOWN}user`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const userData = {
      id: allData.id,
      username: allData.username,
      email: allData.email,
      boards: allData.boards,
    };

    commit("loadUser", userData);
    commit("loginUser");
    commit("loadBoards", userData.boards);
  },

  getTokenAction({ dispatch }: ActionContext<State, State>): void {
    const token = JSON.parse(localStorage.getItem("user") || "");
    dispatch("getProfileAction", token);
  },

  async loginUserAction(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { commit, dispatch }: ActionContext<State, State>,
    user: UserLogin
  ): Promise<void> {
    const { data: token } = await axios.post(`${urlOWN}user/login/`, user);
    localStorage.setItem("user", JSON.stringify(token.user));
    dispatch("getProfileAction", token);
  },

  logoutUserAction({ commit }: ActionContext<State, State>): void {
    router.push("/home");
    localStorage.removeItem("user");
    commit("logoutUser");
  },

  async registerUserAction(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { commit, dispatch }: ActionContext<State, State>,
    user: UserRegister
  ): Promise<void> {
    await axios.post(`${urlOWN}user/register/`, user);
    const userLogin = {
      username: user.username,
      password: user.password,
    };
    dispatch("loginUserAction", userLogin);
  },
};

export default actions;
