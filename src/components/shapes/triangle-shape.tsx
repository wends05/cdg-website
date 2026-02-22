export const TriangleShape = ({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 210 210"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		aria-hidden="true"
		{...props}
	>
		<path
			d="M187.926 53.75L51.7498 189.926L1.905 3.905L187.926 53.75Z"
			stroke="currentColor"
			strokeWidth="20"
		/>
	</svg>
);
