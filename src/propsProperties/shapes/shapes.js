import PropTypes from 'prop-types';

export const fieldInputShape = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export const fieldSelectShape = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export const formToDoShape = {
  errors: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    priority: PropTypes.string,
  }),
  touched: PropTypes.shape({
    title: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.bool.isRequired,
    ]),
    description: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.bool.isRequired,
    ]),
    status: PropTypes.bool,
    priority: PropTypes.bool,
  }),
  setFieldValue: PropTypes.func,
};

export const selectToDoShape = {
  key: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export const elementToEditShape = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.number,
  priority: PropTypes.number,
  creationDate: PropTypes.string,
};

export const cardShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  priority: PropTypes.number.isRequired,
  creationDate: PropTypes.string.isRequired,
  updateDate: PropTypes.string.isRequired,
};
