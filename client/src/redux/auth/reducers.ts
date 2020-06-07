import { produce } from "immer";
import { Failure, Success } from "typescript-fsa";
import { MutableStoreState } from "./../root/reducer";
// import {
//   ERROR_LOGIN_FAILED,
//   ERROR_NOT_ADMIN,
//   ERROR_SIGNIN_FAILED,
//   ERROR_SIGNOUT_FAILED,
//   ERROR_USER_NOT_FOUND,
//   START_SIGNIN,
//   START_REGISTER,
//   SUCCESS_LOGIN,
//   SUCCESS_SIGNOUT,
// } from '../../common/messages'
// import {
//   UserRoleEnum,
//   ModalNotificationEnum,
// } from "../../common/types/lambda/enums.d";
// import {
//   ResponseLoginPayload,
//   ResponseSignInPayload,
//   SubmitLoginPayload,
//   SubmitSignInPayload,
//   SubmitSignOutPayload,
// } from "../../common/types/lambda/types.d";

/**
 * Login reducers
 */
export const submitLoginActionStart = (
  state: DeepReadonlyObject<MutableStoreState>,
  _payload: any
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.authorizing = true;
    draft.loading = true;
  });

export const submitLoginActionDone = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: Success<any, any>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.authorizing = false;
    draft.loading = false;
    draft.loggedIn = true;
  });

export const submitLoginActionFailed = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: Failure<any, ErrorEvent>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.authorizing = false;
    draft.loading = false;
    draft.loggedIn = false;
  });

/**
 * SignIn reducers
 */
export const submitSignInActionStart = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: Success<any, any>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.loading = true;
  });

export const submitSignInActionDone = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: Success<any, any>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.loading = false;
  });

export const submitSignInActionFailed = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: Failure<any, ErrorEvent>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.loading = false;
  });

/**
 * SignOut reducers
 */
export const submitSignOutActionStart = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: any
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.loading = true;
  });

export const submitSignOutActionDone = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: Success<any, any>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.loading = false;
    draft.loggedIn = false;
  });

export const submitSignOutActionFailed = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: Failure<any, ErrorEvent>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.loading = false;
  });
