const mutations = {
    loadUser(state, payload) {
        state.currentUser = payload;
    },
    loginUser(state) {
        state.isAuthenticated = true;
    },
    logoutUser(state) {
        state.isAuthenticated = false;
        state.currentUser = {};
    },
    loadBoards(state, payload) {
        state.boards = payload;
    },
};
export default mutations;
//# sourceMappingURL=mutations.js.map