import React from "react";

import CloseIcon from "@/images/close";
import CircleIcon from "@/images/circle";

interface Props {
	value?: string;
	onChange?: () => void;
}

const Cell: React.FC<Props> = ({ value, onChange }) => {
	return (
		<div
			className={`bg-secondary w-[156px] h-[156px] flex items-center justify-center text-7xl rounded-2xl transition-colors ${
				value === "-" ? "[&>*]opacity-0" : "[&>*]opacity-1"
			} cursor-pointer select-none ${value === "X" && "bg-player-one"} ${
				value === "O" && "bg-player-two"
			} ${value === "-" && "hover:bg-secondary-hover"}`}
			onClick={onChange}
		>
			{value === "X" && (
				<CloseIcon className="fill-[#C65F5A] w-[100px] h-[100px]" />
			)}

			{value === "O" && (
				<CircleIcon className="fill-[#669C9E] 	w-[100px] h-[100px]" />
			)}
		</div>
	);
};

export default Cell;
