import React, { memo } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoadingPage } from '../LoadingPage/LoadingPage';
import { errorPath } from '../../../utils/consts/paths';
import { selectIsError, selectIsLoading } from '../../../store/selectors';
import { checkLoadOrErrorDefaultProps } from '../../../propsProperties/defaultProps/common';
import { checkLoadOrErrorPropTypes } from '../../../propsProperties/propTypes/common';

export const CheckLoadOrError = memo(({ children }) => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    isLoading ? <LoadingPage />
      : isError ? <Navigate replace to={errorPath} /> : children
  );
});

CheckLoadOrError.propTypes = checkLoadOrErrorPropTypes;

CheckLoadOrError.defaultProps = checkLoadOrErrorDefaultProps;
