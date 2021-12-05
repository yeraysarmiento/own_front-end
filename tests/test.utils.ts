import { Commit, Dispatch } from "vuex";
import { State } from "../src/types/interface";

const configActionContextAndDispatch = (
  commit: Commit,
  dispatch: Dispatch
): any => ({
  commit,
  dispatch,
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

const configActionContext = (commit: Commit): any => ({
  commit,
  dispatch: jest.fn(),
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

const configActionContextDispatch = (dispatch: Dispatch): any => ({
  commit: jest.fn(),
  dispatch,
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

export {
  configActionContext,
  configActionContextAndDispatch,
  configActionContextDispatch,
};
