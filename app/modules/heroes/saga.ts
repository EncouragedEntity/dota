import { call, put, takeLeading } from 'redux-saga/effects';
import Api, { HttpResponse } from 'app/services/api';
import * as actions from './actions';
import { Hero } from './types';

function* fetch(event: ReturnType<typeof actions.request.fetch>): any {
  const { resolve, reject, payload: requestParams } = event;

  try {
    yield put(actions.reduce.events('fetch', true));

    if (requestParams?.triggerError) {
      throw new Error('Simulated error for testing');
    }

    type Response = Record<string, Hero>;
    const response: Response = yield call(Api.get, 'constants/heroes');
    let heroes = Object.values(response.data);

    // --- Filtering ---
    if (requestParams?.filter?.role) {
      heroes = heroes.filter(hero =>
        hero.roles.includes(requestParams.filter?.role!)
      );
    }

    // --- Sorting ---
    if (requestParams?.sort) {
      const { field, direction } = requestParams.sort;

      heroes.sort((a, b) => {
        const valA = a[field] as number | string;
        const valB = b[field] as number | string;

        if (typeof valA === 'string' && typeof valB === 'string') {
          return direction === 'asc'
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        } else if (typeof valA === 'number' && typeof valB === 'number') {
          return direction === 'asc' ? valA - valB : valB - valA;
        }
        return 0;
      });
    }

    // --- Dispatch filtered and sorted data ---
    yield put(actions.reduce.data({ data: heroes }));

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