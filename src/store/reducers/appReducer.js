import { CLOSE_FORM_MODAL, OPEN_FORM_MODAL } from '../types';

const defaultAppState = {
  openModal: false,
};
export const appReducer = (state = defaultAppState, { type }) => {
  switch (type) {
    case OPEN_FORM_MODAL:
      return {
        openModal: true,
      };
    case CLOSE_FORM_MODAL:
      return {
        openModal: false,
      };
    default:
      return state;
  }
};
