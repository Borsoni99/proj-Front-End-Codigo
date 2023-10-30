import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Primeiro from './pages/Primeiro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Segundo from './pages/Segundo';
import Listagem from './pages/Listagem/Listagem';
import MAPA from './pages/Mapa';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <MAPA />
  </StrictMode>
  /*
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Primeiro />} />
        <Route path="segunda" element={<Segundo />} />
        <Route path="listagem" element={<Listagem />} />
        <Route path="mapa" function={<MAPA />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
