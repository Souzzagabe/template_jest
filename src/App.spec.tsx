import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  const { getByText } = render(<App />);
  
  // Verifica se o texto está presente no componente
  const linkElement = getByText(/Vite \+ React/i);
  expect(linkElement).toBeInTheDocument();
});

test('increments count when button is clicked', () => {
  const { getByText } = render(<App />);
  
  // Verifica se o botão está presente no componente
  const buttonElement = getByText(/count is 0/i);
  expect(buttonElement).toBeInTheDocument();
  
  // Simula um clique no botão
  fireEvent.click(buttonElement);
  
  // Verifica se o estado do contador foi atualizado corretamente
  const updatedButtonElement = getByText(/count is 1/i);
  expect(updatedButtonElement).toBeInTheDocument();
});
