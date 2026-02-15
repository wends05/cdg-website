import { FileText, Sprout, UsersRound } from "lucide-react";

const items = [
  {
    title: "Learn",
    text: "Learn from a range of technical topics and gain new skills through hands-on workshops, events, talks, competitions, and project-building activities.",
    icon: FileText,
  },
  {
    title: "Connect",
    text: "Meet passionate Centralian students interested in developer technologies eager to build practical solutions.",
    icon: UsersRound,
  },
  {
    title: "Grow",
    text: "Apply new learnings to build great solutions for local problems. Give back to your community by helping others learn.",
    icon: Sprout,
  },
];

export default function LearnConnectGrow() {
  return (
    <section className="reveal-up px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl px-3 md:px-8">
        <h2 className="reveal-left text-4xl font-semibold text-[#2f71f0] md:text-5xl">
          Join us as We Learn, Connect, &amp; Grow
        </h2>
        <div className="stagger-parent mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="stagger-item">
                <Icon className="h-5 w-5 text-[#2f71f0]" strokeWidth={2.2} />
                <h3 className="mt-3 text-2xl font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[28ch] text-base leading-relaxed text-zinc-600">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
