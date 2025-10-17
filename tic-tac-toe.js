document.addEventListener('DOMContentLoaded', function(){

    const board = document.querySelector("#board");
    const squares = board.querySelectorAll("div");
    const status = document.querySelector("#status");
    let controls = document.querySelector(".controls");
    const newGame = controls.querySelector('.btn');

    squares.forEach(function(box, index){
        box.classList.add('square'); 

    })
})