import axios from "axios";
import { ActionContext } from "vuex";
import { State, UserLogin, UserRegister } from "@/types/interface";

const urlOWN = process.env.VUE_APP_OWN_SERVER;

const actions = {
  async loginUser(
    { commit }: ActionContext<State, State>,
    user: UserLogin
  ): Promise<void> {
    const { data: userData } = await axios.post(`${urlOWN}user/login/`, user);
    localStorage.setItem("user", JSON.stringify(userData));
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
    commit("loadUser", userData);
  },
};

export default actions;
