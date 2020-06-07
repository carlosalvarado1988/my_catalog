import { StoreState } from "./";

export const selectIsAuthorizing = (state: StoreState) => state.authorizing;
export const selectIsLoading = (state: StoreState) => state.loading;
export const selectIsLoggedIn = (state: StoreState) => state.loggedIn;
