import { Board, State, User } from "@/types/interface";

const mutations = {
  loadUser(state: State, payload: User): void {
    state.currentUser = payload;
  },
  loginUser(state: State): void {
    state.isAuthenticated = true;
  },
  logoutUser(state: any): void {
    state.isAuthenticated = false;
    state.currentUser = {};
  },
  loadBoards(state: State, payload: Array<Board>): void {
    state.boards = payload;
  },
  addBoard(state: State, payload: Board): void {
    state.boards = [...state.boards, payload];
  },
};

export default mutations;
