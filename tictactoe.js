var origBoard
const markers = ["X", "O"]
let playerTurn = 0
const players = ["Jimmy", "Jack"]
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



const cells = document.querySelectorAll('.cell')

startgame()

function startgame() {
    $("#endgamed").addClass("d-none")
    origBoard = Array.from(Array(9).keys())
    for (i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ''
        cells[i].style.backgroundColor = "white"
    }
}

function play(clickedBox) {
    let boxClicked = event.target.id
    if (cells[boxClicked].innerHTML == "<span>" + markers[0] + "</span>" || cells[boxClicked].innerHTML == "<span>" + markers[1] + "</span>") {
        alert("Pick another box")
    }
    else {
    cells[boxClicked].innerHTML = "<span>" + markers[playerTurn] + "</span>"
    if (playerTurn == 0) {
        cells[boxClicked].style.backgroundColor = "red"
    }
    else {
        cells[boxClicked].style.backgroundColor = "lightgreen"
    }
    toggle()
    }
}

function toggle() {
    if (playerTurn == 0) {
        playerTurn = 1
    }
    else {
        playerTurn = 0
    }
}

// function play(clickedBox) {
//     while (count < 9) {
//         let boxClicked = event.target.id
//         if (count == 0) {
//             cells[boxClicked - 1].innerHTML = "<span>" + markers[playerTurn] + "</span>"
//             count++
//             playerTurn++
//         }
//         else {
//             cells[boxClicked - 1].innerHTML = "<span>" + markers[playerTurn] + "</span>"
//             count--
//             playerTurn--
//         }
//     }
// }



    // function turn(squareId, player) {
    //     origBoard[squareId] = player
    //     document.getElementById(squareId).innerText = player
    //     let gameWon = checkWin(origBoard, player)
    //     if (gameWon) gameOver(gameWon)
    // }

    // function checkWin(board, player) {
    //     let plays = board.reduce
    // }

