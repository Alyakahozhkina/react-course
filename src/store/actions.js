import {
  GET_GOODS_LIST_SUCCESS,
  ADD_GOOD_SUCCESS,
  EDIT_GOOD_SUCCESS,
  ACTION_REQUEST,
  ACTION_SUCCESS,
  ACTION_FAILURE,
  CLEAR_ERROR,
  SET_FILTER,
  GET_ONE_GOOD_SUCCESS,
  SET_SORT,
  OPEN_FORM_MODAL,
  CLOSE_FORM_MODAL,
} from './types';

export const getGoodsListSuccess = (data) => ({ type: GET_GOODS_LIST_SUCCESS, payload: data });
export const getOneGoodSuccess = (item) => ({ type: GET_ONE_GOOD_SUCCESS, payload: item });
export const addGoodSuccess = (item) => ({ type: ADD_GOOD_SUCCESS, payload: item });
export const editGoodSuccess = (item) => ({ type: EDIT_GOOD_SUCCESS, payload: item });

export const actionRequest = () => ({ type: ACTION_REQUEST });
export const actionSuccess = () => ({ type: ACTION_SUCCESS });
export const actionFailure = (error) => ({ type: ACTION_FAILURE, payload: error });
export const clearError = () => ({ type: CLEAR_ERROR });

export const setFilterAction = (filter) => ({ type: SET_FILTER, payload: filter });
export const setSortAction = (column) => ({ type: SET_SORT, payload: column });

export const openFormModal = () => ({ type: OPEN_FORM_MODAL });
export const closeFormModal = () => ({ type: CLOSE_FORM_MODAL });
