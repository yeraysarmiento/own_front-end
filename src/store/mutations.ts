import { Board, Paper, State, User } from "@/types/interface";

const mutations = {
  LOAD_USER(state: State, payload: User): void {
    state.currentUser = payload;
  },
  LOGIN_USER(state: State): void {
    state.isAuthenticated = true;
  },
  LOGOUT_USER(state: any): void {
    state.isAuthenticated = false;
    state.currentUser = {};
  },
  LOAD_BOARDS(state: State, payload: Array<Board>): void {
    state.boards = payload;
  },
  CREATE_BOARD(state: State, payload: Board): void {
    state.boards = [...state.boards, payload];
  },
  LOAD_CURRENT_BOARD(state: State, payload: Board): void {
    state.currentBoard = payload;
  },
};

export default mutations;
