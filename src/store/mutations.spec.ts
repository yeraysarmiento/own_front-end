import { Board, Paper, State, User } from "@/types/interface";
import mockedState from "../../tests/mockedState";
import mutations from "./mutations";

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
  describe("When DELETE_BOARD is invoked with an state and a board id", () => {
    test("Then it should delete the board with that id from boards", () => {
      const state: State = mockedState;
      state.currentBoard = {
        id: 3,
        name: "Amallective",
        about: "About me",
        email: "amallective@gmail.com",
        logo: "urlImage",
        category: "Architecture",
        social: {
          instagram: "instagram",
          twitter: "twitter",
          facebook: "facebook",
        },
        papers: [
          {
            id: "61a28e71454f1d8b8fc54b64",
            title: "Multi-Family building",
            author: "datAE",
            year: 2021,
            published: false,
            type: "Architecture",
            location: "Sant Pere de Ribes, Spain",
            photograph: "Adrià Goula",
            text: "How to integrate a 20-dwelling multi-family building within the old town of Sant Pere de Ribes?\n\nThe project establishes a structural strategy based on load-bearing walls, achieving the integration of the building within the traditional architectures of the historic centre. The structure sets the spatial conditions of the project generating an interior space based on room sequences and defining the shape of the façade. In this sense, orthogonal lintelled windows are used for rooms and arches working under compression for exterior porches, as in the intermediate spaces that characterize the old town.\n\nOn the ground floor, porches allow privacy control between the living rooms and the street, granting direct access to the dwellings without using the staircase. Inside, a naturalized patio creates a collective space achieving quality ground floor dwellings. The finishing of the building is an uncoloured lime mortar where white provides urban mimesis without giving up the depth and chromatic variations of a traditional material, with a slow and 100% manual execution.\n\nIt is a sincere and affordable construction (less than €1,000/m2) that solves the corner through two separate volumes, linked by a connecting walkway. The project organises 20 private rental dwellings of 60m2 around two staircases, combining three typologies: a three-room cross-ventilated house, a one-room house and a two-room duplex on the roof.",
            images: [
              "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043231890.jpg",
              "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043233243.jpg",
              "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043233473.jpg",
              "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043234351.png",
              "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043241837.png",
            ],
            deleted: false,
          },
          {
            id: "61a371ffe0abb2828c0bd395",
            title: "Casa Ter",
            author: "MESURA",
            year: 2021,
            published: false,
            type: "Architecture",
            location: "Baix Empordà, Spain",
            photograph: "Salva Lopez",
            text: 'Casa Ter is located in Baix Empordà, an area that functions as an intersection between three natural landscapes: sea, mountain, and field. In order to make this context tangible to its users, the home is made out of two volumes which create three different spaces, each branching out towards one of the surrounding landscapes, touching as little of the natural surroundings as possible.\n\nFollowing the local construction traditions of the region, the walls of Casa Ter are composed of KM0 materials, using a mix of concrete and stones from the local river Ter with ceramics, a material with a long cultural tradition in the neighbouring La Bisbal, where the material makes for one of the main economic activities.\n\nA Mediterranean way of living means living outdoors a lot, due to the pleasant climate throughout the year. In Spain, it’s not uncommon to have an outdoor kitchen or living area, where people spend most of their days together. Ideally, these areas are very connected to the inside of the home, extending the living space, and creating ambiguous spaces, in between indoor and outdoor."',
            images: [
              "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-CasaTer-1638101502602.jpg",
              "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-CasaTer-1638101502737.jpg",
              "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-CasaTer-1638101502745.jpg",
              "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-CasaTer-1638101502781.png",
              "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-CasaTer-1638101502882.png",
            ],
            deleted: false,
          },
        ],
      };
      const payload = "randomId";
      const boardToDelete = { id: payload } as Board;

      mutations.DELETE_BOARD(state, payload);

      expect(state.boards).not.toContainEqual(boardToDelete);
    });
  });
});

