import React, { Component } from 'react';
import Gameboard from '../Game/gameboard';
const cellStyle = {
	border: '1px solid #b4b4ff',
	padding: 0,
};
const content = {
	position: 'relative',
	height: '2em',
	width: '2em',
};
const rowStyle = {
	margin: 0,
	padding: 0,
	border: 0,
	fontSize: '100%',
	font: 'inherit',
	verticalAlign: 'baseline',
};
const tableStyle = {
	margin: 0,
	borderCollapse: 'collapse',
	cursor: 'default',
	display: 'inline-block',
	position: 'relative',
};
function Board() {
	const gb = Gameboard();
	const field = gb.getBattlefield();
	const rows = field
		.map((b, i) => {
			return (
				<td style={cellStyle}>
					<div style={content} key={i} x={b.X} y={b.Y} hit={b.hit}></div>
				</td>
			);
		})
		.reduce((row, el, i) => {
			i % 10 === 0 && row.push([]);
			row[row.length - 1].push(el);
			return row;
		}, [])
		.map((r) => {
			return <tr style={rowStyle}>{r}</tr>;
		});
	return <table style={tableStyle}>{rows}</table>;
}

export default Board;
