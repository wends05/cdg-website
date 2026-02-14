import Image from "next/image";

const partners = [
	"/logo_1.svg",
	"/logo_1.svg",
	"/logo_1.svg",
	"/logo_1.svg",
	"/logo_1.svg",
	"/logo_1.svg",
	"/logo_1.svg",
];

export default function PartnersSection() {
	return (
		<section className="reveal-up bg-white px-4 py-12 md:px-8">
			<div className="mx-auto max-w-7xl text-center">
				<h2 className="reveal-left text-5xl font-semibold text-[#2f71f0]">
					Our Partners
				</h2>
				<div className="stagger-parent mt-8 grid grid-cols-3 place-items-center gap-6 md:grid-cols-7">
					{partners.map((src, idx) => (
						<Image
							key={`${src}-${idx}`}
							src={src}
							alt="Partner logo"
							width={54}
							height={34}
							className="stagger-item h-8 w-auto object-contain opacity-90"
						/>
					))}
				</div>
			</div>
		</section>
	);
}
