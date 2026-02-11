"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import type { EventRecord } from "@/types/domain";
import { DataTable } from "../data-table";

interface EventsListProps {
	events: EventRecord[];
}

const columnDefs: ColumnDef<EventRecord>[] = [
	{
		id: "name",
		header: "Event Name",
		accessorKey: "name",
	},
	{
		id: "date",
		header: "Date",
		accessorKey: "date",
		cell: ({ row }) => {
			const date = row.original.date
			return date.toLocaleDateString();
		}
	},
];

export default function EventsList({ events }: EventsListProps) {
	const router = useRouter();
	const handleClickRow = (row: EventRecord) => {
		console.log("Clicked row:", row);
		router.push(`/events/admin/event-page/${row.id}`);
	};

	return (
		<DataTable
			columns={columnDefs}
			data={events}
			onRowSelect={handleClickRow}
		/>
	);
}
