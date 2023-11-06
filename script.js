















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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let x;
let y;
let attempt = 0
function fun() {
    board.append(plot)
    x = 100 * getRandomInt(4);
    y = 100 * getRandomInt(4);
    plot.style.position = "absolute";
    plot.style.left = x + 'px';
    plot.style.top = y + 'px';
    console.log(x)
    console.log(y)
    playerScoreCalc()
    attempt++
    if (attempt == 3) {
        document.querySelector('button').disabled = true
    }
}

function playerScoreCalc() {
    let playerPoint = 0
    if ((x < 248 && x > 154) && (y < 268 && y > 161)) {
        playerPoint = 15
    }
    else if (((x < 315 && x > 200) || (x > 85 && x < 150)) && ((y < 160 && y > 90) || (y > 260 && y < 330))) {
        playerPoint = 10
    }
    else if (((x < 395 && x > 320) || (x < 85 && x > 10)) && ((y < 85 && y > 10) || (y > 330 && y < 410))) {
        playerPoint = 5
    }
    console.log(playerPoint)
}