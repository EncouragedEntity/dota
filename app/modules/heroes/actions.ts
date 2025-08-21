import { createAction, createProcessAction } from 'app/storage/utilities';
import type { FetchParams, State } from './types';

export const request = {
  fetch: createAction<Partial<FetchParams> | void>('[HEROES][DATA][REQUEST]'),
} as const;

export const reduce = {
  events: createProcessAction('[HEROES][EVENTS][REDUCE]'),
  data: createAction<Pick<State, 'data'>>('[HEROES][DATA][REDUCE]'),
} as const;

export default request;