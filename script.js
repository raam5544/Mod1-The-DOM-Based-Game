















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


const boardParent = addEventListener('click', (e) => { console.log(e.x, e.y) })

const plot = document.createElement('h3')
plot.textContent = 'X'

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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let x;
let y;
let attempt = 0

const plotAreas = [[[168, 178], [136, 213], [170, 224], [165, 203]], // 15 points area
[[116, 229], [227, 147], [95, 253], [214, 306]], // 10 points area
[[135, 43], [153, 360], [48, 96], [157, 307]], // 5 points area
[[266, 15], [318, 372], [30, 365], [23, 350]]] // No points area


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

const oppPlotAreas = [[[692, 178], [716, 205], [668, 230], [692, 209]], // 15 points area
[[638, 133], [724, 140], [688, 292], [630, 261]], // 10 points area
[[728, 43], [815, 209], [744, 356], [569, 267]], // 5 points area
[[568, 391], [827, 35], [30, 365], [562, 35]]] // No points area

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
    console.log(oppPoint)
}


let isTwoPlayer = false
let isPlayerfinished = false

if (isTwoPlayer) {
    player2Button.disabled = false
}
function compPlayer() {
    if (!isTwoPlayer && isPlayerfinished) {
        board2.append(plot)
        x = getRandomInt(4);
        y = getRandomInt(oppPlotAreas[x].length - 1);
        plot.style.position = "absolute";
        plot.style.left = oppPlotAreas[x][y][0] + 'px';
        plot.style.top = oppPlotAreas[x][y][1] + 'px';
        OpponentScoreCalc()
    }

}
roundInfor.textContent = `Round: ${round} `
function roundUp() {
    playerPoint = 0
    oppPoint = 0
    plot.remove()
    document.querySelector('#player1Butt').disabled = false
    attempt = 0
    round = round + 1
    console.log(round)
    roundInfor.textContent = `Round: ${round} `
    if (round === 3) {
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

}

function winState() {
    if (attempt == 3) {
        if (player1AccumulatedScore > oppAccumulatedScore) {
            middle.append(document.createElement('h3').textContent = 'Player wins')
        } else if (oppAccumulatedScore > player1AccumulatedScore) {
            middle.append(document.createElement('h3').textContent = 'Opponent wins')
        }
    }
}

function main() {
    let compCount = 0
    playerFun()
    setTimeout(() => {
        const interval = setInterval(() => {
            compPlayer()
            console.log('micky')
            compCount++
            if (compCount == 1) {
                clearInterval(interval)
            }
        }, 3000);

    }, 5000);
    winState()
}