import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont de naam', () => {
    render(<ProfileCard name="Jan" age={25} />);
    const heading = screen.getByText('Jan');
    expect(heading).toBeInTheDocument();
  });

  test('toont de leeftijd', () => {
    render(<ProfileCard name="Piet" age={30} />);
    const leeftijd = screen.getByText('Leeftijd: 30');
    expect(leeftijd).toBeInTheDocument();
  });

  test('toont bio als die er is', () => {
    render(<ProfileCard name="Piet" age={30} bio="Ik hou van programmeren" />);
    const bio = screen.getByText('Ik hou van programmeren');
    expect(bio).toBeInTheDocument();
  });

  test('toont fallback tekst als bio ontbreekt', () => {
    render(<ProfileCard name="Piet" age={30} />);
    const fallback = screen.getByText('Geen bio beschikbaar');
    expect(fallback).toBeInTheDocument();
  });

});