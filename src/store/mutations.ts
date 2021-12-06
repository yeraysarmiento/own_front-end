import { Board, Paper, State, User } from "@/types/interface";

const mutations = {
  START_LOADING(state: State): void {
    state.isLoading = true;
  },
  STOP_LOADING(state: State): void {
    state.isLoading = false;
  },

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
  DELETE_BOARD(state: State, payload: string): void {
    state.boards = state.boards.filter((board: Board) => board.id !== payload);
  },

  LOAD_CURRENT_PAPER(state: State, payload: Paper): void {
    state.currentPaper = payload;
  },
  DELETE_PAPER(state: State, payload: string): void {
    state.currentBoard.papers = state.currentBoard.papers.filter(
      (paper: Paper) => paper.id !== payload
    );
  },
  FILTER_PAPERS(state: State, payload: Array<Paper>): void {
    state.currentBoard.papers = payload;
  },
  CREATE_PAPER(state: State, payload: Paper): void {
    state.currentBoard.papers = [...state.currentBoard.papers, payload];
  },

  EDIT_TRUE(state: State): void {
    state.isEditing = true;
  },
};

export default mutations;
