import { isValidEmail, isValidPhone, isValidPostcode, validateForm } from './formValidator';

describe('Form Validator', () => {
  let testData;

  beforeEach(() => {
    testData = {
      email: 'test@example.com',
      phone: '0612345678',
      postcode: '1234 AB'
    };
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: isValidEmail accepteert geldig email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('isValidEmail weigert email zonder @', () => {
    expect(isValidEmail('testexample.com')).toBe(false);
  });

  test('isValidPhone accepteert 06 nummer', () => {
    expect(isValidPhone('0612345678')).toBe(true);
  });

  test('isValidPhone accepteert nummer met streepjes', () => {
    expect(isValidPhone('06-1234-5678')).toBe(true);
  });

  test('isValidPostcode accepteert postcode met spatie', () => {
    expect(isValidPostcode('1234 AB')).toBe(true);
  });

  test('isValidPostcode accepteert postcode zonder spatie', () => {
    expect(isValidPostcode('1234AB')).toBe(true);
  });

  test('validateForm geeft errors bij ongeldig formulier', () => {
    testData.email = 'geen-geldig-email';
    const result = validateForm(testData);
    expect(result.errors.length).toBeGreaterThan(0);
  });

});