import React, { memo, useCallback, useMemo, useRef } from 'react';
import { Button, Box, Stack, Grid } from '@mui/material';
import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { InputCustom } from '../common/FormCustomItems/InputCustom';
import { SelectCustom } from '../common/FormCustomItems/SelectCustom';
import { formSchema } from '../../utils/formValidation/formSchema';
import { editGood } from '../../thunks/thunksGoods';
import { kindOfGoodsOptions } from '../../utils/consts/kindOfGoodsOptions';
import { goodsEditFormDefaultProps } from '../../propsProperties/defaultProps/goodsFormDefaultProps';
import { goodsEditFormPropTypes } from '../../propsProperties/propTypes/goodsFormPropTypes';
import './goodsForm.css';
import config from './goodsForm.config';

const {
  emptyString,
  containedBtnVariant,
  outlinedBtnVariant,
  textType,
  titleName,
  titleLabel,
  inputClass,
  descriptionName,
  descriptionLabel,
  weightName,
  weightLabel,
  selectClass,
  categoryName,
  categoryLabel,
  secondSpacing,
  buttonsBoxClass,
  rowDirection,
  submitBtnType,
  tableCellClass,
  tableRowClass,
  leftAlign,
  centerAlign,
  goodsEditFormClass,
  numberClass,
  goodsEditFormBtnBox,
} = config;

export const GoodsEditForm = memo(({ good, index, setIdEditGood }) => {
  const { id, title, description, weight, category } = good;

  const dispatch = useDispatch();
  const formRef = useRef();

  const initialFormValues = useMemo(() => ({
    title,
    description,
    weight,
    category,
  }), [category, description, title, weight]);

  const handleSubmit = useCallback(() => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  }, []);

  const setEmptyId = useCallback(() => {
    setIdEditGood(emptyString);
  }, [setIdEditGood]);

  const onSubmit = useCallback((res) => {
    dispatch(editGood(res, id));
    setEmptyId();
  }, [dispatch, id, setEmptyId]);

  return (
    <>
      <Formik
        innerRef={formRef}
        enableReinitialize
        initialValues={initialFormValues}
        validationSchema={formSchema}
        onSubmit={onSubmit}
      >
        <Box className={`${tableRowClass} ${goodsEditFormClass}`} key={id}>
          <Grid item className={`${tableCellClass} ${numberClass}`} align={centerAlign}>
            {index + 1}
          </Grid>
          <Grid item className={tableCellClass} align={leftAlign}>
            <Field
              type={textType}
              name={titleName}
              component={InputCustom}
              label={titleLabel}
              className={inputClass}
              required
            />
          </Grid>
          <Grid item className={tableCellClass} align={leftAlign}>
            <Field
              type={textType}
              name={weightName}
              component={InputCustom}
              label={weightLabel}
              className={inputClass}
              required
            />
          </Grid>
          <Grid item className={tableCellClass} align={leftAlign}>
            <Field
              type={textType}
              name={descriptionName}
              component={InputCustom}
              label={descriptionLabel}
              className={inputClass}
              required
            />
          </Grid>
          <Grid item className={tableCellClass} align={leftAlign}>
            <Field
              type={textType}
              name={categoryName}
              component={SelectCustom}
              label={categoryLabel}
              className={selectClass}
              options={kindOfGoodsOptions}
            />
          </Grid>
          <Grid item className={`${tableCellClass} ${goodsEditFormBtnBox}`} align={centerAlign}>
            <Stack spacing={secondSpacing} direction={rowDirection} className={buttonsBoxClass}>
              <Button variant={containedBtnVariant} type={submitBtnType} onClick={handleSubmit}>Save</Button>
              <Button variant={outlinedBtnVariant} onClick={setEmptyId}>Close</Button>
            </Stack>
          </Grid>
        </Box>
      </Formik>
    </>
  );
});

GoodsEditForm.propTypes = goodsEditFormPropTypes;

GoodsEditForm.defaultProps = goodsEditFormDefaultProps;
