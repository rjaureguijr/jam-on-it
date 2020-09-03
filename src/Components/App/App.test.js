import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders JamOnIt! text', () => {
  const { getByText } = render(<App />);
  const jamHeading = getByText(/Jam/i);
  expect(jamHeading).toBeInTheDocument();
});
