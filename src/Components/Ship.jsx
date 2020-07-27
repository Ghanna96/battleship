import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import ItemTypes from '../utils/items';
const horizontal = (props) => {
	if (!props.vertical) {
		return `${props.length * 32 + props.length - 1}px`;
	} else return '32px';
};
const vertical = (props) => {
	if (props.vertical) {
		return `${props.length * 32 + props.length - 1}px`;
	} else return '32px';
};

const StyledShip = styled.div`
	width: ${horizontal};
	height: ${vertical};
	padding-right: 1px;
	padding-bottom: 0px;
	z-index: ${(props) => (props.isDragging ? -1 : 10)};
	left: 0;
	top: 0;
	border: 2px solid #00f;
	background: rgba(0, 0, 255, 0.05);
	position: absolute !important;
	margin: -2px;
	visibility: ${(props) => (props.isDragging ? 'hidden' : '')};
`;

export default function ShipC(props) {
	const { ship } = props;
	const [{ isDragging }, drag] = useDrag({
		item: {
			//add props to drag with
			ship,

			type: ItemTypes.SHIP,
		},
		canDrag: () => !props.gameStarted,
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	});
	return (
		<StyledShip
			isDragging={isDragging}
			ref={drag}
			onClick={() => {
				props.onClick(props.ship);
			}}
			length={props.length}
			vertical={props.vertical}></StyledShip>
	);
}
