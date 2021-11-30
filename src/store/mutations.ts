const mutations = {
  loadUser(state: any, payload: any) {
    state.currentUser = payload;
  },
};

export default mutations;
