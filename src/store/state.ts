import { State } from "@/types/interface";

const state = {
  boards: [],
  currentUser: {},
  currentBoard: null,
  currentPaper: {},
  isAuthenticated: false,
  isLoading: false,
};

export default state as unknown as State;
