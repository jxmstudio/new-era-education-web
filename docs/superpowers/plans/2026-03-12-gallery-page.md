# Gallery Page Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a gallery page with lightbox, founder video on home page, and gallery preview component for funnel pages.

**Architecture:** Server/client component split for the gallery page (metadata in server component, interactive grid + lightbox in client component). Shared gallery data in `lib/gallery.ts`. Reusable lightbox and gallery preview as UI components.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React, next/image

**Spec:** `docs/superpowers/specs/2026-03-12-gallery-page-design.md`

---

## Chunk 1: Data Layer & Lightbox

### Task 1: Create gallery data file

**Files:**
- Create: `lib/gallery.ts`

- [ ] **Step 1: Create `lib/gallery.ts`**

```typescript
export type GalleryItemType = "image" | "video";

export interface GalleryItem {
  id: string;
  type: GalleryItemType;
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "english-tutoring",
    type: "image",
    src: "/gallery/english-tutoring.webp",
    alt: "One-on-one English tutoring session at New Era Education",
    caption: "One-on-one English tutoring session — building reading and writing confidence with personalised support",
  },
  {
    id: "kids-learning-maths",
    type: "image",
    src: "/gallery/kids-learning-maths.webp",
    alt: "Children learning maths together at New Era Education",
    caption: "Children learning maths together — hands-on group activities that make numbers fun",
  },
  {
    id: "kids-playing-with-fruit-toys",
    type: "image",
    src: "/gallery/kids-playing-with-fruit-toys.webp",
    alt: "Early learners exploring with fruit toys at New Era Education",
    caption: "Early learners exploring with fruit toys — playful activities that develop counting and sorting skills",
  },
  {
    id: "learning-fractions",
    type: "image",
    src: "/gallery/learning-fractions.webp",
    alt: "Student learning fractions with visual aids at New Era Education",
    caption: "Student learning fractions with visual aids — making abstract maths concepts concrete and understandable",
  },
  {
    id: "learning-shapes",
    type: "image",
    src: "/gallery/learning-shapes.webp",
    alt: "Young learner discovering shapes at New Era Education",
    caption: "Young learner discovering shapes — building geometry foundations through interactive play",
  },
  {
    id: "saying-hi",
    type: "image",
    src: "/gallery/saying-hi-to-kids-and-mum.webp",
    alt: "Welcoming families to New Era Education",
    caption: "Welcoming families to New Era Education — a warm and supportive learning environment for every child",
  },
  {
    id: "tutoring-kids",
    type: "image",
    src: "/gallery/tutoring-kids.webp",
    alt: "Tutor working closely with students at New Era Education",
    caption: "Tutor working closely with students — small group sessions tailored to each child's learning pace",
  },
  {
    id: "polypad-lesson",
    type: "video",
    src: "https://pub-ffc9a413470f4e69a929b4e0ce1199a7.r2.dev/polypad.MOV",
    alt: "Interactive maths lesson using Polypad at New Era Education",
    caption: "Interactive maths lesson using Polypad — digital tools that bring learning to life",
  },
  {
    id: "smallest-biggest-number",
    type: "video",
    src: "https://pub-ffc9a413470f4e69a929b4e0ce1199a7.r2.dev/smallestnbiggestnumber.MOV",
    alt: "Smallest and biggest number activity at New Era Education",
    caption: "Smallest and biggest number activity — building number sense through engaging exercises",
  },
];

/** Subset of gallery items for the funnel page preview component. */
export const GALLERY_PREVIEW_ITEMS = GALLERY_ITEMS.filter((item) =>
  ["saying-hi", "kids-learning-maths", "learning-fractions"].includes(item.id)
);
```

- [ ] **Step 2: Commit**

```bash
git add lib/gallery.ts
git commit -m "feat: add gallery data configuration"
```

---

### Task 2: Create lightbox component

**Files:**
- Create: `components/ui/lightbox.tsx`

- [ ] **Step 1: Create `components/ui/lightbox.tsx`**

Use @frontend-design skill for this component. The lightbox must:

- Accept `items: GalleryItem[]`, `currentIndex: number`, `onClose: () => void`, `onNavigate: (index: number) => void`
- Use Framer Motion `AnimatePresence` for overlay fade-in/out
- Black backdrop (`bg-black/90`) with click-to-close
- Centered content area: `max-w-[90vw] max-h-[85vh]` with `object-contain` for images
- For images: use `next/image` with `fill` inside a relative container
- For videos: `<video>` with controls in 16:9 aspect ratio container, dual `<source>` tags (`type="video/mp4"` and `type="video/quicktime"`)
- Navigation: `ChevronLeft`/`ChevronRight` from lucide-react, absolute positioned on sides
- Close: `X` icon top-right corner
- Keyboard: `useEffect` with keydown listener — ArrowLeft, ArrowRight, Escape
- Body scroll lock: set `document.body.style.overflow = 'hidden'` on mount, restore on unmount
- Accessibility: `role="dialog"`, `aria-modal="true"`, `aria-label` with current item caption
- Caption displayed below the image/video

