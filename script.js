















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
console.log(board2)

const roundInfor = document.querySelector('.roundInfo')
let round = 1

let player1AccumulatedScore = 0
const playerScoreAccum = document.querySelector('#player1AccuScore')
playerScoreAccum.textContent = `Player 1 Accu Score: ${player1AccumulatedScore}`

let playerPoint = 0
const player1HitPoint = document.querySelector('#player1HitPoint')
player1HitPoint.textContent = `Player 1 Hit Point: ${playerPoint}`

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let x;
let y;
let attempt = 0

const plotAreas = [[[168, 178], [136, 213], [170, 224], [165, 203]], // 15 points area
[[116, 229], [227, 147], [95, 253], [214, 306]], // 10 points area
[[135, 43], [153, 360], [48, 96], [157, 307]], // 5 points area
[[266, 15], [307, 385], [30, 365], [23, 350]]] // No points area


function fun() {
    board.append(plot)
    x = getRandomInt(4);
    y = getRandomInt(plotAreas[x].length - 1);
    plot.style.position = "absolute";
    plot.style.left = plotAreas[x][y][0] + 'px';
    plot.style.top = plotAreas[x][y][1] + 'px';
    console.log(plot.style.left)
    console.log(plot.style.top)
    playerScoreCalc()
    attempt++
    if (attempt == 3) {
        document.querySelector('#player1Butt').disabled = true
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
            playerPoint = 15
            console.log('im here')
        }
    }
    for (let j of plotAreas[1]) {
        if (j[0] === plotAreas[x][y][0] && j[1] === plotAreas[x][y][1]) {
            playerPoint = 10
            console.log('im here')
        }
    }
    for (let j of plotAreas[2]) {
        if (j[0] === plotAreas[x][y][0] && j[1] === plotAreas[x][y][1]) {
            playerPoint = 5
            console.log('im here')
        }
    }

    console.log(plotAreas[0])
    console.log(plotAreas[x][y][0], plotAreas[x][y][1])

    player1HitPoint.textContent = `Player 1 Hit Point: ${playerPoint}`
    player1AccumulatedScore += playerPoint
    playerScoreAccum.textContent = `Player 1 Accu Score: ${player1AccumulatedScore}`
    console.log(playerPoint)

}
let isTwoPlayer = true

function compPlayer() {
    if (!isTwoPlayer) {
        function fun() {
            board2.append(plot)
            x = 600 + (100 * getRandomInt(4));
            y = 100 * getRandomInt(4);
            plot.style.position = "absolute";
            plot.style.left = x + 'px';;
            plot.style.top = y + 'px';
            console.log(x)
            console.log(y)
            playerScoreCalc()
        }
        let compCount = 1
        const interval = setInterval(() => {
            fun()
            if (compCount == 3) {
                clearInterval(interval)
            }
            compCount++
        }, 3000);

    } else player2Button.disabled = false

}
roundInfor.textContent = `Round: ${round} `
function roundUp() {
    document.querySelector('#player1Butt').disabled = false
    attempt = 0
    round = round + 1
    console.log(round)
    roundInfor.textContent = `Round: ${round} `
    if (round === 3) {
        document.querySelector('#roundUpButt').disabled = true
    }
    console.log(board.getAttribute('coords'))
}


