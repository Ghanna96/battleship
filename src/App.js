import React from 'react';
import styled from 'styled-components';
import Battleship from './Components/Battleship';

const Wrapper = styled.div`
	min-width: 990px;
	max-width: 1080px;
	min-height: 100%;
	position: relative;
	margin: 0 auto;
	z-index: 1;
	background: #fff;
`;

function App() {
	return (
		<Wrapper>
			<Battleship></Battleship>
		</Wrapper>
	);
}

export default App;