- [ ] **Step 2: Commit**

```bash
git add components/ui/lightbox.tsx
git commit -m "feat: add lightbox component with keyboard nav and accessibility"
```

---

## Chunk 2: Gallery Page

### Task 3: Create gallery page (server component + client content)

**Files:**
- Create: `app/gallery/page.tsx`
- Create: `app/gallery/gallery-content.tsx`

- [ ] **Step 1: Create `app/gallery/page.tsx`** (server component)

```typescript
import { Metadata } from "next";
import GalleryContent from "./gallery-content";
import { GALLERY_ITEMS } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery | New Era Education",
  description:
    "See learning in action at New Era Education. Browse photos and videos of our tutoring sessions, school readiness programs, and hands-on activities in Mickleham, Melbourne.",
  alternates: { canonical: "https://neweralearning.com.au/gallery" },
  openGraph: {
    title: "Gallery | New Era Education",
    description:
      "Photos and videos of tutoring sessions, school readiness programs, and hands-on learning activities.",
    url: "https://neweralearning.com.au/gallery",
    type: "website",
    images: [
      {
        url: "/gallery/saying-hi-to-kids-and-mum.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | New Era Education",
    description:
      "Photos and videos of tutoring sessions and hands-on learning activities.",
  },
};

export default function GalleryPage() {
  // ImageObject + VideoObject schema.org JSON-LD
  const schemaItems = GALLERY_ITEMS.map((item) =>
    item.type === "image"
      ? {
          "@type": "ImageObject",
          name: item.alt,
          description: item.caption,
          contentUrl: `https://neweralearning.com.au${item.src}`,
        }
      : {
          "@type": "VideoObject",
          name: item.alt,
          description: item.caption,
          contentUrl: item.src,
          uploadDate: "2025-01-01",
        }
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "New Era Education Gallery",
    description: "Photos and videos from New Era Education tutoring sessions",
    url: "https://neweralearning.com.au/gallery",
    associatedMedia: schemaItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryContent />
    </>
  );
}
```

- [ ] **Step 2: Create `app/gallery/gallery-content.tsx`** (client component)

Use @frontend-design skill for this component. It must include:

- `'use client'` directive
- Import `Header` from `@/components/layout/Header`, `Footer` from `@/components/layout/Footer`
- Import `GALLERY_ITEMS` from `@/lib/gallery`
- Import `Lightbox` from `@/components/ui/lightbox`
- Import `Image` from `next/image`
- Import `{ Play }` from `lucide-react`
- Import `{ MotionWrapper }` from `@/components/ui/motion-wrapper`
- State: `lightboxIndex: number | null` (null = closed)
- **Hero section:** Blue gradient background (`bg-gradient-to-br from-blue-600 to-blue-800`), centered text — "Our Gallery" heading, "See learning in action..." subtext. White text. Padding matching other page heroes.
- **Grid section:** `bg-white` background. CSS columns layout: `columns-1 sm:columns-2 lg:columns-3 gap-6`. Each item wrapped in `MotionWrapper` with staggered fadeInUp.
  - Image items: `next/image` with `width={600} height={400}` (auto aspect), rounded corners, caption below, `cursor-pointer`, hover scale effect. `onClick` opens lightbox.
  - Video items: 16:9 aspect ratio container, play button overlay (centered `Play` icon in a white/blue circle), `cursor-pointer`. `onClick` opens lightbox. Use `<video>` with `preload="metadata"` to show first frame.
- **Lightbox:** Render `<Lightbox>` when `lightboxIndex !== null`.

- [ ] **Step 3: Verify the page renders**

Run: `npm run build` or `npm run dev` and check `/gallery` loads without errors.

- [ ] **Step 4: Commit**

```bash
git add app/gallery/page.tsx app/gallery/gallery-content.tsx
git commit -m "feat: add gallery page with grid layout and lightbox"
```

---

## Chunk 3: Home Page Founder Video

### Task 4: Add founder video section to home page

**Files:**
- Modify: `app/page.tsx` (insert after line 332, after the Benefits/Why Choose section closing `</section>`)

- [ ] **Step 1: Add founder video section**

Use @frontend-design skill. Insert directly after the `</section>` that closes the "Why Choose New Era Education?" benefits section (line 332). The section should:

- `bg-white` background to contrast with the `bg-gray-800` section above
- Two-column layout on desktop (`grid md:grid-cols-2 gap-12 items-center`), stacked on mobile
- Left column: Video in a rounded container with shadow. `<video>` with controls, playsInline, preload="metadata". Portrait aspect ratio `aspect-[9/16]` matching the funnel pages. Dual `<source>` tags for the R2 founder.mov URL.
- Right column: "Meet Our Founder" heading (`text-3xl font-bold text-gray-900`), paragraph about Adelaine and her vision, optional CTA link to `/get-started`.
- Wrapped in `MotionWrapper` with fadeIn animation.
- `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container matching other sections.

