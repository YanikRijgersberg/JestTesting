# Opdracht 2: Wachtwoord Validatie

## Doel
Leer werken met objecten en arrays in tests.

## Wat ga je doen?
Je gaat tests schrijven voor wachtwoord validatie. De functie geeft een **object** terug met `isValid` en `errors`.

## Bestanden
- `passwordValidator.js` - De validatie functie (al klaar)
- `passwordValidator.test.js` - Het test bestand waar jij tests invult

## Wat moet je testen?
`validatePassword()` checkt of een wachtwoord voldoet aan:
- Minimaal 8 karakters
- Minimaal 1 nummer
- Minimaal 1 hoofdletter

## Wat heb je nodig?
- `.toBe()` - Voor booleans (true/false)
- `.toEqual()` - Voor arrays en objecten
- `.toContain()` - Om te checken of iets in een array zit

## Cheat Sheet
Bekijk deze pagina:
- [Matchers](https://jschaik.github.io/Fullstack-Cheat-Sheet/pages/jest/matchers.html)

## Hoe te starten?
1. Open `src/opdracht-02/passwordValidator.test.js`
2. Lees de voorbeeld test
3. Vul de TODO tests in
4. Run: `npm test opdracht-02`
5. Alle tests groen? Je bent klaar! ✅

## Tips
- Let op het verschil tussen `.toBe()` en `.toEqual()`
- Een object heeft properties: `resultaat.isValid`
- Een array kan items bevatten: `resultaat.errors`
- Gebruik `.toContain()` om te checken of een error in de array zit
