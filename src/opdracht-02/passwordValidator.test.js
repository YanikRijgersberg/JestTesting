import { validatePassword } from './passwordValidator.js';

describe('Password Validator', () => {

  // ── Geldig wachtwoord ────────────────────────────────────────────────────────

  test('VOORBEELD: geldig wachtwoord geeft isValid true', () => {
    const result = validatePassword('Welkom123');
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  // ── Lengte ───────────────────────────────────────────────────────────────────

  test('te kort wachtwoord geeft isValid false', () => {
    const result = validatePassword('Test1');
    expect(result.isValid).toBe(false);
  });

  test('te kort wachtwoord geeft de juiste foutmelding', () => {
    const result = validatePassword('Test1');
    expect(result.errors).toContain('Moet minimaal 8 tekens lang zijn');
  });

  test('wachtwoord van precies 8 tekens is geldig qua lengte', () => {
    const result = validatePassword('Welkom12');
    expect(result.isValid).toBe(true);
  });

  // ── Nummer vereiste ──────────────────────────────────────────────────────────

  test('wachtwoord zonder nummer geeft isValid false', () => {
    const result = validatePassword('Welkomtestje');
    expect(result.isValid).toBe(false);
  });

  test('wachtwoord zonder nummer geeft de juiste foutmelding', () => {
    const result = validatePassword('Welkomtestje');
    expect(result.errors).toContain('Moet minimaal 1 nummer bevatten');
  });

  // ── Hoofdletter vereiste ─────────────────────────────────────────────────────

  test('wachtwoord zonder hoofdletter geeft isValid false', () => {
    const result = validatePassword('welkom1234');
    expect(result.isValid).toBe(false);
  });

  test('wachtwoord zonder hoofdletter geeft de juiste foutmelding', () => {
    const result = validatePassword('welkom1234');
    expect(result.errors).toContain('Moet minimaal 1 hoofdletter bevatten');
  });

  // ── Meerdere errors tegelijk ─────────────────────────────────────────────────

  test("'test' geeft meerdere fouten terug", () => {
    const result = validatePassword('test');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Moet minimaal 8 tekens lang zijn');
    expect(result.errors).toContain('Moet minimaal 1 nummer bevatten');
    expect(result.errors).toContain('Moet minimaal 1 hoofdletter bevatten');
    expect(result.errors.length).toBeGreaterThanOrEqual(3);
  });

  test('errors array is leeg bij een geldig wachtwoord', () => {
    const result = validatePassword('Welkom123');
    expect(result.errors).toHaveLength(0);
  });

  // ── Lege invoer ──────────────────────────────────────────────────────────────

  test('leeg wachtwoord geeft isValid false', () => {
    const result = validatePassword('');
    expect(result.isValid).toBe(false);
  });

  test('leeg wachtwoord geeft meerdere foutmeldingen', () => {
    const result = validatePassword('');
    expect(result.errors.length).toBeGreaterThanOrEqual(1);
  });

});