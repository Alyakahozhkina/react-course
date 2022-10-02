import React, { memo, useMemo } from 'react';
import { IconButton } from '@mui/material';
import { ArrowDropDown, ArrowDropUp, Sort } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setSortAction } from '../../../store/actions';
import { selectColumn, selectDirection } from '../../../store/selectors';
import { sortingIconButtonDefaultProps } from '../../../propsProperties/defaultProps/common';
import { sortingIconButtonPropTypes } from '../../../propsProperties/propTypes/common';
import config from './sortingIconButton.config';

const {
  ascDirection,
  largeFontSize,
  sortingButtonClass,
  secondaryColor,
} = config;

export const SortingIconButton = memo(({ columnName }) => {
  const dispatch = useDispatch();
  const direction = useSelector(selectDirection);
  const column = useSelector(selectColumn);
  const arrow = useMemo(() => {
    return (direction === ascDirection ? <ArrowDropUp fontSize={largeFontSize} /> : <ArrowDropDown fontSize={largeFontSize} />)
  }, [direction]);
  return (
    <IconButton className={sortingButtonClass} color={secondaryColor} onClick={() => dispatch(setSortAction(columnName))}>
      {column === columnName ? arrow : <Sort fontSize={largeFontSize} />}
    </IconButton>
  );
});

SortingIconButton.propTypes = sortingIconButtonPropTypes;

SortingIconButton.defaultProps = sortingIconButtonDefaultProps;
