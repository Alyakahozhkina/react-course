import PropTypes from 'prop-types';
import { cardShape } from '../shapes/shapes';

export const toDoCardPropTypes = {
  card: PropTypes.shape(cardShape).isRequired,
  removeToDo: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  setElementToEdit: PropTypes.func.isRequired,
};
