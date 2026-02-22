export const CircleShape = ({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 219 219"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		aria-hidden="true"
		{...props}
	>
		<circle
			cx="109.5"
			cy="109.5"
			r="99.5"
			stroke="currentColor"
			strokeWidth="20"
		/>
	</svg>
);
