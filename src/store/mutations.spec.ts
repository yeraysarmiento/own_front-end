import { Board, State, User } from "@/types/interface";
import mockedState from "../../tests/mockedState";
import mutations from "./mutations";

describe("Given a mutations object", () => {
  describe("When LOAD_USER is invoked with an state and a payload type User", () => {
    test("Then it should change currentUser equal as the payload", () => {
      const state: State = mockedState;
      const payload = {} as User;

      mutations.LOAD_USER(state, payload);

      expect(state.currentUser).toEqual(payload);
    });
  });
});

describe("Given a mutations object", () => {
  describe("When LOGIN_USER is invoked with an state", () => {
    test("Then it should change isAuthenticated to true", () => {
      const state: State = mockedState;

      mutations.LOGIN_USER(state);

      expect(state.isAuthenticated).toBe(true);
    });
  });
});

describe("Given a mutations object", () => {
  describe("When LOGOUT_USER is invoked with an state", () => {
    test("Then it should change isAuthenticated to false", () => {
      const state: State = mockedState;

      mutations.LOGOUT_USER(state);

      expect(state.isAuthenticated).toBe(false);
    });
  });
});

describe("Given a mutations object", () => {
  describe("When LOAD_BOARDS is invoked with an state and boards", () => {
    test("Then it should set boards to the boards in payload", () => {
      const state: State = mockedState;
      const payload: Array<Board> = [] as Array<Board>;

      mutations.LOAD_BOARDS(state, payload);

      expect(state.boards).toEqual(payload);
    });
  });
});

describe("Given a mutations object", () => {
  describe("When CREATE_BOARDS is invoked with an state and a new board", () => {
    test("Then it should set boards to the boards plus the new one", () => {
      const state: State = mockedState;
      const payload: Board = {} as Board;

      mutations.CREATE_BOARD(state, payload);

      expect(state.boards).toContainEqual(payload);
    });
  });
});

describe("Given a mutations object", () => {
  describe("When LOAD_CURRENT_BOARD is invoked with an state and a board", () => {
    test("Then it should set currentBoard with the one in payload", () => {
      const state: State = mockedState;
      const payload: Board = {} as Board;

      mutations.LOAD_CURRENT_BOARD(state, payload);

      expect(state.currentBoard).toEqual(payload);
    });
  });
});

describe("Given a mutations object", () => {
  describe("When START_LOADING is invoked with an state", () => {
    test("Then it should set isLoading to true", () => {
      const state: State = mockedState;

      mutations.START_LOADING(state);

      expect(state.isLoading).toBe(true);
    });
  });
});

describe("Given a mutations object", () => {
  describe("When STOP_LOADING is invoked with an state", () => {
    test("Then it should set isLoading to false", () => {
      const state: State = mockedState;

      mutations.STOP_LOADING(state);

      expect(state.isLoading).toBe(false);
    });
  });
});
