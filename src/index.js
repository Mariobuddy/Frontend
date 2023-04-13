import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MainContext from './Context/MainContext';
import ProductsContext from './Context/ProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

       
   <MainContext>
    <ProductsContext>
    <App />
    </ProductsContext>
   </MainContext>
  

  </BrowserRouter>

);
