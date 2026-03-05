/**
 * Controleert of een todo item geldig is
 */
export function isValidTodo(text) {
  if (typeof text !== 'string') return false;
  if (text.trim().length === 0) return false;
  return true;
}

/**
 * Bepaalt de prioriteit van een todo
 */
export function getTodoPriority(text) {
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('urgent')) {
    return 'high';
  }
  
  if (lowerText.includes('snel')) {
    return 'medium';
  }
  
  return 'low';
}
