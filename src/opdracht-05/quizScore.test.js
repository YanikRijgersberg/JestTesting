import {
  calculateTotalScore,
  calculatePercentage,
  isPassed,
  getGrade,
  countWrongAnswers
} from './quizCalculator';

describe('Quiz Calculator', () => {
  let allCorrect;
  let allWrong;
  let mixed;

  beforeEach(() => {
    allCorrect = [
      { points: 10, isCorrect: true },
      { points: 10, isCorrect: true },
      { points: 10, isCorrect: true },
    ];

    allWrong = [
      { points: 0, isCorrect: false },
      { points: 0, isCorrect: false },
      { points: 0, isCorrect: false },
    ];

    mixed = [
      { points: 10, isCorrect: true },
      { points: 10, isCorrect: true },
      { points: 0,  isCorrect: false },
      { points: 0,  isCorrect: false },
    ];
  });

  // --- calculateTotalScore ---

  test('calculateTotalScore telt punten correct op', () => {
    expect(calculateTotalScore(allCorrect)).toBe(30);
  });

  test('calculateTotalScore geeft 0 bij geen punten', () => {
    expect(calculateTotalScore(allWrong)).toBe(0);
  });

  // --- calculatePercentage ---

  test('calculatePercentage geeft 100 bij alles goed', () => {
    expect(calculatePercentage(allCorrect)).toBe(100);
  });

  test('calculatePercentage geeft 0 bij alles fout', () => {
    expect(calculatePercentage(allWrong)).toBe(0);
  });

  test('calculatePercentage geeft 50 bij helft goed', () => {
    expect(calculatePercentage(mixed)).toBe(50);
  });

  // --- isPassed ---

  test('isPassed geeft true bij 100%', () => {
    expect(isPassed(allCorrect)).toBe(true);
  });

  test('isPassed geeft false bij 0%', () => {
    expect(isPassed(allWrong)).toBe(false);
  });

  test('isPassed geeft false bij 50%', () => {
    expect(isPassed(mixed)).toBe(false);
  });

  test('isPassed geeft true bij precies 60%', () => {
    const borderline = [
      { points: 10, isCorrect: true },
      { points: 10, isCorrect: true },
      { points: 10, isCorrect: true },
      { points: 0,  isCorrect: false },
      { points: 0,  isCorrect: false },
    ];
    expect(isPassed(borderline)).toBe(true);
  });

  // --- getGrade ---

  test('getGrade geeft Excellent bij 90% of hoger', () => {
    expect(getGrade(allCorrect)).toBe('Excellent');
  });

  test('getGrade geeft Goed bij 75%', () => {
    const answers = [
      { points: 10, isCorrect: true },
      { points: 10, isCorrect: true },
      { points: 10, isCorrect: true },
      { points: 0,  isCorrect: false },
    ];
    expect(getGrade(answers)).toBe('Goed');
  });

  test('getGrade geeft Voldoende bij 60%', () => {
    const borderline = [
      { points: 10, isCorrect: true },
      { points: 10, isCorrect: true },
      { points: 10, isCorrect: true },
      { points: 0,  isCorrect: false },
      { points: 0,  isCorrect: false },
    ];
    expect(getGrade(borderline)).toBe('Voldoende');
  });

  test('getGrade geeft Onvoldoende bij minder dan 60%', () => {
    expect(getGrade(allWrong)).toBe('Onvoldoende');
  });

  // --- countWrongAnswers ---

  test('countWrongAnswers telt foute antwoorden', () => {
    expect(countWrongAnswers(mixed)).toBe(2);
  });

  test('countWrongAnswers geeft 0 bij alles goed', () => {
    expect(countWrongAnswers(allCorrect)).toBe(0);
  });

  test('countWrongAnswers geeft totaal bij alles fout', () => {
    expect(countWrongAnswers(allWrong)).toBe(3);
  });

});