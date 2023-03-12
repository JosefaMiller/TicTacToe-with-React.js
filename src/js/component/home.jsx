import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (

		<div className="ticTacToe">
			<h1>Tic Tac Toe <br /> ChiquillaMiller</h1>
			<div className="buttons">
				<button>Start</button>
				<button>Reset</button>
			</div>
			<div className="board"><div className="row">
				<div className="col-4">x</div>
				<div className="col-4">x</div>
				<div className="col-4">x</div>
			</div>
				<div className="row">
					<div className="col-4">x</div>
					<div className="col-4">x</div>
					<div className="col-4">x</div>
				</div>
				<div className="row">
					<div className="col-4">x</div>
					<div className="col-4">x</div>
					<div className="col-4">x</div>
				</div>
			</div>

		</div>
	);
};

export default Home;
