export const SquareShape = ({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 240 240"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		aria-hidden="true"
		{...props}
	>
		<rect
			x="120"
			y="20"
			width="141.127"
			height="141.127"
			transform="rotate(45 120 20)"
			stroke="currentColor"
			strokeWidth="20"
		/>
	</svg>
);
