import actionCreatorFactory, { Action } from "typescript-fsa";

// import {
//   ResponseLoginPayload,
//   ResponseSignInPayload,
//   ResponseSignOutPayload,
//   SubmitLoginPayload,
//   SubmitSignInPayload,
//   SubmitSignOutPayload,
// } from "../../common/types/lambda/types.d";

const actionCreator = actionCreatorFactory("Auth");

export const submitLoginAction = actionCreator.async<any, any, ErrorEvent>(
  "SUBMIT_LOGIN"
);
export type SubmitLoginActionType = Action<any>;

export const submitSignInAction = actionCreator.async<any, any, ErrorEvent>(
  "SUBMIT_SIGNIN"
);
export type SubmitSignInActionType = Action<any>;

export const submitSignOutAction = actionCreator.async<any, any, ErrorEvent>(
  "SUBMIT_SIGNOUT"
);
export type SubmitSignOutActionType = Action<any>;
