/**
 * Berekent de totale score van een quiz
 */
export function calculateTotalScore(answers) {
  return answers.reduce((total, answer) => total + answer.points, 0);
}

/**
 * Berekent het percentage goede antwoorden
 */
export function calculatePercentage(answers) {
  const correct = answers.filter(answer => answer.isCorrect).length;
  return Math.round((correct / answers.length) * 100);
}

/**
 * Bepaalt of de quiz is gehaald (minimaal 60%)
 */
export function isPassed(answers) {
  return calculatePercentage(answers) >= 60;
}

/**
 * Geeft een beoordeling op basis van percentage
 */
export function getGrade(answers) {
  const percentage = calculatePercentage(answers);
  
  if (percentage >= 90) return 'Excellent';
  if (percentage >= 75) return 'Goed';
  if (percentage >= 60) return 'Voldoende';
  return 'Onvoldoende';
}

/**
 * Telt het aantal foute antwoorden
 */
export function countWrongAnswers(answers) {
  return answers.filter(answer => !answer.isCorrect).length;
}
