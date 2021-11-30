import { State } from "@/types/interface";

const state = {
  currentUser: {},
  boards: [],
  papers: [],
  isAuthenticated: false,
};

export default state as unknown as State;
