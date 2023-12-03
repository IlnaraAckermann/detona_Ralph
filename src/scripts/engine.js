const state = {
	view: {
		squares: document.querySelectorAll(".square"),
		enemy: document.querySelector(".enemy"),
		timeLeft: document.querySelector("#time-left"),
		score: document.querySelector("#score"),
	},
	values: {
		gameVelocity: 1000,
		hitPosition: 0,
		result: 0,
		currentTime: 60,
		acumulattedScore: 0,
	},
	actions: {
		timerId: setInterval(randomSquare, 1000),
		countDownTimerId: setInterval(countDown, 1000),
	},
};

function aumentarDificuldade(acumulattedScore) {
	clearInterval(state.actions.timerId);
	if (acumulattedScore >= 10) {
		state.values.acumulattedScore = 0;
		state.values.currentTime += 3;
		state.view.timeLeft.textContent = state.values.currentTime;
		state.values.gameVelocity *= 0.9;
		state.actions.timerId = setInterval(
			randomSquare,
			state.values.gameVelocity
		);
	} else {
		state.actions.timerId = setInterval(
			randomSquare,
			state.values.gameVelocity
		);
	}
}

function countDown() {
	state.values.currentTime--;
	state.view.timeLeft.textContent = state.values.currentTime;
	if (state.values.currentTime <= 0) {
		playSound("game-over.mp3");
		clearInterval(state.actions.countDownTimerId);
		clearInterval(state.actions.timerId);
		state.values.hitPosition = null;
		state.view.squares.forEach((squares) => {
			squares.classList.remove("enemy");
		});
		setTimeout(() => {
			alert(`Game Over! Score ${state.values.result}`);
		}, 500);
	}
}

function randomSquare() {
	state.view.squares.forEach((squares) => {
		squares.classList.remove("enemy");
	});
	let randomNumber = Math.floor(Math.random() * 9);
	let randomSquare = state.view.squares[randomNumber];
	randomSquare.classList.add("enemy");
	state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox() {
	state.view.squares.forEach((squares) => {
		squares.addEventListener("mousedown", () => {
			if (squares.id === state.values.hitPosition) {
				state.values.result++;
				state.view.score.textContent = state.values.result;
				state.values.hitPosition = null;
				playSound("hit.mp3");
				state.values.acumulattedScore++;
				aumentarDificuldade(state.values.acumulattedScore);
				randomSquare();
			} else {
				playSound("fail.mp3");
			}
		});
	});
}

function playSound(audioName) {
	let audio = new Audio(`../src/assets/audios/${audioName}`);
	audio.volume = 0.2;
	audio.play();
}

function init() {
	addListenerHitBox();
}

init();
