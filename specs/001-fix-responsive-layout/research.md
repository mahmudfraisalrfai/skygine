# Research: Fix Responsive Layout

**Date**: 2026-03-10  
**Feature**: 001-fix-responsive-layout

## Problem Analysis

### Root Cause 1: Aggressive `vw`-based Font Scaling

The current `App.tsx` uses Tailwind arbitrary `text-[clamp(min, preferred, max)]` classes where the preferred value uses `vw` units. Since `vw` is relative to the **full viewport width** but the content lives inside **50% panels** (`md:w-1/2`), the computed size at medium breakpoints is disproportionately large.

**Key example**: `text-[clamp(3rem,8vw,8rem)]` for "COMING SOON"
- At 768px → `8vw = 61.4px` — far too large for a half-panel heading
- At 1024px → `8vw = 81.9px` — even worse
- Max of `8rem = 128px` — absurdly large

### Root Cause 2: No Max Content Width on Ultra-Wide Screens

The layout splits into two `md:w-1/2` panels with `px-[6vw]` / `px-[8vw]` padding. On 2560px screens, each panel is ~1280px wide minus padding, creating uncomfortably long text lines.

### Root Cause 3: Padding Uses `vw` on Large Screens

`px-[6vw]` at 1920px = 115px per side, while at 2560px = 154px per side. This creates inconsistent spacing across screen sizes.

## Current Values vs Computed Sizes

| Element | Tailwind Class | @375px | @768px | @1024px | @1920px |
|---------|---------------|--------|--------|---------|---------|
| Logo text | `clamp(1.125rem,2vw,1.75rem)` | 18px | 15.4px | 20.5px | 28px |
| Subtitle "Skygine Technologies" | `clamp(1rem,1.5vw,1.5rem)` | 16px | 11.5px | 15.4px | 24px |
| **"COMING SOON" heading** | `clamp(3rem,8vw,8rem)` | **48px** | **61.4px** | **81.9px** | **128px** |
| Left body paragraph | `clamp(1.2rem,2vw,2.5rem)` | 19.2px | 15.4px | 20.5px | 40px |
| Left italic text | `clamp(1.1rem,1.8vw,2rem)` | 17.6px | 13.8px | 18.4px | 32px |
| Right paragraph | `clamp(1.1rem,1.6vw,1.8rem)` | 17.6px | 12.3px | 16.4px | 28.8px |
| Feature card title | `clamp(1.1rem,1.6vw,1.75rem)` | 17.6px | 12.3px | 16.4px | 28px |
| Feature card desc | `clamp(0.95rem,1.3vw,1.4rem)` | 15.2px | 10px | 13.3px | 22.4px |
| Button text | `clamp(1rem,1.3vw,1.5rem)` | 16px | 10px | 13.3px | 24px |
| Marquee | `clamp(0.8rem,1.2vw,1.1rem)` | 12.8px | 9.2px | 12.3px | 17.6px |

## Decision: Fix Approach

**Decision**: Replace all `clamp()` values with properly calibrated ranges that account for the half-panel layout on desktop, and add a max-width container for ultra-wide monitors.

**Rationale**: 
- Using `clamp()` is still the right approach for fluid typography, but the min/preferred/max values need recalibration.
- The preferred value should use smaller `vw` coefficients since content is in a half-width panel.
- Max values need hard caps aligned with the spec (heading ≤96px, body ≤22px, titles ≤24px).

**Alternatives considered**:
- Using Tailwind breakpoint-based font classes (e.g., `text-3xl md:text-4xl lg:text-5xl`) — Rejected: less smooth transitions, more classes to maintain.
- Using `cqw` (container query width) — Rejected: requires `@container` setup, adds complexity for a single-page site.

## Decision: Max Width Constraint

**Decision**: Add a max-width of `1920px` on the main container, centered on ultra-wide screens. This prevents text from stretching beyond comfortable line lengths while still covering Full HD monitors.

**Rationale**: 1920px is Full HD and the most common large desktop resolution. Constraining beyond this ensures readability without breaking the layout for the vast majority of users.

**Alternatives considered**:
- `max-w-screen-2xl` (1536px) — Rejected: too narrow, wastes space on common 1920px monitors.
- No max-width, only constrain text `max-w-prose` — Rejected: would create odd layout where text doesn't fill the panel.

## Corrected Values

| Element | New Tailwind Class | @375px | @768px | @1024px | @1920px |
|---------|-------------------|--------|--------|---------|---------|
| Logo text | `clamp(1.125rem,1.5vw,1.5rem)` | 18px | 11.5px | 15.4px | 24px |
| Subtitle | `clamp(0.875rem,1.2vw,1.125rem)` | 14px | 9.2px | 12.3px | 18px |
| **"COMING SOON"** | `clamp(2.25rem,5vw,5.5rem)` | **36px** | **38.4px** | **51.2px** | **88px** |
| Left body paragraph | `clamp(1rem,1.4vw,1.375rem)` | 16px | 10.8px | 14.3px | 22px |
| Left italic text | `clamp(0.95rem,1.2vw,1.25rem)` | 15.2px | 9.2px | 12.3px | 20px |
| Right paragraph | `clamp(0.95rem,1.1vw,1.25rem)` | 15.2px | 8.4px | 11.3px | 20px |
| Feature card title | `clamp(1rem,1.2vw,1.375rem)` | 16px | 9.2px | 12.3px | 22px |
| Feature card desc | `clamp(0.875rem,1vw,1.125rem)` | 14px | 7.7px | 10.2px | 18px |
| Button text | `clamp(0.875rem,1vw,1.125rem)` | 14px | 7.7px | 10.2px | 18px |
| Marquee | `clamp(0.75rem,0.9vw,0.9rem)` | 12px | 6.9px | 9.2px | 14.4px |

> **Note**: These values will be refined during implementation with browser testing to find optimal visual balance.
