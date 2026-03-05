# Opdracht 8: SearchBar Component

## Doel
Leer input velden testen in React.

## Wat ga je doen?
Je gaat tests schrijven voor een zoekbalk met input field. Je test typen, state changes en conditional rendering.

## Bestanden
- `SearchBar.jsx` - Het React component (al klaar)
- `SearchBar.test.jsx` - Het test bestand waar jij tests invult

## Wat moet je testen?
- Input field werkt
- Tekst verschijnt onder de input
- Wissen button verschijnt/verdwijnt
- Wissen button maakt input leeg

## Wat is nieuw?
- `fireEvent.change()` - Simuleert typen in input
- `screen.getByPlaceholderText()` - Vindt input via placeholder
- `input.value` - Checkt de waarde van een input field

## Wat heb je nodig?
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
```

Typen simuleren:
```javascript
fireEvent.change(input, { target: { value: 'tekst' } });
```

## Cheat Sheet
Bekijk deze pagina:
- [Component Testen](https://jschaik.github.io/Fullstack-Cheat-Sheet/pages/jest/component-testen.html)

## Hoe te starten?
1. Open `src/opdracht-08/SearchBar.test.jsx`
2. Bekijk de voorbeeld test
3. Leer hoe je typt: `fireEvent.change(input, { target: { value: 'tekst' } })`
4. Vul de TODO tests in
5. Run: `npm test opdracht-08`
6. Alle tests groen? Je bent klaar! ✅

## Tips
- `screen.getByPlaceholderText('Zoek...')` vindt de input
- `input.value` geeft de huidige waarde
- Conditional rendering: iets verschijnt alleen als er tekst is
- Test stap voor stap: type → check wat verschijnt → klik wissen → check opnieuw
