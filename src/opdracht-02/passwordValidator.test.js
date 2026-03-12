import { validatePassword } from './passwordValidator';

describe('Password Validator', () => {
  
  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: geldig wachtwoord geeft isValid true', () => {
    const result = validatePassword('Welkom123');
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  test('te kort wachtwoord geeft error', () => {
    // TODO: Test of 'Test1' invalid is
    // Hint: check of isValid false is
    const result = validatePassword('Test1')
    expect(result.isValid).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('wachtwoord zonder nummer geeft error', () => {
    const result = validatePassword('Welkomtestje')
    expect(result.isValid).toBe(false); // Deze test faalt! Vervang met je eigen test
    expect(result.errors).toContain('Moet minimaal 1 nummer bevatten'); // Deze test faalt! Vervang met je eigen test
    
  });

  test('wachtwoord zonder hoofdletter geeft error', () => {
      const result = validatePassword('welkom1234')
      expect(result.isValid).toBe(false); // Deze test faalt! Vervang met je eigen test
      expect(result.errors).toContain('Moet minimaal 1 hoofdletter bevatten');
  });

  test('errors array bevat juiste foutmeldingen', () => {
    // TODO: Test of 'test' meerdere errors teruggeeft
    // Hint: gebruik .toContain() om te checken of een error in de array zit
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

});
