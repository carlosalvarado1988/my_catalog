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

import {
  toogleShowShoopingCartAction,
  addProductItemToShoppingCartAction,
  removeProductItemToShoppingCartAction,
} from "../shopping-cart/actions";
import {
  toogleShowShoopingCartActionReducer,
  addProductItemToShoppingCartActionReducer,
  removeProductItemToShoppingCartActionReducer,
} from "../shopping-cart/reducers";

import {
  setNavigationTrackCategorySlugAction,
  setNavigationTrackProductIdAction,
} from "../navigation/actions";
import {
  setNavigationTrackCategorySlugActionReducer,
  setNavigationTrackProductIdActionReducer,
} from "../navigation/reducers";

import {
  setNotificationAction,
  clearNotificationAction,
} from "../notification/actions";
import {
  setNotificationActionReducer,
  clearNotificationActionReducer,
} from "../notification/reducers";

import {
  Business,
  Notification,
  ShoppingCart,
  DeliveryOrder,
  NavigationTrack,
} from "../../common/types/api/types.d";
import {
  ActionStageEnum,
  DeliveryTypeEnum,
  PaymentMethodEnum,
} from "../../common/types/api/enums.d";

/**
 * The root store state.
 */
export interface MutableStoreState {
  loadingBusiness: boolean;
  loading: boolean;
  loggedIn: boolean;
  showShoppingCart: boolean;
  shoppingCart: ShoppingCart;
  notification: Notification;
  business: Business;
  deliveryOrder: DeliveryOrder;
  navigationTrack: NavigationTrack;
  error: any;
}

export type StoreState = DeepReadonly<MutableStoreState>;

const INITIAL_STATE: StoreState = produce(
  {
    loadingBusiness: false,
    loading: false,
    loggedIn: false,
    showShoppingCart: false,
    shoppingCart: {
      business_id: null,
      items: [],
      amount: 0,
    },
    deliveryOrder: {
      business_id: null,
      delivery_type: DeliveryTypeEnum.PICKUP,
      date: "",
      time: "",
      address: "",
      additional_reference: "",
      customer: "",
      phone: "",
      items_cost: 0,
      payment_type: PaymentMethodEnum.CASH,
      total_pay: 0,
    },
    notification: {
      show: false,
      stage: ActionStageEnum.STARTED,
      message: "",
      description: "",
    },
    business: {},
    navigationTrack: {
      category_slug: null,
      product_id: null,
    },
  },
  (draft: MutableStoreState) => draft
);

export const reducer = reducerWithInitialState(INITIAL_STATE);

/**
 * Navigation Track reducers
 */
reducer.case(
  setNavigationTrackCategorySlugAction,
  setNavigationTrackCategorySlugActionReducer
);
reducer.case(
  setNavigationTrackProductIdAction,
  setNavigationTrackProductIdActionReducer
);

/**
 * Notification reducers
 */
reducer.case(setNotificationAction, setNotificationActionReducer);
reducer.case(clearNotificationAction, clearNotificationActionReducer);

/**
 * Shooping-cart reducers
 */
reducer.case(toogleShowShoopingCartAction, toogleShowShoopingCartActionReducer);
reducer.case(
  addProductItemToShoppingCartAction,
  addProductItemToShoppingCartActionReducer
);
reducer.case(
  removeProductItemToShoppingCartAction,
  removeProductItemToShoppingCartActionReducer
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
