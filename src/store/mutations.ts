import { User } from "@/types/interface";

const mutations = {
  loadUser(state: any, payload: User): void {
    state.currentUser = payload;
  },
};

export default mutations;
