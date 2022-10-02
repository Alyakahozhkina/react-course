import {
  GET_GOODS_LIST_SUCCESS,
  ADD_GOOD_SUCCESS,
  EDIT_GOOD_SUCCESS, SET_FILTER, GET_ONE_GOOD_SUCCESS, SET_SORT,
} from '../types';
import { sort } from '../../utils/helpers';

const defaultGoodsState = {
  data: [],
  item: {},
  filter: '',
  column: null,
  direction: null,
};
export const goodsReducer = (state = defaultGoodsState, { type, payload }) => {
  switch (type) {
    case GET_GOODS_LIST_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case GET_ONE_GOOD_SUCCESS:
      return {
        ...state,
        item: payload,
      };
    case ADD_GOOD_SUCCESS:
      return {
        ...state,
        item: payload,
      };
    case EDIT_GOOD_SUCCESS:
      return {
        ...state,
        item: payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };
    case SET_SORT:
      if (state.column === payload) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction: state.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return {
        ...state,
        column: payload,
        data: sort(state.data, payload),
        direction: 'asc',
      };
    default:
      return state;
  }
};
