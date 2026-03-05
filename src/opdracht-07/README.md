# Opdracht 7: LikeButton Component

## Doel
Leer user interacties (klikken) testen in React.

## Wat ga je doen?
Je gaat tests schrijven voor een like button. Je test niet alleen wat er staat, maar ook wat er gebeurt als je klikt!

## Bestanden
- `LikeButton.jsx` - Het React component met state (al klaar)
- `LikeButton.test.jsx` - Het test bestand waar jij tests invult

## Wat moet je testen?
- Initiële staat (aantal likes)
- State verandert na klik
- Button tekst verandert (🤍 naar ❤️)

## Wat is nieuw?
- `fireEvent.click()` - Simuleert een klik
- `screen.getByRole('button')` - Vindt een button element
- State changes testen

## Wat heb je nodig?
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
```

## Cheat Sheet
Bekijk deze pagina:
- [Component Testen](https://jschaik.github.io/Fullstack-Cheat-Sheet/pages/jest/component-testen.html)

## Hoe te starten?
1. Open `src/opdracht-07/LikeButton.test.jsx`
2. Bekijk de voorbeeld test
3. Leer hoe je een button vindt: `screen.getByRole('button')`
4. Leer hoe je klikt: `fireEvent.click(button)`
5. Vul de TODO tests in
6. Run: `npm test opdracht-07`
7. Alle tests groen? Je bent klaar! ✅

## Tips
- Eerst render, dan button vinden, dan klikken
- Je kunt meerdere keren klikken in één test
- Check steeds opnieuw wat er op het scherm staat na elke actie
- Gebruik regex voor emoji's: `/❤️ Like/`
