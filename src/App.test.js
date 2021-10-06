/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

function setup() {
  return (
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )
  );
}

describe('Header', () => {
  test('"About" link points to the correct page', () => {
    setup();
    const link1 = screen.getByRole('link', { name: 'About' });
    userEvent.click(link1);
    expect(screen.getByRole('heading', { name: /about cocktail search/i })).toBeInTheDocument();
  });
});
