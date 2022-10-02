import PropTypes from 'prop-types';

export const goodShape = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

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
    weight: PropTypes.string,
    category: PropTypes.string,
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
    weight: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.bool.isRequired,
    ]),
    category: PropTypes.bool,
  }),
  setFieldValue: PropTypes.func,
};

export const selectToDoShape = {
  key: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};
