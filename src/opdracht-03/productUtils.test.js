import { sortByPrice, filterByCategory, searchProducts } from './productUtils';

describe('Product Utils', () => {
  
  // Test data die we in meerdere tests gebruiken
  const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
    { id: 2, name: 'Muis', price: 25, category: 'electronics' },
    { id: 3, name: 'Bureau', price: 150, category: 'furniture' },
    { id: 4, name: 'Stoel', price: 89, category: 'furniture' }
  ];

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: sortByPrice sorteert op prijs laag naar hoog', () => {
    const result = sortByPrice(products);
    expect(result[0].name).toBe('Muis');
    expect(result[3].name).toBe('Laptop');
  });

  test('filterByCategory geeft alleen electronics terug', () => {
    // TODO: Filter op category 'electronics'
    // TODO: Check of er 2 producten terugkomen
    // Hint: gebruik .toHaveLength(2)
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('filterByCategory geeft lege array bij onbekende categorie', () => {
    // TODO: Filter op category 'clothing' (bestaat niet)
    // TODO: Check of de array leeg is
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('searchProducts vindt producten met zoekterm', () => {
    // TODO: Zoek naar 'bureau'
    // TODO: Check of resultaat 1 product bevat
    // TODO: Check of dat product 'Bureau' heet
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('searchProducts is case insensitive', () => {
    // TODO: Zoek naar 'LAPTOP' (hoofdletters)
    // TODO: Check of het resultaat 'Laptop' bevat
    // Hint: gebruik .toHaveLength(1)
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

});
