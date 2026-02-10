export default function About() {
  const features = [
    {
      title: "Web Design",
      description:
        "Stunning, responsive websites that engage your audience and convert visitors into customers.",
      icon: "🎨",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns that increase brand awareness and drive measurable results.",
      icon: "📈",
    },
    {
      title: "Brand Strategy",
      description:
        "Comprehensive brand development that tells your story and sets you apart from the competition.",
      icon: "🎯",
    },
    {
      title: "Content Creation",
      description:
        "Compelling content that resonates with your target audience and builds lasting relationships.",
      icon: "✨",
    },
    {
      title: "SEO Optimization",
      description:
        "Advanced SEO strategies that improve your search rankings and drive organic traffic.",
      icon: "🔍",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Data-driven insights that help you understand your audience and optimize performance.",
      icon: "📊",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            About Our Agency
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            We&apos;re a team of creative professionals passionate about
            delivering exceptional digital experiences that help businesses
            thrive in the modern marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              To transform businesses through innovative digital solutions that
              combine creativity, technology, and strategic thinking. We believe
              in the power of design to create meaningful connections between
              brands and their audiences.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              To be the leading digital agency that sets new standards for
              creativity and innovation, helping businesses navigate the digital
              landscape with confidence and achieve extraordinary growth.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
            Our Services
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Comprehensive digital solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
