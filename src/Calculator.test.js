import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './Calculator';

describe('Calculator Component', () => {
  test('renders calculator heading', () => {
    render(<Calculator />);
    const heading = screen.getByText(/Simple Calculator/i);
    expect(heading).toBeInTheDocument();
  });

  test('adds two numbers correctly', () => {
    render(<Calculator />);

    const num1Input = screen.getByTestId('num1-input');
    const num2Input = screen.getByTestId('num2-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(num1Input, { target: { value: '5' } });
    fireEvent.change(num2Input, { target: { value: '3' } });
    fireEvent.click(addButton);

    const result = screen.getByTestId('result');
    expect(result).toHaveTextContent('Result: 8');
  });

  test('subtracts two numbers correctly', () => {
    render(<Calculator />);

    const num1Input = screen.getByTestId('num1-input');
    const num2Input = screen.getByTestId('num2-input');
    const subtractButton = screen.getByTestId('subtract-button');

    fireEvent.change(num1Input, { target: { value: '10' } });
    fireEvent.change(num2Input, { target: { value: '4' } });
    fireEvent.click(subtractButton);

    const result = screen.getByTestId('result');
    expect(result).toHaveTextContent('Result: 6');
  });

  test('clears inputs and result', () => {
    render(<Calculator />);

    const num1Input = screen.getByTestId('num1-input');
    const num2Input = screen.getByTestId('num2-input');
    const addButton = screen.getByTestId('add-button');
    const clearButton = screen.getByTestId('clear-button');

    // Add some numbers first
    fireEvent.change(num1Input, { target: { value: '5' } });
    fireEvent.change(num2Input, { target: { value: '3' } });
    fireEvent.click(addButton);

    // Clear everything
    fireEvent.click(clearButton);

    expect(num1Input).toHaveValue(null);
    expect(num2Input).toHaveValue(null);
    expect(screen.queryByTestId('result')).not.toBeInTheDocument();
  });
});
