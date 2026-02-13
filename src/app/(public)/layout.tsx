import type React from "react";
import Footer from "@/components/home/footer";
import Header from "@/components/ui/header";

export default function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
