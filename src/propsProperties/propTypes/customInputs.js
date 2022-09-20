import PropTypes from 'prop-types';
import { fieldInputShape, fieldSelectShape, formToDoShape, selectToDoShape } from '../shapes/shapes';

export const inputCustomPropTypes = {
  field: PropTypes.shape(fieldInputShape).isRequired,
  form: PropTypes.shape(formToDoShape).isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export const selectCustomPropTypes = {
  field: PropTypes.shape(fieldSelectShape).isRequired,
  form: PropTypes.shape(formToDoShape).isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(selectToDoShape)).isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
};
