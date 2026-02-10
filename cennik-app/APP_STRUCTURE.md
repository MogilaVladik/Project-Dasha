# Ценник — App Structure

## File Organization

```
src/
├── app/
│   ├── layout.tsx                 # Root layout with fonts
│   ├── page.tsx                   # Home page (featured issue, articles, podcasts)
│   ├── globals.css                # Global styles, Art Deco CSS
│   │
│   ├── onboarding/
│   │   └── page.tsx              # 3-step onboarding flow
│   │
│   ├── archive/
│   │   └── page.tsx              # Grid/list view of all issues
│   │
│   ├── subscription/
│   │   └── page.tsx              # Pricing plans & features
│   │
│   ├── podcasts/
│   │   ├── page.tsx              # Podcast list
│   │   └── [id]/
│   │       └── page.tsx          # Podcast player & transcript
│   │
│   ├── authors/
│   │   └── page.tsx              # Author bios with Art Deco frames
│   │
│   └── article/
│       └── [id]/
│           └── page.tsx          # Article reader with search
│
└── components/
    ├── ArtDecoOrnament.tsx       # SVG ornaments & dividers
    ├── ArtDecoCard.tsx           # Card wrapper with corners
    ├── SearchBar.tsx             # Search input with gold border
    ├── BottomNav.tsx             # Fixed navigation bar
    └── SplashScreen.tsx          # Initial loading screen
```

---

## Page Routes

### Public Routes (No Auth Required)

| Route | Purpose | Key Features |
|-------|---------|--------------|
| `/onboarding` | First-time intro | 3 steps, skip option, Art Deco animations |
| `/` | Home | Featured issue, search, highlights, CTA |
| `/archive` | Issue archive | Grid/list toggle, all past issues |
| `/subscription` | Premium plans | 2 pricing tiers, features, FAQ |
| `/podcasts` | Podcast list | All episodes, featured episode |
| `/podcasts/[id]` | Podcast detail | Player, transcript, in-transcript search |
| `/authors` | Author directory | Bios, avatars with Art Deco frames |
| `/article/[id]` | Article reader | Clean layout, drop cap, in-article search |

---

## Component Breakdown

### Reusable Components

#### `ArtDecoOrnament.tsx`
**Exports:**
- `ArtDecoOrnament` - Horizontal decorative element
- `CornerOrnament` - Corner decorations (4 positions)
- `GeometricDivider` - Section separator with diamond

**Usage:**
```tsx
import { ArtDecoOrnament, GeometricDivider } from '@/components/ArtDecoOrnament';

<ArtDecoOrnament className="mb-4" />
<GeometricDivider />
```

#### `ArtDecoCard.tsx`
**Props:**
- `children` - Card content
- `variant` - 'default' | 'elevated' | 'bordered'
- `showCorners` - Show/hide corner ornaments
- `className` - Additional Tailwind classes

**Usage:**
```tsx
import { ArtDecoCard } from '@/components/ArtDecoCard';

<ArtDecoCard variant="elevated">
  <h3>Featured Content</h3>
</ArtDecoCard>
```

#### `SearchBar.tsx`
**Props:**
- `placeholder` - Input placeholder text
- `onSearch` - Callback function with query
- `className` - Additional classes

**Features:**
- Gold gradient border
- Focus state animation
- Magnifying glass icon

#### `BottomNav.tsx`
**Features:**
- Fixed to bottom
- 4 navigation items
- Active state highlighting
- Navy background with backdrop blur
- Gold accent line

#### `SplashScreen.tsx`
**Features:**
- Auto-redirects after 2.5s
- Checks onboarding status
- Art Deco logo animation
- Loading dots

---

## Data Structure

### Sample Article
```typescript
{
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  content: string; // Full text
}
```

### Sample Podcast
```typescript
{
  id: number;
  title: string;
  guest: string;
  season: number;
  episode: number;
  duration: string;
  date: string;
  description: string;
  transcript: string; // Full transcript
}
```

