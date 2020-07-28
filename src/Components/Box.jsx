import React from 'react';
import styled from 'styled-components';

import { useDrop } from 'react-dnd';
import itemTypes from '../utils/items';
const StyledDiv = styled.div`
	position: relative;
	height: 32px;
	width: 32px;
`;

const SunkShip = styled(StyledDiv)`
	border-color: red;
	background: rgba(255, 0, 0, 0.05);
	&::after {
		content: '';
		display: block;
		height: 2em;
		width: 2em;
		border: 1px solid red;
		margin: -1px;
		position: absolute;
		z-index: 3;
		top: 0;
		left: 0;
	}
`;
const HitShip = styled.span`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	overflow: hidden;
	box-sizing: border-box;

	&::after {
		top: 50%;
		height: 2px;
		left: -25%;
		width: 150%;
		margin-left: -1px;
		content: '';
		position: absolute;
		z-index: -1;
		background: red;
		transform: rotate(-45deg);
	}
	&::before {
		left: 50%;
		width: 2px;
		top: -25%;
		height: 150%;
		margin-top: 1px;
		content: '';
		position: absolute;
		z-index: -1;
		background: red;
		transform: rotate(-45deg);
	}
`;

const StyledBox = styled(StyledDiv)`
	&:hover {
		border: 2px solid #40bf44;
		background: rgba(64, 191, 68, 0.05);
		width: 32px;
		height: 32px;
		margin: -2px;
		cursor: crosshair;
		z-index: 2;
	}
`;
const StyledHitBox = styled(StyledDiv)`
	position: relative;
	background-color: #eee;
	&::before {
		background-color: #333;
		position: absolute;
		width: 4px;
		height: 4px;
		top: 50%;
		left: 50%;
		content: '';
		border-radius: 50%;
		margin-top: -2px;
		margin-left: -2px;
	}
`;
const StyledTd = styled.td`
	border: 1px solid #b4b4ff;
	padding: 0;
`;

export default function Box(props) {
	const {
		player,
		onHit,
		onClick,
		ship,
		children,
		moveShip,
		x,
		y,
		canPlace,
	} = props;
	const [{ isOver }, drop] = useDrop({
		accept: itemTypes.SHIP,
		canDrop: (item, monitor) => canPlace(item.ship, x, y),

		drop: (item, monitor) => {
			console.log('drop', x, y);
			moveShip(item.ship, x, y);
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});
	const renderBox = () => {
		if (player === 'computer') {
			if (onHit) {
				if (ship) {
					if (ship.isSunk()) {
						return (
							<SunkShip>
								<HitShip></HitShip>
								{children}
							</SunkShip>
						);
					}

					return (
						<StyledDiv>
							<HitShip></HitShip>
							{children}
						</StyledDiv>
					);
				} else return <StyledHitBox>{children}</StyledHitBox>; //empty cell
			} else return <StyledBox onClick={onClick}>{children}</StyledBox>; //standard cell
		}
		//player cells
		else if (player === 'player') {
			if (onHit) {
				if (ship) {
					if (ship.isSunk()) {
						return (
							<SunkShip>
								<HitShip></HitShip>
								{children}
							</SunkShip>
						);
					}
					return (
						<StyledBox>
							<HitShip></HitShip>
							{children}
						</StyledBox>
					);
				} else return <StyledHitBox>{children}</StyledHitBox>; //empty hit cell
			} else return <StyledDiv ref={drop}>{children}</StyledDiv>; //standard cell
		}
	};

	return <StyledTd>{renderBox()}</StyledTd>;
}
