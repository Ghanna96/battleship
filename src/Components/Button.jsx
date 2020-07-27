import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
	margin-top: 30px;
	text-align: center;
`;
const Play = styled.a`
	background-color: #97e673;
	border-radius: 15px;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 15px;
	font-weight: bold;
	padding: 10px 25px;
	text-decoration: none;
	pointer-events: ${(props) => (props.disabled ? 'none' : 'initial')};
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	&:hover {
		background-color: #59b02e;
	}
	&:active {
		position: relative;
		top: 1px;
	}
`;
export default function Button(props) {
	return (
		<Wrapper>
			<Play onClick={props.onClick} disabled={props.disabled}>
				Play
			</Play>
			{props.children}
		</Wrapper>
	);
}
