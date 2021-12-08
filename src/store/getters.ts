import router from "@/router";

const getters = {
  redirecLogin(): void {
    router.push("/login");
  },
};

export default getters;
