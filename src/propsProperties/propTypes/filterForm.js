import PropTypes from 'prop-types';
import { cardShape } from '../shapes/shapes';

export const filterFormPropTypes = {
  setStatus: PropTypes.func.isRequired,
  setPriority: PropTypes.func.isRequired,
  setFilteredData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape(cardShape)).isRequired,
};
