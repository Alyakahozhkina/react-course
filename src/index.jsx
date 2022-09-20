import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToDoList } from './components/ToDoList/ToDoList';
import './assets/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);
