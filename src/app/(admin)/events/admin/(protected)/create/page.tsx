import { SignoutButton } from "@/components/auth/signout-btn";

export default function CreateEventPage() {
	return (
		<div className="p-6">
			<p className="text-lg font-semibold">Create Event</p>
			<p className="mt-2 text-muted-foreground">
				This page is protected by the admin layout access check.
			</p>
			<div className="mt-4">
				<SignoutButton variant="secondary" size="sm" />
			</div>
		</div>
	);
}
