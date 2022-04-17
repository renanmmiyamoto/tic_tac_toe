import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
`;

export const Actions = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 50px 0;

	button {
		background: #2980b9;
		font-size: 18px;
		font-weight: 600;
		color: #ddd;
		padding: 10px 40px;
		border: 1px solid #ddd;
		border-radius: 4px;
		transition: 0.2s ease-in-out;
		cursor: pointer;

		&:hover {
			background: #fff;
			color: #2980b9;
		}
	}
`;

export const Content = styled.div`
	width: 400px;
	height: 400px;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;
