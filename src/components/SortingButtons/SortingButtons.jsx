import React, { memo, useCallback, useState } from 'react';
import { Button, Stack } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import dayjs from 'dayjs';
import config from './sortingButtons.config';
import './sortingButtons.css';
import { sortingButtonsPropTypes } from '../../propsProperties/propTypes/sortingButtons';
import { sortingButtonsDefaultProps } from '../../propsProperties/defaultProps/sortingButtons';

const {
  thirdSpacing,
  rowDirection,
  sortingButtonsClass,
  dateFormat,
  creationDateProperty,
  updateDateProperty,
  containedBtnVariant,
} = config;

export const SortingButtons = memo(({ setFilteredData, filteredData }) => {
  const [creationFlag, setCreationFlag] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);

  const sortBy = useCallback((propertyToSort, flag) => {
    const setSortingData = (firstCondition, secondCondition) => {
      setFilteredData([...filteredData].sort((a, b) => (dayjs(a[propertyToSort], dateFormat)
        .isAfter(dayjs(b[propertyToSort], dateFormat)) ? firstCondition : secondCondition)));
    };
    if (flag) {
      setSortingData(1, -1);
    } else {
      setSortingData(-1, 1);
    }
  }, [filteredData, setFilteredData]);
  const sortByCreationDate = useCallback(() => {
    setCreationFlag(!creationFlag);
    sortBy(creationDateProperty, creationFlag);
  }, [creationFlag, sortBy]);
  const sortByUpdateDate = useCallback(() => {
    setUpdateFlag(!updateFlag);
    sortBy(updateDateProperty, updateFlag);
  }, [sortBy, updateFlag]);

  return (
    <>
      <Stack spacing={thirdSpacing} direction={rowDirection} className={sortingButtonsClass}>
        <Button
          variant={containedBtnVariant}
          endIcon={creationFlag ? <ArrowUpward /> : <ArrowDownward />}
          onClick={sortByCreationDate}
        >
          Sort by Creation date
        </Button>
        <Button
          variant={containedBtnVariant}
          endIcon={updateFlag ? <ArrowUpward /> : <ArrowDownward />}
          onClick={sortByUpdateDate}
        >
          Sort by Update date
        </Button>
      </Stack>
    </>
  );
});

SortingButtons.propTypes = sortingButtonsPropTypes;

SortingButtons.defaultProps = sortingButtonsDefaultProps;
