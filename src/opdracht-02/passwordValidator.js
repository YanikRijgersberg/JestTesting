/**
 * Valideert een wachtwoord en geeft feedback
 */
export function validatePassword(password) {
  const errors = [];
  
  if (password.length < 8) {
    errors.push('Minimaal 8 karakters');
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push('Moet minimaal 1 nummer bevatten');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Moet minimaal 1 hoofdletter bevatten');
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
}
