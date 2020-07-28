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
const Handle = styled.div`
	position: relative;
	width: 30px;
	height: 30px;
	cursor: pointer;
`;

export default function ShipC(props) {
	const { ship } = props;
	const [{ isDragging }, drag, preview] = useDrag({
		item: {
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
			onClick={() => {
				props.onClick(props.ship);
			}}
			length={props.length}
			vertical={props.vertical}
			ref={preview}>
			<Handle ref={drag}></Handle>
		</StyledShip>
	);
}
