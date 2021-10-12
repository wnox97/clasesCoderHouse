import { render, screen } from '@testing-library/react';
import App from './App';

// Este Archivo es para realizar pruebas unitarias de los componentes, no lo toquen
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
