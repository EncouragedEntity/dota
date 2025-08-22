/* eslint-disable import/order */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCombineReducers } from './persist';
import { reducer as heroes } from 'app/modules/heroes';
import { reducer as form } from 'redux-form';


const reducers = {
  heroes,
  form,
} as const;

export default persistCombineReducers({
  key: require('../../package.json').name,
  blacklist: Object.keys(reducers),
  storage: AsyncStorage,
}, reducers);