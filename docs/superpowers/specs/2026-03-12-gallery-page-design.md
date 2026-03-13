# Gallery Page & Related Components — Design Spec

**Date:** 2026-03-12
**Status:** Draft

## Overview

Add a gallery page, founder video section on the home page, and a gallery preview component for funnel pages to the New Era Education website. All implementations follow existing project patterns (Next.js 14 App Router, Tailwind CSS, Framer Motion, TypeScript).

## 1. Gallery Page (`/app/gallery/page.tsx`)

### Content

**Images (7):**
| File | SEO Caption |
|------|-------------|
| `english-tutoring.webp` | "One-on-one English tutoring session — building reading and writing confidence with personalised support" |
| `kids-learning-maths.webp` | "Children learning maths together — hands-on group activities that make numbers fun" |
| `kids-playing-with-fruit-toys.webp` | "Early learners exploring with fruit toys — playful activities that develop counting and sorting skills" |
| `learning-fractions.webp` | "Student learning fractions with visual aids — making abstract maths concepts concrete and understandable" |
| `learning-shapes.webp` | "Young learner discovering shapes — building geometry foundations through interactive play" |
| `saying-hi-to-kids-and-mum.webp` | "Welcoming families to New Era Education — a warm and supportive learning environment for every child" |
| `tutoring-kids.webp` | "Tutor working closely with students — small group sessions tailored to each child's learning pace" |

**Videos (2, hosted on R2):**
| URL | SEO Caption |
|-----|-------------|
| `https://pub-ffc9a413470f4e69a929b4e0ce1199a7.r2.dev/polypad.MOV` | "Interactive maths lesson using Polypad — digital tools that bring learning to life" |
| `https://pub-ffc9a413470f4e69a929b4e0ce1199a7.r2.dev/smallestnbiggestnumber.MOV` | "Smallest and biggest number activity — building number sense through engaging exercises" |

### Layout

- **Hero section:** Heading "Our Gallery", subtext about seeing learning in action. Blue gradient background matching site patterns.
- **Grid:** Responsive masonry-style grid (CSS columns approach). 1 col mobile, 2 cols tablet, 3 cols desktop.
- **Items:** Each grid item shows the image/video with its caption below. Video items show a play button overlay on a thumbnail. Hover effect with subtle scale.
- **Animations:** Staggered `fadeInUp` via `MotionWrapper` as items scroll into view.

### Lightbox Component (`/components/ui/lightbox.tsx`)

- **Trigger:** Click any gallery item to open.
- **Overlay:** Black backdrop with opacity animation (Framer Motion `AnimatePresence`).
- **Content:** Centered image or video player. Images use `next/image` with `fill`. Videos use `<video>` with controls.
- **Navigation:** Left/right arrows to cycle through items. Keyboard support (left/right arrows, Escape to close).
- **Close:** X button top-right, click backdrop, or Escape key.
- **Body scroll lock:** Prevent background scrolling when open.
- **No new dependencies.** Built entirely with Framer Motion + React state.

### SEO

- Page metadata: title "Gallery | New Era Education", description targeting "tutoring gallery Melbourne" etc.
- OpenGraph image: use `saying-hi-to-kids-and-mum.webp` (warmest photo).
- ImageObject schema.org JSON-LD for each image.
- Add `/gallery` to sitemap at priority 0.7.
- Alt text on all images matches captions.

## 2. Founder Video on Home Page

### Placement

Directly below the "Why Choose New Era Education?" section (after line ~332 in `app/page.tsx`).

### Layout

- Dark background section (`bg-gray-900`) to contrast with surrounding sections.
- Two-column layout on desktop: video left, text right. Stacks on mobile (video on top).
- **Video:** `<video>` element with controls, poster frame if available. Source: `https://pub-ffc9a413470f4e69a929b4e0ce1199a7.r2.dev/founder.mov`
- **Text:** Heading "Meet Our Founder", brief paragraph about the founder's passion for education.
- Animated entrance via `MotionWrapper`.

## 3. Gallery Preview Component (`/components/ui/gallery-preview.tsx`)

### Purpose

Compact gallery strip for funnel pages showing 3 selected photos to give parents a visual sense of the learning environment.

### Selected Images

1. `saying-hi-to-kids-and-mum.webp` — Welcoming/trust signal
2. `kids-learning-maths.webp` — Active learning
3. `learning-fractions.webp` — Hands-on approach

### Layout

- Section heading: "See Our Learning Environment" or similar.
- 3-column grid on desktop, horizontal scroll on mobile.
- Each image with a short caption.
- "View Full Gallery →" CTA button linking to `/gallery`.
- Animated entrance matching funnel page patterns.

### Integration Points

- `app/get-started/page.tsx` — Insert after the testimonials section.
- `app/get-started/school-readiness/page.tsx` — Insert after the testimonials section.

## 4. Navigation Update (`/components/layout/Header.tsx`)

- Add "Gallery" link in the main navigation, positioned after "FAQ" and before "Contact".
- Desktop: Regular nav item (no dropdown needed).
- Mobile: Add to mobile menu in same position.

## 5. Files to Create/Modify

### New Files
- `app/gallery/page.tsx` — Gallery page
- `components/ui/lightbox.tsx` — Lightbox component
- `components/ui/gallery-preview.tsx` — Funnel gallery preview
- `lib/gallery.ts` — Gallery data (images, videos, captions, metadata)

### Modified Files
- `app/page.tsx` — Add founder video section
- `app/get-started/page.tsx` — Add gallery preview component
- `app/get-started/school-readiness/page.tsx` — Add gallery preview component
- `components/layout/Header.tsx` — Add Gallery nav link
- `app/sitemap.ts` — Add /gallery route

## 6. No New Dependencies

Everything uses existing project dependencies:
- `next/image` for optimized images
- `framer-motion` for lightbox + entrance animations
- `lucide-react` for icons (ChevronLeft, ChevronRight, X, Play)
- Tailwind CSS for all styling
