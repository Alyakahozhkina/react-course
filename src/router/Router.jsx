import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ErrorPage } from '../components/common/ErrorPage/ErrorPage';
import { GoodsList } from '../components/GoodsList/GoodsList';
import { GoodItem } from '../components/GoodItem/GoodItem';
import { allPaths, emptyPath, errorPath, goodDetailPath, goodsPath } from '../utils/consts/paths';

export const Router = () => (
  <Routes>
    <Route path={goodsPath} element={<GoodsList />} />
    <Route path={goodDetailPath} element={<GoodItem />} />
    <Route path={emptyPath} element={<Navigate replace to={goodsPath} />} />
    <Route path={errorPath} element={<ErrorPage />} />
    <Route path={allPaths} element={<Navigate replace to={errorPath} />} />
  </Routes>
);
