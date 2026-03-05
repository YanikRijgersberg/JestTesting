/**
 * Sorteert producten op prijs (laag naar hoog)
 */
export function sortByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price);
}

/**
 * Filtert producten op categorie
 */
export function filterByCategory(products, category) {
  return products.filter(product => product.category === category);
}

/**
 * Zoekt producten die een bepaalde term bevatten
 */
export function searchProducts(products, searchTerm) {
  const lowerSearch = searchTerm.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerSearch)
  );
}
