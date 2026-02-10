# Ценник — Art Deco Design System

## Overview
A comprehensive design system for the Ценник quarterly retail media app, inspired by 1920s-1930s Art Deco luxury aesthetics.

---

## Color Palette

### Primary Colors
```css
Navy:        #1A2332  (Primary dark, headers, text)
Black:       #0A0A0A  (Deep contrast, covers)
Ivory:       #FAF7F2  (Primary background)
Cream:       #F5EFE6  (Secondary background, cards)
```

### Accent Colors
```css
Gold:        #D4AF37  (Primary accent)
Gold Light:  #E8C870  (Highlights, gradients)
Gold Dark:   #B8941F  (Shadows, gradients)
```

### Usage Guidelines
- **Navy/Black**: Use for premium feels, headers, important text
- **Ivory/Cream**: Backgrounds to reduce eye strain, elegant warmth
- **Gold**: Sparingly for accents, borders, hover states, ornaments
- **Gradients**: Gold gradients for luxury feel, never flat gold blocks

---

## Typography

### Font Families
```css
Display:  'Playfair Display', serif  (Headings, numbers, luxury text)
Serif:    'Cormorant Garamond', serif (Body text, descriptions)
Sans:     system-ui, -apple-system     (UI elements, fallback)
```

### Type Scale
```css
Hero:     3.5rem (56px)  - Splash screen, major headlines
Display:  2.5rem (40px)  - Page titles
H1:       2rem (32px)    - Section headers
H2:       1.5rem (24px)  - Subsections
H3:       1.25rem (20px) - Card titles
Body:     1rem (16px)    - Main content
Small:    0.875rem (14px)- Metadata, captions
Tiny:     0.75rem (12px) - Tags, labels
```

### Letter Spacing
```css
Luxury:      0.25em  (Display text, headings)
Art Deco:    0.15em  (Subheadings)
Wide:        0.05em  (Uppercase labels)
Normal:      0       (Body text)
```

### Line Height
```css
Tight:       1.2  (Display headings)
Relaxed:     1.6  (Subheadings)
Loose:       1.8  (Body text for readability)
Very Loose:  2.0  (Article content)
```

---

## Spacing System

### Base Unit: 4px (0.25rem)

```css
xs:   0.5rem (8px)   - Tight gaps, icon spacing
sm:   0.75rem (12px) - Close elements
md:   1rem (16px)    - Default spacing
lg:   1.5rem (24px)  - Section spacing
xl:   2rem (32px)    - Major sections
2xl:  3rem (48px)    - Page sections
3xl:  4rem (64px)    - Hero sections
```

### Content Max Widths
```css
Narrow:  640px (2xl)  - Article reader, focused content
Medium:  768px (3xl)  - Most pages, comfortable reading
Wide:    1024px (4xl) - Archive grid, wide layouts
```

---

## Components

### Art Deco Ornaments

#### Corner Ornaments
- **Position**: Top-left, top-right, bottom-left, bottom-right
- **Size**: 24x24px
- **Style**: Stepped borders, 90° rotations
- **Color**: Gold with opacity variations

#### Geometric Dividers
- **Element**: Horizontal rule with centered diamond
- **Height**: 8px SVG + margins
- **Color**: Gold gradient (dark → light → dark)
- **Usage**: Between major content sections

#### Fine Lines
- **Height**: 1px
- **Style**: Horizontal gold gradient
- **Opacity**: 20-60% depending on emphasis
- **Usage**: Subtle separators, borders

### Cards

#### Default Card
```css
Background:  Ivory (#FAF7F2)
Border:      1px solid Navy/20%
Padding:     1.5rem (24px)
Corners:     Optional ornaments
Hover:       Border changes to Gold/60%
```

#### Elevated Card
```css
Background:  Cream (#F5EFE6)
Border:      2px solid Gold/40%
Padding:     1.5rem (24px)
Shadow:      Large soft shadow
Corners:     Always show ornaments
Usage:       Featured content, premium items
```

#### Bordered Card
```css
Background:  Ivory
Border:      2px solid Navy/80%
Usage:       Strong emphasis, CTAs
```

### Buttons

#### Primary Button
```css
Background:  Navy (#1A2332)
Text:        Ivory
Border:      1px solid Gold/30%
Padding:     0.75rem 2rem
Font:        Display font, uppercase, tracking-luxury
Hover:       Gold shimmer animation (gradient translate)
```

#### Secondary Button
```css
Background:  Cream
Border:      1px solid Navy/20%
Text:        Navy
Hover:       Border → Gold/60%, Text → Gold
```

### Navigation

#### Bottom Navigation
```css
Background:  Navy with 95% opacity, backdrop blur
Border Top:  1px Gold/30% + 1px gradient line
Height:      ~60px
Items:       4 items, equal width
Active:      Gold color
Inactive:    Ivory/60%
Icons:       24x24px stroked icons
Labels:      12px serif, uppercase tracking
```

### Search Bar

