/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import AppContextProvider from './context/AppContext';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const ThemeContext = React.createContext(false);
    return (
 <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetail />}/>
      </Routes>
    </BrowserRouter>
  </AppContextProvider>
  );
}

export default App;
