"use client";

interface Testimonial {
	quote: string;
	name: string;
	role: string;
	image?: string | null;
}

const testimonials: Testimonial[] = [
	{
		quote:
			`Don't wait until you're ready––start even if you're unsure. The whole point of joining is to learn and gain experience, and there will always be someone to guide you along the way.
			
			You'll figure things out as you go, and those experiences will shape you the most.
			`,
		name: "Chloe Belle Estilo",
		role: "CDG Alumni",
		image: null,
	},
	{
		quote:
			`Join and enjoy. The purpose of this group is to make your university life a much more fun and exciting experience. Especially when you like learning tech.
			
			There's a lot of stuff out there that you can do with the help of technology and you can do that with the help of CDG.`,
		name: "Jed Matthew Mamosto",
		role: "CDG Member",
		image: null,
	},
];

export default function TestimonialsSection() {
	return (
		<section className="relative w-full overflow-hidden bg-background min-h-screen flex items-center py-20 md:py-32">
			{/* Background Decorations */}
			<div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
				<div className="absolute -left-16 top-10 md:left-57 md:top-20">
					<LeftQuoteSVG />
				</div>
				<div className="absolute -right-16 bottom-10 md:bottom-20 md:right-57">
					<RightQuoteSVG />
				</div>
			</div>

			<div className="relative mx-auto w-full px-2 max-w-7xl xl:px-8">
				<div className="relative w-full">
					{/* Scrollable Container */}
					<div className="flex w-full gap-4 overflow-x-auto pb-8 lg:justify-center pt-4 snap-mandatory px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
						{testimonials.map((item, i) => (
							<div key={i} className="shrink-0 snap-start w-[85%] sm:w-112.5">
								<TestimonialCard item={item} index={i} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function TestimonialCard({
	item,
	index,
}: {
	item: Testimonial;
	index: number;
}) {
	// Alternate gradients based on index (even vs odd)
	const gradientStyle =
		index % 2 !== 0
			? "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at 100% 0%, rgba(250,204,21,0.2) 0%, transparent 50%)"
			: "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(250,204,21,0.2) 0%, transparent 50%)";

	return (
		<div
			className="flex h-full flex-col justify-between rounded-[32px] bg-card p-8 shadow-[0_6px_10px_0_rgba(19,80,226,0.10)] min-h-112.5"
			style={{ backgroundImage: gradientStyle }}
		>
			<div>
				<QuoteIcon />
				<p className="mb-8 lg:text-xl leading-relaxed text-muted-foreground">
					{item.quote}
				</p>
			</div>

			<div className="flex items-center gap-4">
				{/* Profile Image / Placeholder */}
				<div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-primary">
					{/* If image exists in future, render Next/Image here */}
				</div>

				<div>
					<h4 className="text-[22px] font-bold text-foreground">{item.name}</h4>
					<p className="text-xl font-medium text-muted-foreground">
						{item.role}
					</p>
				</div>
			</div>
		</div>
	);
}

function LeftQuoteSVG() {
	return (
		<svg
			width="571"
			height="415"
			viewBox="0 0 571 415"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="w-64 opacity-60 md:w-96 lg:w-125"
			aria-hidden="true"
		>
			<path
				d="M3 412L3.00002 189.194L136.238 2.99996L211.888 2.99997L133.674 176.625L131.768 180.857L252.447 180.857L252.447 412L3 412ZM318.553 412L318.553 189.194L451.791 2.99999L527.44 3L449.227 176.625L447.319 180.857L568 180.857L568 412L318.553 412Z"
				stroke="#C7D7FF"
				strokeWidth="6"
			/>
		</svg>
	);
}

function RightQuoteSVG() {
	return (
		<svg
			width="571"
			height="415"
			viewBox="0 0 571 415"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="w-64 opacity-60 md:w-96 lg:w-125"
			aria-hidden="true"
		>
			<path
				d="M568 3.0001L568 225.806L434.762 412L359.112 412L437.326 238.375L439.233 234.143L318.553 234.143L318.553 3.00006L568 3.0001ZM252.447 3.00004L252.447 225.806L119.209 412L43.5595 412L121.773 238.375L123.681 234.143L2.99996 234.143L3 3L252.447 3.00004Z"
				stroke="#C7D7FF"
				strokeWidth="6"
			/>
		</svg>
	);
}

function QuoteIcon() {
	return (
		<svg
			width="72"
			height="72"
			viewBox="0 0 72 72"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="mb-6 h-12 w-12"
			aria-hidden="true"
		>
			<path
				d="M7 15H32.9474V37.95L19.2655 57H10.9532L19.0915 39H7V15ZM39.0526 15H65V37.95L51.3181 57H43.0058L51.1441 39H39.0526V15Z"
				fill="#1350E2"
			/>
		</svg>
	);
}
