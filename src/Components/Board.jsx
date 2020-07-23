import React from 'react';
import styled from 'styled-components';
import ShipC from './Ship';
import Marker from './Marker';
import Box from './Box';
import { useDrop } from 'react-dnd';
import itemTypes from '../utils/items';
import Ship from '../Game/shipFactory';

const StyledDiv = styled.div`
	position: relative;
	float: left;
	width: 50%;
	opacity: ${(props) => (props.gameOver ? 0.4 : 1)};
	pointer-events: ${(props) => (props.gameOver ? 'none' : 'auto')};
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
	margin-left: 50px;
	border-collapse: collapse;
	cursor: default;
	display: inline-block;
	position: relative;
`;

export default function Board(props) {
	const { board, gameOver, shipClick, moveShip } = props;
	// gb.autoFill();
	const field = board.getBattlefield();

	const ships = board.getShips();
	// const [{ isOver, x, y }, drop] = useDrop({
	// 	accept: itemTypes.SHIP,
	// 	drop: (item, monitor) => {
	// 		console.log(item, x, y);
	// 		// moveShip(item,)
	// 		//what to do when item is drop
	// 	},
	// 	collect: (monitor) => ({
	// 		isOver: !!monitor.isOver(),
	// 	}),
	// });

	const renderShip = (x, y) => {
		let ship = ships.find((s) => s.coords[0] === x && s.coords[1] === y);
		if (ship) {
			return (
				<ShipC
					key={ship.id}
					ship={ship}
					onClick={shipClick}
					length={ship.length}
					id={ship.id}
					vertical={ship.vertical}
				/>
			);
		} else return null;
	};
	const renderBox = (box) => {
		const [x, y] = [box.X, box.Y];

		return (
			<Box
				moveShip={moveShip}
				key={'pBoard' + [x, y]}
				x={x}
				y={y}
				onHit={box.hit}
				ship={box.ship}
				player={'player'}>
				{renderShip(x, y)}
				{Marker(x, y)}
			</Box>
		);
	};

	const rows = field
		.map((b) => {
			return renderBox(b);
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
		<StyledDiv gameOver={gameOver}>
			<Table>
				<tbody>{rows}</tbody>
			</Table>
		</StyledDiv>
	);
}
