const state = {
	view: {
		squares: document.querySelectorAll(".square"),
		enemy: document.querySelector(".enemy"),
		timeLeft: document.querySelector("#time-left"),
		score: document.querySelector("#score"),
	},
	values: {        
        gameVelocity:1000,
        hitPosition: 0,
        result:0,
        currentTime:60,
    },
    actions: {
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId:setInterval(countDown, 1000),
    }
};

function aumentarDificuldade(score){
    clearInterval(state.actions.timerId)
    if (score > 20){
        state.actions.timerId = setInterval(randomSquare, 800)
    } else if (score > 40){
        state.actions.timerId = setInterval(randomSquare, 500)
    } else {
        state.actions.timerId = setInterval(randomSquare, 1000)
    }
}

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent=state.values.currentTime
    if(state.values.currentTime<=0){
        playSound("game-over.mp3")
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        state.values.hitPosition=null;
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
    randomSquare.classList.add("enemy")
    state.values.hitPosition=randomSquare.id;
}

function addListenerHitBox() {
	state.view.squares.forEach((squares) => {
        squares.addEventListener("mousedown", ()=>{
            if(squares.id === state.values.hitPosition){
                state.values.result++
                state.view.score.textContent=state.values.result;
                state.values.hitPosition=null;
                playSound("hit.mp3")
                aumentarDificuldade(state.values.result)
                randomSquare()
            }else {
                playSound("fail.mp3")
            }
        })
	});
}

function playSound(audioName){
    let audio = new Audio(`../src/assets/audios/${audioName}`);
    audio.volume = 0.2;
    audio.play();
}

function init() {
    addListenerHitBox();
}

init();
