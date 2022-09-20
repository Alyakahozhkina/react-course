import React, { memo, useCallback, useState } from 'react';
import { Container, Typography } from '@mui/material';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import { ToDoCard } from '../ToDoCard/ToDoCard';
import { ToDoFormModal } from '../ToDoFormModal/ToDoFormModal';
import { initialData } from '../../utils/dataUtils';
import { FilterForm } from '../FilterForm/FilterForm';
import { SortingButtons } from '../SortingButtons/SortingButtons';
import config from './toDoList.config';
import './toDoList.css';

dayjs.extend(customParseFormat);

const {
  emptyString,
  toDoListClass,
  h4Variant,
  noToDoClass,
} = config;

export const ToDoList = memo(() => {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(data);
  const [open, setOpen] = useState(false);
  const [elementToEdit, setElementToEdit] = useState({});
  const [status, setStatus] = useState(emptyString);
  const [priority, setPriority] = useState(emptyString);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const addToDo = useCallback((toDo) => {
    const setNewDate = (setter, dataToFilter) => {
      setter([...dataToFilter, toDo]);
    };
    setNewDate(setData, data);
    if (toDo.status === status && toDo.priority === priority) setNewDate(setFilteredData, filteredData);
    if (!status && toDo.priority === priority) setNewDate(setFilteredData, filteredData);
    if (!priority && toDo.status === status) setNewDate(setFilteredData, filteredData);
    if (!priority && !status) setNewDate(setFilteredData, data);
  }, [data, filteredData, priority, status]);

  const editToDo = useCallback((toDo) => {
    const newData = (dataToFilter) => dataToFilter.map((elem) => {
      if (elem.id === toDo.id) {
        return toDo;
      }
      return elem;
    });
    setData(newData(data));
    setFilteredData(newData(filteredData));
  }, [data, filteredData]);

  const removeToDo = useCallback((id) => {
    const newData = (dataToFilter) => dataToFilter.filter((elem) => elem.id !== id);
    setData(newData(data));
    setFilteredData(newData(filteredData));
  }, [data, filteredData]);

  return (
    <>
      <FilterForm
        setStatus={setStatus}
        setPriority={setPriority}
        setFilteredData={setFilteredData}
        data={data}
      />
      <SortingButtons
        setFilteredData={setFilteredData}
        filteredData={filteredData}
      />
      <Container
        disableGutters
        className={toDoListClass}
      >
        { filteredData.length ? filteredData.map((elem) => (
          <ToDoCard
            key={elem.id}
            card={elem}
            removeToDo={removeToDo}
            handleOpen={handleOpen}
            setElementToEdit={setElementToEdit}
          />
        )) : (
          <Typography
            variant={h4Variant}
            className={noToDoClass}
          >
            You don&apos;t have such a task, you can add some right now
          </Typography>
        )}
      </Container>
      <ToDoFormModal
        addToDo={addToDo}
        editToDo={editToDo}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        elementToEdit={elementToEdit}
        setElementToEdit={setElementToEdit}
      />
    </>
  );
});
