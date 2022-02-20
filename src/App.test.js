import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react 1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Trang/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react 2', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Trang/i);
  expect(linkElement).toBeInTheDocument();
});