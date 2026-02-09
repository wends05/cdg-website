// Note: this may be used to handle redirects for admin related pages
export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div>{children}</div>;
}
