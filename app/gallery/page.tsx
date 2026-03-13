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
