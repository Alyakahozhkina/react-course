import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  Box, Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  BorderColor,
  Delete,
  Info,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { deleteGood, getGoodsList } from '../../thunks/thunksGoods';
import { closeFormModal, openFormModal } from '../../store/actions';
import { selectGoodsToDisplay, selectOpenModal } from '../../store/selectors';
import { FilterGood } from '../FilterGood/FilterGood';
import { GoodsAddForm } from '../goodsForms/GoodsAddForm';
import { GoodsEditForm } from '../goodsForms/GoodsEditForm';
import { goodDetailCustomPath } from '../../utils/consts/paths';
import { SortingIconButton } from '../common/SortingIconButton/SortingIconButton';
import { CheckLoadOrError } from '../common/HOC/CheckLoadOrError';
import config from './goodsList.config';
import './goodsList.css';

const {
  tableContainerClass,
  tableClass,
  tableHeadClass,
  tableRowClass,
  tableCellClass,
  tableBodyClass,
  buttonsBoxClass,
  centerAlign,
  leftAlign,
  h4Variant,
  h6Variant,
  rowDirection,
  secondSpacing,
  primaryColor,
  successColor,
  errorColor,
  noGoodClass,
  titleColumnName,
  weightColumnName,
  descriptionColumnName,
  categoryColumnName,
} = config;

export const GoodsList = memo(() => {
  const dispatch = useDispatch();
  const [idEditGood, setIdEditGood] = useState(false);
  const goodsList = useSelector(selectGoodsToDisplay);
  const open = useSelector(selectOpenModal);

  const handleOpen = useCallback(() => dispatch(openFormModal()), []);
  const handleClose = useCallback(() => dispatch(closeFormModal()), []);

  useEffect(() => {
    dispatch(getGoodsList());
  }, [dispatch]);

  return (
    <CheckLoadOrError>
      <FilterGood />
      { goodsList.length
        ? (
          <Grid container className={tableContainerClass}>
            <Box className={tableClass}>
              <Box className={tableHeadClass}>
                <Box className={tableRowClass}>
                  <Grid item className={tableCellClass} align={centerAlign}>#</Grid>
                  <Grid item className={tableCellClass} align={leftAlign}>
                    Title
                    <SortingIconButton columnName={titleColumnName} />
                  </Grid>
                  <Grid item className={tableCellClass} align={leftAlign}>
                    Weight
                    <SortingIconButton columnName={weightColumnName} />
                  </Grid>
                  <Grid item className={tableCellClass} align={leftAlign}>
                    Description
                    <SortingIconButton columnName={descriptionColumnName} />
                  </Grid>
                  <Grid item className={tableCellClass} align={leftAlign}>
                    Category
                    <SortingIconButton columnName={categoryColumnName} />
                  </Grid>
                  <Grid item className={tableCellClass} align={centerAlign} />
                </Box>
              </Box>
              <Box className={tableBodyClass}>
                {goodsList.map((good, index) => (
                  idEditGood === good.id
                    ? (
                      <GoodsEditForm
                        good={good}
                        index={index}
                        setIdEditGood={setIdEditGood}
                        key={good.id}
                      />
                    )
                    : (
                      <Box className={tableRowClass} key={good.id}>
                        <Grid item className={tableCellClass} align={centerAlign} sx={{ width: 75 }}>
                          <Typography noWrap sx={{ maxWidth: 43 }}>{index + 1}</Typography>
                        </Grid>
                        <Grid item className={tableCellClass} align={leftAlign} sx={{ width: 360 }}>
                          <Typography variant={h6Variant} noWrap sx={{ maxWidth: 328 }}>{good.title}</Typography>
                        </Grid>
                        <Grid item className={tableCellClass} align={leftAlign} sx={{ width: 250 }}>
                          <Typography noWrap sx={{ maxWidth: 218 }}>{good.weight}</Typography>
                        </Grid>
                        <Grid item className={tableCellClass} align={leftAlign} sx={{ width: 400 }}>
                          <Typography noWrap sx={{ maxWidth: 368 }}>{good.description}</Typography>
                        </Grid>
                        <Grid item className={tableCellClass} align={leftAlign} sx={{ width: 250 }}>
                          <Typography noWrap sx={{ maxWidth: 218 }}>{good.category}</Typography>
                        </Grid>
                        <Grid item className={tableCellClass} align={centerAlign}>
                          <Stack
                            direction={rowDirection}
                            spacing={secondSpacing}
                            className={buttonsBoxClass}
                          >
                            <IconButton
                              color={primaryColor}
                              to={goodDetailCustomPath(good.id)}
                              component={RouterLink}
                            >
                              <Info />
                            </IconButton>
                            <IconButton color={successColor} onClick={() => setIdEditGood(good.id)}>
                              <BorderColor />
                            </IconButton>
                            <IconButton color={errorColor} onClick={() => dispatch(deleteGood(good.id))}><Delete /></IconButton>
                          </Stack>
                        </Grid>
                      </Box>
                    )
                ))}
              </Box>
            </Box>
          </Grid>
        )
        : (
          <Typography
            variant={h4Variant}
            className={noGoodClass}
          >
            You don&apos;t have such   good at list, you can add some right now
          </Typography>
        ) }
      <GoodsAddForm
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </CheckLoadOrError>
  );
});
