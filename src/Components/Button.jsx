import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
	padding: 0.5em;
`;
export default function Button(props) {
	return <Btn onClick={props.onClick}>Default ships</Btn>;
}
