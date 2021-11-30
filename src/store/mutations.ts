import { State, User } from "@/types/interface";

const mutations = {
  loadUser(state: State, payload: User): void {
    state.currentUser = payload;
  },
  loginUser(state: any): void {
    state.isAuthenticated = true;
  },
  logoutUser(state: any): void {
    state.isAuthenticated = false;
  },
};

export default mutations;
