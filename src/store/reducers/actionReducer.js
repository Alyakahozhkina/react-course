import { ACTION_FAILURE, ACTION_REQUEST, ACTION_SUCCESS, CLEAR_ERROR } from '../types';

const defaultActionState = {
  isLoading: false,
  isError: null,
};
export const actionReducer = (state = defaultActionState, { type, payload }) => {
  switch (type) {
    case ACTION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_SUCCESS:
      return {
        isLoading: false,
        isError: null,
      };
    case ACTION_FAILURE:
      return {
        isLoading: false,
        isError: payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        isError: null,
      };
    default:
      return state;
  }
};
