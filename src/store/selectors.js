import { createSelector } from 'reselect';

export const selectGoodsList = ({ goodsState: { data } }) => data;
export const selectGoodItem = ({ goodsState: { item } }) => item;

export const selectIsLoading = ({ actionState: { isLoading } }) => isLoading;
export const selectIsError = ({ actionState: { isError } }) => isError;

export const selectOpenModal = ({ appState: { openModal } }) => openModal;

export const selectColumn = ({ goodsState: { column } }) => column;
export const selectDirection = ({ goodsState: { direction } }) => direction;
export const selectFilter = ({ goodsState: { filter } }) => filter;
export const selectGoodsToDisplay = createSelector(
  selectGoodsList,
  selectFilter,
  (goods, filter) => goods.filter(good => good.title.toLowerCase().includes(filter.toLowerCase())),
);
