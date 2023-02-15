import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Department from './Department';

describe('<Department />', () => {
  test('it should mount', () => {
    render(<Department />);
    
    const department = screen.getByTestId('Department');

    expect(department).toBeInTheDocument();
  });
});