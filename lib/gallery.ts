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
