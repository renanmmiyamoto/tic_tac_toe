import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled(animated.div)`
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 1;
	cursor: pointer;
`;

export const Content = styled(animated.div)`
	background: #fff;
	position: absolute;
	left: 50%;
	width: 80%;
	max-width: 500px;
	transform: translateX(-50%);
	padding: 30px 60px;
	border-radius: 4px;
	cursor: default;

	span {
		font-size: 30px;
		font-weight: 500;
		cursor: text;
	}
`;
