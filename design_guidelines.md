# QutaumDB Website Design Guidelines

## Design Approach
**Reference-Based**: Inspired by Node.js website aesthetic - dark, developer-focused, professional with high-tech feel. Modern SaaS landing page with strong visual hierarchy and technical credibility.

## Typography
- **Primary Font**: Inter or DM Sans via Google Fonts
- **Monospace**: JetBrains Mono for code examples
- **Hierarchy**:
  - Hero H1: text-5xl md:text-6xl lg:text-7xl, font-bold
  - Section H2: text-3xl md:text-4xl lg:text-5xl, font-bold
  - Feature H3: text-xl md:text-2xl, font-semibold
  - Body: text-base md:text-lg, leading-relaxed
  - Code: text-sm md:text-base

## Layout System
- **Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-8, gap-12, py-20)
- **Container**: max-w-7xl for full sections, max-w-4xl for content-focused areas
- **Section Padding**: py-16 md:py-24 lg:py-32 for major sections

## Color Palette & Theme
- **Background**: Dark gradient from near-black (#0a0a0a) to deep charcoal (#1a1a1a)
- **Accent**: Neon green (#00FF88 / #10B981) matching logo, used sparingly for CTAs and highlights
- **Text Primary**: White/off-white (#FFFFFF / #F9FAFB)
- **Text Secondary**: Gray (#9CA3AF / #6B7280)
- **Card Background**: Dark with subtle transparency (bg-gray-900/50 with backdrop-blur)
- **Borders**: Subtle dark borders with green glow on hover (border-gray-800 hover:border-green-500)

## Component Library

### Hero Section
- Full viewport height (min-h-screen) with centered content
- QutaumDB logo prominently displayed
- Large headline with gradient text effect (green to white)
- Subheadline with key value props
- Two CTAs: "Join Mail List" (primary green) + "Follow Updates" (secondary outline)
- Animated background grid pattern or subtle particles

### Code Showcase Block
- Dark code editor aesthetic with syntax highlighting
- Tabs for different SDK examples (Flutter, Kotlin, Swift)
- Line numbers and language badges
- Copy button in top-right corner
- Green accent for active tab

### Feature Cards Grid
- 6 feature cards in 2-column (md) to 3-column (lg) grid
- Each card: Icon (green), title, description
- Hover effect: Lift with green glow border
- Icons from Heroicons outline set

### Use Cases Section
- 5 cards showcasing different applications
- Icon + Title + Brief description
- 2-column on tablet, single column mobile
- Subtle gradient backgrounds per card

### Roadmap Visualization
- Vertical timeline on mobile, horizontal on desktop
- 6 phases with checkmarks for completed, pulse for current
- Connected line between phases with gradient
- Phase cards with title, status, brief description

### Creator/About Card
- Centered card with subtle border
- Creator photo placeholder or icon
- Name, title, brief bio
- Link to Qsecurex mention

### Newsletter Signup
- Centered form with email input + submit button
- Green submit button with arrow icon
- Success message design
- Minimalist, focused layout

### Footer
- Dark background slightly lighter than body
- Multi-column layout: Logo + Quick Links + Contact + Social
- Email link, future Discord/Twitter placeholders
- Copyright and creator credit

## Images

### Hero Background
**Placement**: Full-width background behind hero content
**Description**: Abstract dark tech visualization - interconnected nodes/network grid with subtle green glow, representing encrypted data connections. Should be dark enough to maintain text readability. Use overlay gradient from black (bottom) to transparent (top).

### Feature Section Icons
Use Heroicons SVG icons with green stroke color:
- Lock icon (encryption)
- WiFi-off icon (offline)
- Lightning bolt (performance)
- Code bracket (developer-friendly)
- Document text (collections)
- Cube (lightweight)

### Use Case Icons
Heroicons corresponding to each use case:
- Shield check (cybersecurity)
- Device mobile (mobile apps)
- Briefcase (enterprise)
- CPU chip (AI apps)
- Heart pulse (health/regulated)

## Animations & Interactions
- Subtle fade-in on scroll for sections
- Hover lift effect on cards (translate-y-2)
- Button hover: brightness increase + subtle scale
- Green glow effect on interactive elements
- Smooth transitions (duration-300)
- Minimal distraction - focus on content

## Responsive Behavior
- Mobile: Single column, stacked sections, reduced padding
- Tablet (md): 2-column grids, balanced layouts
- Desktop (lg+): 3-column grids, full horizontal roadmap, side-by-side content blocks

## Visual Hierarchy Principles
- High contrast between background and content
- Green accents draw eye to CTAs and key features
- Code blocks stand out with distinct styling
- Progressive disclosure - most important info first
- Generous whitespace prevents overwhelming users