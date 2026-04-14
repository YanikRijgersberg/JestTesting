import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont input veld', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    expect(input).toBeInTheDocument();
  });

  test('update input bij typen', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'React' } });
    expect(input.value).toBe('React');
  });

  test('toont zoekterm onder de input', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'Jest' } });
    expect(screen.getByText('Zoeken naar: Jest')).toBeInTheDocument();
  });

  test('toont wissen button als er tekst is', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'React' } });
    expect(screen.getByRole('button', { name: 'Wissen' })).toBeInTheDocument();
  });

  test('wissen button maakt input leeg', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'React' } });
    fireEvent.click(screen.getByRole('button', { name: 'Wissen' }));
    expect(input.value).toBe('');
  });

});