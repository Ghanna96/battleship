import React from 'react';
import styled from 'styled-components';
const StyledDiv = styled.div`
	position: relative;
	height: 32px;
	width: 32px;
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
`;
const StyledTd = styled.td`
	border: 1px solid #b4b4ff;
	padding: 0;
`;

export default function Box(props) {
	const { type, onClick } = props;
	const renderBox = (type) => {
		if (type) {
			return <StyledHitBox></StyledHitBox>;
		} else return <StyledBox onClick={onClick}></StyledBox>;
	};

	return <StyledTd>{renderBox(type)}</StyledTd>;
}
