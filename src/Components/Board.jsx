import React from 'react';
import styled from 'styled-components';
import Ship from '../Game/shipFactory';
import ShipC from './Ship';
const Cell = styled.td`
	border: 1px solid #b4b4ff;
	padding: 0;
`;
const Content = styled.div`
	position: relative;
	height: 32px;
	width: 32px;
	background-color: ${(props) => (props.background ? '#eee' : '#fff')};
`;
const StyledDiv = styled.div`
	float: left;
	width: 50%;
	position: relative;
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

export default function Board(props) {
	const { board } = props;
	// gb.autoFill();
	const field = board.getBattlefield();

	const ships = board.getShips();

	console.log(field);

	const buildShip = (length, id, vertical) => {
		const ship = Ship(length, id, vertical);
		return (
			<ShipC
				key={ship.id}
				length={ship.length}
				id={ship.id}
				vertical={ship.vertical}
			/>
		);
	};
	const placeShip = (ship, x, y) => {
		if (ship.coord[0] === x && ship.coord[1] === y) {
			console.log('ship');
			return buildShip(ship.length, ship.id, ship.vertical);
		} else return;
	};
	const placeShipsOnBoard = (x, y) => {
		return ships.map((s) => placeShip(s, x, y));
	};
	const rows = field
		.map((b, i) => {
			const [x, y] = [b.X, b.Y];

			return (
				<Cell key={i}>
					<Content key={i} data-coord={[x, y]} background={b.hit}>
						{placeShipsOnBoard(x, y)}
					</Content>
				</Cell>
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
		<StyledDiv>
			<Table>
				<tbody>{rows}</tbody>
			</Table>
		</StyledDiv>
	);
}
