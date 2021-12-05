import { Board, State, User } from "@/types/interface";

const mutations = {
  LOAD_USER(state: State, payload: User): void {
    state.currentUser = payload;
  },
  LOGIN_USER(state: State): void {
    state.isAuthenticated = true;
  },
  LOGOUT_USER(state: State): void {
    state.isAuthenticated = false;
    state.currentUser = {} as User;
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
  START_LOADING(state: State): void {
    state.isLoading = true;
  },
  STOP_LOADING(state: State): void {
    state.isLoading = false;
  },
};

export default mutations;
