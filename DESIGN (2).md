---
name: Dark Atelier
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e4beb8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ab8983'
  outline-variant: '#5b403c'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690000'
  primary-container: '#990000'
  on-primary-container: '#ffa092'
  inverse-primary: '#b82014'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#4a4949'
  on-tertiary-container: '#bab8b8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
spacing:
  unit: 4px
  gutter: 24px
  margin-page: 64px
  section-gap: 128px
  container-max: 1200px
---

## Brand & Style

The design system is rooted in the "Dark Atelier" aesthetic—a synthesis of high-end clinical professionalism and architectural minimalism. It avoids the clichés of its industry, opting instead for a "high-stakes" atmosphere that evokes the precision of a surgical suite or a bespoke tailoring house. The brand personality is cold, authoritative, and impeccably organized.

The visual style leverages **Minimalism** with a focus on structural integrity. By utilizing extreme dark values and precise, thin lines, the interface feels like a blueprint for a high-consequence environment. Every element is intentional; there is no decoration, only function elevated to an art form. The user should feel a sense of elite exclusivity and absolute control.

## Colors

The palette is an exercise in restraint, dominated by "Obsidian" and "Deep Charcoal" to create a void-like depth. The primary accent is a "Surgical Crimson"—a sharp, saturated red used sparingly to denote action, importance, or the presence of the authority figure.

- **Base Surface (#0A0A0A):** The foundational void. Used for the lowest layer of the UI.
- **Elevated Surface (#121212):** Used for containers and structural sections to provide subtle depth without breaking the dark immersion.
- **Surgical Crimson (#990000):** Reserved for high-priority calls to action, active states, and critical markers.
- **Structural Grey (#262626):** Used exclusively for thin, 1px borders and dividers to define the architectural grid.

## Typography

The typographic tension in this design system is created by pairing the literary, authoritative **Newsreader** with the utilitarian precision of **Inter**. 

Headings should utilize generous leading and occasional italics to emphasize specific professional nuances. Body text is kept strictly functional, prioritizing legibility and a clinical feel. Captions and labels should almost always be set in uppercase with increased letter spacing to mimic the technical markings found on architectural plans or medical instruments.

## Layout & Spacing

This design system employs a **Fixed Grid** model with an emphasis on "negative space as a luxury." The layout is disciplined, utilizing a 12-column grid where information is often centered or pushed to extreme perimeters to create a sense of scale.

Spacing follows a strict 4px baseline rhythm, but the defining characteristic is the **Section Gap**. Significant vertical breathing room (128px+) is used between content blocks to ensure the interface never feels cluttered or hurried. Alignment should be surgical; every element must snap to the grid to maintain the architectural feel.

## Elevation & Depth

In this design system, depth is not conveyed through shadows, but through **Tonal Layering** and **Thin Borders**. 

1. **Layering:** Surfaces move from #0A0A0A (background) to #121212 (raised cards) to #1A1A1A (hover states). This creates a sophisticated, low-contrast stacking effect.
2. **Borders:** Subtle 1px borders in #262626 are used to define edges. They should be crisp and aliased, suggesting a sense of cold, hard materials like steel or glass.
3. **No Shadows:** Drop shadows are strictly prohibited. The environment is "flat-lit," mimicking a high-end atelier or clinical space where clarity is paramount.

## Shapes

The shape language is strictly **Sharp (0px)**. There are no rounded corners in this design system. Every button, input field, and container must have 90-degree angles to reinforce the themes of discipline, precision, and architectural rigidity. This lack of softness communicates a high-stakes, professional environment where there is no room for error.

## Components

### Buttons
Primary buttons are solid Crimson (#990000) with white or very light grey text, always sharp-edged. Secondary buttons are outlined in 1px Structural Grey, transitioning to a Crimson border on hover. Text within buttons should be uppercase Inter for a technical, command-like feel.

### Input Fields
Inputs are minimalist, consisting of a single 1px bottom border. When focused, the border transitions to Crimson. Labels are placed above the field in "label-caps" typography.

### Cards & Containers
Cards do not use shadows. They are defined by a slightly lighter background (#121212) than the page and a 1px border. There should be generous internal padding (at least 32px) to maintain the "Dark Atelier" feel.

### Status Indicators
In place of traditional icons, use simple geometric markers (e.g., a small 4x4px crimson square) to indicate status or active items. 

### Distinctive Components
- **The Protocol List:** A high-contrast list component where items are separated by full-width 1px lines, used for scheduling or service menus.
- **The Signature Divider:** A horizontal rule that begins with a small Crimson square, used to separate major narrative sections.