import { ShoppingCart } from './ShoppingCart';

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: nieuwe cart is leeg', () => {
    expect(cart.getItemCount()).toBe(0);
  });

  test('addItem voegt product toe', () => {
    cart.addItem({ id: 1, name: 'Laptop', price: 999 });
    expect(cart.getItemCount()).toBe(1);
  });

  test('addItem met quantity voegt meerdere items toe', () => {
    cart.addItem({ id: 1, name: 'Laptop', price: 999 }, 3);
    expect(cart.getItemCount()).toBe(3);
  });

  test('getTotal berekent juiste totaal', () => {
    cart.addItem({ id: 1, name: 'Muis', price: 25 }, 2);
    expect(cart.getTotal()).toBe(50);
  });

  test('removeItem verwijdert product', () => {
    cart.addItem({ id: 1, name: 'Laptop', price: 999 });
    cart.removeItem(1);
    expect(cart.getItemCount()).toBe(0);
  });

  test('clear maakt cart leeg', () => {
    cart.addItem({ id: 1, name: 'Laptop', price: 999 });
    cart.addItem({ id: 2, name: 'Muis', price: 25 });
    cart.clear();
    expect(cart.getItemCount()).toBe(0);
  });

});