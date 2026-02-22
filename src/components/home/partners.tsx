import Image from "next/image";

const partners = [
	{ src: "partners/dost_central_visayas.svg", alt: "DOST Central Visayas" },
	{ src: "partners/dost_western_visayas.svg", alt: "DOST Western Visayas" },
	{ src: "partners/binhi.svg", alt: "Binhi" },
	{ src: "partners/astral_visions.svg", alt: "Astral Visions" },
	{ src: "partners/hi_five_coworking.svg", alt: "HiFive Coworking Hub" },
	{ src: "partners/fyrelab.svg", alt: "FyrLab Accelerator" },
	{ src: "partners/devcon_iloilo.svg", alt: "DEVCON Iloilo" },
	{ src: "partners/devcon_visayas.svg", alt: "DEVCON Visayas Programs" },
];

const scrollPartners = [...partners, ...partners];

export default function PartnersSection() {
	return (
		<section className="reveal-up px-4 py-16 md:px-8 md:py-20 overflow-hidden">
			<div className="mx-auto max-w-350 text-center">
				<h2 className="reveal-left font-display text-4xl font-medium text-primary md:text-[64px]">
					Our Partners
				</h2>
				<div className="mt-10 md:mt-14 relative w-full overflow-hidden">
					{/* Side Gradients for smooth fade-in/out */}
					<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background to-transparent md:w-24" />
					<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background to-transparent md:w-24" />

					<div className="scroll-left flex w-max items-center gap-12">
						{scrollPartners.map((partner, index) => (
							<div
								key={`${partner.src}-${index}`}
								className="flex h-20 shrink-0 items-center justify-center md:h-24"
							>
								<Image
									src={partner.src}
									alt={partner.alt}
									width={220}
									height={110}
									className="h-full w-auto object-contain"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