describe("Given a mutations object", () => {
  describe("When LOAD_CURRENT_PAPER is invoked with an state and a paper", () => {
    test("Then it should set currentPaper to the payload", () => {
      const state: State = mockedState;
      const payload = {} as Paper;

      mutations.LOAD_CURRENT_PAPER(state, payload);

      expect(state.currentPaper).not.toContainEqual(payload);
    });
  });
});

describe("Given a mutations object", () => {
  describe("When DELETE_PAPER is invoked with an state and a paper id", () => {
    test("Then it should delete the paper with that id from currentBoard", () => {
      const state: State = mockedState;
      const payload = "61a28e71454f1d8b8fc54b64";
      const paperToDelete = {
        id: "61a28e71454f1d8b8fc54b64",
        title: "Multi-Family building",
        author: "datAE",
        year: 2021,
        published: false,
        type: "Architecture",
        location: "Sant Pere de Ribes, Spain",
        photograph: "Adrià Goula",
        text: "How to integrate a 20-dwelling multi-family building within the old town of Sant Pere de Ribes?\n\nThe project establishes a structural strategy based on load-bearing walls, achieving the integration of the building within the traditional architectures of the historic centre. The structure sets the spatial conditions of the project generating an interior space based on room sequences and defining the shape of the façade. In this sense, orthogonal lintelled windows are used for rooms and arches working under compression for exterior porches, as in the intermediate spaces that characterize the old town.\n\nOn the ground floor, porches allow privacy control between the living rooms and the street, granting direct access to the dwellings without using the staircase. Inside, a naturalized patio creates a collective space achieving quality ground floor dwellings. The finishing of the building is an uncoloured lime mortar where white provides urban mimesis without giving up the depth and chromatic variations of a traditional material, with a slow and 100% manual execution.\n\nIt is a sincere and affordable construction (less than €1,000/m2) that solves the corner through two separate volumes, linked by a connecting walkway. The project organises 20 private rental dwellings of 60m2 around two staircases, combining three typologies: a three-room cross-ventilated house, a one-room house and a two-room duplex on the roof.",
        images: [
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043231890.jpg",
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043233243.jpg",
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043233473.jpg",
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043234351.png",
          "https://storage.googleapis.com/own-api-2c648.appspot.com/paper-Multi-Familybuilding-1638043241837.png",
        ],
        deleted: false,
        __v: 0,
      };

      mutations.DELETE_PAPER(state, payload);

      expect(state.currentBoard.papers).not.toContainEqual(paperToDelete);
    });
  });
});

describe("Given a mutations object", () => {
  describe("When FILTER_PAPERS is invoked with an state and an array of Papers", () => {
    test("Then it should set the currentBoard.papers as the Papers", () => {
      const state: State = mockedState;
      const payload = [{}, {}] as Array<Paper>;

      mutations.FILTER_PAPERS(state, payload);

      expect(state.currentBoard.papers).toEqual(payload);
    });
  });
});

describe("Given a mutations object", () => {
  describe("When CREATE_PAPER is invoked with an state and a new Paper", () => {
    test("Then it should set add the paper to currentBoard.papers", () => {
      const state: State = mockedState;
      const payload = {} as Paper;

      mutations.CREATE_PAPER(state, payload);

      expect(state.currentBoard.papers).toContainEqual(payload);
    });
  });
});

describe("Given a mutations object", () => {
  describe("When EDIT_PAPER is invoked with an state and a paper", () => {
    test("Then it should set add the paper to currentBoard.papers", () => {
      const state: State = mockedState;
      const payload = {} as Paper;

      mutations.EDIT_PAPER(state, payload);

      expect(state.currentBoard.papers).toContainEqual(payload);
    });
  });
});

describe("Given a mutations object", () => {
  describe("When EDIT_TRUE is invoked with an state", () => {
    test("Then it should set true the isEditing property", () => {
      const state: State = mockedState;

      mutations.EDIT_TRUE(state);

      expect(state.isEditing).toBe(true);
    });
  });
});
