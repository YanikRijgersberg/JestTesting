# Opdracht 5: Quiz Score Berekenen

## Doel
Oefen meer met `beforeEach()` en `afterEach()`.

## Wat ga je doen?
Je gaat tests schrijven voor quiz score functies. Je gebruikt `beforeEach()` om quiz antwoorden klaar te zetten.

## Bestanden
- `quizScore.js` - De score functies (al klaar)
- `quizScore.test.js` - Het test bestand waar jij tests invult

## Wat moet je testen?
1. `calculateTotalScore()` - Telt punten op
2. `calculatePercentage()` - Berekent percentage goed
3. `isPassed()` - Check of quiz gehaald is (60%+)
4. `getGrade()` - Geeft beoordeling (Excellent/Goed/Voldoende/Onvoldoende)
5. `countWrongAnswers()` - Telt foute antwoorden

## Wat heb je nodig?
- `beforeEach()` - Om quiz antwoorden array klaar te zetten
- `afterEach()` - Om op te ruimen (optioneel in deze opdracht)
- `.toBe()` - Voor getallen en strings
- `.toBeGreaterThan()` - Voor "groter dan" checks

## Cheat Sheet
Bekijk deze pagina:
- [Setup en Teardown](https://jschaik.github.io/Fullstack-Cheat-Sheet/pages/jest/setup.html)

## Hoe te starten?
1. Open `src/opdracht-05/quizScore.test.js`
2. **Belangrijk:** Vul eerst `beforeEach()` in met quiz antwoorden
3. Gebruik die `quizAnswers` in je tests
4. Run: `npm test opdracht-05`
5. Alle tests groen? Je bent klaar! ✅

## Tips
- Elk antwoord is een object: `{ question: 1, isCorrect: true, points: 10 }`
- Maak een array met 5 antwoorden (4 goed, 1 fout = 80%)
- De `quizAnswers` variabele is beschikbaar in alle tests
- Je kunt in tests nieuwe arrays maken voor andere percentages
