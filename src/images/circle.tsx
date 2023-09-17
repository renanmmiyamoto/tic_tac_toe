import { ComponentProps } from "react";

const Circle = (props: ComponentProps<"svg">) => {
	return (
		<svg viewBox="0 0 79 79" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M39.31 78.62C61.0203 78.62 78.62 61.0203 78.62 39.31C78.62 17.5997 61.0203 0 39.31 0C17.5997 0 0 17.5997 0 39.31C0 61.0203 17.5997 78.62 39.31 78.62Z" />
		</svg>
	);
};

export default Circle;
