import { HighlighterProvider } from '@arubiku/react-markdown';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App, { ThemeProvider } from './App';
import './index.css';
const RouterType = BrowserRouter;

ReactDOM.render(
  <ThemeProvider>
    <HighlighterProvider>
  <React.StrictMode>
    
  <RouterType>
    <Routes>
    <Route path="*" element={<App />} />
    </Routes> 
    </RouterType>
  </React.StrictMode>
  </HighlighterProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
