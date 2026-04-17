---
name: Trader X Design System
description: Official design system for Trader X — B2B Metallurgy Platform. Premium, high-contrast, strict spatial rules.
---

# Trader X Design System

This document outlines the strict UI/UX primitives for Trader X. The goal is a highly premium, rigorous B2B digital instrument utilizing a single, strong typeface.

## 1. Typography

**Primary Font:** Inter (Sans-serif)
We avoid rounded and decorative geometries. Inter guarantees neutrality, high information density, and absolute professional trustworthiness. All emphasis is achieved through weight (Bold/Black) and style (Italic).

**Typography Rules:**
- **Alignment:** ALL section headers must be left-aligned to the global gutter. No centered headings.
- **Tracking:** Headings must run tight (`-0.02em` to `-0.04em`).
- **Line Height:** 
  - Displays / H1 / H2: `0.9` to `1.1`. (Extremely tight leading for a high-end editorial feel).
  - Body / Paragraph: `1.6`. (Relaxed reading for complex text).

## 2. Spatial & Structural Rules

- **The Global Gutter:** All sections must use the `.section-container` utility which enforces a consistent left-padding and max-width. This ensures a "straight line" scroll experience.
- **Grid Consistency:** All cards in a horizontal row MUST start and end at the same pixels. Use `items-stretch` and `h-full`.
- **Density:** 
  - Vertical gaps between sections: Tightened to maximize information density.
  - Internal gaps in grids: `gap-5` (20px).
- **Curves / Border Radii:** Maintain `.rounded-[2.5rem]` or `.rounded-huge` for main structural cards.

## 3. Interaction Design

**NO CHEAP EFFECTS:** Avoid aggressive neon glows, pulsating shadows, or chaotic lens blurs.
- **Shadows:** Use only for depth, never for "glow". Preferred: `border-black/5` or `border-white/5` with very subtle natural shadows.
- **Hover States:** Controlled scaling (`scale(1.02)`) or subtle Y-translation.

## 4. Color Palette

- **Background (Cream):** `#F6F5F4`
- **Foreground (Dark):** `#151514`
- **Primary Accent:** `#0D79F2` (Used for critical focus and italics).
- **Secondary Accent:** `#22C55E` (Used for success/profit emphasis).

## 5. Components Standards

- **Founders:** Names must be in `font-black italic`, split into two lines (`block`), and aligned with the card's leading edge.
- **Infrastructure:** Cards must be high-contrast with no hover transparency/fade.
