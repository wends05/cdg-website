import Link from "next/link";

const officers = [
  {
    name: "Full Name",
    role: "Role, Position, Affiliation",
    image: "https://picsum.photos/260/330?random=91",
  },
  {
    name: "Full Name",
    role: "Role, Position, Affiliation",
    image: "https://picsum.photos/260/330?random=92",
  },
  {
    name: "Full Name",
    role: "Role, Position, Affiliation",
    image: "https://picsum.photos/260/330?random=93",
  },
  {
    name: "Full Name",
    role: "Role, Position, Affiliation",
    image: "https://picsum.photos/260/330?random=94",
  },
  {
    name: "Full Name",
    role: "Role, Position, Affiliation",
    image: "https://picsum.photos/260/330?random=95",
  },
  {
    name: "Full Name",
    role: "Role, Position, Affiliation",
    image: "https://picsum.photos/260/330?random=95",
  },
];

export default function OfficersSection() {
  return (
    <section className="reveal-up bg-[#dfe1e8] px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-xl bg-white">
        <div className="relative px-6 pb-8 pt-10 md:px-8">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-40"
            style={{
              background:
                "radial-gradient(ellipse at 90% 0%, rgba(248,253,32,.75), transparent 45%), radial-gradient(ellipse at 12% 120%, rgba(27,56,204,.6), transparent 40%)",
            }}
          />

          <div className="relative z-10">
            <h2 className="reveal-left text-5xl font-semibold text-[#2f71f0]">
              Meet the CDG Officers
            </h2>
            <p className="reveal-left mt-2 text-sm text-zinc-600">
              Get to know the dedicated student leaders who plan our workshops,
              support our members, and keep our values at the center of every
              activity.
            </p>
            <Link
              href="/about"
              className="reveal-left mt-4 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              See More {">"}
            </Link>

            <div className="stagger-parent mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {officers.map((officer, idx) => (
                <article
                  key={`${officer.name}-${idx}`}
                  className="stagger-item group relative overflow-hidden rounded-xl"
                >
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/35 to-transparent p-3 text-white">
                    <p className="text-sm font-semibold">{officer.name}</p>
                    <p className="text-xs text-white/85">{officer.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
