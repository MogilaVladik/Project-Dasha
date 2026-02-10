# Ценник — Quick Start Guide

## Getting Started in 2 Minutes

### 1. Install Dependencies
```bash
bun install
```

### 2. Run Development Server
```bash
bun run dev
```

### 3. Open Your Browser
Navigate to: **http://localhost:3000**

You'll see the onboarding flow automatically!

---

## App Navigation

### First Time Users
1. **Onboarding** screens will show (3 steps)
2. Click "Далее" to progress or "Пропустить" to skip
3. You'll land on the **Home** page

### Main Navigation (Bottom Bar)
- **Главная** (Home) - Featured issue, articles, podcasts
- **Архив** (Archive) - All past quarterly issues
- **Подкасты** (Podcasts) - Episode list
- **Авторы** (Authors) - Team bios

---

## Key Features to Test

### 🔍 Global Search
- On **Home** page, use the search bar at top
- Type any keyword to search articles and podcasts
- Example: try "ритейл" or "логистика"

### 📱 Responsive Design
- Resize browser to mobile width (375-428px)
- Everything adapts beautifully
- Bottom nav is fixed for easy thumb access

### 🎨 Art Deco Elements
Look for these design details:
- **Gold gradients** in borders and accents
- **Corner ornaments** on cards
- **Geometric dividers** between sections
- **Drop cap** on article first letter
- **Stepped patterns** in decorations

### 📖 Article Reader
1. Click any article preview
2. See clean, immersive reading layout
3. Click **search icon** in header
4. Search within article text
5. Words are highlighted in gold

### 🎙️ Podcast Experience
1. Go to **Подкасты** (Podcasts)
2. Click any episode
3. See player controls (mock)
4. Read full transcript below
5. Use search to find keywords in transcript

### 📚 Archive Views
1. Visit **Архив** (Archive)
2. Toggle between **Grid** and **List** views
3. Each issue has Art Deco styled cover
4. Click any issue to read

### 💳 Subscription Page
1. Visit **Subscription** from home CTA
2. See two pricing tiers
3. Expand FAQ items
4. Notice smooth Art Deco animations

---

## Customization Ideas

### Change Colors
Edit `src/app/globals.css`:
```css
:root {
    --navy: #1A2332;     /* Change to your navy */
    --gold: #D4AF37;     /* Change to your gold */
    --ivory: #FAF7F2;    /* Change to your ivory */
}
```

### Add New Article
Edit `src/app/page.tsx`:
```tsx
<ArticlePreview
  title="Your New Article"
  category="Your Category"
  excerpt="Your description..."
  readTime="10 мин"
  href="/article/new-article"
/>
```

### Add New Podcast
Edit `src/app/podcasts/page.tsx`:
```tsx
{
  id: 25,
  title: 'Your Podcast Title',
  guest: 'Guest Name',
  // ... more fields
}
```

### Modify Fonts
Edit `tailwind.config.ts`:
```typescript
fontFamily: {
  display: ['"Your Display Font"', 'serif'],
  serif: ['"Your Serif Font"', 'serif'],
}
```

---

## Project Structure at a Glance

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── onboarding/          # First-time flow
│   ├── archive/             # Issues grid/list
│   ├── subscription/        # Pricing
│   ├── podcasts/            # Episodes + detail
│   ├── authors/             # Team bios
│   └── article/[id]/        # Article reader
│
└── components/
    ├── ArtDecoOrnament.tsx  # SVG decorations
    ├── ArtDecoCard.tsx      # Card wrapper
    ├── SearchBar.tsx        # Search input
    ├── BottomNav.tsx        # Navigation
    └── SplashScreen.tsx     # Loading screen
```

---

## Common Tasks

### Reset Onboarding
Open browser console and run:
```javascript
localStorage.removeItem('hasSeenOnboarding');
location.reload();
```

### See All Routes
- `/` - Home
- `/onboarding` - Intro flow
- `/archive` - All issues
- `/subscription` - Pricing
- `/podcasts` - Episode list
- `/podcasts/24` - Specific episode
- `/authors` - Team
- `/article/featured` - Featured article

### Build for Production
```bash
bun run build
bun run start
```

### Check TypeScript
```bash
bun run lint
```

---

## Design Philosophy Reminders

✓ **Symmetrical** layouts  
✓ **Geometric** forms and patterns  
✓ **Gold accents** (never overwhelming)  
✓ **Generous spacing** for elegance  
✓ **Serif typography** for editorial feel  
✓ **Text-focused** content  
✓ **Mobile-first** responsive design  

---

## Troubleshooting

### Fonts not loading?
- Check internet connection (Google Fonts)
- Preconnect links in `layout.tsx` should be present

### Navigation not showing?
- Check you're not on onboarding page
- Bottom nav hides on certain pages

### Search not working?
- It's a client-side demo with mock functionality
- Highlighting works in article/podcast pages

### Build errors?
```bash
rm -rf .next node_modules
bun install
bun run dev
```

---

## Next Steps

1. **Explore all pages** - Click through every route
2. **Resize browser** - Test responsive design
3. **Read documentation** - See `README.md`, `DESIGN_SYSTEM.md`
4. **Customize content** - Add your own articles/podcasts
5. **Integrate API** - Replace static data with real backend
6. **Add features** - Bookmarking, dark mode, etc.

---

## Need Help?

📖 **Full Documentation**: See `README.md`  
🎨 **Design System**: See `DESIGN_SYSTEM.md`  
🏗️ **Architecture**: See `APP_STRUCTURE.md`  

---

**Enjoy building with Ценник! The app is designed to be elegant, functional, and a joy to use. 🎭✨**
