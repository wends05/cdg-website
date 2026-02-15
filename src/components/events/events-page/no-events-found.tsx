import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@/components/ui/empty";

export default function NoEventsFound() {
	return (
		<section className="mx-auto max-w-6xl px-6 py-14">
			<Empty className="border border-dashed border-border">
				<EmptyHeader>
					<EmptyTitle>No events found</EmptyTitle>
					<EmptyDescription>
						Try another page or check back soon.
					</EmptyDescription>
				</EmptyHeader>
			</Empty>
		</section>
	);
}
