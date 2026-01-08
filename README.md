# Accessible IoT Website - Source Code

Source code for the [Accessible IoT](https://accessible-iot.org) website, showcasing research from JST Presto Grant JPMJPR2132 (2021-2025).

## Overview

This website presents accessibility assessment tools and research for the Internet of Things, led by Prof. Kai Kunze at Keio University Graduate School of Media Design.

**Grant:** JST Presto JPMJPR2132
**Period:** 2021-2025
**Focus:** Accessibility Assessment Toolkits for Inclusive IoT Design

## Technology Stack

- **Framework:** Astro (static site generator)
- **Styling:** Custom CSS with Dracula theme
- **Content:** Markdown with YAML frontmatter
- **Deployment:** GitHub Pages → [accessible-iot.github.io](https://github.com/accessible-iot/accessible-iot.github.io)
- **Domain:** accessible-iot.org

## Project Structure

```
accessible-iot-source/
├── public/
│   ├── papers/          # PDF files of publications
│   └── CNAME           # Domain configuration
├── src/
│   ├── content/
│   │   ├── publications/  # Publication markdown files
│   │   ├── news/          # News posts
│   │   ├── pages/         # Content pages
│   │   └── config.ts      # Content collections schema
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main layout template
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── research.astro   # Publications page
│   │   ├── timeline.astro   # Research timeline
│   │   ├── news.astro       # News page
│   │   ├── background.astro # Project background
│   │   └── team.astro       # Team page
│   ├── styles/
│   │   └── global.css      # Global styles (Dracula theme)
│   └── components/         # Reusable components
├── astro.config.mjs      # Astro configuration
├── package.json
└── README.md
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/accessible-iot/accessible-iot-source.git
cd accessible-iot-source

# Install dependencies
npm install

# Start development server
npm run dev
# Visit http://localhost:4321
```

### Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |

## Adding Content

### Add a Publication

Create a new file in `src/content/publications/` with this format:

```markdown
---
title: "Your Paper Title"
subtitle: "Optional subtitle"
authors:
  - Author One
  - Author Two
  - Kai Kunze
venue: "Conference Name YYYY"
venueType: conference  # conference | journal | workshop | poster
year: 2024
date: 2024-01-15
themes:
  - visual-accessibility
  - inclusive-design
keywords:
  - keyword1
  - keyword2
pdfUrl: "/papers/yourpaper.pdf"
doi: "10.1145/xxxxx"
grant: "JST Presto JPMJPR2132"
featured: true
keyContribution: "Brief description of key contribution"
abstract: |
  Your abstract here
---

Optional extended description in markdown format.
```

### Add PDF Files

1. Place PDF in `public/papers/`
2. Reference in publication frontmatter: `pdfUrl: "/papers/filename.pdf"`

## Design System

### Terminal Aesthetic - Dracula Theme

```css
--color-background: #282a36
--color-foreground: #f8f8f2
--color-primary: #ff79c6 (pink)
--color-secondary: #8be9fd (cyan)
--color-success: #50fa7b (green)
--color-error: #ff5555 (red)
--font-mono: 'Inconsolata', monospace
```

### Navigation Style

```
→ Home()
→ Research()
→ Timeline()
→ News()
→ Background()
→ Team()
```

## Deployment

The site is automatically built and deployed to `accessible-iot.github.io` repository.

### Manual Deployment

```bash
# Build the site
npm run build

# Copy to github.io repository
cd ../accessible-iot.github.io
rm -rf *
cp -r ../accessible-iot-source/dist/* .

# Commit and push
git add .
git commit -m "Update website"
git push origin main
```

### Automated Deployment (Future)

GitHub Actions workflow can be configured to automatically build and deploy on push to main branch.

## Content Collections

Publications and news are managed as content collections with TypeScript schemas for type safety.

### Research Themes

- `visual-accessibility` - Visual Accessibility & Impairment Support
- `inclusive-design` - Inclusive Design for Diverse Abilities
- `wearable-iot` - Open-Source Wearable IoT Sensors
- `smart-eyewear` - Smart Eyewear & Accessibility Awareness
- `assistive-robotics` - Assistive Robotics
- `cognitive-augmentation` - Cognitive Augmentation & Well-Being
- `educational-tools` - Educational & Learning Tools

## Publications (Current)

The site currently features 10 core publications from 2021-2025:

- **2025:** TIEboard, Sticking With Electronics, BodyPursuits, Eye-Tracking, Cuddle-Fish
- **2024:** "Speech is Silver", OpenEarable ExG
- **2023:** Robotic Avatars, Soma Express Kit
- **2022:** Seeing our Blind Spots

Additional publications can be added following the content structure above.

## Contributing

To add new publications or update content:

1. Fork the repository
2. Create a new branch
3. Add content following the structure above
4. Submit a pull request

## License

Content © 2021-2025 Kai Kunze, Keio University
Website code: MIT License

## Contact

**Principal Investigator:** Prof. Kai Kunze
**Email:** kai (at) kmd.keio.ac.jp
**Homepage:** https://kaikunze.de
**Institution:** Graduate School of Media Design, Keio University

## Acknowledgments

This research is supported by JST Presto Grant JPMJPR2132.

Website built with [Astro](https://astro.build) and deployed on [GitHub Pages](https://pages.github.com).
