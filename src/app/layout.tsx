import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { QueryProvider } from "@/lib/tanstack-query/provider";
import { AuthProvider } from "@/utils/auth-provider";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "CDG Website",
	description:
		"CDG is a modern marketing and digital experience platform helping brands launch, manage, and grow their online presence.",
	icons: {
		icon: "/logo_1.svg",
		shortcut: "/logo_1.svg",
		apple: "/logo_1.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} no-scrollbar`}
			suppressHydrationWarning
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased no-scrollbar`}
			>
				<QueryProvider>
					<AuthProvider>
						<div className="min-h-screen bg-background text-foreground">
							{children}
						</div>
					</AuthProvider>
				</QueryProvider>
				<NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
			</body>
		</html>
	);
}
