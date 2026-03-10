# Implementation Plan: Fix Responsive Layout

**Branch**: `001-fix-responsive-layout` | **Date**: 2026-03-10 | **Spec**: [spec.md](file:///c:/Users/AL-madina/Desktop/Prokoders/skygine-coming-soon%20(1)/specs/001-fix-responsive-layout/spec.md)  
**Input**: Feature specification from `/specs/001-fix-responsive-layout/spec.md`

## Summary

The Skygine Coming Soon page has responsive issues: text is excessively large on medium screens (768px–1024px) because `clamp()` values use `vw` units that don't account for the half-panel layout, and on large screens (1440px+) content appears clustered due to no max-width constraint. The fix recalibrates all `clamp()` font-size values and adds a container max-width, touching only `src/App.tsx` and optionally `src/index.css`.

## Technical Context

**Language/Version**: TypeScript (React 19 + JSX)  
**Primary Dependencies**: Tailwind CSS v4, Motion (Framer Motion), Lucide React  
**Storage**: N/A  
**Testing**: No existing test framework configured — manual browser testing  
**Target Platform**: Web (all modern browsers, 320px–2560px viewports)  
**Project Type**: Single-page web app (coming soon page)  
**Performance Goals**: N/A (static page)  
**Constraints**: Preserve existing visual design, color scheme, and animations  
**Scale/Scope**: Single file change (`App.tsx`), ~20 class attribute modifications

## Constitution Check

*GATE: Constitution is a blank template — no project-specific gates defined. Passes by default.*

## Project Structure

### Documentation (this feature)

```text
specs/001-fix-responsive-layout/
├── plan.md              # This file
├── research.md          # Root cause analysis + computed values
├── quickstart.md        # Dev setup instructions
├── spec.md              # Feature specification
└── checklists/
    └── requirements.md  # Spec quality checklist
```

### Source Code (repository root)

```text
src/
├── App.tsx              # Single component — ALL changes here
├── index.css            # Tailwind imports + marquee animation
└── main.tsx             # Entry point (no changes)
```

**Structure Decision**: Single-component app. All responsive changes are in `src/App.tsx` through Tailwind utility class modifications.

## Proposed Changes

### [MODIFY] [App.tsx](file:///c:/Users/AL-madina/Desktop/Prokoders/skygine-coming-soon%20(1)/src/App.tsx)

#### Change 1: Add max-width container constraint (Line 21)

Add `max-w-[1920px]` to the `<main>` element to prevent the layout from stretching beyond 1920px on ultra-wide monitors.

```diff
-<main className="min-h-[100vh] flex flex-col md:flex-row font-sans overflow-x-hidden relative bg-[#0a0a0a] md:bg-white text-white md:text-gray-900 w-full mx-auto shadow-2xl">
+<main className="min-h-[100vh] flex flex-col md:flex-row font-sans overflow-x-hidden relative bg-[#0a0a0a] md:bg-white text-white md:text-gray-900 w-full max-w-[1920px] mx-auto shadow-2xl">
```

#### Change 2: Recalibrate left section padding (Line 24)

Replace aggressive `vw`-based padding with fixed responsive values.

```diff
-<section className="... px-6 sm:px-8 md:px-[6vw] lg:px-[8vw] ...">
+<section className="... px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 ...">
```

#### Change 3: Recalibrate "COMING SOON" heading (Line 67)

This is the most impactful fix. Current max of `8rem` (128px) is far too large.

```diff
-<h2 className="font-bold tracking-tighter leading-[1.05] text-[clamp(3rem,8vw,8rem)] w-full">
+<h2 className="font-bold tracking-tighter leading-[1.05] text-[clamp(2.25rem,5vw,5.5rem)] w-full">
```

Resulting sizes: 375px→36px, 768px→38.4px, 1024px→51.2px, 1920px→88px (capped at 88px)

#### Change 4: Recalibrate subtitle text (Line 64)

```diff
-<h1 className="... text-[clamp(1rem,1.5vw,1.5rem)] ...">
+<h1 className="... text-[clamp(0.875rem,1.2vw,1.125rem)] ...">
```

#### Change 5: Recalibrate left paragraph text (Line 72)

```diff
-<p className="... text-[clamp(1.2rem,2vw,2.5rem)] ...">
+<p className="... text-[clamp(1rem,1.4vw,1.375rem)] ...">
```

#### Change 6: Recalibrate left italic paragraph (Line 78)

```diff
-<p className="... text-[clamp(1.1rem,1.8vw,2rem)]">
+<p className="... text-[clamp(0.95rem,1.2vw,1.25rem)]">
```

#### Change 7: Recalibrate right paragraph text (Line 94)

```diff
-<p className="... text-[clamp(1.1rem,1.6vw,1.8rem)]">
+<p className="... text-[clamp(0.95rem,1.1vw,1.25rem)]">
```

#### Change 8: Recalibrate feature card titles (Line 112)

```diff
-<h3 className="... text-[clamp(1.1rem,1.6vw,1.75rem)]">{item.title}</h3>
+<h3 className="... text-[clamp(1rem,1.2vw,1.375rem)]">{item.title}</h3>
```

#### Change 9: Recalibrate feature card descriptions (Line 113)

```diff
-<p className="... text-[clamp(0.95rem,1.3vw,1.4rem)]">{item.desc}</p>
+<p className="... text-[clamp(0.875rem,1vw,1.125rem)]">{item.desc}</p>
```

#### Change 10: Recalibrate right section padding (Line 85)

```diff
-<section className="... px-4 sm:px-8 md:px-[6vw] lg:px-[8vw] ...">
+<section className="... px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20 ...">
```

#### Change 11: Recalibrate button text (Line 123)

```diff
-className="... text-[clamp(1rem,1.3vw,1.5rem)]"
+className="... text-[clamp(0.875rem,1vw,1.125rem)]"
```

#### Change 12: Recalibrate marquee text (Lines 136–153)

```diff
-text-[clamp(0.8rem,1.2vw,1.1rem)]
+text-[clamp(0.75rem,0.9vw,0.9rem)]
```

#### Change 13: Recalibrate modal text (Lines 184–215)

Adjust modal heading, description, labels, inputs, and button text similarly to maintain consistency.

#### Change 14: Recalibrate logo text (Line 52)

```diff
-<span className="... text-[clamp(1.125rem,2vw,1.75rem)]">SKYGINE</span>
+<span className="... text-[clamp(1.125rem,1.5vw,1.5rem)]">SKYGINE</span>
```

## Verification Plan

### Browser Testing (Primary)

Since there is no automated test framework configured in this project, verification will be done via browser visual inspection at 5 representative viewports.

**How to run**: Start the dev server with `npm run dev`, then open `http://localhost:3000` in Chrome.

1. **Open Chrome DevTools** (F12) → Toggle device toolbar (Ctrl+Shift+M)
2. **Test at each width** — set "Responsive" mode and enter width manually:

   | Width | What to check |
   |-------|---------------|
   | **375px** | "COMING SOON" heading is 36–48px, body text ≥16px, no horizontal scroll |
   | **768px** | Largest text ≤48px, body text 16–20px, smooth scaling |
   | **1024px** | Smooth transition from medium to large, no jumps |
   | **1440px** | Content spreads well, adequate padding, no clustering |
   | **1920px** | Heading ≤96px, body text ≤22px, content fills width naturally |

3. **Resize test**: Slowly drag the viewport from 375px to 1920px and verify no abrupt font-size jumps occur.
4. **Check horizontal scroll**: At each width, confirm no horizontal scrollbar appears.
5. **Check modal**: Click "CONNECT WITH US" and verify the modal form text is proportional at each width.

### User Manual Verification

After implementation, the user should:
1. Open the page on their own devices (phone, tablet, laptop, desktop monitor)
2. Confirm the text looks proportionally correct and the layout is not clustered
3. Report any remaining issues at specific screen sizes

## Complexity Tracking

> No constitution violations — table not needed.
