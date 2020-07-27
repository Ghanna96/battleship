import React, { Component } from 'react';
import Gameboard from '../Game/gameboard';
import Player from '../Game/Player';
import styled from 'styled-components';
import Board from './Board';
import CpuBoard from './CpuBoard';
import Button from './Button';
const Battelfields = styled.div`
	width: 100%;
	padding-top: 80px;
	margin-left: 80px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	overflow: hidden;
`;
const Header = styled.header`
	text-align: center;
`;

class Battleship extends Component {
	state = {
		pBoard: Gameboard(),
		cBoard: Gameboard(),
		player: Player('player'),
		computer: Player('computer'),
		playerTurn: true,
		turn: false,
		gameStarted: false,
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
				this.setState({ turn: false });
			}
		}, 1000);
	};
	componentWillMount() {
		console.log('use effect');
		let p = this.state.pBoard;
		let c = this.state.cBoard;
		p.autoFill();
		c.autoFill();
		c.randomPlacing();
		this.setState({ pBoard: p });
		this.setState({ cBoard: c });
	}
	shipClick = (s) => {
		this.setState({ temp: s });
		console.log(s);
	};
	handleShip = (x, y) => {
		const board = Object.assign({}, this.state.pBoard);
		board.moveShip(this.state.temp, x, y);
		this.setState({ pBoard: board });
	};
	moveShip = (s, x, y) => {
		const board = Object.assign({}, this.state.pBoard);
		board.moveShip(s, x, y);
		console.log(board.getBox(x, y));
		this.setState({ pBoard: board });
	};
	canMoveShip = (ship, x, y) => {
		const board = Object.assign({}, this.state.pBoard);
	};
	startGame = () => {
		this.setState({ gameStarted: true });
		console.log('play');
	};
	gameOver() {
		const go1 = this.state.pBoard;
		const go2 = this.state.cBoard;
		if (go1.allShipsSunk() || go2.allShipsSunk()) {
			this.setState({ gameOver: true });
			return true;
		}
	}

	render() {
		console.log('render');
		return (
			<React.Fragment>
				<Header>
					<h1>Battleship</h1>
				</Header>
				<Button onClick={this.startGame}>
					{!this.state.gameStarted && (
						<h3> Move your ships and click play to start</h3>
					)}
				</Button>

				<Battelfields>
					<Board
						board={this.state.pBoard}
						gameStarted={this.state.gameStarted}
						gameOver={this.state.gameOver}
						shipClick={this.shipClick}
						moveShip={this.moveShip}></Board>
					<CpuBoard
						board={this.state.cBoard}
						attack={this.attackBoard}
						turn={this.state.turn}
						gameStarted={this.state.gameStarted}
						gameOver={this.state.gameOver}></CpuBoard>
				</Battelfields>
			</React.Fragment>
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
