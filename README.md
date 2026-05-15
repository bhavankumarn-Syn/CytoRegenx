# CytoRegenX — React + Vite

The CytoRegenX marketing site, rebuilt as a React single-page application with
Vite. The design, layout, copy, colors, fonts, and animations are identical to
the original single-file HTML build — only the implementation changed.

## Requirements

- Node.js 18+ (Node 20+ recommended)
- npm

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Project structure

```
cytoregenx-react/
├── index.html                 # Vite entry; loads Google Fonts + #root
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx               # React root
    ├── App.jsx                # composes all sections; reduced-motion handling
    ├── index.css              # all styles (ported verbatim from the original)
    └── components/
        ├── HelixLogo.jsx      # animated DNA-helix logo (nav + footer variants)
        ├── TopBar.jsx
        ├── Nav.jsx            # sticky nav + mobile drawer (useState)
        ├── Hero.jsx
        ├── Founders.jsx
        ├── Specialties.jsx
        ├── Conditions.jsx
        ├── Lab.jsx
        ├── Clinical.jsx
        ├── Compare.jsx        # PL vs PRP table
        ├── Investment.jsx
        ├── WhyWin.jsx
        ├── ContactForm.jsx    # controlled form + anti-bot defenses
        └── Footer.jsx
```

Repeated card/list content lives in small `const` arrays at the top of each
section component, which then map over the data.

## Notes on the port

**Styles.** The entire original stylesheet was moved verbatim into
`src/index.css` and imported once in `main.jsx`. One rule was added —
`.logo-mark-wrap` — as a wrapper for the injected logo SVG. Nothing else changed.

**The helix logo.** `HelixLogo.jsx` injects the SVG as raw markup
(`dangerouslySetInnerHTML`) so the geometry and self-contained SMIL animation
render byte-for-byte identical to the original. Pass `variant="nav"` (light
background) or `variant="footer"` (brightened, for the dark footer).

**Mobile navigation.** The hamburger drawer is React state in `Nav.jsx`. It
closes on link tap, on `Escape`, and when the viewport grows back to desktop.

**Reduced motion.** `App.jsx` checks `prefers-reduced-motion` on mount and calls
`pauseAnimations()` on the logo SVGs for users who request reduced motion.

**Contact form.** `ContactForm.jsx` is a fully controlled form. All five
anti-bot layers from the original are preserved as React state/refs:

1. Honeypot field (`website`) — hidden from humans; if filled, a fake success
   is shown and the payload is discarded.
2. Timing check — submissions faster than 3 seconds are rejected.
3. Runtime math challenge — regenerated on every load and after each attempt.
4. Form token — generated client-side; regenerated after a successful send.
5. Native HTML5 validation via `checkValidity()` / `reportValidity()`.

### Wiring the form to a backend

The form currently simulates submission. In `ContactForm.jsx`, find the
`INTEGRATION POINT` comment inside `handleSubmit` and replace the `setTimeout`
block with a real request. The assembled `data` object is ready to send:

```js
// Formspree
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})

// or a custom endpoint
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
```

Keep the `showFeedback(...)` success/error calls so the user still gets
confirmation, and keep the `rollMath()` / `setToken(makeToken())` calls so the
form can be submitted again.

## Deployment

`npm run build` outputs a static site to `dist/`, deployable to any static host
(Netlify, Vercel, Cloudflare Pages, S3, etc.). No server is required.
