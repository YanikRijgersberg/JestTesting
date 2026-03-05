import { isValidTodo, getTodoPriority } from './todoUtils';

describe('Todo Utils', () => {
  
  // VOORBEELD - Deze test is al ingevuld om te laten zien hoe het werkt
  test('VOORBEELD: isValidTodo geeft true voor normale tekst', () => {
    const result = isValidTodo('Boodschappen doen');
    expect(result).toBe(true);
  });

  test('isValidTodo geeft false voor lege string', () => {
    // TODO: Test of '' invalid is
    expect(true).toBe(false); // Deze test faalt! Vervang deze regel met je eigen test
  });

  test('getTodoPriority geeft high voor urgent', () => {
    // TODO: Test of 'urgent bellen' priority 'high' krijgt
    expect(true).toBe(false); // Deze test faalt! Vervang deze regel met je eigen test
  });

  test('getTodoPriority geeft low voor normale todo', () => {
    // TODO: Test of 'koffie drinken' priority 'low' krijgt
    expect(true).toBe(false); // Deze test faalt! Vervang deze regel met je eigen test
  });

});
