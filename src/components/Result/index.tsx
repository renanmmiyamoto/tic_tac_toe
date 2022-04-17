import React, { useRef } from "react";
import { useSpring, useTransition } from "react-spring";

import useOnClickOutside from "../../hooks/useOnClickOutside";

import { Container, Content } from "./styles";

export interface Props {
	show: boolean;
	handleOnClose: () => void;
}

const Result: React.FC<Props> = ({ children, show, handleOnClose }) => {
	const ref = useRef(null);

	const transitions = useTransition(show, {
		from: { opacity: 0, transform: "translateY(-40px)" },
		enter: { opacity: 1, transform: "translateY(0px)" },
		leave: { opacity: 0, transform: "translateY(-40px)" },
	});

	const props = useSpring({
		opacity: show ? 1 : 0,
		top: show ? 200 : -200,
	});

	useOnClickOutside(ref, handleOnClose);

	return transitions(
		(styles, item) =>
			item && (
				<Container style={styles}>
					<Content ref={ref} style={props}>
						<span>{children}</span>
					</Content>
				</Container>
			),
	);
};

export default Result;
