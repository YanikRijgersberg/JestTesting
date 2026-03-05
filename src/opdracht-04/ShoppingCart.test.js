import { ShoppingCart } from './ShoppingCart';

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    // TODO: Maak hier een nieuwe ShoppingCart aan
    // Hint: cart = new ShoppingCart();
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: nieuwe cart is leeg', () => {
    cart = new ShoppingCart();
    expect(cart.getItemCount()).toBe(0);
  });

  test('addItem voegt product toe', () => {
    // TODO: Voeg een product toe: { id: 1, name: 'Laptop', price: 999 }
    // TODO: Check of getItemCount() nu 1 is
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('addItem met quantity voegt meerdere items toe', () => {
    // TODO: Voeg product toe met quantity 3
    // TODO: Check of getItemCount() 3 is
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('getTotal berekent juiste totaal', () => {
    // TODO: Voeg product toe: { id: 1, name: 'Muis', price: 25 }, quantity 2
    // TODO: Check of getTotal() 50 teruggeeft (2 x 25)
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('removeItem verwijdert product', () => {
    // TODO: Voeg een product toe met id: 1
    // TODO: Roep removeItem(1) aan
    // TODO: Check of getItemCount() 0 is
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('clear maakt cart leeg', () => {
    // TODO: Voeg 2 producten toe
    // TODO: Roep clear() aan
    // TODO: Check of getItemCount() 0 is
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

});
