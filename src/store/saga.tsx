import {all, fork} from 'redux-saga/effects';
import sportsSaga from './Sports/Sports.saga';

export default function* rootSaga() {
  yield all([
    fork(sportsSaga)
  ])
}
