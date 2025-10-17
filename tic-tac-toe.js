document.addEventListener('DOMContentLoaded', function(){

    let gameState = true; 
    let player = "X" 
    let choice = []; 

    const board = document.querySelector("#board");
    const squares = board.querySelectorAll("div");
    const status = document.querySelector("#status");
    let controls = document.querySelector(".controls");
    const newGame = controls.querySelector('.btn');
    status.innerHTML += ` Starting with ${player}`;


    function switch_player(){ 
        if (player == "X"){
            player = "O";
            status.innerHTML = `Player ${player}'s turn`;
        }
        else if(player == "O"){
                player = "X";
                status.innerHTML = `Player ${player}'s turn`;
        }
    }

    squares.forEach(function(box, index){
        box.classList.add('square'); 
    
        box.addEventListener("mouseover", () => {
            box.style.cursor = "pointer";
            box.classList.add("hover");
        })

        box.addEventListener("mouseout",()=>{ 
            box.classList.remove("hover");
        });

        box.addEventListener("click", function(e){ 

            if (gameState == true && box.innerHTML==""){

                if (player == "X"){
                    box.classList.add("X")
                }
                else{
                    box.classList.add("O");
                }

                box.innerHTML = player;
                
                choice[index] = player;

            switch_player()
            
            }
            
        })
        
        
    })
});