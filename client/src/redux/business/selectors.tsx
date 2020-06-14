import { StoreState } from "./../root";

export const selectBusinessSlug = (state: StoreState) => state.business.slug;
export const selectBusiness = (state: StoreState) => state.business;
export const selectBusinessCategories = (state: StoreState) =>
  state.business.categories;

export const selectBusinessCategorySelected = (state: StoreState) =>
  state.actionTracker.currentSelection.category;
