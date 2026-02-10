import { getServerSession } from "next-auth";
import { SignoutButton } from "@/components/auth/signout-btn";
import { authOptions } from "@/lib/auth";

export default async function AdminPage() {
	const session = await getServerSession(authOptions);

	return (
		<div className="p-6">
			<p className="text-lg font-semibold">
				Welcome, {session?.user?.name ?? "Admin"}
			</p>
			<div className="mt-4">
				<SignoutButton variant="secondary" size="sm" />
			</div>
		</div>
	);
}
