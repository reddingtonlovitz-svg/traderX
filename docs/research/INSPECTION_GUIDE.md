# Website Inspection Guide

Follow this guide to systematically extract every design token, asset, and behavior from the target site.

## 1. Global Design Tokens

### Typography
- **Headings:** Font family, weights, letter spacing, line height.
- **Body:** Font family, size, line height, color.
- **Accents:** Any decorative fonts or monospaced labels.
- **Load fonts:** Identify Google Fonts or local font URLs.

### Colors
- **Backgrounds:** Primary, secondary, sections, overlays.
- **Text:** Primary, muted, accent, inverted.
- **Brand:** Action colors, borders, shadows, gradients.
- **Dark Mode:** Capture both sets of variables if applicable.

### Spacing & Grid
- **Page Container:** Max-width, inner padding.
- **Section Spacing:** Vertical gaps between sections.
- **Card Grids:** Columns, gaps, alignment.

## 2. Interaction Model Sweep

### Scroll-Driven
- **IntersectionObserver:** Check for elements that animate on entry (opacity, transform).
- **Sticky Elements:** Headers, sidebars, progress indicators.
- **Parallax:** Background or foreground layers moving at different speeds.

### Click/Hover-Driven
- **State Changes:** CSS classes that toggle on click.
- **Transitions:** Hover effects on cards, links, and buttons.
- **Transitions Duration:** Note exact `transition-duration` and `transition-timing-function`.

## 3. Asset Extraction

### SVGs
- Extract all inline `<svg>` elements.
- Convert to React components in `src/components/icons.tsx`.

### Images & Videos
- Download all `<img>` and `<video>` files.
- Note `object-fit` and `aspect-ratio`.
- Identify **layered backgrounds** (e.g., a background image + a gradient overlay).

## 4. Component Breakdown
Divide the page into distinct sections. For each section, create a specification in `docs/research/components/`.

### Spec Template
- **Name:** Logical name (e.g., `ValuePropGrid`).
- **Layout:** Flex/Grid structure.
- **States:** Default, Hover, Active, Scrolled.
- **Content:** Verbatim text copy.
- **Assets:** List of images/icons used.
