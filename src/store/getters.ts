import router from "@/router";
import { State } from "@/types/interface";

const getters = {
  redirectHome(): void {
    router.push("/home");
  },
  redirectLogin(): void {
    router.push("/login");
  },
  redirectDesk(): void {
    router.push("/desk");
  },
  redirectNotFound(): void {
    router.push("/notfound");
  },
  redirectBoard(state: State): void {
    router.push(`/${state.currentBoard.name.toLowerCase()}`);
  },
};

export default getters;
