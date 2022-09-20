import PropTypes from 'prop-types';
import { cardShape } from '../shapes/shapes';

export const sortingButtonsPropTypes = {
  setFilteredData: PropTypes.func.isRequired,
  filteredData: PropTypes.arrayOf(PropTypes.shape(cardShape)).isRequired,
};