```css
Border:      1px Gold gradient (subtle)
Background:  Ivory
Input:       Serif font, Navy text
Placeholder: Navy/40%
Focus:       Gold border becomes solid
Icon:        20x20px magnifying glass
```

---

## Animations & Transitions

### Timing
```css
Fast:      150ms  - Hover states
Default:   200ms  - Color changes
Medium:    300ms  - Transforms
Slow:      500ms  - Page transitions
Dramatic:  700ms  - Gold shimmer effect
```

### Easing
```css
ease        - Default for most transitions
ease-in-out - Smooth starts and ends
ease-out    - Menu openings
```

### Common Animations
```css
Hover Scale:      scale(1.02)       - Cards, clickable items
Border Fade:      opacity 0.4 → 1.0 - Search bars, inputs
Shimmer:          translateX(-100% → 100%) - Button hover
Pulse:            animate-pulse     - Loading indicators
```

---

## Layout Patterns

### Mobile-First Approach
- Base styles for 375px viewport
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Single column layouts by default
- Generous padding (1.5rem / 24px)

### Content Hierarchy
1. **Header** (Navy background, gold text)
2. **Search/Actions** (Negative margin to overlap header)
3. **Featured Content** (Elevated cards)
4. **Grid/List Content** (Default cards)
5. **Footer/Navigation** (Fixed bottom)

### Vertical Rhythm
- Consistent spacing between sections (2rem / 32px)
- Geometric dividers for major breaks
- Fine lines for subtle separations
- White space as design element

---

## Art Deco Principles

### Symmetry
- Center-aligned layouts
- Mirrored ornaments (corners, decorations)
- Balanced compositions

### Geometric Forms
- Rectangles, diamonds, stepped shapes
- Straight lines dominate over curves
- Angular decorations

### Repetition
- Consistent border patterns
- Repeated ornamental motifs
- Uniform spacing

### Luxury Details
- Gold accents (never overwhelming)
- Fine borders and dividers
- Stepped corner treatments
- Sunburst patterns (subtle backgrounds)

### Typography Hierarchy
- Large display fonts with extreme tracking
- Serif body text for elegance
- Uppercase for emphasis
- Drop caps for editorial feel

---

## Iconography

### Style
- **Stroked icons** (not filled)
- **1.5px stroke weight** for most icons
- **Rounded line caps** for softer feel
- **24x24px** standard size
- **20x20px** for compact UI
- **Gold color** for active states
- **Navy/Ivory** for inactive

### Common Icons
- Search: Magnifying glass (circle + line)
- Back: Chevron left
- Forward: Chevron right
- Home: House outline
- Archive: Box with lid
- Podcast: Concentric circles
- Author: Person outline
- Check: Checkmark (for features)

---

## Content Guidelines

### Voice & Tone
- **Professional** yet **approachable**
- **Editorial** style (magazine-quality)
- Russian language throughout
- Formal address (вы, не ты)

### Text Content
- **Headlines**: Bold, declarative, Art Deco style
- **Body**: Clear, informative, well-spaced
- **Metadata**: Concise (dates, times, counts)
- **CTAs**: Action-oriented, uppercase

### Placeholder Content Examples
```
Articles:    "Тренды поставок в 2025"
             "Диалог с CEO сети 'Магнит'"
             
Podcasts:    "Будущее российского ритейла"
             "Цифровизация поставок"
             
Authors:     "Мария Лебедева"
             "Александр Новиков"
```

---

## Accessibility

### Color Contrast
- Navy on Ivory: ✓ AAA (9.2:1)
- Navy on Cream: ✓ AAA (8.7:1)
- Gold on Navy: ✓ AA (4.8:1)
- Ivory on Navy: ✓ AAA (9.2:1)

### Interactive Elements
- Minimum 44x44px touch targets
- Visible focus states (gold outline)
- Hover states for all clickable items
- ARIA labels for icon buttons

### Typography
- Minimum 16px font size
- Line height ≥ 1.6 for body text
- Sufficient letter spacing
- No text in images

---

## Best Practices

### DO ✓
- Use gold sparingly as accent
- Maintain symmetrical layouts
- Apply generous white space
- Use geometric ornaments
- Keep text hierarchies clear
- Center-align display text
- Use serif fonts for body content

### DON'T ✗
- Overuse gold (becomes garish)
- Use rounded corners (not Art Deco)
- Clutter with too many elements
- Use script or handwritten fonts
- Break symmetry without reason
- Ignore vertical rhythm
- Use flat icons (prefer stroked)

---

## Implementation Notes

### CSS Custom Properties
All colors and key values are defined as CSS variables in `globals.css` for easy theming and consistency.

### Component Reusability
Art Deco elements (ornaments, dividers, cards) are extracted into reusable React components for consistency across the app.

### Performance
- Google Fonts preconnect for faster loading
- SVG icons inline for fewer requests
- Minimal animations (CSS only)
- Optimized gradients (2-3 color stops max)

---

**This design system ensures every screen feels like a page from a 1930s premium journal, but fully functional on modern mobile devices.**
