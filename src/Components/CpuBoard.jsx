import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import Marker from './Marker';

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
					ship={b.ship}
					onClick={() => {
						attack(x, y, board);
						console.log('dd');
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

// hit ship

//opacity
// .body__with-pointerevents .battlefield__wait .battlefield-label, .body__with-pointerevents .battlefield__wait .battlefield-stat, .body__with-pointerevents .battlefield__wait .battlefield-table-placeholder {
//     opacity: .4;
//     pointer-events: none;
// }

// .ship-box {
//     z-index: 2;
//     left: 0;
//     top: 0;
//     border: 2px solid #00f;
//     background: rgba(0,0,255,.05);
//     position: absolute!important;
//     margin: -2px;
// }

// .battlefield-cell__done .ship-box {
//     border-color: red;
//     background: rgba(255,0,0,.05);
// }

// .battlefield-cell__done .battlefield-cell-content:after {
//     content: "";
//     display: block;
//     height: 2em;
//     width: 2em;
//     border: 1px solid red;
//     margin: -1px;
//     position: absolute;
//     z-index: 3;
//     top: 0;
//     left: 0;
// }

// element.style {
//     width: 2em;
//     height: 4em;
//     padding-right: 0px;
//     padding-bottom: 1px;
// }
// .battlefield-cell__done .ship-box {
//     border-color: red;
//     background: rgba(255,0,0,.05);
// }

// .battlefield-cell__done .battlefield-cell-content:after {
//     content: "";
//     display: block;
//     height: 2em;
//     width: 2em;
//     border: 1px solid red;
//     margin: -1px;
//     position: absolute;
//     z-index: 3;
//     top: 0;
//     left: 0;
// }
