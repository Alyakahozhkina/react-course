import PropTypes from 'prop-types';
import { elementToEditShape } from '../shapes/shapes';

export const todoFormModalPropTypes = {
  addToDo: PropTypes.func.isRequired,
  editToDo: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  elementToEdit: PropTypes.shape(elementToEditShape).isRequired,
  setElementToEdit: PropTypes.func.isRequired,
};
