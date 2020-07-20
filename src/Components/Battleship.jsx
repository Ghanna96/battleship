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
		turn: false,
		gameOver: false,
	};

	attackBoard = (x, y, board) => {
		if (this.gameOver()) {
			return;
		}
		let turn = this.state.playerTurn;
		let player = this.state.player;
		if (turn) {
			let bf = Object.assign({}, board); // DA CAMBIARE
			if (player.attack(bf, x, y) === true) {
				this.setState({ cBoard: bf });
				return;
			}
			this.setState({ cBoard: bf });
			this.setState({ playerTurn: !turn });
			this.setState({ turn: true });

			this.computerAttacks();
			console.log(bf.getBox(x, y));
		} else return;
	};
	computerAttacks = () => {
		setTimeout(() => {
			console.log('computer attack');
			if (this.gameOver()) {
				return;
			}
			let bf = Object.assign({}, this.state.pBoard);
			let computer = this.state.computer;
			if (computer.randomAttack(bf) === true) {
				this.setState({ pBoard: bf });
				this.computerAttacks();
			} else {
				this.setState({ pBoard: bf });
				this.setState({ playerTurn: true });
			}
			this.setState({ turn: false });
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
	gameOver() {
		const go1 = this.state.pBoard;
		const go2 = this.state.cBoard;
		if (go1.allShipsSunk() || go2.allShipsSunk()) {
			this.setState({ gameOver: true });
			return true;
		}
	}

	render() {
		return (
			<Battelfields>
				<Board board={this.state.pBoard} gameOver={this.state.gameOver}></Board>
				<CpuBoard
					board={this.state.cBoard}
					attack={this.attackBoard}
					turn={this.state.turn}
					gameOver={this.state.gameOver}></CpuBoard>
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
