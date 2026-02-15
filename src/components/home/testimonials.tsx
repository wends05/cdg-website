import { Quote } from "lucide-react";

interface Testimonial {
	quote: string;
	name: string;
	role: string;
	image?: string | null;
}

const testimonials: Testimonial[] = [
	{
		quote:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		name: "Full Name",
		role: "CDG Alumni",
		image: null,
	},
	{
		quote:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		name: "Full Name",
		role: "CDG Member",
		image: null,
	},
	{
		quote:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		name: "Full Name",
		role: "CDG Faculty",
		image: null,
	},
];

export default function TestimonialsSection() {
	return (
		<section className="relative w-full overflow-hidden bg-[#F8FAFC] min-h-screen flex items-center py-20 md:py-32">
			{/* Background Decorations */}
			<div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
				<div className="absolute -left-16 top-10 md:left-10 md:top-20">
					<LeftQuoteSVG />
				</div>
				<div className="absolute -right-16 bottom-10 md:bottom-20 md:right-10">
					<RightQuoteSVG />
				</div>
			</div>

			<div className="relative mx-auto max-w-7xl px-4 md:px-8">
				<div className="grid gap-8 md:grid-cols-3">
					{testimonials.map((item, i) => (
						<TestimonialCard key={i} item={item} index={i} />
					))}
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
	// Determine gradient based on index (simulating the alternating pattern in reference)
	// Card 1 & 3: Blue top-left, Yellow bottom-right
	// Card 2: Blue top-left, Yellow top-right (center-ish variation)
	const gradientStyle =
		index === 1
			? "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at 100% 0%, rgba(250,204,21,0.2) 0%, transparent 50%)"
			: "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(250,204,21,0.2) 0%, transparent 50%)";

	return (
		<div
			className="flex flex-col justify-between rounded-[32px] bg-white p-8 shadow-[0_6px_10px_0_rgba(19,80,226,0.10)]"
			style={{ backgroundImage: gradientStyle }}
		>
			<div>
				<Quote
					className="mb-6 rotate-180 fill-[#1350E2] text-[#1350E2]"
					size={48}
					strokeWidth={0}
				/>
				<p className="mb-8 text-[0.95rem] leading-relaxed text-slate-700">
					{item.quote}
				</p>
			</div>

			<div className="flex items-center gap-4">
				{/* Profile Image / Placeholder */}
				<div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#1350E2]">
					{/* If image exists in future, render Next/Image here */}
				</div>

				<div>
					<h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
					<p className="text-xs font-medium text-slate-500">{item.role}</p>
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
