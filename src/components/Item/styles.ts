import styled, { css } from "styled-components";

import { Props } from ".";

export const Container = styled.div<Pick<Props, "disabled" | "value">>`
	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;
	width: calc(33.33% - 4px);
	height: 0;
	padding-bottom: calc(33.33% - 2px);
	background-color: #132c42;

	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-size: 50px;
	color: ${p => (p.value === "X" ? "#ddd" : "#c00")};

	border-radius: 4px;
	margin: 2px;
	cursor: pointer;

	span {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	${p =>
		p.disabled &&
		css`
			cursor: default;
		`}

	&:hover {
		background-color: ${p => !p.value && "#0c2336"};
	}
`;