- [ ] **Step 2: Verify the home page renders correctly**

Run: `npm run dev` and check the home page — the founder video should appear between "Why Choose" and "Our Programs & Services".

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add founder video section to home page"
```

---

## Chunk 4: Gallery Preview & Integrations

### Task 5: Create gallery preview component

**Files:**
- Create: `components/ui/gallery-preview.tsx`

- [ ] **Step 1: Create `components/ui/gallery-preview.tsx`**

Use @frontend-design skill. The component must:

- `'use client'` directive
- Import `GALLERY_PREVIEW_ITEMS` from `@/lib/gallery`
- Import `Image` from `next/image`, `Link` from `next/link`
- Import `{ MotionWrapper }` from `@/components/ui/motion-wrapper`
- Section with heading "See Our Learning Environment" and a brief subtitle
- 3-column grid on desktop (`grid grid-cols-1 sm:grid-cols-3 gap-6`), single column on mobile
- Each image: `next/image` with rounded corners, hover scale, caption below
- "View Full Gallery →" CTA button linking to `/gallery` (blue button matching site style)
- Design should feel like a natural section that fits within the funnel page aesthetic

- [ ] **Step 2: Commit**

```bash
git add components/ui/gallery-preview.tsx
git commit -m "feat: add gallery preview component for funnel pages"
```

---

### Task 6: Integrate gallery preview into funnel pages

**Files:**
- Modify: `app/get-started/page.tsx` (insert after line 313, after the testimonials section, before the `{/* ===== ENQUIRY FORM ===== */}` comment at line 314)
- Modify: `app/get-started/school-readiness/page.tsx` (insert after line 551, after the testimonials section closing `</section>`, before the "What to Expect" timeline section at line 553)

- [ ] **Step 1: Add gallery preview to `app/get-started/page.tsx`**

Add import at top of file:
```typescript
import GalleryPreview from '@/components/ui/gallery-preview';
```

Insert `<GalleryPreview />` between the testimonials section and the enquiry form section (between lines 313 and 314).

- [ ] **Step 2: Add gallery preview to `app/get-started/school-readiness/page.tsx`**

Add import at top of file:
```typescript
import GalleryPreview from '@/components/ui/gallery-preview';
```

Insert `<GalleryPreview />` between the testimonials section (ends line 551) and the "What to Expect" timeline section (starts line 553).

- [ ] **Step 3: Verify both funnel pages render**

Run: `npm run dev` and check both `/get-started` and `/get-started/school-readiness` — gallery preview should appear in the correct positions.

- [ ] **Step 4: Commit**

```bash
git add app/get-started/page.tsx app/get-started/school-readiness/page.tsx
git commit -m "feat: integrate gallery preview into funnel pages"
```

---

## Chunk 5: Navigation & Sitemap

### Task 7: Add Gallery link to header navigation

**Files:**
- Modify: `components/layout/Header.tsx`

- [ ] **Step 1: Add Gallery link to desktop nav**

In `components/layout/Header.tsx`, insert a new nav item after the FAQ link (line 198) and before the Contact link (line 200):

```tsx
<motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
  <Link href="/gallery" className="whitespace-nowrap hover:text-gray-200 transition font-medium leading-none">
    Gallery
  </Link>
</motion.div>
```

- [ ] **Step 2: Add Gallery link to mobile menu**

In the mobile menu items array (line 257-263), add `{ href: "/gallery", label: "Gallery" }` after the FAQ entry and before the Contact entry:

```typescript
{ href: "/faq", label: "FAQ" },
{ href: "/gallery", label: "Gallery" },
{ href: "/#contact", label: "Contact" }
```

- [ ] **Step 3: Commit**

```bash
git add components/layout/Header.tsx
git commit -m "feat: add Gallery link to header navigation"
```

---

### Task 8: Add gallery to sitemap

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Add `/gallery` to the info pages array**

In `app/sitemap.ts`, add to the `infoPages` array (around line 48, after the team entry):

```typescript
{ path: '/gallery', priority: 0.7 },
```

- [ ] **Step 2: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat: add gallery page to sitemap"
```

---

### Task 9: Final verification

- [ ] **Step 1: Run build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 2: Verify all pages**

Run `npm run dev` and manually check:
- `/gallery` — grid displays all 9 items, lightbox opens/closes, keyboard nav works
- `/` (home page) — founder video appears below "Why Choose" section
- `/get-started` — gallery preview appears after testimonials
- `/get-started/school-readiness` — gallery preview appears after testimonials
- Header nav — "Gallery" link visible on desktop and mobile
- View page source on `/gallery` — JSON-LD schema present

- [ ] **Step 3: Final commit if any fixes needed**
