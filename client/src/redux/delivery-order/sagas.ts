import { takeLatest, call, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { submitOrderAction, SubmitOrderActionType } from "./actions";

import { submitOrderAPI } from "./functions";

function* submitOrderSaga(action: SubmitOrderActionType): SagaIterator {
  const { payload } = action;
  try {
    const result = yield call(submitOrderAPI, payload);
    yield put(
      submitOrderAction.done({
        params: payload,
        result,
      })
    );
  } catch (error) {
    yield put(
      submitOrderAction.failed({
        params: payload,
        error,
      })
    );
  }
}

export default function* watchAuthSaga(): SagaIterator {
  yield takeLatest(submitOrderAction.started, submitOrderSaga);
}
