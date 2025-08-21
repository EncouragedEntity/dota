import { createSelector } from 'reselect';
import type { Storage } from 'app/storage';
import * as actions from './actions';

type Key = Parameters<typeof actions.reduce.events.get>[1];

export default {
  getEvent: (key: Key) => (state: Storage) => actions.reduce.events.get(state.heroes.events, key),
  getHeroes: (storage: Storage) => storage.heroes.data,
};