export default function About() {
	const features = [
		{
			title: "Hands-on Workshops",
			description:
				"Build practical skills through guided sessions on web development, app development, and modern tools.",
			icon: "01",
		},
		{
			title: "Peer Mentorship",
			description:
				"Learn with support from senior students and alumni through code reviews, study groups, and guidance.",
			icon: "02",
		},
		{
			title: "Project Building",
			description:
				"Collaborate on real projects that strengthen your portfolio and help you apply concepts beyond the classroom.",
			icon: "03",
		},
		{
			title: "Hackathons & Competitions",
			description:
				"Challenge yourself in team-based events that improve problem-solving, creativity, and technical confidence.",
			icon: "04",
		},
		{
			title: "Tech Talks",
			description:
				"Explore emerging technologies, career paths, and industry practices through speaker sessions and discussions.",
			icon: "05",
		},
		{
			title: "Community & Networking",
			description:
				"Connect with like-minded builders, share opportunities, and grow in a collaborative student developer community.",
			icon: "06",
		},
	];

	return (
		<section id="about" className="py-24 bg-background">
			<div className="mx-auto max-w-7xl px-6">
				<div className="text-center mb-16">
					<h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-[64px]">
						About CDG
					</h2>
					<p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
						CDG is a student developer group where learners collaborate, build,
						and grow through practical experiences in technology.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
					<div>
						<h3 className="text-2xl font-bold text-foreground mb-4">
							Our Purpose
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							To create an inclusive environment where students can learn
							development skills, experiment with ideas, and gain confidence by
							building together.
						</p>
					</div>
					<div>
						<h3 className="text-2xl font-bold text-foreground mb-4">
							Our Vision
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							To empower every student in our community to become a capable,
							curious, and collaborative builder ready for real-world impact.
						</p>
					</div>
				</div>

				<div className="text-center mb-12">
					<h3 className="text-2xl font-bold text-foreground mb-4">
						What We Offer
					</h3>
					<p className="text-muted-foreground">
						Opportunities to learn, build, and grow as a student developer
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
						>
							<div className="text-4xl mb-4">{feature.icon}</div>
							<h3 className="text-xl font-semibold text-foreground mb-2">
								{feature.title}
							</h3>
							<p className="text-muted-foreground">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
