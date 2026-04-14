import { render, screen, fireEvent } from '@testing-library/react';
import LikeButton from './LikeButton';

describe('LikeButton', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont initiële aantal likes', () => {
    render(<LikeButton initialLikes={5} />);
    expect(screen.getByText('5 likes')).toBeInTheDocument();
  });

  test('verhoogt likes bij klik', () => {
    render(<LikeButton initialLikes={0} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('1 likes')).toBeInTheDocument();
  });

  test('verlaagt likes bij tweede klik', () => {
    render(<LikeButton initialLikes={0} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.getByText('0 likes')).toBeInTheDocument();
  });

  test('toont rood hartje als geliked', () => {
    render(<LikeButton initialLikes={0} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText(/❤️ Like/)).toBeInTheDocument();
  });

});