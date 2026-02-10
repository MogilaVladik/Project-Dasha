# Ценник — Quarterly Retail Media App

A cross-platform mobile app UI for "Ценник", a luxury quarterly retail media publication targeting suppliers and vendors in the retail industry. Designed with classic Art Deco aesthetics inspired by 1920s-1930s luxury design.

## Design Philosophy

### Art Deco Elements
- **Symmetrical layouts** with geometric precision
- **Stepped forms** and geometric ornamentation
- **Sunburst motifs** and fine decorative lines
- **Corner ornaments** with stepped details
- **Gold accents** in gradients, borders, and dividers

### Color Palette
- **Navy (#1A2332)** - Primary dark color
- **Black (#0A0A0A)** - Deep contrast
- **Ivory/Cream (#FAF7F2, #F5EFE6)** - Background warmth
- **Metallic Gold (#D4AF37)** - Luxury accent with gradients

### Typography
- **Playfair Display** - Art Deco inspired display font for headings
- **Cormorant Garamond** - Elegant serif for body text
- Generous line spacing (1.8) for editorial elegance
- Special letter spacing for luxury feel

## App Structure

### Core Screens

1. **Onboarding** (`/onboarding`)
   - 3 screens introducing the publication
   - Art Deco ornamental progress indicators
   - Animated decorative elements (sunburst, diamonds, stepped patterns)

2. **Home** (`/`)
   - Featured latest issue cover with Art Deco styling
   - Global search bar for articles and podcasts
   - Highlighted articles and podcast previews
   - Subscription CTA with decorative borders

3. **Archive** (`/archive`)
   - Grid and list view toggle
   - Past quarterly issues with Art Deco styled covers
   - Geometric frames and gold accents on each cover

4. **Podcasts** (`/podcasts`)
   - List of episodes with Art Deco podcast icons
   - Featured episode with elevated card design
   - Season and episode metadata
   - Individual podcast pages (`/podcasts/[id]`) with:
     - Full transcript with in-transcript search
     - Playback controls with Art Deco styling
     - Related episodes

5. **Authors** (`/authors`)
   - Author bios with Art Deco framed avatars (initials)
   - Geometric corner decorations
   - Article count and role information

6. **Article Reader** (`/article/[id]`)
   - Clean, immersive text-only layout
   - Drop cap styling for first letter
   - In-article keyword search functionality
   - Sticky header with search toggle
   - Related articles at bottom

7. **Subscription** (`/subscription`)
   - Two pricing tiers (Quarterly/Annual)
   - Feature list with checkmarks
   - FAQ accordion with Art Deco transitions
   - Trust indicators (subscriber count, issues, years)

### Key Features

- **No user accounts or login required** - Pure content consumption
- **Global search** - Search across all articles and podcast transcripts
- **In-content search** - Search within individual articles and podcast transcripts
- **Responsive design** - Optimized for mobile viewports
- **Bottom navigation** - Fixed Art Deco styled navigation bar
- **Text-focused** - Editorial content with minimal clutter

## Component Library

### Reusable Components

- `ArtDecoOrnament` - Decorative SVG elements
- `CornerOrnament` - Corner decorations with rotation
- `GeometricDivider` - Content section separator
- `SearchBar` - Search input with Art Deco border
- `BottomNav` - Fixed navigation with gold accents
- `ArtDecoCard` - Container with corner ornaments

## Technical Stack

- **Next.js 15.5.4** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React 19** - Latest React features
- **Google Fonts** - Playfair Display & Cormorant Garamond

## Running the App

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

## Design Patterns

### Art Deco CSS Classes

- `.sunburst` - Radial gradient background with conic gradient overlay
- `.drop-cap` - Large decorative first letter
- `.gold-gradient-text` - Metallic gold gradient text
- `.art-deco-border` - Top and bottom gold gradient borders
- `.geometric-divider` - Centered ornamental divider
- `.fine-line` - Thin gold gradient separator

### Color Usage

- Navy/Black backgrounds for premium feel
- Ivory/Cream for content areas (reduces eye strain)
- Gold as accent color (never overwhelming)
- Gradients for depth and luxury

### Spacing & Layout

- Generous padding for breathing room
- Centered layouts (max-width: 2xl/3xl)
- Consistent 8px grid system
- Mobile-first responsive design

## Content Examples

All content is realistic placeholder data in Russian:
- Article titles: "Тренды поставок в 2025", "Диалог с CEO сети 'Магнит'"
- Podcast episodes: "Будущее российского ритейла", "Цифровизация поставок"
- Author names and bios
- Realistic metadata (read times, dates, episode numbers)

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios (WCAG AA compliant)
- Focus states with gold highlights

## Future Enhancements

- Offline reading with service workers
- Push notifications for new issues
- Bookmark functionality
- Reading progress tracking
- Audio player with advanced controls
- Dark mode toggle
- Share to social media
- Print-optimized article layouts

---

**Design Ethos**: Editorial, luxurious, timeless — like a high-end print magazine translated into digital form. Every screen feels like a page from a 1930s premium journal, but fully functional on mobile.
