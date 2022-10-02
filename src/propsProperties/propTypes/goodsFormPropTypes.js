import PropTypes from 'prop-types';
import { goodShape } from '../shapes/shapes';

export const goodsEditFormPropTypes = {
  good: PropTypes.shape(goodShape).isRequired,
  index: PropTypes.number.isRequired,
  setIdEditGood: PropTypes.func.isRequired,
};
