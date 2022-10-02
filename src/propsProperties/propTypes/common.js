import PropTypes from 'prop-types';

export const checkLoadOrErrorPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]).isRequired,
};

export const sortingIconButtonPropTypes = {
  columnName: PropTypes.string.isRequired,
};
