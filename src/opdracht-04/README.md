# Opdracht 4: Form Validatie

## Doel
Leer `beforeEach()` gebruiken om test data voor te bereiden.

## Wat ga je doen?
Je gaat tests schrijven voor form validatie functies. Deze keer gebruik je `beforeEach()` om test data klaar te zetten.

## Bestanden
- `formValidator.js` - De validatie functies (al klaar)
- `formValidator.test.js` - Het test bestand waar jij tests invult

## Wat moet je testen?
1. `isValidEmail()` - Valideert email adressen
2. `isValidPhone()` - Valideert Nederlandse telefoonnummers
3. `isValidPostcode()` - Valideert postcodes
4. `validateForm()` - Valideert een compleet formulier

## Wat is nieuw?
`beforeEach()` - Deze functie runt **voor elke test**. Gebruik dit om test data klaar te zetten die je in meerdere tests nodig hebt.

## Wat heb je nodig?
- `beforeEach()` - Om test data voor te bereiden
- `.toBe()` - Voor true/false
- `.toContain()` - Voor errors in arrays

## Cheat Sheet
Bekijk deze pagina:
- [Setup en Teardown](https://jschaik.github.io/Fullstack-Cheat-Sheet/pages/jest/setup.html)

## Hoe te starten?
1. Open `src/opdracht-04/formValidator.test.js`
2. **Belangrijk:** Vul eerst `beforeEach()` in met test data
3. Gebruik die `testData` in je tests
4. Run: `npm test opdracht-04`
5. Alle tests groen? Je bent klaar! ✅

## Tips
- Vul `beforeEach()` als eerste in!
- De `testData` variabele is beschikbaar in alle tests
- Elke test krijgt een **verse** kopie van testData
- Je kunt testData aanpassen in een test zonder andere tests te beïnvloeden
