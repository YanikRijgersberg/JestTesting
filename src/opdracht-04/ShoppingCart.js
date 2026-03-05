/**
 * Een simpele winkelwagen class
 */
export class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity = 1) {
    this.items.push({ ...product, quantity });
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  clear() {
    this.items = [];
  }
}
