import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("Shooping-chart");
export const toogleShowShoopingChartAction = actionCreator(
  "TOOGLE_SHOW_SHOOPING_CHART"
);
