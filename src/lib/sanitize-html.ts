"use client";

import DOMPurify from "isomorphic-dompurify";

export function sanitizeHtml(html: string): string {
	if (typeof window === "undefined") return html;
	return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
}
