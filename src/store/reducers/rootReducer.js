import { combineReducers } from 'redux';
import { actionReducer } from './actionReducer';
import { goodsReducer } from './goodsReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  goodsState: goodsReducer,
  actionState: actionReducer,
  appState: appReducer,
});
