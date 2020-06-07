import { takeLatest, call, put } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
import {
  submitLoginAction,
  SubmitLoginActionType,
  submitSignInAction,
  SubmitSignInActionType,
  submitSignOutAction,
  SubmitSignOutActionType,
} from './actions'
import {
  signOut,
  submitLogin,
  signIn,
} from './functions'

function* submitLoginSaga(action: SubmitLoginActionType): SagaIterator {
  const { payload } = action
  try {
    const result = yield call(submitLogin, payload)
    yield put(submitLoginAction.done({ params: payload, result }))
  } catch (error) {
    yield put(submitLoginAction.failed({ params: payload, error }))
  }
}

function* submitSignInSaga(action: SubmitSignInActionType): SagaIterator {
  const { payload } = action
  try {
    yield call(signOut);
    const result = yield call(signIn, payload)
    yield put(submitSignInAction.done({ params: payload, result }))
  } catch (error) {
    yield put(submitSignInAction.failed({ params: payload, error }))
  }
}

function* submitSignOutSaga(action: SubmitSignOutActionType): SagaIterator {
  const { payload } = action
  try {
    const result = yield call(signOut)
    yield put(submitSignOutAction.done({ params: payload, result }))
  } catch (error) {
    yield put(submitSignOutAction.failed({ params: payload, error }))
  }
}

export default function* watchAuthSaga(): SagaIterator {
  yield takeLatest(submitLoginAction.started, submitLoginSaga)
  yield takeLatest(submitSignInAction.started, submitSignInSaga)
  yield takeLatest(submitSignOutAction.started, submitSignOutSaga)
}
