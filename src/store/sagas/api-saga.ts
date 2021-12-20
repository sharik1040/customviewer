import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects"
import { DATA_REQUESTED, DATA_LOADED, API_ERROR } from "../../constants"

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
  try {
    const payload: string = yield call(getData);
    yield put({ type: DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERROR, payload: e });
  }
}

async function getData() {
  const response = await fetch("https://breakingbadapi.com/api/characters");
  return await response.json();
}

// function getData() {
//   return axios({
//     method: "get",
//     url: "https://breakingbadapi.com/api/characters"
//   });
// }