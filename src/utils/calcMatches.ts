import { matches } from "./matches";

interface Props {
	boardValues: ("" | "X" | "O")[];
}

export const calcMatches = ({ boardValues }: Props) => {
	const getXMatchs = boardValues
		.map((value, i) => value === "X" && i)
		.filter(value => typeof value !== "boolean");
	const getOMatchs = boardValues
		.map((value, i) => value === "O" && i)
		.filter(value => typeof value !== "boolean");

	for (const match in matches) {
		const element = matches[match];

		const matchsX = element.map(numberInMatch =>
			getXMatchs.includes(numberInMatch),
		);
		const matchsO = element.map(numberInMatch =>
			getOMatchs.includes(numberInMatch),
		);

		if (!matchsX.includes(false)) {
			return "Vitória X";
		}
		if (!matchsO.includes(false)) {
			return "Vitória O";
		}
	}

	return "";
};
