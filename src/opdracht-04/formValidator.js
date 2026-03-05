/**
 * Valideert een email adres
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valideert een Nederlands telefoonnummer
 */
export function isValidPhone(phone) {
  // Verwijder spaties en streepjes
  const cleaned = phone.replace(/[\s-]/g, '');
  // Check of het 10 cijfers is en begint met 06 of 31
  return /^(06|31)\d{8}$/.test(cleaned);
}

/**
 * Valideert een Nederlandse postcode
 */
export function isValidPostcode(postcode) {
  // Format: 1234 AB of 1234AB
  const cleaned = postcode.replace(/\s/g, '').toUpperCase();
  return /^\d{4}[A-Z]{2}$/.test(cleaned);
}

/**
 * Valideert een volledig formulier
 */
export function validateForm(formData) {
  const errors = [];
  
  if (!isValidEmail(formData.email)) {
    errors.push('Ongeldig email adres');
  }
  
  if (!isValidPhone(formData.phone)) {
    errors.push('Ongeldig telefoonnummer');
  }
  
  if (!isValidPostcode(formData.postcode)) {
    errors.push('Ongeldige postcode');
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
}
