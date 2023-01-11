import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TaskConetextProvider } from './context/TaskContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskConetextProvider>
      <App />
    </TaskConetextProvider>
  </React.StrictMode>
);
