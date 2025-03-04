import React from 'react'
import { twMerge } from 'tailwind-merge'

import CircleIcon from '@/images/circle'
import CloseIcon from '@/images/close'

interface Props {
	value?: string;
	onChange?: () => void;
	player: '1' | '2';
}

const Cell: React.FC<Props> = ({ value, onChange, player }) => {
	return (
		<div
			className={twMerge([
				'aspect-square flex items-center justify-center text-7xl rounded-2xl transition duration-100 select-none',
				value === '-'
					? '[&>*]opacity-0 bg-secondary cursor-pointer hover:bg-secondary-hover'
					: '[&>*]opacity-1',
				value === 'O' && 'bg-player-two',
				value === 'X' && 'bg-player-one',
				value === '-' && player === '1' && 'hover:bg-player-one/60',
				value === '-' && player === '2' && 'hover:bg-player-two/60',
			])}
			onClick={onChange}
		>
			{value === 'X' && (
				<CloseIcon className="fill-player-one aspect-square w-7/12" />
			)}

			{value === 'O' && (
				<CircleIcon className="fill-player-two aspect-square w-7/12" />
			)}
		</div>
	)
}

export default Cell
