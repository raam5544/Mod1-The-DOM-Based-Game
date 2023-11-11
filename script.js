const definedRound = localStorage.getItem('roundsNum');
const selection = localStorage.getItem('selection')
// console.log(selection)

let isTwoPlayer = false
if (selection == "twoPlayer") {
    isTwoPlayer = true
} else if (selection == "computer") {
    isTwoPlayer = false
}


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
oppHitPoint.textContent = `Opp. Hit Point: ${oppPoint}`

const middle = document.querySelector('.middle')
document.querySelector('#roundUpButt').disabled = true

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let x;
let y;
let attempt = 0

const plotAreas = [[[234, 186], [236, 209], [210, 233], [266, 230], [212, 215], [256, 235], [206, 217]], // 15 points area
[[237, 109], [322, 249], [192, 275], [137, 193], [144, 155], [148, 258], [334, 211], [213, 308]], // 10 points area
[[230, 32], [414, 215], [240, 350], [58, 195], [96, 83], [424, 305], [237, 370], [50, 163]], // 5 points area
[[29, 22], [453, 27], [448, 380], [28, 384], [483, 210], [477, 317], [18, 341]]] // No points area


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
let oppAttempt = 0
let isOppFinished = false

function OppFun() {          // Function for the player 2
    if (isPlayerfinished) {
        board2.append(plot)
        x = getRandomInt(4);
        y = getRandomInt(oppPlotAreas[x].length - 1);
        plot.style.position = "absolute";
        plot.style.left = oppPlotAreas[x][y][0] - 20 + 'px';
        plot.style.top = oppPlotAreas[x][y][1] - 20 + 'px';
        // console.log(plot.style.left, plot.style.top)
        OpponentScoreCalc()
        oppAttempt++
        // console.log(oppAttempt)
        if (oppAttempt == 3) {
            document.querySelector('#player2Button').disabled = true
            isOppFinished = true
            if (round < definedRound) {
                document.querySelector('#roundUpButt').disabled = false
            }
        }
        // console.log(isOppFinished)
        // console.log(round)
        if (round == definedRound && isOppFinished) {
            setTimeout(() => {
                winState()
            }, 1000);
        }
    }

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

const oppPlotAreas = [[[1002, 206], [1044, 210], [980, 228], [972, 215], [1035, 183]], // 15 points area
[[1006, 120], [1100, 208], [906, 245], [1006, 293], [963, 300], [912, 196], [944, 133], [1098, 132]], // 10 points area
[[854, 47], [1046, 49], [1183, 255], [1006, 371], [888, 71], [1088, 45], [1109, 361], [834, 280]], // 5 points area
[[1216, 43], [807, 35], [1218, 381], [806, 382], [1262, 191], [855, 17]]] // No points area

function OpponentScoreCalc() {

    for (let j of oppPlotAreas[0]) {
        if (j[0] === oppPlotAreas[x][y][0] && j[1] === oppPlotAreas[x][y][1]) {
            oppPoint = 0
            oppPoint = 15
            // console.log('im here')
        }
    }
    for (let j of oppPlotAreas[1]) {
        if (j[0] === oppPlotAreas[x][y][0] && j[1] === oppPlotAreas[x][y][1]) {
            oppPoint = 0
            oppPoint = 10
            // console.log('im here')
        }
    }
    for (let j of oppPlotAreas[2]) {
        if (j[0] === oppPlotAreas[x][y][0] && j[1] === oppPlotAreas[x][y][1]) {
            oppPoint = 0
            oppPoint = 5
            // console.log('im here')
        }
    }

    for (let j of oppPlotAreas[3]) {
        if (j[0] === oppPlotAreas[x][y][0] && j[1] === oppPlotAreas[x][y][1]) {
            oppPoint = 0
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
                    plot.style.left = oppPlotAreas[x][y][0] - 20 + 'px';
                    plot.style.top = oppPlotAreas[x][y][1] - 20 + 'px';
                    // console.log(plot.style.left, plot.style.top)
                    OpponentScoreCalc()
                }
            }, 2000 * i);
        }
    }
    isOppFinished = true
}
roundInfor.textContent = `Round: ${round} `
function roundUp() {
    isOppFinished = false
    playerPoint = 0
    player1HitPoint.textContent = `Player1 Hit Point: ${playerPoint}`
    oppPoint = 0
    oppHitPoint.textContent = `Opponent Hit Point: ${oppPoint}`
    // plot.remove()
    document.querySelector('#player1Butt').disabled = false
    attempt = 0
    oppAttempt = 0
    round = round + 1
    // console.log(round)
    roundInfor.textContent = `Round: ${round} `
    console.log(definedRound)
    document.querySelector('#roundUpButt').disabled = true
    if (round == definedRound) {
        document.querySelector('#roundUpButt').disabled = true
    }
    if (isTwoPlayer) {
        document.querySelector('#player2Button').disabled = false
    }
}
function playerFun() {
    board.append(plot)
    x = getRandomInt(4);
    y = getRandomInt(plotAreas[x].length - 1);
    plot.style.position = "absolute";
    plot.style.left = plotAreas[x][y][0] - 20 + 'px';
    plot.style.top = plotAreas[x][y][1] - 20 + 'px';
    // console.log(plot.style.left, plot.style.top)
    playerScoreCalc()
    attempt++
    if (attempt == 3) {
        document.querySelector('#player1Butt').disabled = true
        isPlayerfinished = true
    }
    // console.log(isPlayerfinished)
}
const disp = document.querySelector('.disp')
const popUp = document.querySelector('.popUp')

function winState() {
    popUp.style.display = 'flex'
    if (round == definedRound && isOppFinished == true) {
        if (player1AccumulatedScore > oppAccumulatedScore) {
            disp.append(document.createElement('h3').textContent = 'Player Wins')
        } else if (oppAccumulatedScore > player1AccumulatedScore) {
            disp.append(document.createElement('h3').textContent = 'Opponent Wins')
        } else if (oppAccumulatedScore == player1AccumulatedScore) {
            disp.append(document.createElement('h3').textContent = 'Tie')
        }
    }
}

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
    // console.log(isTwoPlayer)
    if (!isTwoPlayer) {
        playerFun()

        if (attempt == 3) {
            setTimeout(() => {
                compPlayer()

            }, 3000);

            setTimeout(() => {
                document.querySelector('#roundUpButt').disabled = false
                // console.log(round, isOppFinished)
                // console.log(definedRound)
                if (round == definedRound && isOppFinished == true) {
                    document.querySelector('#roundUpButt').disabled = true
                    winState()
                }
            }, 9000);


        }
    } else if (isTwoPlayer) {
        playerFun()
        console.log(round, isOppFinished)
        // if (round == definedRound && isOppFinished == true) {
        //     console.log('im here')
        //     winState()
        // }
    }
}

function reLoad() {
    location.reload()
}

function goToSettings() {
    window.location.href = 'initialPage.html'
}