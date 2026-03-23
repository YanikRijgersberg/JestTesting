import { sortByPrice, filterByCategory, searchProducts } from './productUtils';

describe('Product Utils', () => {
  
  // Test data die we in meerdere tests gebruiken
  const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
    { id: 2, name: 'Muis', price: 25, category: 'electronics' },
    { id: 3, name: 'Bureau', price: 150, category: 'furniture' },
    { id: 4, name: 'Stoel', price: 89, category: 'furniture' }
  ];

  // ── sortByPrice ──────────────────────────────────────────────────────────────

  describe('sortByPrice', () => {

    test('sorteert producten van laag naar hoog op prijs', () => {
      const result = sortByPrice(products);
      expect(result[0].price).toBe(25);
      expect(result[1].price).toBe(89);
      expect(result[2].price).toBe(150);
      expect(result[3].price).toBe(999);
    });

    test('geeft alle producten terug na sortering', () => {
      const result = sortByPrice(products);
      expect(result).toHaveLength(4);
    });

    test('muteert de originele array niet', () => {
      const original = [...products];
      sortByPrice(products);
      expect(products).toEqual(original);
    });

    test('geeft lege array terug bij lege invoer', () => {
      expect(sortByPrice([])).toEqual([]);
    });

    test('geeft array met één product ongewijzigd terug', () => {
      const single = [{ id: 1, name: 'Laptop', price: 999, category: 'electronics' }];
      expect(sortByPrice(single)).toEqual(single);
    });

  });

  // ── filterByCategory ─────────────────────────────────────────────────────────

  describe('filterByCategory', () => {

    test('geeft alleen electronics terug', () => {
      const result = filterByCategory(products, 'electronics');
      expect(result).toHaveLength(2);
      result.forEach(p => expect(p.category).toBe('electronics'));
    });

    test('geeft alleen furniture terug', () => {
      const result = filterByCategory(products, 'furniture');
      expect(result).toHaveLength(2);
      result.forEach(p => expect(p.category).toBe('furniture'));
    });

    test('geeft lege array bij onbekende categorie', () => {
      const result = filterByCategory(products, 'clothing');
      expect(result).toHaveLength(0);
    });

    test('geeft lege array bij lege invoer', () => {
      expect(filterByCategory([], 'electronics')).toEqual([]);
    });

    test('filtert op basis van exacte categorienaam (hoofdlettergevoelig)', () => {
      const result = filterByCategory(products, 'Electronics');
      expect(result).toHaveLength(0);
    });

  });


  describe('searchProducts', () => {

    test('vindt producten met exacte zoekterm', () => {
      const result = searchProducts(products, 'bureau');
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Bureau');
    });

    test('is case insensitive', () => {
      const result = searchProducts(products, 'LAPTOP');
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Laptop');
    });

    test('vindt producten met gedeeltelijke zoekterm', () => {
      const result = searchProducts(products, 'uis');
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Muis');
    });

    test('geeft lege array als niets gevonden wordt', () => {
      const result = searchProducts(products, 'tablet');
      expect(result).toHaveLength(0);
    });

    test('geeft lege array bij lege invoer', () => {
      expect(searchProducts([], 'laptop')).toEqual([]);
    });

    test('geeft alle producten terug bij lege zoekterm', () => {
      const result = searchProducts(products, '');
      expect(result).toHaveLength(4);
    });

  });

});