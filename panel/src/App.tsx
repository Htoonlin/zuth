import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { GlobalTextProvider } from './utilities/global-text-provider';

function App() {
  return (
    <GlobalTextProvider>
        <RouterProvider router={router} ></RouterProvider>
    </GlobalTextProvider>
  );
}

export default App;
