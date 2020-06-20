import { StoreState } from "../root";

export const selectCategorySlug = (state: StoreState) =>
  state.navigationTrack.category_slug;
export const selectProductId = (state: StoreState) =>
  state.navigationTrack.product_id;
