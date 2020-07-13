import React from 'react';
import styled from 'styled-components';
import Ship from '../Game/shipFactory';
import Box from './Box';

// const Cell = styled.td`
// 	border: 1px solid #b4b4ff;
// 	padding: 0;
// 	&:hover {
// 	}
// `;
// const Content = styled.div`
// 	position: relative;
// 	height: 32px;
// 	width: 32px;
// 	background-color: ${(props) => (props.background ? '#ddd' : '#fff')};

// 	&:hover {
// 		border: 2px solid #40bf44;
// 		background: rgba(64, 191, 68, 0.05);
// 		width: 32px;
// 		height: 32px;
// 		margin: -2px;
// 		cursor: crosshair;
// 		z-index: 2;
// 	}
// `;
const StyledDiv = styled.div`
	float: right;
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

export default function CpuBoard(props) {
	const { board, attack } = props;
	// gb.autoFill();
	const field = board.getBattlefield();

	const ships = board.getShips();

	console.log(ships);

	const rows = field
		.map((b, i) => {
			const [x, y] = [b.X, b.Y];

			return (
				<Box
					key={[x, y]}
					type={b.hit}
					onClick={() => {
						attack(x, y, board);
						console.log('dd');
					}}></Box>
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

// .battlefield__rival .battlefield-cell__empty:hover .battlefield-cell-content:after {
//     border: 2px solid #40bf44;
//     background: rgba(64,191,68,.05);
//     position: absolute;
//     width: 2em;
//     height: 2em;
//     top: 0;
//     left: 0;
//     margin: -2px;
//     content: "";
//     display: block;
//     cursor: pointer;
//     z-index: 2;
// }

// .battlefield-cell__miss .battlefield-cell-content .z {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     height: 4px;
//     width: 4px;
//     background: #333;
//     border-radius: 50%;
//     margin-top: -2px;
//     margin-left: -2px;
// }

// .battlefield-cell__last .battlefield-cell-content:after, .battlefield-cell__processed .battlefield-cell-content:before {
//     content: "";
//     display: block;
//     height: 2em;
//     width: 2em;
//     position: absolute;
//     z-index: -1;
//     top: 0;
//     left: 0;
//     background-color: #fafad2;
// }
