import axios from "axios";

const urlOWN = process.env.VUE_APP_OWN_SERVER;

const actions = {
  async loginUser({ commit }: any, user: any) {
    const { data: userData } = await axios.post(`${urlOWN}user/login/`, user);
    localStorage.setItem("user", JSON.stringify(userData));
    commit("loadUser", userData);
  },
};

export default actions;
