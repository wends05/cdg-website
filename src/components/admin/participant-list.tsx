"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/data-table";
import type { ParticipantRecord } from "@/types/domain";

interface ParticipantListProps {
	participants: ParticipantRecord[];
}

const columnDefs: ColumnDef<ParticipantRecord>[] = [
	{
		id: "name",
		header: "Name",
		accessorKey: "name",
	},
	{
		id: "email",
		header: "Email",
		accessorKey: "email",
	},
];

export default function ParticipantList({
	participants,
}: ParticipantListProps) {
	return (
		<DataTable
			columns={columnDefs}
			data={participants}
			emptyStateText="No participants yet."
		/>
	);
}
