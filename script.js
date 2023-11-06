















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
}

function playerScoreCalc() {
    let playerPoint = 0
    if ((x < 248 && x > 154) && (y < 268 && y > 161)) {
        playerPoint = 15
    }
    else if (((x < 315 && x > 250) || (x > 85 && x < 150)) && ((y < 160 && y > 90) || (x > 260 &&  < 330))) {
        playerPoint = 10
    }
    else if ((x < 395 && x > 9) && (y < 450 && y > 9)) {
        playerPoint = 5
    }
    console.log(playerPoint)
}