import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("NavigationTrack");
export const setNavigationTrackCategorySlugAction = actionCreator<string>(
  "SET_CATEGORY_SLUG"
);
export const setNavigationTrackProductIdAction = actionCreator<string>(
  "SET_PRODUCT_ID"
);
