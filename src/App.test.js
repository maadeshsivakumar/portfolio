import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/software/i);
  expect(headingElement).toBeInTheDocument();
});
