import React, { Component } from 'react';
import Gameboard from '../Game/gameboard';
import Player from '../Game/Player';
import styled from 'styled-components';
import Board from './Board';
import CpuBoard from './CpuBoard';

const Battelfields = styled.div`
	width: 100%;
	padding-top: 110px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	overflow: hidden;
`;

class Battleship extends Component {
	state = {
		pBoard: Gameboard(),
		cBoard: Gameboard(),
		player: Player('player'),
		computer: Player('computer'),
		playerTurn: true,
	};

	attackBoard = (x, y, board) => {
		let turn = this.state.playerTurn;
		let player = this.state.player;
		if (turn) {
			let bf = Object.assign({}, board);
			if (player.attack(bf, x, y) === true) {
				this.setState({ cBoard: bf });
				return;
			}
			this.setState({ cBoard: bf });
			this.setState({ playerTurn: !turn });
			this.computerAttacks();
			console.log(bf.getBox(x, y));
		} else return;
	};
	computerAttacks = () => {
		setTimeout(() => {
			console.log('computer attack');
			let bf = Object.assign({}, this.state.pBoard);
			let computer = this.state.computer;
			if (computer.randomAttack(bf) === true) {
				this.setState({ pBoard: bf });
				this.computerAttacks();
			} else {
				this.setState({ pBoard: bf });
				this.setState({ playerTurn: true });
			}
		}, 1250);
	};
	componentWillMount() {
		console.log('use effect');
		let p = this.state.pBoard;
		let c = this.state.cBoard;
		p.autoFill();
		c.autoFill();
		this.setState({ pBoard: p });
		this.setState({ cBoard: c });
	}

	render() {
		return (
			<Battelfields>
				<Board board={this.state.pBoard}></Board>
				<CpuBoard
					board={this.state.cBoard}
					attack={this.attackBoard}></CpuBoard>
			</Battelfields>
		);
	}
}

export default Battleship;

// export default function Battleship() {
// 	const [pBoard, setBoard1] = useState(Gameboard()); //player
// 	const [cBoard, setBoard2] = useState(Gameboard()); //computer
// 	const player = Player('player');
// 	const computer = Player('computer');

// 	const attackBoard = (x, y, board) => {
// 		let bf = Object.assign({}, board);
// 		player.attack(bf, x, y);
// 		setBoard2(bf);
// 		console.log(bf.getBox(x, y));
// 	};
// 	useEffect(() => {
// 		console.log('use effect');
// 		let p = pBoard;
// 		let c = cBoard;
// 		p.autoFill();
// 		c.autoFill();
// 		setBoard1(p);
// 		setBoard2(c);
// 	}, []);
// 	// console.log('App');
// 	return (
// 		<Battelfields>
// 			<Board board={pBoard}></Board>
// 			<CpuBoard board={cBoard} attack={attackBoard}></CpuBoard>
// 		</Battelfields>
// 	);
