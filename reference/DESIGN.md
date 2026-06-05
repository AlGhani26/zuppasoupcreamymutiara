---
name: Artisan Hearth UI
colors:
  surface: '#fef9e7'
  surface-dim: '#dfdac9'
  surface-bright: '#fef9e7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f4e2'
  surface-container: '#f3eedc'
  surface-container-high: '#ede8d7'
  surface-container-highest: '#e7e3d1'
  on-surface: '#1d1c11'
  on-surface-variant: '#594238'
  inverse-surface: '#323125'
  inverse-on-surface: '#f6f1df'
  outline: '#8c7166'
  outline-variant: '#e0c0b2'
  surface-tint: '#a23f00'
  primary: '#9e3d00'
  on-primary: '#ffffff'
  primary-container: '#c64f00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb595'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed023'
  on-secondary-container: '#6f5900'
  tertiary: '#4c5e71'
  on-tertiary: '#ffffff'
  tertiary-container: '#64768a'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb595'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7c2e00'
  secondary-fixed: '#ffe084'
  secondary-fixed-dim: '#eec209'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#d1e4fb'
  tertiary-fixed-dim: '#b5c8df'
  on-tertiary-fixed: '#091d2e'
  on-tertiary-fixed-variant: '#36485b'
  background: '#fef9e7'
  on-background: '#1d1c11'
  surface-variant: '#e7e3d1'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The brand personality is **warm, artisanal, and professional**, designed to evoke the sensory experience of freshly baked goods and savory comfort food. The target audience includes food enthusiasts and catering clients who value quality ingredients and homemade care. 

This design system utilizes a **Corporate / Modern** framework infused with **Tactile** elements. It prioritizes high-resolution food photography, treating the UI as a clean, premium canvas that highlights the "crunch" and texture of the products. The emotional response should be one of hunger-inducing trust—professional enough for a business transaction, yet warm enough to feel like a neighborhood bakery.

## Colors

The palette is built on a "Maillard reaction" logic—using the deep oranges and golden yellows found in perfectly cooked food to stimulate the appetite.

- **Primary (#D35400):** A deep terracotta used for primary actions and brand emphasis. It represents heat and rich flavor.
- **Secondary (#F1C40F):** A golden yellow used for highlights, "New" tags, and accents that evoke a "freshly baked" glow.
- **Background (#FEF9E7):** An off-white cream that prevents the "clinical" feel of pure white, providing a soft, premium backdrop.
- **Accents/Typography (#2C3E50):** A dark charcoal used for maximum legibility and to ground the warmer tones with a professional, authoritative weight.

## Typography

This design system employs a classic Serif/Sans-Serif pairing to balance artisan charm with digital clarity.

- **Headlines (Playfair Display):** Used for product names, section titles, and marketing claims. The high-contrast serif evokes a classic menu aesthetic.
- **Body & UI (Montserrat):** Used for descriptions, prices, and functional UI elements. The geometric nature of Montserrat ensures readability even at small sizes on mobile devices.
- **Hierarchy:** Maintain generous vertical rhythm. Headlines should always lead the eye, while price points should use a semi-bold weight of the body font to ensure they are immediately scannable.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a boutique, curated feel, transitioning to a fluid model on smaller screens. 

- **Grid System:** A standard 12-column grid is used for desktop. 
- **Spacing Scale:** Built on an 8px base unit. Component internal padding should favor larger values (e.g., 24px or 32px) to create a sense of luxury and "breathability."
- **Mobile Reflow:** On mobile, margins shrink to 16px. Card-based layouts should transition from multi-column to a single-stack view, ensuring food photography remains large and appetizing.

## Elevation & Depth

To achieve the "inviting" and "premium" feel, depth is created through **Ambient Shadows** and tonal layering.

- **Shadow Profile:** Shadows should be soft, diffused, and slightly tinted with the primary color (low-opacity terracotta) rather than pure black. This prevents the UI from looking "muddy" on the cream background.
- **Surface Hierarchy:** 
    - **Level 0 (Background):** Cream (#FEF9E7).
    - **Level 1 (Cards/Surface):** Pure White (#FFFFFF) with a subtle border (#F1C40F at 10% opacity) or a soft shadow.
    - **Level 2 (Modals/Popovers):** Deeper shadows to indicate immediate focus.
- **Photography:** Images should have a very subtle inner glow or soft border to integrate them seamlessly into the cards.

## Shapes

The shape language is consistently **Rounded**, avoiding sharp corners to maintain a friendly, approachable, and "organic" aesthetic.

- **Base Radius:** 0.5rem (8px) for inputs and standard buttons.
- **Large Radius (rounded-lg):** 1rem (16px) for product cards and containers.
- **Extra Large Radius (rounded-xl):** 1.5rem (24px) for featured hero elements or specific image masks.
- **Icons:** Use a rounded icon set that mirrors the weight and curves of the Montserrat typeface.

## Components

### Buttons
- **Primary:** Terracotta (#D35400) background with White text. Bold, rounded-md (8px), with a subtle lift shadow on hover.
- **Secondary/Ghost:** Golden Yellow (#F1C40F) border and text. Used for "Add to Cart" or "Learn More."

### Cards
Food cards are the core of the design system. They must feature a 1:1 or 4:3 aspect ratio image at the top with a slight "zoom" effect on hover. The content area includes a Playfair Display title and a prominent price tag in Montserrat Bold.

### Chips & Tags
Use for categories like "Best Seller" or "Spicy." These should use the Secondary Golden Yellow with a slightly darker text for contrast, using a "pill" shape (rounded-xl).

### Input Fields
Soft, cream-filled backgrounds with a subtle border that changes to Terracotta on focus. Labels should be Montserrat Bold in Charcoal.

### List Items
For order summaries or menu lists, use clean dividers in a very light tint of the Primary color to maintain the warm theme without adding visual clutter.