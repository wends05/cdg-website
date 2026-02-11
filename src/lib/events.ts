export type EventRecord = {
  id: string;
  title: string;
  date: string;
  type: string;
  image: string;
  description: string;
  certificate: boolean;
  href: string;
  certificateUrl?: string;
};

export const events: EventRecord[] = [
  {
    id: "web-bootcamp",
    title: "Web Development Bootcamp",
    date: "March 15-17, 2024",
    type: "Workshop",
    image: "https://picsum.photos/id/1011/640/480",
    description:
      "Learn modern web development with React, Next.js, and TypeScript while building production-ready projects and pitching them live.",
    certificate: true,
    href: "/events/web-bootcamp",
    certificateUrl: "/events/web-bootcamp#certificate",
  },
  {
    id: "annual-hackathon",
    title: "Annual Hackathon",
    date: "April 5-7, 2024",
    type: "Competition",
    image: "https://picsum.photos/id/1015/640/480",
    description:
      "48-hour coding throwdown with mentors, surprise challenges, and grand prize funding for winners.",
    certificate: true,
    href: "/events/annual-hackathon",
    certificateUrl: "/events/annual-hackathon#certificate",
  },
  {
    id: "ai-intro",
    title: "AI & ML Introduction",
    date: "March 22, 2024",
    type: "Tech Talk",
    image: "https://picsum.photos/id/1027/640/480",
    description:
      "Demystify machine learning concepts with live demos, hands-on notebooks, and a roadmap for your next project.",
    certificate: false,
    href: "/events/ai-intro",
  },
  {
    id: "design-sprint",
    title: "Design Sprint Studio",
    date: "May 9-10, 2024",
    type: "Studio",
    image: "https://picsum.photos/id/1035/640/480",
    description:
      "Rapid prototyping and user research sprint where multidisciplinary teams ship a polished concept in 48 hours.",
    certificate: true,
    href: "/events/design-sprint",
    certificateUrl: "/events/design-sprint#certificate",
  },
  {
    id: "open-source-night",
    title: "Open Source Night",
    date: "June 12, 2024",
    type: "Community",
    image: "https://picsum.photos/id/1045/640/480",
    description:
      "Meet maintainers, contribute to beginner-friendly repos, and get mentored through your first pull request.",
    certificate: false,
    href: "/events/open-source-night",
  },
  {
    id: "cybersecurity-lab",
    title: "Cybersecurity Lab",
    date: "July 2-4, 2024",
    type: "Workshop",
    image: "https://picsum.photos/id/1054/640/480",
    description:
      "Dive into defensive and offensive tooling, hands-on capture-the-flag scenarios, and career stories from field experts.",
    certificate: true,
    href: "/events/cybersecurity-lab",
    certificateUrl: "/events/cybersecurity-lab#certificate",
  },
];
