import { RiArrowLeftSLine } from "@remixicon/react";
import Link from "next/link";
import CreateEventForm from "@/components/events/forms/create-event";
import { Button } from "@/components/ui/button";

export default function CreateEventPage() {
	return (
		<div className="p-6 flex items-center justify-center w-full">
			<div className="max-w-2xl space-y-5 w-full">
				<Button
					nativeButton={false}
					render={
						<Link href={"/events/admin"}>
							<RiArrowLeftSLine />
							Return
						</Link>
					}
				/>
				<CreateEventForm />
			</div>
		</div>
	);
}
