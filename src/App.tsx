import Board from "@components/Board";

import { GlobalStyles } from "./styles";

export interface ResetProps {
	cb: () => void;
}

function App() {
	return (
		<>
			<GlobalStyles />

			<Board />
		</>
	);
}

export default App;
