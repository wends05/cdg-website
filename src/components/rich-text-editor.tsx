"use client";

import {
	RiH1,
	RiH2,
	RiH3,
	RiLink,
	RiListOrdered,
	RiListUnordered,
} from "@remixicon/react";
import Link from "@tiptap/extension-link";
import { Markdown } from "@tiptap/markdown";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "./ui/button-group";

type Props = {
	initialValue?: string;
	onChangeHtml: (html: string) => void;
	placeholder?: string;
	disabled?: boolean;
	className?: string;
};

export function RichTextEditor({
	initialValue = "",
	onChangeHtml,
	placeholder,
	disabled = false,
	className,
}: Props) {
	const editor = useEditor({
		immediatelyRender: false,
		extensions: [
			Markdown,
			StarterKit.configure({
				heading: {
					levels: [1, 2, 3],
				},
			}),
			Link.configure({
				openOnClick: false,
				autolink: true,
				defaultProtocol: "https",
			}),
		],
		contentType: "markdown",
		content: initialValue,
		editable: !disabled,
		editorProps: {
			attributes: {
				class:
					"tiptap min-h-[200px] rounded-md border border-input p-3 outline-none max-w-none",
				...(placeholder ? { "data-placeholder": placeholder } : {}),
			},
		},
		onUpdate: ({ editor }) => {
			onChangeHtml(editor.getHTML());
		},
	});

	useEffect(() => {
		if (!editor) return;
		editor.setEditable(!disabled);
	}, [disabled, editor]);

	const setLink = useCallback(() => {
		if (!editor) return;
		const previousUrl = editor.getAttributes("link").href as string | undefined;
		const url = window.prompt("Enter URL", previousUrl ?? "");
		if (url === null) return;

		if (url.trim() === "") {
			editor.chain().focus().extendMarkRange("link").unsetLink().run();
			return;
		}

		editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
	}, [editor]);

	if (!editor) return null;

	return (
		<div className={cn("space-y-2", className)}>
			<div className="flex flex-wrap gap-2">
				<ButtonGroup>
					<Button
						type="button"
						disabled={disabled}
						aria-label="Heading 1"
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 1 }).run()
						}
						className={
							editor.isActive("heading", { level: 1 }) ? "underline" : ""
						}
					>
						<RiH1 />
					</Button>
					<Button
						type="button"
						disabled={disabled}
						aria-label="Heading 2"
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 2 }).run()
						}
						className={
							editor.isActive("heading", { level: 2 }) ? "underline" : ""
						}
					>
						<RiH2 />
					</Button>
					<Button
						type="button"
						disabled={disabled}
						aria-label="Heading 3"
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 3 }).run()
						}
						className={
							editor.isActive("heading", { level: 3 }) ? "underline" : ""
						}
					>
						<RiH3 />
					</Button>
					<ButtonGroupSeparator />
					<Button
						type="button"
						disabled={disabled}
						aria-label="Bold"
						onClick={() => editor.chain().focus().toggleBold().run()}
						className={editor.isActive("bold") ? "font-bold underline" : ""}
					>
						B
					</Button>
					<Button
						type="button"
						disabled={disabled}
						aria-label="Italic"
						onClick={() => editor.chain().focus().toggleItalic().run()}
						className={editor.isActive("italic") ? "italic underline" : ""}
					>
						I
					</Button>
					<ButtonGroupSeparator />
					<Button
						type="button"
						disabled={disabled}
						aria-label="Bullet list"
						onClick={() => editor.chain().focus().toggleBulletList().run()}
						className={editor.isActive("bulletList") ? "underline" : ""}
					>
						<RiListUnordered />
					</Button>
					<Button
						type="button"
						disabled={disabled}
						aria-label="Numbered list"
						onClick={() => editor.chain().focus().toggleOrderedList().run()}
						className={editor.isActive("orderedList") ? "underline" : ""}
					>
						<RiListOrdered />
					</Button>
					<ButtonGroupSeparator />
					<Button
						type="button"
						disabled={disabled}
						aria-label="Add link"
						onClick={setLink}
					>
						<RiLink />
					</Button>
				</ButtonGroup>
			</div>

			<EditorContent editor={editor} />
		</div>
	);
}
