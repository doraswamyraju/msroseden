---
name: Dark Atelier
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e3beb8'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#aa8984'
  outline-variant: '#5a403c'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690000'
  primary-container: '#8b0000'
  on-primary-container: '#ff907f'
  inverse-primary: '#b52619'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#474646'
  on-secondary-container: '#b7b4b4'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#434242'
  on-tertiary-container: '#b1aeae'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#920703'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-edge: 64px
  section-gap: 128px
---

## Brand & Style

This design system embodies the "Dark Atelier" aesthetic, a visual language defined by authority, exclusivity, and understated power. The brand personality is private and high-end, appealing to an audience that values discretion and master-level craft. 

The style utilizes a **Minimalist Noir** approach. It avoids unnecessary ornamentation, relying instead on extreme contrast, precise alignment, and dramatic imagery to communicate luxury. Every element is intentional, creating an atmosphere that feels less like a digital interface and more like a private gallery or a bespoke studio at midnight. The UI should feel heavy, silent, and imposing.

## Colors

The palette is anchored in shadow. Obsidian (#080808) serves as the primary base for the deepest background layers, while Deep Charcoal (#121212) provides structural variation for containers and elevated surfaces. 

Sharp Crimson (#8B0000) is the sole emotive force in the palette, reserved strictly for primary calls to action, critical interactions, and brand signatures. Typography primarily utilizes an off-white or silver-tinted neutral (#F5F5F5) to ensure legibility against the dark void, while secondary text should recede into the charcoal tones to maintain the chiaroscuro effect.

## Typography

The typographic scale reinforces the tension between tradition and modernity. **Noto Serif** is used for headlines to convey institutional authority and timeless elegance; it should be set with tight tracking in larger sizes to emphasize its high-contrast strokes. 

**Work Sans** provides a functional, grounded counterpoint for body text and navigation. To enhance the "atelier" feel, use the `label-caps` style for small headers, navigation items, and metadata. This uppercase, wide-tracked treatment suggests the meticulous labeling found in luxury archives or high-fashion studios.

## Layout & Spacing

The layout philosophy follows a **fixed, architectural grid**. Precision is paramount; elements must align to a rigorous 8px rhythm to maintain a sense of order and discipline. 

Generous negative space—or "blackspace"—is used to isolate content, making every image and block of text feel precious. Large section gaps (128px or more) are encouraged to slow the user's pace, forcing a deliberate engagement with the content. Margins should be wide, pushing content toward the center to create a sense of focused, private viewing.

## Elevation & Depth

This design system rejects traditional shadows in favor of **Tonal Layering**. Depth is achieved through the interaction of Obsidian and Charcoal surfaces. 

1. **Base Layer:** Obsidian (#080808) for the main background.
2. **Surface Layer:** Charcoal (#121212) for cards, modals, or secondary sections.
3. **Interactive Layer:** Sharp Crimson (#8B0000) for elements that demand immediate focus.

Borders should be used sparingly and always with high precision. When a separator is required, use a 1px solid stroke in a slightly lighter charcoal or a faint crimson to suggest a "cut" into the darkness rather than an object sitting on top of it.

## Shapes

The shape language is strictly **Sharp (0px)**. There are no rounded corners in the design system. Every button, input field, card, and image frame must have 90-degree angles. This geometric rigidity communicates a "no-compromise" attitude and reinforces the architectural, high-end nature of the brand. Lines should be thin (1px) and perfectly horizontal or vertical, avoiding diagonals or organic curves.

## Components

### Buttons
Primary buttons are solid Sharp Crimson with white or obsidian text. They use the `label-caps` typography style. Secondary buttons are ghost-style with a 1px Crimson or Silver border. Hover states should be a subtle shift in brightness, never a change in shape.

### Input Fields
Inputs are minimal, consisting of a single 1px bottom border that glows Crimson when focused. Labels stay in `label-caps` above the field.

### Cards & Containers
Cards do not use shadows. They are defined by their background color (Charcoal) against the Obsidian page. Images within cards must use chiaroscuro photography—high-contrast lighting with deep shadows—to maintain the atmospheric consistency of the atelier.

### Lists
Lists are separated by thin, low-opacity charcoal lines. Interaction highlights should be subtle, perhaps a small Crimson vertical bar to the left of the active item.

### Photography
Images are the most important component. All photography must feature dramatic lighting, dark backgrounds, and sharp focus on textures (silk, stone, skin, ink). The imagery acts as the primary "light source" for the UI.