import { all, fork } from 'redux-saga/effects';

function* sagas() {
  yield all([
    fork(require('app/modules/heroes').saga),
  ]);
}

export default sagas;