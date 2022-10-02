import React, { memo, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Grid, Typography } from '@mui/material';
import error from '../../../assets/img/error.png';
import { goodsPath } from '../../../utils/consts/paths';
import config from './errorPage.config';
import './errorPage.css';
import { clearError } from '../../../store/actions';

const {
  errorPageClass,
  inheritVariant,
  errorImgAlt,
  textClass,
  containedBtnVariant,
} = config;

export const ErrorPage = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  }, []);

    return (
    <Grid container className={errorPageClass}>
      <Grid item xs={12}>
        <Typography variant={inheritVariant}>
          <img src={error} alt={errorImgAlt} />
        </Typography>
        <Typography variant={inheritVariant} className={textClass}>
          The page you are looking for might be renamed, removed, or might never exist. You can return to the home page
        </Typography>
        <Button variant={containedBtnVariant} to={goodsPath} component={RouterLink}>Go home</Button>
      </Grid>
    </Grid>
  )
}
  );
