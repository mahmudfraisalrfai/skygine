# Quickstart: Fix Responsive Layout

## Prerequisites
- Node.js installed
- Project dependencies installed (`npm install` in project root)

## Development

```bash
# Start the dev server
npm run dev
```
The app runs at `http://localhost:3000`.

## Testing Responsive Layout

1. Open `http://localhost:3000` in Chrome
2. Open DevTools (F12) → toggle Device Toolbar (Ctrl+Shift+M)
3. Test at these widths: **375px**, **768px**, **1024px**, **1440px**, **1920px**
4. Verify text sizes match the spec requirements (see `spec.md`)

## Files Changed
- `src/App.tsx` — All responsive class adjustments
- `src/index.css` — (If needed) Additional responsive overrides
