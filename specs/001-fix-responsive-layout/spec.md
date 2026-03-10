# Feature Specification: Fix Responsive Layout

**Feature Branch**: `001-fix-responsive-layout`  
**Created**: 2026-03-10  
**Status**: Draft  
**Input**: User description: "هنالك مشكله في تجاوب الموقع (responsive) — على الشاشات المتوسطة تظهر الكلمات بشكل كبير جداً وعلى الشاشات الكبيرة يظهر النص مجمّعاً في المنتصف. المطلوب أن يكون الموقع متجاوباً على جميع الشاشات."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Readable Text on Medium Screens (Priority: P1)

A visitor opens the Skygine Coming Soon page on a tablet or medium-sized laptop (768px–1024px). All headings, paragraphs, and feature descriptions appear at a comfortable, readable size — not excessively large.

**Why this priority**: The oversized text on medium screens is the most visually jarring issue, making the page appear broken and unprofessional. Fixing this delivers the highest visual quality improvement.

**Independent Test**: Can be fully tested by resizing any browser window to 768px–1024px width and verifying that all text elements are proportionally sized, and no text overflows its container.

**Acceptance Scenarios**:

1. **Given** a visitor on a 768px-wide screen, **When** the page loads, **Then** the "COMING SOON" heading is large but proportional (not exceeding ~48px), body text is between 16–20px, and section titles are between 18–24px.
2. **Given** a visitor on a 1024px-wide screen, **When** the page loads, **Then** all text transitions smoothly from medium to large breakpoint sizing without any sudden jumps.
3. **Given** a visitor on a surface-style tablet (1024px–1200px), **When** the page loads, **Then** no horizontal scrollbar appears and no text is clipped or truncated.

---

### User Story 2 - Balanced Layout on Large/Extra-Large Screens (Priority: P1)

A visitor opens the page on a 1440px+ desktop monitor. The two-column layout uses space effectively — content is not clustered tightly in the center but spans the available area with comfortable spacing and readable proportions.

**Why this priority**: On large screens the content appears unnaturally compressed into a small area, wasting screen real estate and looking unfinished. This is equally important to the medium-screen issue.

**Independent Test**: Can be fully tested by viewing the page at 1440px, 1920px, and 2560px widths to verify content spreads appropriately and text has comfortable maximum sizes.

**Acceptance Scenarios**:

1. **Given** a visitor on a 1440px-wide monitor, **When** the page loads, **Then** both left and right panels use their allotted space with adequate padding, and text fills the width naturally.
2. **Given** a visitor on a 1920px (Full HD) monitor, **When** the page loads, **Then** headings have a sensible maximum size (not exceeding ~96px for the main heading), and body text does not exceed ~22px.
3. **Given** a visitor on a 2560px (QHD/4K) monitor, **When** the page loads, **Then** a maximum content width constraint prevents text lines from becoming excessively long (no more than ~80 characters per line for paragraph text).

---

### User Story 3 - Smooth Mobile Experience (Priority: P2)

A visitor opens the page on a mobile phone (320px–767px). The page stacks vertically, text is comfortably sized for touch reading, and all interactive elements are easily tappable.

**Why this priority**: Mobile was already partially working with the vertical stacking approach, but the font scaling values should be reviewed to ensure consistency across the full responsive range.

**Independent Test**: Can be fully tested by viewing at 375px (iPhone) and 320px (small phone) widths, and verifying text readability, tap target sizes, and no horizontal overflow.

**Acceptance Scenarios**:

1. **Given** a visitor on a 375px-wide phone, **When** the page loads, **Then** the "COMING SOON" heading fits within the viewport width without wrapping awkwardly, and is sized between 36–48px.
2. **Given** a visitor on a 320px-wide phone, **When** the page loads, **Then** no horizontal scroll appears, all content is visible, and body text is at least 16px.

---

### Edge Cases

- What happens at exact Tailwind breakpoints (768px, 1024px, 1280px, 1536px) — are there any jump/flicker issues?
- How does the page render below 320px (e.g., Galaxy Fold at 280px)?
- How does the page behave when the user zooms in/out (browser zoom 75%–200%)?
- What happens in landscape orientation on mobile (e.g., 667×375px)?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The page MUST display all text at proportionally appropriate sizes across all screen widths from 320px to 2560px, with no text appearing excessively large or small.
- **FR-002**: The page MUST use smooth, progressive font scaling — no abrupt size jumps between breakpoints.
- **FR-003**: The "COMING SOON" heading MUST scale from approximately 36px (mobile) to a maximum of 96px (large desktop), capped to prevent infinite growth.
- **FR-004**: Body/paragraph text MUST remain within a readable range of 16px to 22px across all viewports.
- **FR-005**: Feature card titles MUST remain within a readable range of 18px to 24px across all viewports.
- **FR-006**: On large screens (1440px+), the layout MUST use available horizontal space effectively — content should not appear clustered in a narrow central area.
- **FR-007**: On very large screens (2560px+), a maximum content width MUST prevent text lines from becoming excessively long.
- **FR-008**: No horizontal scrollbar MUST appear at any viewport width between 320px and 2560px.
- **FR-009**: The marquee banner, modal form, and button MUST also scale appropriately across all breakpoints.
- **FR-010**: All changes MUST preserve the existing visual design, color scheme, and animations without altering the overall aesthetic.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: On a 768px viewport, the largest visible text element does not exceed 48px in rendered font size.
- **SC-002**: On a 1920px viewport, paragraph text is rendered between 16px and 22px.
- **SC-003**: On a 2560px viewport, no single line of paragraph text exceeds 80 characters in length.
- **SC-004**: On all viewports from 320px to 2560px, no horizontal scrollbar is present.
- **SC-005**: Text smoothly transitions between sizes when resizing the browser window — no visible jumps at any breakpoint.
- **SC-006**: The page passes visual inspection on 5 representative widths (375px, 768px, 1024px, 1440px, 1920px) with no text appearing disproportionately large or clustered.

## Assumptions

- The project uses Tailwind CSS v4 with `@tailwindcss/vite` and inline utility classes — changes will be made within this styling approach.
- The existing two-panel (left image + right content) layout structure is to be preserved — only the sizing, spacing, and scaling values need adjustment.
- `clamp()` CSS functions with `vw` units are the primary cause of the scaling issues and will be the main area of change.
- No new dependencies or design system changes are needed — this is a CSS/Tailwind refinement task.
