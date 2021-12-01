import axios from "axios";
import router from "@/router";
const urlOWN = process.env.VUE_APP_OWN_SERVER;
const actions = {
    async getProfile({ commit }, token) {
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
    getToken({ dispatch }) {
        const token = JSON.parse(localStorage.getItem("user") || "");
        dispatch("getProfile", token);
    },
    async loginUser(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { commit, dispatch }, user) {
        const { data: token } = await axios.post(`${urlOWN}user/login/`, user);
        localStorage.setItem("user", JSON.stringify(token.user));
        dispatch("getProfile", token);
    },
    logoutUser({ commit }) {
        router.push("/home");
        localStorage.removeItem("user");
        commit("logoutUser");
    },
    async registerUser(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { commit, dispatch }, user) {
        await axios.post(`${urlOWN}user/register/`, user);
        const userLogin = {
            username: user.username,
            password: user.password,
        };
        dispatch("loginUser", userLogin);
    },
};
export default actions;
//# sourceMappingURL=actions.js.map