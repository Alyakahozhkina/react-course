import React, { memo, useCallback, useMemo } from 'react';
import { Card, CardActions, CardContent, IconButton, Stack, Typography } from '@mui/material';
import { BorderColor, Delete } from '@mui/icons-material';
import config from './toDoCard.config';
import './toDoCard.css';
import { options } from '../../utils/dataUtils';
import { toDoCardDefaultProps } from '../../propsProperties/defaultProps/toDoCard';
import { toDoCardPropTypes } from '../../propsProperties/propTypes/toDoCard';

const { status: optionStatus, priority: optionPriority } = options;
const {
  toDoCardClass,
  columnDirection,
  rowDirection,
  firstSpacing,
  secondSpacing,
  h5Variant,
  body1Variant,
  buttonVariant,
  inheritVariant,
  textSecondaryColor,
  primaryColor,
  textPriorityClass,
  dateBoxClass,
  creationDateText,
  updateDateText,
  buttonsBoxClass,
} = config;

export const ToDoCard = memo(({ card, removeToDo, handleOpen, setElementToEdit }) => {
  const { id, title, description, status, priority, creationDate, updateDate } = card;

  const findCardProperty = useCallback(
    (optionProperties, searchProperty) => optionProperties.find((option) => option.key === searchProperty).value,
    [],
  );
  const openModalToEditToDo = useCallback(() => {
    setElementToEdit(card);
    handleOpen();
  }, [card, handleOpen, setElementToEdit]);
  const onRemoveToDo = useCallback(() => removeToDo(id), [id, removeToDo]);

  const cardPriority = useMemo(() => findCardProperty(optionPriority, priority), [findCardProperty, priority]);
  const cardStatus = useMemo(() => findCardProperty(optionStatus, status), [findCardProperty, status]);

  return (
    <Card className={toDoCardClass(cardPriority)}>
      <CardContent>
        <Stack direction={columnDirection} spacing={firstSpacing}>
          <Typography variant={h5Variant}>{ title }</Typography>
          <Typography variant={body1Variant} color={textSecondaryColor}>{ description }</Typography>
          <Typography variant={body1Variant} color={textSecondaryColor}>{ cardStatus }</Typography>
          <Typography variant={buttonVariant} className={textPriorityClass}>{ cardPriority }</Typography>
        </Stack>
        <Stack direction={rowDirection} className={dateBoxClass}>
          <Typography variant={inheritVariant}>{ creationDateText(creationDate) }</Typography>
          <Typography variant={inheritVariant}>{ updateDateText(updateDate) }</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Stack direction={rowDirection} spacing={secondSpacing} className={buttonsBoxClass}>
          <IconButton color={primaryColor} onClick={openModalToEditToDo}><BorderColor /></IconButton>
          <IconButton onClick={onRemoveToDo}><Delete /></IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
});

ToDoCard.propTypes = toDoCardPropTypes;

ToDoCard.defaultProps = toDoCardDefaultProps;
