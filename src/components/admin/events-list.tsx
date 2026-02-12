"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import type { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { getEventsQueryOptions } from "@/lib/tanstack-query/query-options";
import type { EventRecord } from "@/types/domain";
import { DataTable } from "../data-table";

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
			const date = row.original.date;
			return date.toLocaleDateString();
		},
	},
];

export default function EventsList() {
	const { data: events } = useSuspenseQuery(getEventsQueryOptions());
	const router = useRouter();
	const handleClickRow = (row: EventRecord) => {
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
