import { StoreState } from "./../root";

export const selectBusinessSlugRedux = (state: StoreState) =>
  state.business.slug;
export const selectBusiness = (state: StoreState) => state.business;
export const selectBusinessCategories = (state: StoreState) =>
  state.business.categories;
// export const selectBusinessProducts = (state: StoreState) =>
//   state.business.products;

export const selectBusinessCategorySelected = (state: StoreState) =>
  state.actionTracker.currentSelection.category;
