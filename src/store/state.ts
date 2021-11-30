import { State } from "@/types/interface";

const state = {
  boards: [],
  currentUser: {},
  currentBoard: {},
  isAuthenticated: false,
};

export default state as unknown as State;
