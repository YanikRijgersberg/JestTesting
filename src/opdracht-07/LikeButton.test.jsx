import { render, screen, fireEvent } from '@testing-library/react';
import LikeButton from './LikeButton';

describe('LikeButton', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont initiële aantal likes', () => {
    render(<LikeButton initialLikes={5} />);
    expect(screen.getByText('5 likes')).toBeInTheDocument();
  });

  test('verhoogt likes bij klik', () => {
    // TODO: Render LikeButton met initialLikes={0}
    // TODO: Vind de button (Hint: screen.getByRole('button'))
    // TODO: Klik op de button (Hint: fireEvent.click(button))
    // TODO: Check of "1 likes" op het scherm staat
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('verlaagt likes bij tweede klik', () => {
    // TODO: Render LikeButton
    // TODO: Klik 2x op de button
    // TODO: Check of we terug zijn bij "0 likes"
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('toont rood hartje als geliked', () => {
    // TODO: Render LikeButton
    // TODO: Klik op de button
    // TODO: Check of de button tekst "❤️ Like" bevat
    // Hint: screen.getByText(/❤️ Like/)
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

});
