const state = {
  currentUser: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "",
  boards: [],
  posts: [],
};

export default state;
