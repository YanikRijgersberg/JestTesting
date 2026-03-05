# Opdracht 1: Todo Item Validatie

## Doel
Leer de basis van Jest testen met simpele functies.

## Wat ga je doen?
Je gaat tests schrijven voor todo validatie functies. Er staat al **1 voorbeeld test** in het bestand. De andere tests moet jij afmaken.

## Bestanden
- `todoUtils.js` - De functies die je moet testen (al klaar)
- `todoUtils.test.js` - Het test bestand waar jij tests invult

## Wat moet je testen?
1. `isValidTodo()` - Checkt of een todo geldig is
2. `getTodoPriority()` - Bepaalt prioriteit (high/medium/low)

## Wat heb je nodig?
- `test()` of `it()` - Om een test te schrijven
- `expect()` - Om iets te verwachten
- `.toBe()` - Om exacte waarden te checken

## Cheat Sheet
Bekijk deze pagina's:
- [Eerste Test Schrijven](https://jschaik.github.io/Fullstack-Cheat-Sheet/pages/jest/eerste-test.html)
- [Matchers](https://jschaik.github.io/Fullstack-Cheat-Sheet/pages/jest/matchers.html)

## Hoe te starten?
1. Open `src/opdracht-01/todoUtils.test.js`
2. Lees de TODO comments
3. Vervang `expect(true).toBe(false)` met je eigen test
4. Run: `npm test opdracht-01`
5. Alle tests groen? Je bent klaar! ✅

## Tips
- Begin met de voorbeeld test goed te begrijken
- Elke test heeft 3 stappen: Arrange, Act, Assert
- Run `npm test` vaak om te zien of het werkt
