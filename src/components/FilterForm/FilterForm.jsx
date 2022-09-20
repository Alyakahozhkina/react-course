import React, { memo, useCallback, useMemo } from 'react';
import { Field, Form, Formik } from 'formik';
import { Button, Stack } from '@mui/material';
import { SelectCustom } from '../../formUtils/formCustomItems/SelectCustom';
import { options } from '../../utils/dataUtils';
import { filterFormDefaultProps } from '../../propsProperties/defaultProps/filterForm';
import { filterFormPropTypes } from '../../propsProperties/propTypes/filterForm';
import config from './filterForm.config';
import './filterForm.css'

const {
  emptyString,
  filterFormClass,
  firstSpacing,
  thirdSpacing,
  rowDirection,
  selectBoxClass,
  selectClass,
  statusName,
  statusLabel,
  priorityName,
  priorityLabel,
  buttonsBoxClass,
  containedBtnVariant,
  outlinedBtnVariant,
  submitType,
  resetType,
} = config;

export const FilterForm = memo(({ setStatus, setPriority, setFilteredData, data }) => {
  const initialFormValues = useMemo(() => ({
    status: emptyString,
    priority: emptyString,
  }), []);

  const filterToDo = useCallback((status, priority) => {
    setFilteredData(data.filter((elem) => elem.status === status && elem.priority === priority));
  }, [data, setFilteredData]);
  const onSubmit = useCallback(({ status, priority }) => {
    setStatus(status);
    setPriority(priority);
    if (status && priority) filterToDo(status, priority);
    if (status && !priority) setFilteredData(data.filter((elem) => elem.status === status));
    if (!status && priority) setFilteredData(data.filter((elem) => elem.priority === priority));
  }, [data, filterToDo, setFilteredData, setPriority, setStatus]);
  const onReset = useCallback(() => setFilteredData(data), [data, setFilteredData]);

  return (
    <Formik
      enableReinitialize
      initialValues={initialFormValues}
      onSubmit={onSubmit}
    >
      <Form className={filterFormClass}>
        <Stack spacing={thirdSpacing} direction={rowDirection} className={selectBoxClass}>
          <Field
            name={statusName}
            component={SelectCustom}
            label={statusLabel}
            options={options.status}
            className={selectClass}
          />
          <Field
            name={priorityName}
            component={SelectCustom}
            label={priorityLabel}
            options={options.priority}
            className={selectClass}
          />
          <Stack spacing={firstSpacing} direction={rowDirection} className={buttonsBoxClass}>
            <Button variant={containedBtnVariant} type={submitType}>Apply</Button>
            <Button variant={outlinedBtnVariant} type={resetType} onClick={onReset}>Reset</Button>
          </Stack>
        </Stack>
      </Form>
    </Formik>
  );
});

FilterForm.propTypes = filterFormPropTypes;

FilterForm.defaultProps = filterFormDefaultProps;
