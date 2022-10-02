import React, { memo, useCallback, useState } from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilterAction } from '../../store/actions';
import { useDebounce } from '../../hooks/useDebounce';
import config from './filterGood.config';
import './filterGood.css';

const {
  emptyString,
  debounceDelay,
  filterName,
  filterLabel,
  standardInputVariant,
  filterGoodClass,
  primaryColor,
} = config;

export const FilterGood = memo(() => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(emptyString);

  const dispatchFilter = useCallback((filter) => {
    dispatch(setFilterAction(filter));
  }, [dispatch]);

  const debouncedFilter = useDebounce(dispatchFilter, debounceDelay);

  const onFilterChange = useCallback(({ target }) => {
    setFilter(target.value);
    debouncedFilter(target.value);
  }, [debouncedFilter]);

  return (
    <TextField
      name={filterName}
      label={filterLabel}
      variant={standardInputVariant}
      onChange={onFilterChange}
      value={filter}
      className={filterGoodClass}
      color={primaryColor}
    />
  );
});
