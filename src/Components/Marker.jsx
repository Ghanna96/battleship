import React from 'react';
import styled from 'styled-components';

const StyledMarker = styled.div`
	position: absolute;
	font-size: 11px;
	z-index: -1;
`;

const MarkerRow = styled(StyledMarker)`
	left: -3em;
	width: 2em;
	text-align: right;
	top: 1em;
	height: 1em;
`;

const MarkerCol = styled(StyledMarker)`
	top: -2em;
	left: 0;
	width: 100%;
	text-align: center;
`;

export default function Marker(x, y) {
	if (y === 1 && x === 'A') {
		return (
			<React.Fragment>
				<MarkerCol>{y}</MarkerCol>
				<MarkerRow>{x}</MarkerRow>
			</React.Fragment>
		);
	}
	if (y === 1) {
		return <MarkerRow>{x}</MarkerRow>;
	} else if (x === 'A') {
		return <MarkerCol>{y}</MarkerCol>;
	}
}
