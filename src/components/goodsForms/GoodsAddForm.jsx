import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Box, Stack } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { AddTask } from '@mui/icons-material';
import { InputCustom } from '../common/FormCustomItems/InputCustom';
import { SelectCustom } from '../common/FormCustomItems/SelectCustom';
import { formSchema } from '../../utils/formValidation/formSchema';
import { addGood } from '../../thunks/thunksGoods';
import { selectOpenModal } from '../../store/selectors';
import { closeFormModal, openFormModal } from '../../store/actions';
import { kindOfGoodsOptions } from '../../utils/consts/kindOfGoodsOptions';
import './goodsForm.css';
import config from './goodsForm.config';

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
  categoryName,
  categoryLabel,
  selectClass,
  weightName,
  weightLabel,
  secondSpacing,
  buttonsBoxClass,
  rowDirection,
  submitBtnType,
} = config;

export const GoodsAddForm = memo(() => {
  const dispatch = useDispatch();
  const open = useSelector(selectOpenModal);

  const handleOpen = useCallback(() => dispatch(openFormModal()), []);
  const handleClose = useCallback(() => dispatch(closeFormModal()), []);

  const initialFormValues = useMemo(() => ({
    title: emptyString,
    description: emptyString,
    weight: emptyString,
    category: emptyString,
  }), []);

  const onSubmit = useCallback((res) => {
    dispatch(addGood(res));
    handleClose();
  }, [dispatch, handleClose]);

  return (
    <>
      <Button
        variant={containedBtnVariant}
        endIcon={<AddTask />}
        onClick={handleOpen}
        className={addBtnClass}
      >
        Add good
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
                name={weightName}
                component={InputCustom}
                label={weightLabel}
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
                type={textType}
                name={categoryName}
                component={SelectCustom}
                label={categoryLabel}
                className={selectClass}
                options={kindOfGoodsOptions}
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
