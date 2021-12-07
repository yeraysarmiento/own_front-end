import { Commit, Dispatch } from "vuex";
import axios from "axios";
import actions from "@/store/actions";
import {
  configActionContext,
  configActionContextDispatch,
  configActionContextAndDispatch,
} from "../../tests/test.utils";

import { Board, Paper, User, UserLogin, UserRegister } from "@/types/interface";
import router from "@/router";

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

describe("Given a deleteBoardAction action", () => {
  describe("When is invoked with an id", () => {
    test("Then it should call commit 'DELETE_BOARD' with the id", async () => {
      const idBoard = "idBoard";
      JSON.parse = jest.fn().mockResolvedValue("password");
      mockedAxios.delete.mockResolvedValue({});

      await actions.deleteBoardAction(configActionContext(commit), idBoard);

      expect(commit).toHaveBeenCalledWith("START_LOADING");
      expect(commit).toHaveBeenCalledWith("DELETE_BOARD", idBoard);
      expect(commit).toHaveBeenCalledWith("STOP_LOADING");
    });
  });
});

describe("Given a loadCurrentBoardAction action", () => {
  describe("When is invoked with a board id", () => {
    test("Then it should call commit 'LOAD_CURRENT_BOARD'", async () => {
      JSON.parse = jest.fn().mockResolvedValue("password");
      const idBoard = "randomId";
      const currentBoard = {} as Board;
      mockedAxios.get.mockResolvedValue({ data: currentBoard });

      await actions.loadCurrentBoardAction(
        configActionContext(commit),
        idBoard
      );

      expect(commit).toHaveBeenCalledWith("START_LOADING");
      expect(commit).toHaveBeenCalledWith("LOAD_CURRENT_BOARD", currentBoard);
      expect(commit).toHaveBeenCalledWith("STOP_LOADING");
    });
  });
  describe("When is invoked with a not valid id", () => {
    test("Then it should call dispatch with 'notFoundPage'", async () => {
      JSON.parse = jest.fn().mockResolvedValue("password");
      const idBoard = "wrongId";
      mockedAxios.get.mockRejectedValue({});

      await actions.loadCurrentBoardAction(
        configActionContextAndDispatch(commit, dispatch),
        idBoard
      );

      expect(commit).toHaveBeenCalledWith("START_LOADING");
      expect(dispatch).toHaveBeenCalledWith("showNotFoundPageAction");
      expect(commit).toHaveBeenCalledWith("STOP_LOADING");
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

  describe("When is invoked with a not valid name", () => {
    test("Then it should call commit with 'showNotFoundPageAction'", async () => {
      const currentBoard = {} as Board;
      mockedAxios.get.mockRejectedValue({});
      const id = "id";

      await actions.loadBoardByNameAction(
        configActionContextAndDispatch(commit, dispatch),
        id
      );

      expect(dispatch).toHaveBeenCalledWith("showNotFoundPageAction");
      expect(commit).toHaveBeenCalledWith("STOP_LOADING");
    });
  });
});

describe("Given a loadCurrentPaperAction", () => {
  describe("When it receives a paper", () => {
    test("Then it should call commit with START, STOP and LOAD_CURRENT_PAPER with the paper", async () => {
      const currentPaper = {} as Paper;

      await actions.loadCurrentPaperAction(
        configActionContext(commit),
        currentPaper
      );

      expect(commit).toHaveBeenCalledWith("START_LOADING");
      expect(commit).toHaveBeenCalledWith("LOAD_CURRENT_PAPER", currentPaper);
      expect(commit).toHaveBeenCalledWith("STOP_LOADING");
    });
  });
});

describe("Given a deletePaperAction", () => {
  describe("When it receives an id", () => {
    test("Then it should invoke commit 'DELETE_PAPER' with the id", async () => {
      const idPaper = "idPaper";
      JSON.parse = jest.fn().mockResolvedValue("password");
      mockedAxios.delete.mockResolvedValue({});

      await actions.deletePaperAction(configActionContext(commit), idPaper);

      expect(commit).toHaveBeenCalledWith("START_LOADING");
      expect(commit).toHaveBeenCalledWith("DELETE_PAPER", idPaper);
      expect(commit).toHaveBeenCalledWith("STOP_LOADING");
    });
  });
});

describe("Given a filterPapersAction", () => {
  describe("When it receives an idBoard and a type", () => {
    test("Then it should invoke commit 'FILTER_PAPERS' with the filteredPapers", async () => {
      const idBoard = "idBoard";
      const type = "Architecture";
      const filteredPapers = [{}, {}] as Array<Paper>;

      mockedAxios.get.mockResolvedValue({ data: filteredPapers });

      await actions.filterPapersAction(configActionContext(commit), {
        idBoard,
        type,
      });

      expect(commit).toHaveBeenCalledWith("START_LOADING");
      expect(commit).toHaveBeenCalledWith("FILTER_PAPERS", filteredPapers);
      expect(commit).toHaveBeenCalledWith("STOP_LOADING");
    });
  });
});

describe("Given a createPaperAction", () => {
  describe("When it receives an idBoard and a paper", () => {
    test("Then it should invoke commit 'CREATE_PAPER' with the paper", async () => {
      JSON.parse = jest.fn().mockResolvedValue("password");
      const idBoard = "idBoard";
      const paper = {} as Paper;
      const createdPaper = { id: "1" } as Paper;

      mockedAxios.post.mockResolvedValue({ data: createdPaper });

      await actions.createPaperAction(configActionContext(commit), {
        idBoard,
        paper,
      });

      expect(commit).toHaveBeenCalledWith("START_LOADING");
      expect(commit).toHaveBeenCalledWith("CREATE_PAPER", createdPaper);
      expect(commit).toHaveBeenCalledWith("STOP_LOADING");
    });
  });
});

describe("Given a editPaperAction", () => {
  describe("When it receives an idPaper and the new Paper", () => {
    test("Then it should invoke commit 'EDIT_PAPER' with the edited paper", async () => {
      JSON.parse = jest.fn().mockResolvedValue("password");
      const idPaper = "idPaper";
      const paper = {} as Paper;
      const editedPaper = {} as Paper;

      mockedAxios.put.mockResolvedValue({ data: editedPaper });

      await actions.editPaperAction(configActionContext(commit), {
        idPaper,
        paper,
      });

      expect(commit).toHaveBeenCalledWith("START_LOADING");
      expect(commit).toHaveBeenCalledWith("EDIT_PAPER", editedPaper);
      expect(commit).toHaveBeenCalledWith("STOP_LOADING");
    });
  });
});

describe("Given a getSinglePaperAction", () => {
  describe("When it receives a valid idBoard and a valid idPaper", () => {
    test("Then it should invoke dispatch 'loadCurrentPaperAction' with the singlePaper", async () => {
      const idBoard = "idBoard";
      const idPaper = "idPaper";
      const singlePaper = [{ id: "1" }, { id: "2" }] as Array<Paper>;
      mockedAxios.get.mockResolvedValue({ data: singlePaper });

      await actions.getSinglePaperAction(
        configActionContextAndDispatch(commit, dispatch),
        {
          idBoard,
          idPaper,
        }
      );

      expect(commit).toHaveBeenCalledWith("START_LOADING");
      expect(dispatch).toHaveBeenCalledWith(
        "loadCurrentPaperAction",
        singlePaper[0]
      );
      expect(commit).toHaveBeenCalledWith("STOP_LOADING");
    });
  });
  describe("When it receives a valid idBoard and a valid idPaper", () => {
    test("Then it should invoke dispatch 'loadCurrentPaperAction' with the singlePaper", async () => {
      const idBoard = "idBoard";
      const idPaper = "idPaper";
      mockedAxios.get.mockRejectedValue({});

      await actions.getSinglePaperAction(
        configActionContextAndDispatch(commit, dispatch),
        {
          idBoard,
          idPaper,
        }
      );

      expect(dispatch).toHaveBeenCalledWith("showNotFoundPageAction");
      expect(commit).toHaveBeenCalledWith("STOP_LOADING");
    });
  });
});

describe("Given a showNotFoundPageAction", () => {
  describe("When it is invoked", () => {
    test("Then it should route to /notfound", async () => {
      router.push = jest.fn();
      await actions.showNotFoundPageAction(configActionContext(commit));

      expect(router.push).toHaveBeenCalledWith("/notfound");
    });
  });
});

describe("Given a editTrue action", () => {
  describe("When it is invoked", () => {
    test("Then it should commit 'EDIT_TRUE'", async () => {
      await actions.editTrue(configActionContext(commit));

      expect(commit).toHaveBeenCalledWith("EDIT_TRUE");
    });
  });
});
