import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export function useDarkMode() {
  const { darkMode, setDarkMode } = useContext(AppContext);
  return [darkMode, setDarkMode];
}