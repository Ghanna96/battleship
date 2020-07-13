import React from 'react';
import styled from 'styled-components';
import Battleship from './Components/Battleship';

const Body = styled.div`
	min-width: 990px;
	max-width: 1080px;
	position: relative;
	margin: 0 auto;
	z-index: 1;
	background: #fff;
	min-height: 100%;
`;

function App() {
	return (
		<Body>
			<Battleship></Battleship>
		</Body>
	);
}

export default App;
