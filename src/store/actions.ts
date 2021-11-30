import axios from "axios";
import { ActionContext } from "vuex";
import { State, UserLogin, UserRegister } from "@/types/interface";

const urlOWN = process.env.VUE_APP_OWN_SERVER;

const actions = {
  async loginUser(
    { commit }: ActionContext<State, State>,
    user: UserLogin
  ): Promise<void> {
    const { data: token } = await axios.post(`${urlOWN}user/login/`, user);
    const { data: allData } = await axios.get(`${urlOWN}user`, {
      headers: { Authorization: `Bearer ${token.user}` },
    });
    const userData = {
      id: allData.id,
      username: allData.username,
      email: allData.email,
      boards: allData.boards,
    };
    localStorage.setItem("user", JSON.stringify(token));
    commit("loadUser", userData);
  },

  async registerUser(
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
