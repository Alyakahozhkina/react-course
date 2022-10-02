import React, { memo, useCallback, useMemo } from 'react';
import { FormControl, FormHelperText, InputLabel, Select, MenuItem } from '@mui/material';
import config from './customItems.config';
import { selectCustomPropTypes } from '../../../propsProperties/propTypes/customInputs';
import { selectCustomDefaultProps } from '../../../propsProperties/defaultProps/customInputs';
import { checkError, checkErrorMessage } from './utilsCustomItems';

const {
  divComponent,
  inputSelectId,
  selectLabelId,
  selectId,
} = config;

export const SelectCustom = memo(({
  field, form, label, options, className, ...props
}) => {
  const { name } = field;
  const { touched, errors, setFieldValue } = form;

  const handleChange = useCallback((e) => setFieldValue(name, e.target.value), [name, setFieldValue]);

  const isError = useMemo(() => checkError(errors, touched, name), [errors, name, touched]);
  const errorMessage = useMemo(() => checkErrorMessage(errors, name), [errors, name]);

  return (
    <FormControl component={divComponent} className={className}>
      <InputLabel id={inputSelectId} error={isError} {...props}>{ label }</InputLabel>
      <Select
        {...field}
        labelId={selectLabelId}
        id={selectId}
        label={label}
        onChange={handleChange}
        error={isError}
      >
        { options.map((item) => (
          <MenuItem key={item.key} value={item.value}>{ item.value }</MenuItem>
        )) }
      </Select>
      { isError ? <FormHelperText error>{ errorMessage }</FormHelperText> : null }
    </FormControl>
  );
});

SelectCustom.propTypes = selectCustomPropTypes;

SelectCustom.defaultProps = selectCustomDefaultProps;
