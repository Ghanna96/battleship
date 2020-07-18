import React from 'react';
import styled from 'styled-components';
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
	const { player, type, onClick, ship, children } = props;
	const renderBox = (type) => {
		if (type === true) {
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
			}
			return <StyledHitBox>{children}</StyledHitBox>;
		} else if (player === 'computer')
			return <StyledBox onClick={onClick}>{children}</StyledBox>;
		else return <StyledDiv>{children}</StyledDiv>;
	};

	return <StyledTd>{renderBox(type)}</StyledTd>;
}
// if (player === 'computer')
