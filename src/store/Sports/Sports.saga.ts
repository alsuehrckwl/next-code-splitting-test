import { all, call, takeLatest, fork, put } from 'redux-saga/effects';
import SportsService from '@service/sports/sportsService';
import { getSportsType, setSportsType } from '@store/Sports/Sports.store';

const sportsApi = new SportsService();

function* requestGetSportsType(data) {
  console.log('requestGetSportsType = ', data);
  try {
    const result = yield call(sportsApi.getSportsByTypeList, data.payload);

    if (result.data.length > 0) {
      yield put(setSportsType({ type: result.id, data: result.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchGetSportsType() {
  yield takeLatest(getSportsType, requestGetSportsType);
}

export default function* sportsSaga() {
  yield all([fork(watchGetSportsType)]);
}
