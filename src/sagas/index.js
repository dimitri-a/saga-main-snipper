import { put, call, takeEvery, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";

function* getData() {
  console.log("getData");
  const json = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json()
    )
  );

  yield put({ type: "RECEIVED_DATA", bla: json });
}
export default function* rootSaga() {
  yield takeEvery("GET_DATA", getData);
}
