import axios from "axios";
import { ActionContext } from "vuex";
import { State, UserLogin, UserRegister } from "@/types/interface";

const urlOWN = process.env.VUE_APP_OWN_SERVER;

const actions = {
  async getProfile(
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
    localStorage.setItem("user", JSON.stringify(token));
    commit("loadUser", userData);
    commit("loginUser");
  },

  getToken({ dispatch }: ActionContext<State, State>) {
    const token = JSON.parse(localStorage.getItem("user") || "");
    dispatch("getProfile", token);
  },

  async loginUser(
    { commit, dispatch }: ActionContext<State, State>,
    user: UserLogin
  ): Promise<void> {
    const { data: token } = await axios.post(`${urlOWN}user/login/`, user);
    dispatch("getProfile", token);
  },

  async registerUser(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { commit }: ActionContext<State, State>,
    user: UserRegister
  ): Promise<void> {
    const { data: userData } = await axios.post(
      `${urlOWN}user/register/`,
      user
    );
    localStorage.setItem("user", JSON.stringify(userData));
  },
};

export default actions;
