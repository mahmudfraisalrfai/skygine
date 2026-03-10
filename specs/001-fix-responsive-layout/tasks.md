# Tasks: Fix Responsive Layout

**Input**: Design documents from `/specs/001-fix-responsive-layout/`  
**Prerequisites**: plan.md (✅), spec.md (✅), research.md (✅), quickstart.md (✅)

**Tests**: No automated tests requested. Verification is via manual browser testing at 5 representative viewports.

**Organization**: Tasks are grouped by user story to enable incremental verification. All changes target `src/App.tsx`, so tasks within each phase are sequential (same file).

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup

**Purpose**: No project setup required — existing project is fully configured. Skip to Phase 2.

---

## Phase 2: Foundational (Max-Width Container + Padding)

**Purpose**: Add structural layout constraints that benefit ALL user stories. These changes prevent content from stretching infinitely on ultra-wide screens and normalize spacing.

- [x] T001 Add `max-w-[1920px]` constraint to the `<main>` element in `src/App.tsx` (line 21)
- [x] T002 Replace left section `vw`-based padding (`px-[6vw]`, `px-[8vw]`) with fixed responsive values (`md:px-10 lg:px-16 xl:px-20`) in `src/App.tsx` (line 24)
- [x] T003 Replace right section `vw`-based padding (`px-[6vw]`, `px-[8vw]`) with fixed responsive values (`md:px-10 lg:px-16 xl:px-20`) in `src/App.tsx` (line 85)

**Checkpoint**: Layout structure is constrained. Content no longer stretches on ultra-wide monitors. Padding is consistent at all breakpoints.

---

## Phase 3: User Story 1 — Readable Text on Medium Screens (Priority: P1) 🎯 MVP

**Goal**: Recalibrate all `clamp()` font-size values so text is proportionally sized on medium screens (768px–1024px), capping maximums to prevent oversized rendering.

**Independent Test**: Open the page at 768px width. The "COMING SOON" heading should be ~38px (not 61px). Body text should be 16–20px. No text should appear disproportionately large.

### Implementation for User Story 1

- [x] T004 [US1] Recalibrate "COMING SOON" heading from `clamp(3rem,8vw,8rem)` to `clamp(2.25rem,5vw,5.5rem)` in `src/App.tsx` (line 67)
- [x] T005 [US1] Recalibrate subtitle "Skygine Technologies" from `clamp(1rem,1.5vw,1.5rem)` to `clamp(0.875rem,1.2vw,1.125rem)` in `src/App.tsx` (line 64)
- [x] T006 [US1] Recalibrate left body paragraph from `clamp(1.2rem,2vw,2.5rem)` to `clamp(1rem,1.4vw,1.375rem)` in `src/App.tsx` (line 72)
- [x] T007 [US1] Recalibrate left italic paragraph from `clamp(1.1rem,1.8vw,2rem)` to `clamp(0.95rem,1.2vw,1.25rem)` in `src/App.tsx` (line 78)
- [x] T008 [US1] Recalibrate right description paragraph from `clamp(1.1rem,1.6vw,1.8rem)` to `clamp(0.95rem,1.1vw,1.25rem)` in `src/App.tsx` (line 94)
- [x] T009 [US1] Recalibrate feature card titles from `clamp(1.1rem,1.6vw,1.75rem)` to `clamp(1rem,1.2vw,1.375rem)` in `src/App.tsx` (line 112)
- [x] T010 [US1] Recalibrate feature card descriptions from `clamp(0.95rem,1.3vw,1.4rem)` to `clamp(0.875rem,1vw,1.125rem)` in `src/App.tsx` (line 113)
- [x] T011 [US1] Recalibrate CTA button text from `clamp(1rem,1.3vw,1.5rem)` to `clamp(0.875rem,1vw,1.125rem)` in `src/App.tsx` (line 123)
- [x] T012 [US1] Recalibrate marquee banner text from `clamp(0.8rem,1.2vw,1.1rem)` to `clamp(0.75rem,0.9vw,0.9rem)` in `src/App.tsx` (lines 136–153)
- [x] T013 [US1] Recalibrate logo text from `clamp(1.125rem,2vw,1.75rem)` to `clamp(1.125rem,1.5vw,1.5rem)` in `src/App.tsx` (line 52)

**Checkpoint**: At 768px width, all text is proportionally sized. The "COMING SOON" heading renders at ~38px, body text at 16–20px, feature titles at 18–22px. No text overflows.

---

## Phase 4: User Story 2 — Balanced Layout on Large/Extra-Large Screens (Priority: P1)

