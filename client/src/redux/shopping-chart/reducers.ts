import { produce } from "immer";
import { MutableStoreState } from "../root/reducer";

export const toogleShowShoopingChartActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.showShoopingChart = !draft.showShoopingChart;
  });
