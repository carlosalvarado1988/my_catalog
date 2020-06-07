import { reducerWithInitialState } from "typescript-fsa-reducers";
import { produce } from "immer";

import {
  submitLoginAction,
  submitSignInAction,
  submitSignOutAction,
} from "./../auth/actions";
import {
  submitLoginActionDone,
  submitLoginActionFailed,
  submitLoginActionStart,
  submitSignInActionStart,
  submitSignInActionDone,
  submitSignInActionFailed,
  submitSignOutActionStart,
  submitSignOutActionDone,
  submitSignOutActionFailed,
} from "./../auth/reducers";

/**
 * The root store state.
 */

export interface MutableStoreState {
  authorizing: boolean;
  loading: boolean;
  loggedIn: boolean;
}

export type StoreState = DeepReadonly<MutableStoreState>;

const INITIAL_STATE: StoreState = produce(
  {
    authorizing: false,
    loading: false,
    loggedIn: false,
  },
  (draft: MutableStoreState) => draft
);

export const reducer = reducerWithInitialState(INITIAL_STATE);

/**
 * Login reducers
 */
reducer.case(submitLoginAction.started, submitLoginActionStart);
reducer.case(submitLoginAction.done, submitLoginActionDone);
reducer.case(submitLoginAction.failed, submitLoginActionFailed);

/**
 * SignIn reducers
 */
reducer.case(submitSignInAction.started, submitSignInActionStart);
reducer.case(submitSignInAction.done, submitSignInActionDone);
reducer.case(submitSignInAction.failed, submitSignInActionFailed);

/**
 * SignOut reducers
 */
reducer.case(submitSignOutAction.started, submitSignOutActionStart);
reducer.case(submitSignOutAction.done, submitSignOutActionDone);
reducer.case(submitSignOutAction.failed, submitSignOutActionFailed);
