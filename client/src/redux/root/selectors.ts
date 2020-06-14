import { StoreState } from "./";

export const selectIsLoadingBusiness = (state: StoreState) =>
  state.loadingBusiness;
export const selectIsLoading = (state: StoreState) => state.loading;
export const selectIsLoggedIn = (state: StoreState) => state.loggedIn;
export const selectError = (state: StoreState) => state.error;
