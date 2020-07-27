import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import Marker from './Marker';

const StyledDiv = styled.div`
	float: right;
	width: 50%;
	position: relative;
	opacity: ${(props) =>
		props.turn || props.gameOver || !props.gameStarted ? 0.4 : 1};
	pointer-events: ${(props) =>
		props.turn || props.gameOver || !props.gameStarted ? 'none' : 'auto'};
`;
const Row = styled.tr`
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 100%;
	vertical-align: baseline;
`;

const Table = styled.table`
	margin: 0;
	border-collapse: collapse;
	cursor: default;
	display: inline-block;
	position: relative;
`;

export default function CpuBoard(props) {
	const { board, attack, turn, gameOver, gameStarted } = props;

	const field = board.getBattlefield();

	const ships = board.getShips();

	console.log(ships);
	const rows = field
		.map((b) => {
			const [x, y] = [b.X, b.Y];

			return (
				<Box
					key={'cBoard' + [x, y]}
					onHit={b.hit}
					ship={b.ship}
					player={'computer'}
					onClick={() => {
						attack(x, y, board);
					}}>
					{Marker(x, y)}
				</Box>
			);
		})
		.reduce((row, el, i) => {
			i % 10 === 0 && row.push([]);
			row[row.length - 1].push(el);
			return row;
		}, [])
		.map((r, i) => {
			return <Row key={i}>{r}</Row>;
		});

	return (
		<StyledDiv turn={turn} gameOver={gameOver} gameStarted={gameStarted}>
			<Table>
				<tbody>{rows}</tbody>
			</Table>
		</StyledDiv>
	);
}
