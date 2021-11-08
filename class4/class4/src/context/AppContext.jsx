/* eslint-disable react/prop-types */
import React from 'react';

export const AppContext = React.createContext({});

export default function AppContextProvider({
  children,
}) {
  const [darkMode, setDarkMode] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  return (
    <AppContext.Provider value={{ 
        darkMode, 
        setDarkMode, 
        products, 
        setProducts
    }}>
      {children}
    </AppContext.Provider>
  );
}