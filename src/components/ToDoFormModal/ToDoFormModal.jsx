import React, { memo, useCallback, useMemo } from 'react';
import { Modal, Button, Box, Stack } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { AddTask } from '@mui/icons-material';
import { InputCustom } from '../../formUtils/formCustomItems/InputCustom';
import { SelectCustom } from '../../formUtils/formCustomItems/SelectCustom';
import { formSchema } from '../../formUtils/formValidation/formSchema';
import { getToDoBody } from '../../utils/getToDoBody';
import './toDoFormModal.css';
import config from './toDoFromModal.config';
import { todoFormModalDefaultProps } from '../../propsProperties/defaultProps/toDoFormModal';
import { todoFormModalPropTypes } from '../../propsProperties/propTypes/toDoFormModal';
import { options } from '../../utils/dataUtils';

const {
  emptyString,
  containedBtnVariant,
  outlinedBtnVariant,
  addBtnClass,
  boxModalClass,
  modalTitleAriaLabelledby,
  modalDescriptionAriaDescribedby,
  formClass,
  textType,
  titleName,
  titleLabel,
  inputClass,
  descriptionName,
  descriptionLabel,
  statusName,
  statusLabel,
  selectClass,
  priorityName,
  priorityLabel,
  secondSpacing,
  buttonsBoxClass,
  rowDirection,
  submitBtnType,
} = config;

export const ToDoFormModal = memo(({ addToDo, editToDo, open, handleOpen, handleClose,
  elementToEdit: { id, title, description, status, priority, creationDate }, setElementToEdit
}) => {
  const initialFormValues = useMemo(() => ({
    title: id ? title : emptyString,
    description: id ? description : emptyString,
    status: id ? status : emptyString,
    priority: id ? priority : emptyString,
    creationDate: id ? creationDate : emptyString,
  }), [creationDate, description, id, priority, status, title]);

  const openFromToAdd = useCallback(() => {
    handleOpen();
    setElementToEdit({});
  }, [handleOpen, setElementToEdit]);

  const onSubmit = useCallback((res) => {
    id ? editToDo(getToDoBody(res, id)) : addToDo(getToDoBody(res));
    handleClose();
  }, [addToDo, editToDo, handleClose, id]);

  return (
    <>
      <Button
        variant={containedBtnVariant}
        endIcon={<AddTask />}
        onClick={openFromToAdd}
        className={addBtnClass}
      >
        Add task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={modalTitleAriaLabelledby}
        aria-describedby={modalDescriptionAriaDescribedby}
      >
        <Box className={boxModalClass}>
          <Formik
            enableReinitialize
            initialValues={initialFormValues}
            validationSchema={formSchema}
            onSubmit={onSubmit}
          >
            <Form className={formClass}>
              <Field
                type={textType}
                name={titleName}
                component={InputCustom}
                label={titleLabel}
                className={inputClass}
                required
              />
              <Field
                type={textType}
                name={descriptionName}
                component={InputCustom}
                label={descriptionLabel}
                className={inputClass}
                required
              />
              <Field
                name={statusName}
                component={SelectCustom}
                label={statusLabel}
                required
                className={selectClass}
                options={options.status}
              />
              <Field
                name={priorityName}
                component={SelectCustom}
                label={priorityLabel}
                required
                className={selectClass}
                options={options.priority}
              />
              <Stack spacing={secondSpacing} direction={rowDirection} className={buttonsBoxClass}>
                <Button variant={containedBtnVariant} type={submitBtnType}>Save</Button>
                <Button variant={outlinedBtnVariant} onClick={handleClose}>Close</Button>
              </Stack>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
});

ToDoFormModal.propTypes = todoFormModalPropTypes;

ToDoFormModal.defaultProps = todoFormModalDefaultProps;