### Sample Author
```typescript
{
  id: number;
  name: string;
  role: string;
  bio: string;
  articles: number;
}
```

### Sample Issue
```typescript
{
  id: number;
  year: number;
  quarter: string; // 'Q1', 'Q2', 'Q3', 'Q4'
  title: string;
  theme: 'navy' | 'black'; // Cover color
}
```

---

## Key Features Implementation

### Global Search
**Location:** Home page (`/`)
**Functionality:**
- Search across all articles and podcast transcripts
- Gold-bordered input
- Placeholder: "Поиск по статьям и подкастам..."

### In-Article Search
**Location:** Article reader (`/article/[id]`)
**Functionality:**
- Toggle search bar from header
- Highlights matches in real-time
- Gold highlight background
- Placeholder: "Поиск по тексту статьи..."

### In-Transcript Search
**Location:** Podcast detail (`/podcasts/[id]`)
**Functionality:**
- Same as article search
- Searches podcast transcript
- Placeholder: "Поиск по транскрипту подкаста..."

### Onboarding Flow
**Flow:**
1. User opens app
2. Check `localStorage` for 'hasSeenOnboarding'
3. If false → redirect to `/onboarding`
4. Show 3 screens with progress indicator
5. On complete → set flag, redirect to home
6. Skip button → set flag, redirect to home

### View Toggles
**Location:** Archive page (`/archive`)
**Options:**
- Grid view (2 columns)
- List view (single column)
**State:** Local component state

### FAQ Accordion
**Location:** Subscription page (`/subscription`)
**Features:**
- Collapse/expand on click
- Smooth animation
- Arrow icon rotation
- Gold divider on expand

---

## State Management

### Local Storage
```typescript
'hasSeenOnboarding': 'true' | null
```

### Component State
- Search query strings
- View mode toggles (grid/list)
- FAQ open/closed states
- Current onboarding step

### No Global State
- All data is static/placeholder
- No user authentication
- No server-side state

---

## Styling Approach

### Tailwind Utilities
Primary styling method using:
- Custom color variables
- Extended font families
- Custom spacing scale
- Responsive breakpoints

### Custom CSS Classes
Defined in `globals.css`:
- `.sunburst` - Radial gradient background
- `.drop-cap` - Large first letter
- `.gold-gradient-text` - Metallic text
- `.art-deco-border` - Top/bottom borders
- `.fine-line` - Thin separator

### Inline Styles
Minimal usage for:
- Dynamic SVG calculations
- Animation delays
- Transform rotations

---

## Performance Considerations

### Font Loading
- Preconnect to Google Fonts
- Display swap strategy
- System font fallbacks

### Images
- No external images currently
- All visuals are SVG or CSS
- Placeholder covers are CSS gradients

### Code Splitting
- Next.js automatic code splitting
- Route-based splitting
- Component lazy loading (if needed)

### Optimization
- Minimal JavaScript
- CSS-only animations
- Reusable components
- Efficient re-renders

---

## Browser Support

### Target Browsers
- Safari iOS 14+
- Chrome Android 90+
- Modern evergreen browsers

### Progressive Enhancement
- Works without JavaScript (mostly)
- Graceful degradation for older browsers
- CSS fallbacks for gradients

---

## Future Expansion Points

### Easy to Add
1. **Dark mode** - Toggle CSS variables
2. **Bookmarking** - localStorage + UI updates
3. **Reading progress** - Scroll tracking + storage
4. **Share functionality** - Web Share API
5. **Offline mode** - Service worker + caching
6. **More languages** - i18n setup
7. **User preferences** - Font size, spacing
8. **Article ratings** - Star system + storage

### Architecture Supports
- Adding new pages (just create route)
- New components (import Art Deco system)
- API integration (replace static data)
- User authentication (add auth provider)

---

**The app structure is clean, modular, and ready for expansion while maintaining the Art Deco design ethos throughout.**
