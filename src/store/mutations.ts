import { State, User } from "@/types/interface";

const mutations = {
  loadUser(state: State, payload: User): void {
    state.currentUser = payload;
  },
};

export default mutations;
