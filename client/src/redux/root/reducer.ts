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

import { getBusinessAction } from "../business/actions";
import {
  getBusinessActionStart,
  getBusinessActionDone,
  getBusinessActionFailed,
} from "../business/reducer";

/**
 * The root store state.
 */

export interface MutableStoreState {
  loadingBusiness: boolean;
  loading: boolean;
  loggedIn: boolean;
  business: any;
  actionTracker: any;
  error: any;
}

export type StoreState = DeepReadonly<MutableStoreState>;

const INITIAL_STATE: StoreState = produce(
  {
    loadingBusiness: false,
    loading: false,
    loggedIn: false,
    business: {},
    actionTracker: {
      currentSelection: {
        category: null,
      },
    },
    error: {},
  },
  (draft: MutableStoreState) => draft
);

export const reducer = reducerWithInitialState(INITIAL_STATE);

/**
 * Business reducers
 */
reducer.case(getBusinessAction.started, getBusinessActionStart);
reducer.case(getBusinessAction.done, getBusinessActionDone);
reducer.case(getBusinessAction.failed, getBusinessActionFailed);

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
