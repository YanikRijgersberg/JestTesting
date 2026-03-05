export function getRank(score) {
  if (score >= 100) return 'Legend';
  if (score >= 50) return 'Pro';
  if (score >= 10) return 'Beginner';
  return 'Noob';
}

// Telt twee scores bij elkaar op
export function addScores(score1, score2) {
  return score1 + score2;
}

// Checkt of een speler gewonnen heeft (score >= 100)
export function hasWon(score) {
  return score >= 100;
}

// Geeft de hoogste score terug
export function getHighScore(score1, score2) {
  if (score1 > score2) return score1;
  return score2;
}