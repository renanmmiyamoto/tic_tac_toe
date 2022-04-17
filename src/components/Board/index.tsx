import React, { useCallback, useEffect, useState } from "react";

import Item from "../Item";

import { calcMatches } from "../../utils/calcMatches";
import { Container, Content } from "./styles";
import Result from "../Result";

const Board: React.FC = () => {
	const [winner, setWinner] = useState("");
	const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);
	const items = new Array<"X" | "O" | "">(9).fill("");
	const [fillValue, setFillValue] = useState<("" | "X" | "O")[]>(items);

	const handleClick = useCallback(
		(index: number) => {
			fillValue[index] = currentPlayer === 1 ? "X" : "O";
			setFillValue(fillValue);

			setCurrentPlayer(state => (state === 1 ? 2 : 1));
		},
		[fillValue, currentPlayer],
	);

	useEffect(() => {
		const result = calcMatches({ boardValues: fillValue });

		if (result !== "") {
			setWinner(result);
		}
	}, [handleClick]);

	const handleOnClose = useCallback(() => {
		setWinner("");
		setFillValue(items);
		setCurrentPlayer(1);
	}, [winner]);

	return (
		<>
			<Container>
				<Content>
					{fillValue.map((item, i) => (
						<Item
							key={i}
							value={item}
							onPress={() => (item === "" ? handleClick(i) : null)}
							disabled={item !== ""}
						/>
					))}
				</Content>
			</Container>

			<Result handleOnClose={handleOnClose} show={winner !== ""}>
				{winner}
			</Result>
		</>
	);
};

export default Board;
