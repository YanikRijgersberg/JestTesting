# Opdracht 6: ProfileCard Component

## Doel
Leer je eerste React component testen!

## Wat ga je doen?
Je gaat tests schrijven voor een simpel profiel component. Dit is heel anders dan functies testen!

## Bestanden
- `ProfileCard.jsx` - Het React component (al klaar)
- `ProfileCard.test.jsx` - Het test bestand waar jij tests invult

## Wat moet je testen?
Het component toont:
- Een naam (altijd)
- Leeftijd (optioneel)
- Bio (optioneel, anders fallback tekst)

## Wat is nieuw?
- `render()` - Rendert een component in een test omgeving
- `screen.getByText()` - Zoekt tekst op het scherm
- `.toBeInTheDocument()` - Checkt of iets op het scherm staat

## Wat heb je nodig?
```javascript
import { render, screen } from '@testing-library/react';
```

## Cheat Sheet
Bekijk deze pagina:
- [Component Testen](https://jschaik.github.io/Fullstack-Cheat-Sheet/pages/jest/component-testen.html)

## Hoe te starten?
1. Open `src/opdracht-06/ProfileCard.test.jsx`
2. Bekijk de voorbeeld test
3. Zie hoe `render()` en `screen.getByText()` werken
4. Vul de TODO tests in
5. Run: `npm test opdracht-06`
6. Alle tests groen? Je bent klaar! ✅

## Tips
- `render(<ProfileCard name="Jan" />)` rendert het component
- `screen.getByText('Jan')` zoekt naar tekst "Jan"
- Props meegeven: `<ProfileCard name="Jan" age={25} />`
- Geen prop meegeven = undefined/leeg
