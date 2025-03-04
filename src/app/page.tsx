'use client'
import { useCallback, useState } from 'react'

import Cell from '@/components/Cell'
import CircleIcon from '@/images/circle'
import CloseIcon from '@/images/close'

export default function Home() {
	const [player, setPlayer] = useState<'1' | '2'>('1')
	const [board, setBoard] = useState<string[][]>(
		new Array(3).fill(new Array(3).fill('-')),
	)

	const checkRows = useCallback(
		(updatedBoard: string[][], rowIndex: number, colIndex: number) =>
			updatedBoard[rowIndex][colIndex] !== '-' &&
			updatedBoard[rowIndex].every(
				(cell) => cell === updatedBoard[rowIndex][colIndex],
			),
		[],
	)

	const checkCols = useCallback(
		(updatedBoard: string[][], rowIndex: number, colIndex: number) =>
			updatedBoard[rowIndex][colIndex] !== '-' &&
			updatedBoard
				.map((row) => row[colIndex])
				.every((cell) => cell === updatedBoard[rowIndex][colIndex]),
		[],
	)

	const checkDiagonals = useCallback(
		(updatedBoard: string[][], rowIndex: number, colIndex: number) => {
			const diagonal1 = [0, 1, 2]
			const diagonal2 = [2, 1, 0]

			const cellIsDiagonal =
				diagonal1.some((diagonalColIndex) => diagonalColIndex === colIndex) ||
				diagonal2.some((diagonalColIndex) => diagonalColIndex === colIndex)

			if (!cellIsDiagonal) return false

			const diagonal1Values = updatedBoard
				.map((row, i) => row[diagonal1[i]])
				.flat()

			const diagonal2Values = updatedBoard
				.map((row, i) => row[diagonal2[i]])
				.flat()

			return (
				diagonal1Values.every(
					(cell) => cell !== '-' && cell === updatedBoard[rowIndex][colIndex],
				) ||
				diagonal2Values.every(
					(cell) => cell !== '-' && cell === updatedBoard[rowIndex][colIndex],
				)
			)
		},
		[],
	)

	const handleCellClick = useCallback(
		(rowIndex: number, colIndex: number) => {
			setPlayer((p) => (p === '1'
				? '2'
				: '1'))

			const newBoard = board.map((row, rowsIndex) =>
				rowsIndex === rowIndex
					? row.map((col, colsIndex) =>
						colsIndex === colIndex
							? col === '-'
								? player === '1'
									? 'X'
									: 'O'
								: col
							: col,
					)
					: row,
			)

			setBoard(newBoard)

			if (
				checkRows(newBoard, rowIndex, colIndex) ||
				checkCols(newBoard, rowIndex, colIndex) ||
				checkDiagonals(newBoard, rowIndex, colIndex)
			) {
				alert(`player ${player} ganhou`)
				setBoard(new Array(3).fill(new Array(3).fill('-')))
				setPlayer('1')
			}
		},
		[player, checkCols, checkRows, checkDiagonals, board],
	)

	return (
		<main className="min-h-screen py-24 bg-primary text-white">
			<div className="text-center mb-24 text-3xl flex items-center gap-4 justify-center">
				Player:{' '}
				{player === '1'
					? (
						<CloseIcon className="fill-[#C65F5A] w-10 h-10" />
					)
					: (
						<CircleIcon className="fill-[#669C9E] w-10 h-10" />
					)}
			</div>

			<div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-125 max-h-125 w-11/12 m-auto items-stretch">
				{board.map((rows, rowIndex) =>
					rows.map((cell, cellIndex) => (
						<Cell
							key={`${rowIndex}:${cellIndex}`}
							value={cell}
							onChange={() =>
								cell === '-' && handleCellClick(rowIndex, cellIndex)}
							player={player}
						/>
					)),
				)}
			</div>
		</main>
	)
}
