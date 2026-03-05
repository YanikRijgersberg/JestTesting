# Opdracht 3: Producten Sorteren en Filteren

## Doel
Leer werken met arrays in tests.

## Wat ga je doen?
Je gaat tests schrijven voor functies die producten sorteren, filteren en zoeken.

## Bestanden
- `productUtils.js` - De functies (al klaar)
- `productUtils.test.js` - Het test bestand waar jij tests invult

## Wat moet je testen?
1. `sortByPrice()` - Sorteert producten op prijs
2. `filterByCategory()` - Filtert op categorie
3. `searchProducts()` - Zoekt producten op naam

## Wat heb je nodig?
- `.toHaveLength()` - Check hoeveel items in een array zitten
- `.toEqual()` - Voor lege arrays `[]`
- `.toBe()` - Voor properties van objecten in arrays

## Test Data
Er staat al een `products` array klaar met test data. Gebruik deze in al je tests!

## Cheat Sheet
Bekijk deze pagina:
- [Matchers](https://jschaik.github.io/Fullstack-Cheat-Sheet/pages/jest/matchers.html)

## Hoe te starten?
1. Open `src/opdracht-03/productUtils.test.js`
2. Bekijk de `products` test data
3. Lees de voorbeeld test
4. Vul de TODO tests in
5. Run: `npm test opdracht-03`
6. Alle tests groen? Je bent klaar! ✅

## Tips
- Arrays hebben een length: `resultaat.length`
- Je kunt array items benaderen: `resultaat[0]` (eerste item)
- Object properties in arrays: `resultaat[0].name`
- Gebruik `.toHaveLength()` in plaats van `.toBe(array.length)`
