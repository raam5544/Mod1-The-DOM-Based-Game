const definedRound = localStorage.getItem('roundsNum');
const selection = localStorage.getItem('selection')
console.log(selection)

let isTwoPlayer = false
if (selection == "twoPlayer") {
    isTwoPlayer = true
} else if (selection == "computer") {
    isTwoPlayer = false
}


// Load Game function

// document.querySelector('button').addEventListener('click', (e) => {
//     e.preventDefault()
//     const numOfRounds = document.querySelector('#roundsNumber')
//     console.log(numOfRounds)
// })

// document.getElementsByName('selection').forEach((element) => {
//     if (element.checked == true) {
//         console.log(element.value)
//     }
// })


// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }


// console.log(getRandomInt(3));
// // Expected output: 0, 1 or 2


document.querySelector('#board2').addEventListener('click', (e) => { console.log(e.x, e.y) })

const plot = document.createElement('img')
plot.src = "dart.jpg"

const board = document.querySelector('.board')
const board2 = document.querySelector('#board2')

const player2Button = document.querySelector('#player2Button')
// console.log(board2)

const roundInfor = document.querySelector('.roundInfo')
let round = 1

let player1AccumulatedScore = 0
const playerScoreAccum = document.querySelector('#player1AccuScore')
playerScoreAccum.textContent = `Player 1 Accu Score: ${player1AccumulatedScore}`

let oppAccumulatedScore = 0
const oppScoreAccum = document.querySelector('#oppAccuScore')
oppScoreAccum.textContent = `Opp. Accu Score: ${oppAccumulatedScore}`

let playerPoint = 0
const player1HitPoint = document.querySelector('#player1HitPoint')
player1HitPoint.textContent = `Player 1 Hit Point: ${playerPoint}`

let oppPoint = 0
const oppHitPoint = document.querySelector('#oppHitPoint')
player1HitPoint.textContent = `Opp. Hit Point: ${oppPoint}`

const middle = document.querySelector('.middle')

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let x;
let y;
let attempt = 0

const plotAreas = [[[194, 205], [217, 207], [193, 236], [164, 211]], // 15 points area
[[273, 222], [247, 275], [110, 222], [159, 123]], // 10 points area
[[346, 207], [295, 353], [48, 263], [94, 78]], // 5 points area
[[368, 37], [369, 372], [27, 379], [34, 31]]] // No points area


function fun() {
    board.append(plot)
    x = getRandomInt(4);
    y = getRandomInt(plotAreas[x].length - 1);
    plot.style.position = "absolute";
    plot.style.left = plotAreas[x][y][0] + 'px';
    plot.style.top = plotAreas[x][y][1] + 'px';
    // console.log(plot.style.left)
    // console.log(plot.style.top)
    playerScoreCalc()
    attempt++
    if (attempt == 3) {
        document.querySelector('#player1Butt').disabled = true
        isPlayerfinished = true
    }
    compPlayer()

}

function OppFun() {
    board.append(plot)
    x = getRandomInt(4);
    y = getRandomInt(plotAreas[x].length - 1);
    plot.style.position = "absolute";
    plot.style.left = plotAreas[x][y][0] + 'px';
    plot.style.top = plotAreas[x][y][1] + 'px';
    // console.log(plot.style.left)
    // console.log(plot.style.top)
    playerScoreCalc()
    attempt++
    if (attempt == 3) {
        document.querySelector('#player1Butt').disabled = true
        isPlayerfinished = true
    }
    compPlayer()

}

// function playerScoreCalc() {

//     if ((x < 248 && x > 154) && (y < 268 && y > 161)) {
//         playerPoint = 15
//     }
//     else if (((x < 315 && x > 200) || (x > 85 && x < 150)) && ((y < 160 && y > 90) || (y > 260 && y < 330))) {
//         playerPoint = 10
//     }
//     else if (((x < 395 && x > 320) || (x < 85 && x > 10)) && ((y < 85 && y > 10) || (y > 330 && y < 410))) {
//         playerPoint = 5
//     }
//     player1HitPoint.textContent = `Player 1 Hit Point: ${playerPoint}`
//     player1AccumulatedScore += playerPoint
//     playerScoreAccum.textContent = `Player 1 Accu Score: ${player1AccumulatedScore}`
//     console.log(playerPoint)
// }
const boardChild = document.querySelector('boardChild')
const boardGrandChild = document.querySelector('boardGrandChild')



function playerScoreCalc() {

    for (let j of plotAreas[0]) {
        if (j[0] === plotAreas[x][y][0] && j[1] === plotAreas[x][y][1]) {
            // playerPoint = 0
            playerPoint = 15
            // console.log('im here')
        }

    }
    for (let j of plotAreas[1]) {
        if (j[0] === plotAreas[x][y][0] && j[1] === plotAreas[x][y][1]) {
            playerPoint = 0
            playerPoint = 10
            // console.log('im here')
        }

    }
    for (let j of plotAreas[2]) {
        if (j[0] === plotAreas[x][y][0] && j[1] === plotAreas[x][y][1]) {
            playerPoint = 0
            playerPoint = 5
            // console.log('im here')
        }
    }

    for (let j of plotAreas[3]) {
        if (j[0] === plotAreas[x][y][0] && j[1] === plotAreas[x][y][1]) {
            playerPoint = 0
            // console.log('im here')
        }
    }

    // console.log(plotAreas[0])
    // console.log(plotAreas[x][y][0], plotAreas[x][y][1])

    player1HitPoint.textContent = `Player1 Hit Point: ${playerPoint}`
    player1AccumulatedScore += playerPoint
    playerScoreAccum.textContent = `Player 1 Accu Score: ${player1AccumulatedScore}`
    // console.log(playerPoint)
}

