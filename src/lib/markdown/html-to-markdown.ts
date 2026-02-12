"use client";

import TurndownService from "turndown";

const turndown = new TurndownService({
	headingStyle: "atx",
	codeBlockStyle: "fenced",
	emDelimiter: "_",
	bulletListMarker: "-",
});

export function htmlToMarkdown(html: string): string {
	const trimmed = html.trim();
	if (!trimmed) return "";

	return turndown.turndown(trimmed).trim();
}

