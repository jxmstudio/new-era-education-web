/**
 * Central services config for homepage cards and individual service page heroes.
 * Image paths are root-relative: /newphotos/filename.png
 */

export const SERVICES = [
  {
    title: "School Readiness Program",
    slug: "school-readiness",
    description: "Prepare your child for school with our comprehensive readiness program focusing on literacy, numeracy, and social skills.",
    image: "/newphotos/school-readiness.webp",
    imageAlt: "School Readiness Program at New Era Education",
    age: "Ages 3-5",
    features: [
      "Early literacy development",
      "Basic numeracy skills",
      "Social interaction skills",
      "Fine motor development",
    ],
  },
  {
    title: "English Tutoring",
    slug: "english-tutoring",
    description: "Comprehensive English support from foundational reading skills to advanced VCE preparation.",
    image: "/newphotos/english-tutor-service.webp",
    imageAlt: "English Tutoring at New Era Education",
    age: "Foundation - Year 12",
    features: [
      "Reading comprehension",
      "Creative writing",
      "Essay writing",
      "VCE exam preparation",
    ],
  },
  {
    title: "Mathematics Tutoring",
    slug: "maths-tutoring",
    description: "Build strong mathematical foundations with our evidence-based numeracy programs.",
    image: "/newphotos/math-tutor-service.webp",
    imageAlt: "Mathematics Tutoring at New Era Education",
    age: "Foundation - Year 8",
    features: [
      "Number sense development",
      "Problem-solving strategies",
      "Algebraic thinking",
      "Year 9-12 coming soon",
    ],
  },
  {
    title: "One-on-One Tutoring",
    slug: "one-on-one",
    description: "Personalised learning plans tailored to your child's unique needs and learning style.",
    image: "/neweraphotos/IMG_3916.JPG",
    imageAlt: "One-on-One Tutoring at New Era Education",
    age: "All Ages",
    features: [
      "Individual attention",
      "Custom learning plans",
      "Face-to-face & online",
      "Weekly progress reports",
    ],
  },
  {
    title: "Workshops",
    slug: "workshops",
    description: "Creative expression through art, fostering imagination and fine motor skills development.",
    image: "/newphotos/workspace-service.webp",
    imageAlt: "Workshops at New Era Education",
    imagePosition: "center 30%",
    age: "All Ages",
    features: [
      "Creative expression",
      "Fine motor skills",
      "Art appreciation",
      "Holiday programs",
    ],
  },
  {
    title: "Expert Learning Support",
    slug: "homeschooling-support",
    description: "Specialised support for homeschooling families in literacy and numeracy development.",
    image: "/neweraphotos/IMG_3902.JPG",
    imageAlt: "Full-Time Learning Support / Homeschooling at New Era Education",
    imagePosition: "center 15%",
    age: "All Ages",
    features: [
      "Curriculum guidance",
      "Assessment support",
      "Resource recommendations",
      "Parent consultation",
    ],
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

/** Get a service by its route slug (e.g. for hero image on service pages). */
export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}
