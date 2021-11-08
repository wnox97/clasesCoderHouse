import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export function useProducts() {
  const { products, setProducts } = useContext(AppContext);
  return [products, setProducts];
}