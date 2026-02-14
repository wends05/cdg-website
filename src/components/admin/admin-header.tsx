import { SignoutButton } from "../auth/signout-btn";

export default function AdminHeader() {
	return (
		<nav className="w-full flex items-center justify-between px-6 py-4 bg-gray-100 border-b">
			<div>Admin Dashboard</div>

			<div>
				<SignoutButton />
			</div>
		</nav>
	);
}
