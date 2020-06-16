import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("Notification");
export const setNotificationAction = actionCreator<string>("SET_NOTIFICATION");
export const clearNotificationAction = actionCreator("CLEAR_NOTIFICATION");
