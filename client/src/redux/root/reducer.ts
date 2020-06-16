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
} from "../business/reducers";

import { toogleShowShoopingChartAction } from "../shopping-chart/actions";
import { toogleShowShoopingChartActionReducer } from "../shopping-chart/reducers";

import {
  setNotificationAction,
  clearNotificationAction,
} from "../notification/actions";
import {
  setNotificationActionReducer,
  clearNotificationActionReducer,
} from "../notification/reducers";

import { Business, Notification } from "../../common/types/api/types";
import { ActionStageEnum } from "../../common/types/api/enums.d";

/**
 * The root store state.
 */
export interface MutableStoreState {
  loadingBusiness: boolean;
  loading: boolean;
  loggedIn: boolean;
  showShoopingChart: boolean;
  notification: Notification;
  business: Business;
  actionTracker: any;
  error: any;
}

export type StoreState = DeepReadonly<MutableStoreState>;

const INITIAL_STATE: StoreState = produce(
  {
    loadingBusiness: false,
    loading: false,
    loggedIn: false,
    showShoopingChart: false,
    notification: {
      show: false,
      stage: ActionStageEnum.STARTED,
      message: "",
      description: "",
    },
    business: {},
    actionTracker: {
      currentSelection: {
        category: null,
      },
    },
  },
  (draft: MutableStoreState) => draft
);

export const reducer = reducerWithInitialState(INITIAL_STATE);

/**
 * Notification reducers
 */
reducer.case(setNotificationAction, setNotificationActionReducer);
reducer.case(clearNotificationAction, clearNotificationActionReducer);

/**
 * Shooping-chart reducers
 */
reducer.case(
  toogleShowShoopingChartAction,
  toogleShowShoopingChartActionReducer
);

/**
 * Business reducers
 */
reducer.case(getBusinessAction.started, getBusinessActionStart);
reducer.case(getBusinessAction.done, getBusinessActionDone);
reducer.case(getBusinessAction.failed, getBusinessActionFailed);

/**
 * ADMIN DASHBOARD ACTIONS AND REDUCER
 */

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