const oppPlotAreas = [[[818, 206], [838, 223], [795, 210], [834, 191]], // 15 points area
[[818, 125], [896, 205], [866, 282], [740, 227]], // 10 points area
[[708, 87], [962, 53], [963, 233], [815, 361]], // 5 points area
[[653, 29], [994, 39], [992, 365], [652, 376]]] // No points area

function OpponentScoreCalc() {

    for (let j of plotAreas[0]) {
        if (j[0] === plotAreas[x][y][0] && j[1] === plotAreas[x][y][1]) {
            oppPoint = 0
            oppPoint = 15
            // console.log('im here')
        }
    }
    for (let j of plotAreas[1]) {
        if (j[0] === plotAreas[x][y][0] && j[1] === plotAreas[x][y][1]) {
            oppPoint = 0
            oppPoint = 10
            // console.log('im here')
        }
    }
    for (let j of plotAreas[2]) {
        if (j[0] === plotAreas[x][y][0] && j[1] === plotAreas[x][y][1]) {
            oppPoint = 0
            oppPoint = 5
            // console.log('im here')
        }
    }

    for (let j of plotAreas[3]) {
        if (j[0] === plotAreas[x][y][0] && j[1] === plotAreas[x][y][1]) {
            playerPoint = 0
            // console.log('im here')
        }
    }

    // console.log(plotAreas[0])
    // console.log(plotAreas[x][y][0], plotAreas[x][y][1])

    oppHitPoint.textContent = `Opponent Hit Point: ${oppPoint}`
    oppAccumulatedScore += oppPoint
    oppScoreAccum.textContent = `Opp. Accu Score: ${oppAccumulatedScore}`
    // console.log(oppPoint)
}



let isPlayerfinished = false

if (isTwoPlayer) {
    player2Button.disabled = false
}
function compPlayer() {
    for (let i = 0; i < attempt; i++) {
        task(i)
        function task(i) {
            setTimeout(() => {
                if (!isTwoPlayer && isPlayerfinished) {
                    board2.append(plot)
                    x = getRandomInt(4);
                    y = getRandomInt(oppPlotAreas[x].length - 1);
                    plot.style.position = "absolute";
                    plot.style.left = oppPlotAreas[x][y][0] + 'px';
                    plot.style.top = oppPlotAreas[x][y][1] + 'px';
                    console.log('Im here')
                    OpponentScoreCalc()
                }
            }, 2000 * i);
        }

    }
    compFinished = true
}
roundInfor.textContent = `Round: ${round} `
function roundUp() {
    playerPoint = 0
    oppPoint = 0
    // plot.remove()
    document.querySelector('#player1Butt').disabled = false
    attempt = 0
    round = round + 1
    console.log(round)
    roundInfor.textContent = `Round: ${round} `
    console.log(definedRound)
    if (round == definedRound) {
        document.querySelector('#roundUpButt').disabled = true
    }
}
function playerFun() {
    board.append(plot)
    x = getRandomInt(4);
    y = getRandomInt(plotAreas[x].length - 1);
    plot.style.position = "absolute";
    plot.style.left = plotAreas[x][y][0] + 'px';
    plot.style.top = plotAreas[x][y][1] + 'px';
    // console.log(plot.style.left)
    // console.log(plot.style.top)
    playerScoreCalc()
    attempt++
    if (attempt == 3) {
        document.querySelector('#player1Butt').disabled = true
        isPlayerfinished = true
    }
    console.log(isPlayerfinished)
}

function winState() {
    if (round == definedRound && compFinished == true) {
        if (player1AccumulatedScore > oppAccumulatedScore) {
            middle.append(document.createElement('h3').textContent = 'Player wins')
        } else if (oppAccumulatedScore > player1AccumulatedScore) {
            middle.append(document.createElement('h3').textContent = 'Opponent wins')
        }
    }
}
let compFinished = false
let u = 0

// setTimeout(() => {
//     const interval = setInterval(() => {
//         compPlayer()
//         console.log('micky')
//         compCount++
//         if (compCount == 1) {
//             clearInterval(interval)
//         }
//     }, 3000);

// }, 5000);

// compPlayer()

// (function loop() {
//     setTimeout(() => {
//         compPlayer()

//         loop();
//     }, 3000);
// })();

// winState()

function main() {
    playerFun()

    if (attempt == 3) {
        setTimeout(() => {
            compPlayer()
        }, 3000);
        if (round == 3 && compFinished == true) {
            setTimeout(() => {
                winState()
            }, 9000);

        }
    }
}

