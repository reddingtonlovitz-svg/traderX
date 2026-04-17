# Trader X - Design System & Spacing Standards

To ensure a cohesive, professional B2B appearance and maintain high information density, all blocks must adhere to the following spacing and layout rules.

## 1. Section Structure
Every section should follow this internal padding standard:

| Breakpoint | Padding (Tailwind) | Target |
| :--- | :--- | :--- |
| Mobile | `py-16` | Consistent rhythm on small screens |
| Desktop | `py-20` | Professional spacing between sections |

## 2. Heading & Margins
The distance between the section title and the first grid of content:

| Breakpoint | Margin (Tailwind) | Target |
| :--- | :--- | :--- |
| Mobile | `mb-10` | Tight connection between title and content |
| Desktop | `mb-14` | Balanced white space |

## 3. Grid & Gap Tokens
Standardized gaps between cards or structural elements:

| Token | Tailwind | Usage |
| :--- | :--- | :--- |
| `GAP_MAJOR` | `gap-8 md:gap-12` | Between large grid items |
| `GAP_MINOR` | `gap-4 md:gap-6` | Inside cards or micro-components |
| `CARD_P` | `p-6 md:p-8` | Internal padding for cards |

## 4. Navigation & Hero Offset
The distance from the top of the viewport to the first interactive elements:

*   **Navbar Top**: `py-6` (Ensures the nav pill is tight to the top)
*   **Hero Top Padding**: `pt-24 md:pt-28` (Balance with fixed navbar height)

## 5. Visual Accents
*   **Corners**: All containers must use `rounded-[2.5rem]` or `rounded-pill`. No sharp edges.
*   **Borders**: Subtle `border-black/[0.03]` or `border-white/5` to define boundaries without heavy lines.
*   **Transitions**: Default hover duration `duration-500` with `ease-out` or `cubic-bezier`.

---

*Last Updated: 2026-04-10*
