import React from 'react';
import styled from 'styled-components';
import Battleship from './Components/Battleship';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
		<DndProvider backend={HTML5Backend}>
			<Wrapper>
				<Battleship></Battleship>
			</Wrapper>
		</DndProvider>
	);
}

export default App;
