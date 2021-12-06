import axios from "axios";
import { ActionContext } from "vuex";
import {
  Board,
  State,
  UserLogin,
  UserRegister,
  Paper,
} from "@/types/interface";
import router from "@/router";

// const urlOWN = process.env.VUE_APP_OWN_SERVER;
const urlOWN = "http://localhost:5000/";

const actions = {
  async getProfileAction(
    { commit }: ActionContext<State, State>,
    token: string
  ): Promise<void> {
    commit("START_LOADING");
    const { data: allData } = await axios.get(`${urlOWN}user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const userData = {
      id: allData.id,
      username: allData.username,
      email: allData.email,
      boards: allData.boards,
    };

    commit("LOAD_USER", userData);
    commit("LOGIN_USER");
    commit("LOAD_BOARDS", userData.boards);
    commit("STOP_LOADING");
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
    commit("START_LOADING");
    const { data: token } = await axios.post(`${urlOWN}user/login/`, user);
    localStorage.setItem("user", JSON.stringify(token.user));
    dispatch("getProfileAction", token);
    commit("STOP_LOADING");
  },

  logoutUserAction({ commit }: ActionContext<State, State>): void {
    commit("START_LOADING");
    localStorage.removeItem("user");
    commit("LOGOUT_USER");
    commit("STOP_LOADING");
  },

  async registerUserAction(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { commit, dispatch }: ActionContext<State, State>,
    user: UserRegister
  ): Promise<void> {
    commit("START_LOADING");
    await axios.post(`${urlOWN}user/register/`, user);
    const userLogin = {
      username: user.username,
      password: user.password,
    };
    dispatch("loginUserAction", userLogin);
    commit("STOP_LOADING");
  },

  async createBoardAction(
    { commit }: ActionContext<State, State>,
    board: Board
  ): Promise<void> {
    commit("START_LOADING");
    const token = JSON.parse(localStorage.getItem("user") || "");
    const { data: newBoard } = await axios.post(`${urlOWN}board/new/`, board, {
      headers: { Authorization: `Bearer ${token}` },
    });
    commit("CREATE_BOARD", newBoard);
    commit("STOP_LOADING");
  },

  async deleteBoardAction(
    { commit }: ActionContext<State, State>,
    id: string
  ): Promise<void> {
    commit("START_LOADING");
    const token = JSON.parse(localStorage.getItem("user") || "");
    await axios.delete(`${urlOWN}board/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    commit("DELETE_BOARD", id);
    commit("STOP_LOADING");
  },

  async loadCurrentBoardAction(
    { commit }: ActionContext<State, State>,
    id: string
  ): Promise<void> {
    commit("START_LOADING");
    const token = JSON.parse(localStorage.getItem("user") || "");
    const { data: currentBoard } = await axios.get(`${urlOWN}board/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    commit("LOAD_CURRENT_BOARD", currentBoard);
    commit("STOP_LOADING");
  },

  async loadBoardByNameAction(
    { commit }: ActionContext<State, State>,
    name: string
  ): Promise<void> {
    commit("START_LOADING");
    try {
      const { data: currentBoard } = await axios.get(
        `${urlOWN}board/name/${name}`
      );
      commit("LOAD_CURRENT_BOARD", currentBoard);
    } catch {
      router.push("/notfound");
      commit("STOP_LOADING");
    }
    commit("STOP_LOADING");
  },

  loadCurrentPaperAction(
    { commit }: ActionContext<State, State>,
    paper: Paper
  ): void {
    commit("START_LOADING");
    commit("LOAD_CURRENT_PAPER", paper);
    commit("STOP_LOADING");
  },

  async deletePaperAction(
    { commit }: ActionContext<State, State>,
    id: string
  ): Promise<void> {
    commit("START_LOADING");
    const token = JSON.parse(localStorage.getItem("user") || "");
    await axios.delete(`${urlOWN}paper/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    commit("DELETE_PAPER", id);
    commit("STOP_LOADING");
  },

  async filterPapersAction(
    { commit }: ActionContext<State, State>,
    { idBoard, type }: any
  ): Promise<void> {
    commit("START_LOADING");
    console.log(
      `${urlOWN}paper/${idBoard}?filterby=type&filter=${type}&page=1&limit=30`
    );
    const { data: filteredPapers } = await axios.get(
      `${urlOWN}paper/${idBoard}?filterby=type&filter=${type}&page=1&limit=30`
    );
    commit("FILTER_PAPERS", filteredPapers);
    commit("STOP_LOADING");
  },

  async createPaperAction(
    { commit }: ActionContext<State, State>,
    paper: Paper
  ): Promise<void> {
    commit("START_LOADING");
    const token = JSON.parse(localStorage.getItem("user") || "");
    const { data: newPaper } = await axios.post(`${urlOWN}paper/new/`, paper, {
      headers: { Authorization: `Bearer ${token}` },
    });
    commit("CREATE_PAPER", newPaper);
    commit("STOP_LOADING");
  },
};

export default actions;
