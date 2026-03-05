import { isValidEmail, isValidPhone, isValidPostcode, validateForm } from './formValidator';

describe('Form Validator', () => {
  let testData;

  beforeEach(() => {
    // TODO: Maak hier een testData object aan met geldige gegevens
    // testData = {
    //   email: 'test@example.com',
    //   phone: '0612345678',
    //   postcode: '1234 AB'
    // };
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: isValidEmail accepteert geldig email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('isValidEmail weigert email zonder @', () => {
    // TODO: Test of 'testexample.com' false teruggeeft
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('isValidPhone accepteert 06 nummer', () => {
    // TODO: Test of '0612345678' geldig is
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('isValidPhone accepteert nummer met streepjes', () => {
    // TODO: Test of '06-1234-5678' geldig is
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('isValidPostcode accepteert postcode met spatie', () => {
    // TODO: Test of '1234 AB' geldig is
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('isValidPostcode accepteert postcode zonder spatie', () => {
    // TODO: Test of '1234AB' geldig is
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('validateForm geeft errors bij ongeldig formulier', () => {
    // TODO: Gebruik de testData uit beforeEach
    // TODO: Verander testData.email naar iets ongeldig
    // TODO: Check of errors array niet leeg is
    // Hint: Je moet eerst beforeEach invullen!
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

});