**Goal**: Ensure the layout uses horizontal space effectively on 1440px–2560px monitors, with comfortable padding and capped text line lengths.

**Independent Test**: Open the page at 1920px width. Content should fill both panels naturally without appearing clustered. Paragraph lines should not exceed ~80 characters.

### Implementation for User Story 2

- [x] T014 [US2] Recalibrate modal heading from `clamp(1.5rem,3vw,2.5rem)` to `clamp(1.25rem,2vw,1.75rem)` in `src/App.tsx` (line 184)
- [x] T015 [US2] Recalibrate modal body text from `clamp(0.875rem,1.5vw,1.125rem)` to `clamp(0.875rem,1.2vw,1rem)` in `src/App.tsx` (line 185)
- [x] T016 [US2] Recalibrate modal label text from `clamp(0.7rem,1vw,0.875rem)` to `clamp(0.7rem,0.9vw,0.8rem)` in `src/App.tsx` (lines 189, 197, 205)
- [x] T017 [US2] Recalibrate modal input text from `clamp(0.875rem,1.2vw,1rem)` to `clamp(0.875rem,1vw,0.95rem)` in `src/App.tsx` (lines 192, 200, 208)
- [x] T018 [US2] Recalibrate modal button text from `clamp(0.75rem,1.2vw,1rem)` to `clamp(0.75rem,0.9vw,0.875rem)` in `src/App.tsx` (line 215)

**Checkpoint**: At 1920px width, both panels use their space effectively. Modal text is proportional. No text lines are excessively long.

---

## Phase 5: User Story 3 — Smooth Mobile Experience (Priority: P2)

**Goal**: Verify all the new `clamp()` values produce comfortable sizing on mobile (320px–767px) without regression.

**Independent Test**: Open the page at 375px width. "COMING SOON" is 36–48px, body text ≥16px, no horizontal scroll.

### Implementation for User Story 3

- [x] T019 [US3] Visual verification at 375px width — check all text sizes are comfortable and no horizontal scroll appears in `src/App.tsx`
- [x] T020 [US3] Visual verification at 320px width — confirm body text ≥16px and heading fits within viewport in `src/App.tsx`
- [x] T021 [US3] Adjust any `clamp()` minimum values in `src/App.tsx` if mobile testing reveals text below 14px

**Checkpoint**: Mobile experience is smooth at 375px and 320px. No regressions from the medium/large screen fixes.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation across all breakpoints and edge cases

- [x] T022 Resize test — slowly drag viewport from 375px to 1920px and verify no abrupt font-size jumps in browser
- [x] T023 Verify no horizontal scrollbar at any viewport width from 320px to 2560px in browser
- [x] T024 Test landscape orientation on mobile (667×375px) in browser DevTools
- [x] T025 Test browser zoom at 75%, 100%, 150%, and 200% in browser
- [x] T026 Final visual inspection at all 5 representative widths (375px, 768px, 1024px, 1440px, 1920px) per SC-006 in `specs/001-fix-responsive-layout/spec.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Foundational (Phase 2)**: No prerequisites — start immediately
- **User Story 1 (Phase 3)**: Depends on Phase 2 (padding/max-width must be set first to correctly gauge font sizes)
- **User Story 2 (Phase 4)**: Depends on Phase 2 — can run in parallel with US1 since it targets modal (different DOM section)
- **User Story 3 (Phase 5)**: Depends on Phase 3 + Phase 4 (mobile verification requires all font changes to be in place)
- **Polish (Phase 6)**: Depends on all previous phases

### Within Each User Story

All tasks are sequential within a user story because they edit the same file (`src/App.tsx`).

### Parallel Opportunities

- **T014–T018 (US2 modal)** can run in parallel with **T004–T013 (US1 main page)** since they target different DOM sections, but they share the same file — execute in sequence in practice.
- **T022–T026 (Polish)** are independent browser tests that can run in any order.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 2: Foundational (T001–T003)
2. Complete Phase 3: User Story 1 (T004–T013)
3. **STOP and VALIDATE**: Test at 768px — text should be proportional
4. If satisfactory, proceed to US2 + US3

### Incremental Delivery

1. Phase 2 → Foundation ready
2. Phase 3 → Medium screens fixed (MVP!) ✅
3. Phase 4 → Large screens fixed ✅
4. Phase 5 → Mobile validated ✅
5. Phase 6 → All edge cases verified ✅

---

## Notes

- All tasks target `src/App.tsx` — commit after each phase for clean history
- No new dependencies needed — pure CSS/Tailwind class modifications
- Values in plan.md are starting points — refine during browser testing (Phase 5/6)
- Stop at any checkpoint to validate independently
