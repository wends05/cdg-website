export default function Footer() {
  const footerLinks = [
    {
      title: "Community",
      links: [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
      ],
    },
    {
      title: "Support",
      links: [{ name: "Contact Us", href: "/contact" }],
    },
  ];

  return (
    <footer className="bg-[#1B38CC] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight">CDG</h3>
            <p className="mb-6 max-w-md text-lg leading-relaxed text-white/90">
              Centralian Developer Group - Empowering the next generation of
              tech innovators at Central Philippine University through
              collaboration, learning, and excellence.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-white/70">Email:</span>
                <a
                  href="mailto:cdg.cpu.ph@gmail.com"
                  className="text-white/95 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/70"
                >
                  cdg.cpu.ph@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-white/70">Location:</span>
                <span className="text-white/95">
                  CPU College of Computer Studies, Iloilo City
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-3xl font-semibold tracking-tight">
              Get Involved
            </h3>
            <p className="mb-6 max-w-xl text-lg leading-relaxed text-white/90">
              Ready to join our community? Become part of something bigger and
              help shape the future of technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full border border-white/70 px-6 py-2.5 text-base font-semibold text-white transition-all hover:border-white hover:bg-white hover:text-[#1B38CC]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-12">
          <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="mb-4 text-lg font-semibold text-white">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-base text-white/80 transition-colors hover:text-white"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between border-t border-white/20 pt-8 md:flex-row">
            <p className="mb-4 text-sm text-white/70 md:mb-0">
              © 2026 Centralian Developer Group. All rights reserved.
            </p>
            <div className="flex gap-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
