import API from '../api/api';
import {
  actionFailure,
  actionRequest,
  actionSuccess,
  addGoodSuccess,
  editGoodSuccess,
  getGoodsListSuccess, getOneGoodSuccess,
} from '../store/actions';
import { goodsPath, oneGoodPath } from '../utils/consts/paths';

export const getGoodsList = () => async (dispatch) => {
  try {
    dispatch(actionRequest());
    const { data: { goods } } = await API.get(goodsPath);
    dispatch(getGoodsListSuccess(goods));
    dispatch(actionSuccess());
  } catch (err) {
    dispatch(actionFailure(err));
  }
};

export const getOneGood = (idGood) => async (dispatch) => {
  try {
    dispatch(actionRequest());
    const { data } = await API.get(oneGoodPath(idGood));
    dispatch(getOneGoodSuccess(data));
    dispatch(actionSuccess());
  } catch (err) {
    dispatch(actionFailure(err));
  }
};

export const deleteGood = (idGood) => async (dispatch) => {
  try {
    dispatch(actionRequest());
    await API.delete(oneGoodPath(idGood));
    await dispatch(getGoodsList());
    dispatch(actionSuccess());
  } catch (err) {
    dispatch(actionFailure(err));
  }
};

export const addGood = (obj) => async (dispatch) => {
  try {
    dispatch(actionRequest());
    const { data } = await API.post(goodsPath, obj);
    dispatch(addGoodSuccess(data));
    await dispatch(getGoodsList());
    dispatch(actionSuccess());
  } catch (err) {
    dispatch(actionFailure(err));
  }
};

export const editGood = (obj, idGood) => async (dispatch) => {
  try {
    dispatch(actionRequest());
    const { data } = await API.put(oneGoodPath(idGood), obj);
    dispatch(editGoodSuccess(data));
    await dispatch(getGoodsList());
    dispatch(actionSuccess());
  } catch (err) {
    dispatch(actionFailure(err));
  }
};
