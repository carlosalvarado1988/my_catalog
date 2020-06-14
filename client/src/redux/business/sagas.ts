import { takeLatest, call, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { getBusinessAction, GetBusinessActionType } from "./actions";

import { getBusinessAPI } from "./functions";

function* getBusinessSaga(action: GetBusinessActionType): SagaIterator {
  const { payload } = action;
  try {
    const result = yield call(getBusinessAPI, payload);
    console.log("result: ??", result);
    yield put(
      getBusinessAction.done({
        params: payload,
        result,
      })
    );
  } catch (error) {
    yield put(
      getBusinessAction.failed({
        params: payload,
        error,
      })
    );
  }
}

export default function* watchAuthSaga(): SagaIterator {
  yield takeLatest(getBusinessAction.started, getBusinessSaga);
}
