import React, { memo, useCallback, useEffect } from 'react';
import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckLoadOrError } from '../common/HOC/CheckLoadOrError';
import { selectGoodItem } from '../../store/selectors';
import { getOneGood } from '../../thunks/thunksGoods';
import { goodsPath } from '../../utils/consts/paths';
import config from './goodItem.config';
import './goodItem.css';

const {
  goodItemClass,
  columnDirection,
  rowDirection,
  firstSpacing,
  secondSpacing,
  h5Variant,
  body1Variant,
  buttonVariant,
  textSecondaryColor,
  textCategoryClass,
  buttonsBoxClass,
  outlinedBtnVariant,
} = config;

export const GoodItem = memo(() => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goodItem = useSelector(selectGoodItem);

  useEffect(() => {
    dispatch(getOneGood(id));
  }, [dispatch, id]);

  const comeBack = useCallback(() => {
    navigate(goodsPath);
  }, [navigate]);

  return (
    <CheckLoadOrError>
      <Card className={goodItemClass(goodItem.category)}>
        <CardContent>
          <Stack direction={columnDirection} spacing={firstSpacing}>
            <Typography variant={h5Variant}>{ goodItem.title }</Typography>
            <Typography variant={body1Variant}>
              Description:
              { goodItem.description }
            </Typography>
            <Typography variant={buttonVariant} color={textSecondaryColor}>
              Weight:
              { goodItem.weight }
            </Typography>
            <Typography variant={body1Variant} color={textSecondaryColor} className={textCategoryClass}>
              Category:
              { goodItem.category }
            </Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Stack direction={rowDirection} spacing={secondSpacing} className={buttonsBoxClass}>
            <Button variant={outlinedBtnVariant} onClick={comeBack}>Come back</Button>
          </Stack>
        </CardActions>
      </Card>
    </CheckLoadOrError>
  );
});
