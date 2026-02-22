"use client";

import { Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
	return (
		<div className="min-h-screen">
			<div className="bg-gradient-to-b from-[#3186FF] to-[#1B38CC] text-white py-20 lg:py-28">
				<div className="mx-auto max-w-7xl px-6 text-center">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
						Contact Us
					</h1>
					<p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
						Have questions about CDG? Want to collaborate? We&apos;d love to
						hear from you!
					</p>
				</div>
			</div>

			<div className="py-20 bg-white dark:bg-zinc-950">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
						<div className="flex flex-col gap-8">
							<div>
								<h2 className="text-3xl font-bold text-foreground mb-4">
									Get in Touch
								</h2>
								<p className="text-muted-foreground text-lg leading-relaxed">
									Feel free to reach out to us through email or visit our office
									during school hours. Follow our social media pages to stay
									updated!
								</p>
							</div>

							<div className="grid gap-6">
								<Card className="border-none shadow-sm bg-zinc-50 dark:bg-zinc-900/50">
									<CardContent className="p-6 flex items-start gap-5">
										<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
											<Mail className="w-6 h-6 text-primary" />
										</div>
										<div>
											<h3 className="font-semibold text-lg text-foreground mb-1">
												Email
											</h3>
											<a
												href="mailto:gdsc.cpu.ph@gmail.com"
												className="text-primary hover:underline hover:text-primary/80 transition-colors"
											>
												gdsc.cpu.ph@gmail.com
											</a>
										</div>
									</CardContent>
								</Card>

								<Card className="border-none shadow-sm bg-zinc-50 dark:bg-zinc-900/50">
									<CardContent className="p-6 flex items-start gap-5">
										<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
											<MapPin className="w-6 h-6 text-primary" />
										</div>
										<div>
											<h3 className="font-semibold text-lg text-foreground mb-1">
												Location
											</h3>
											<p className="text-muted-foreground leading-relaxed">
												Central Philippine University
												<br />
												College of Computer Studies
												<br />
												Jaro, Iloilo City, Philippines
											</p>
										</div>
									</CardContent>
								</Card>
							</div>

							<div>
								<h3 className="text-xl font-bold text-foreground mb-5">
									Follow Us
								</h3>
								<div className="flex items-center gap-4">
									<a
										href="https://www.facebook.com/centraliandeveloper"
										aria-label="Follow us on Facebook"
										className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-transform hover:-translate-y-1 shadow-sm"
										target="_blank"
										rel="noopener noreferrer"
									>
										<svg
											className="w-6 h-6"
											fill="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
										</svg>
									</a>

									<a
										href="https://www.linkedin.com/company/centralian-developer-group-cpu/"
										aria-label="Follow us on LinkedIn"
										className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-transform hover:-translate-y-1 shadow-sm"
										target="_blank"
										rel="noopener noreferrer"
									>
										<svg
											className="w-6 h-6"
											fill="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
										</svg>
									</a>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-6">
							<h2 className="text-3xl font-bold text-foreground">
								Find Us on Campus
							</h2>
							<div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl shadow-sm border border-border overflow-hidden relative w-full h-[400px] lg:h-[500px]">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.4311505949704!2d122.54840404125775!3d10.732361797902168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee4d759d026a9%3A0x58a13c2a8723a438!2sMary%20Thomas%20Hall%2C%20Jaro%2C%20Iloilo%20City%2C%20Iloilo!5e0!3m2!1sen!2sph!4v1770832152083!5m2!1sen!2sph"
									className="absolute inset-0 w-full h-full border-0"
									allowFullScreen
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="Central Philippine University Location"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
