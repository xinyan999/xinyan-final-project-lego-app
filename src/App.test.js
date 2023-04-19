import { render, screen } from '@testing-library/react';
import App from './components/App/App.js'

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  const linkElement = screen.getByText(/Light up your creativity with Lego/i);
  expect(linkElement).toBeInTheDocument();
});
