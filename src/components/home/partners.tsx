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

export default function PartnersSection() {
	return (
		<section className="reveal-up bg-[#efefef] px-4 py-16 md:px-8 md:py-20">
			<div className="mx-auto max-w-[1400px] text-center">
				<h2 className="reveal-left text-4xl font-semibold text-[#1f4fcf] md:text-6xl">
					Our Partners
				</h2>
				<div className="stagger-parent mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-8 md:mt-14 md:gap-x-12 lg:gap-x-16">
					{partners.map((partner) => (
						<div
							key={partner.src}
							className="stagger-item flex h-20 items-center justify-center md:h-24"
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
		</section>
	);
}
