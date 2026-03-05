# Jest Testing - Opdrachten Template

Een verzameling hands-on opdrachten om Jest testing te leren voor JavaScript en React.

## Wat is Jest?

Jest is een testing framework voor JavaScript. Het helpt je automatisch te checken of je code werkt zoals verwacht, zonder elke keer handmatig te testen in de browser.

## Waarom Testen?

**"Kan ik niet gewoon zelf testen in de browser?"**

Ja, maar:
- Handmatig testen kost 5-10 minuten per keer
- Na elke code wijziging moet je ALLES opnieuw testen
- Je vergeet makkelijk edge cases
- Naarmate je app groeit wordt dit onhoudbaar

**Met Jest:**
- Schrijf tests 1x (10 minuten)
- Run alle tests in 2 seconden: `npm test`
- Tests vangen bugs voordat gebruikers ze zien
- Je krijgt vertrouwen om code te wijzigen

**Break-even:** Na 2-3 code wijzigingen heb je de tijd terugverdiend. Daarna is het pure winst!

## Opdrachten

### JavaScript Basis (3 opdrachten)
1. **Todo Item Validatie** - Basis matchers (`toBe`, `toEqual`)
2. **Wachtwoord Checker** - Objecten en arrays testen
3. **Producten Sorteren** - Arrays en `toContain`

### JavaScript met Setup (2 opdrachten)
4. **Form Validatie** - `beforeEach` en test data
5. **Quiz Score** - Setup/teardown met arrays

### React Components (3 opdrachten)
6. **ProfileCard Component** - Basis rendering tests
7. **LikeButton Component** - User events en state
8. **SearchBar Component** - Input handling en conditional rendering

## Installatie

### 1. Gebruik deze template
1. Klik op de groene knop **"Use this template"** bovenaan deze pagina
2. Kies **"Create a new repository"**
3. Geef je repository een naam (bijv. `mijn-jest-opdrachten`)
4. Klik op **"Create repository"**
5. Clone je nieuwe repository naar je computer

### 2. Installeer dependencies
```bash
npm install
```

### 3. Test of het werkt
```bash
npm test
```

Je zou moeten zien dat er tests falen - dat klopt! Die moet je namelijk zelf invullen.

## Hoe te gebruiken

Elke opdracht heeft een eigen map in `src/` met:
- De code die je moet testen (al klaar)
- Een test bestand waar jij tests invult
- Een README.md met instructies

**Voorbeeld:**
```bash
npm test opdracht-01  # Test alleen opdracht 1
npm test              # Test alle opdrachten
```

## Meer info

Voor uitgebreide uitleg over setup, matchers en component testing, zie de [Jest Cheat Sheet](https://jschaik.github.io/React-Cheat-Sheet/pages/jest/index.html).

## Tips

- Begin met opdracht 1 en werk stap voor stap door
- Elke opdracht heeft een README.md met uitleg
- Run tests vaak: `npm test opdracht-XX`
- Lees error messages goed - ze helpen je!
- Alle tests groen? Dan ben je klaar met die opdracht!


