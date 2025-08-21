import { call, put, takeLeading } from 'redux-saga/effects';
import Api, { HttpResponse } from 'app/services/api';
import * as actions from './actions';
import { Hero } from './types';

function* fetch(event: ReturnType<typeof actions.request.fetch>): any {
  const { resolve, reject, payload } = event;

  try {
    yield put(actions.reduce.events('fetch', true));

    const requestParams = payload;

    type Response = HttpResponse<{
      success: boolean;
      heroes: Record<string, Hero>;
      message?: string;
    }>;

    const response: Response = yield call(Api.get, 'constants/heroes', { params: requestParams });

    const { heroes } = response.data;

    yield put(actions.reduce.data({ data: Object.values(heroes) }));

    if (resolve) yield call(resolve, {});
  } catch ({ message }: any) {
    if (reject) yield call(reject, { message });
  } finally {
    yield put(actions.reduce.events('fetch', false));
  }
}

export default function* () {
  yield takeLeading(actions.request.fetch, fetch);
}