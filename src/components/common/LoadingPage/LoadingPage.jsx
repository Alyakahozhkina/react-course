import React, { memo } from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';
import './loadingPage.css';
import config from './loadingPage.config';

const {
  loadingPageClass,
  itemClass,
  boxClass,
  circularProgressSize,
} = config;

export const LoadingPage = memo(() => (
  <Grid container className={loadingPageClass}>
    <Grid item xs={12} className={itemClass}>
      <Box className={boxClass}>
        <CircularProgress size={circularProgressSize} />
      </Box>
    </Grid>
  </Grid>
));
