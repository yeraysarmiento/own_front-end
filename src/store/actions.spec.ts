import { Commit, Dispatch } from "vuex";
import axios from "axios";
import actions from "@/store/actions";
import {
  configActionContext,
  configActionContextDispatch,
  configActionContextAndDispatch,
} from "../../tests/test.utils";

import { Board, User, UserLogin, UserRegister } from "@/types/interface";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
const commit = jest.fn() as jest.MockedFunction<Commit>;
const dispatch = jest.fn() as jest.MockedFunction<Dispatch>;

describe("Given a getProfileAction action", () => {
  describe("When is invoked with a token", () => {
    test("FetThen it should commit the mutation 'LOAD_USER'", async () => {
      mockedAxios.get.mockResolvedValue({
        data: [],
      });
      const userData = {} as User;

      await actions.getProfileAction(configActionContext(commit), "token");

      expect(commit).toHaveBeenCalledWith("LOAD_USER", userData);
    });
  });
});

describe("Given a getTokenAction action", () => {
  describe("When is invoked", () => {
    test("Then it should dispatch its mutation", async () => {
      mockedAxios.post.mockResolvedValue({
        data: [],
      });

      JSON.parse = jest.fn().mockResolvedValue({});

      await actions.getTokenAction(configActionContextDispatch(dispatch));

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loginUserAction action", () => {
  describe("When is invoked with an user", () => {
    test("Then it should call a dispatch and a commit", async () => {
      mockedAxios.post.mockResolvedValue({
        data: [],
      });
      const user = {} as User;

      await actions.loginUserAction(
        configActionContextAndDispatch(commit, dispatch),
        user
      );

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a logoutUserAction action", () => {
  describe("When is invoked", () => {
    test("Then it should call a commit with 'LOGOUT_USER'", async () => {
      await actions.logoutUserAction(configActionContext(commit));

      expect(commit).toHaveBeenCalledWith("LOGOUT_USER");
    });
  });
});

describe("Given a registerUserAction action", () => {
  describe("When is invoked with an user", () => {
    test("Then it should call a dispatch with 'loginUserAction' and a user", async () => {
      mockedAxios.post.mockResolvedValue({
        data: [],
      });
      const userLogin = {} as UserLogin;
      const userRegister = {} as UserRegister;

      await actions.registerUserAction(
        configActionContextAndDispatch(commit, dispatch),
        userRegister
      );

      expect(dispatch).toHaveBeenCalledWith("loginUserAction", userLogin);
    });
  });
});

describe("Given a createBoardAction action", () => {
  describe("When is invoked with a board", () => {
    test("Then it should call commit", async () => {
      mockedAxios.post.mockResolvedValue({
        data: [],
      });

      const board = {} as Board;

      await actions.createBoardAction(
        configActionContextDispatch(dispatch),
        board
      );

      expect(dispatch).toHaveBeenCalledWith("loginUserAction", {
        password: undefined,
        username: undefined,
      });
    });
  });
});

describe("Given a loadCurrentBoardAction action", () => {
  describe("When is invoked with an id", () => {
    test("Then it should call commit with 'LOAD_CURRENT_BOARD' and a board", async () => {
      const currentBoard = {} as Board;
      mockedAxios.get.mockResolvedValue({
        data: currentBoard,
      });

      const id = "id";

      await actions.loadCurrentBoardAction(configActionContext(commit), id);

      expect(commit).toHaveBeenCalledWith("LOAD_CURRENT_BOARD", currentBoard);
    });
  });
});

describe("Given a loadBoardByNameAction action", () => {
  describe("When is invoked with a valid name", () => {
    test("Then it should call commit with 'LOAD_CURRENT_BOARD' and a board", async () => {
      const currentBoard = {} as Board;
      mockedAxios.get.mockResolvedValue({
        data: currentBoard,
      });

      const id = "id";

      await actions.loadBoardByNameAction(configActionContext(commit), id);

      expect(commit).toHaveBeenCalledWith("LOAD_CURRENT_BOARD", currentBoard);
    });
  });
});
