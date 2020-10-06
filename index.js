let boxes = document.querySelectorAll(".box");
let letters = document.querySelectorAll(".letters");
let i = 1;
let id = document.getElementById("1");
let targetContainer = document.getElementById('target');
let idLetter = 1;

let racket1 = document.getElementById("racket1");
let racket2 = document.getElementById("racket2");

racket1.addEventListener("dragover", (event) => {
    event.preventDefault();
})

racket1.addEventListener("drop", (event) => {
    event.preventDefault();
    let id = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(id));
})

racket2.addEventListener("dragover", (event) => {
    event.preventDefault();
});

racket2.addEventListener("drop", (event) => {
    event.preventDefault();
    let id = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(id));
});


boxes.forEach(box => {
    i+= 1;
    box.addEventListener('dragover', (ev) => {
        ev.preventDefault();
    });
    box.addEventListener('drop', (evt) => {
        evt.preventDefault();
        let id  = evt.dataTransfer.getData("text");
        evt.target.appendChild(document.getElementById(id));
    })
});


let tiles = [{letter: "A", value: 1}, {letter: "A", value: 1}, {letter: "A", value: 1}, {letter: "A", value: 1},
{letter: "A", value: 1}, {letter: "A", value: 1}, {letter: "A", value: 1}, {letter: "A", value: 1}, {letter: "A", value: 1},{letter: "B", value: 3},
{letter: "B", value: 3}, {letter: "C", value: 3}, {letter: "C", value: 3}, {letter: "D", value: 2}, {letter: "D", value: 2},
{letter: "D", value: 2}, {letter: "D", value: 2}, {letter: "E", value: 1}, {letter: "E", value: 1}, {letter: "E", value: 1},
{letter: "E", value: 1}, {letter: "E", value: 1}, {letter: "E", value: 1}, {letter: "E", value: 1}, {letter: "E", value: 1},
{letter: "E", value: 1}, {letter: "E", value: 1}, {letter: "E", value: 1}, {letter: "E", value: 1}, {letter: "F", value: 4},
{letter: "F", value: 4}, {letter: "G", value: 2}, {letter: "G", value: 2}, {letter: "G", value: 2}, {letter: "H", value: 4},
{letter: "H", value: 4}, {letter: "I", value: 1}, {letter: "I", value: 1}, {letter: "I", value: 1}, {letter: "I", value: 1},
{letter: "I", value: 1}, {letter: "I", value: 1}, {letter: "I", value: 1}, {letter: "I", value: 1}, {letter: "I", value: 1},
{letter: "J", value: 8}, {letter: "K", value: 5}, {letter: "L", value: 1}, {letter: "L", value: 1}, {letter: "L", value: 1},
{letter: "L", value: 1}, {letter: "M", value: 2}, {letter: "M", value: 2}, {letter: "N", value: 1}, {letter: "N", value: 1},
{letter: "N", value: 1}, {letter: "N", value: 1}, {letter: "N", value: 1}, {letter: "N", value: 1}, {letter: "O", value: 1},
{letter: "O", value: 1}, {letter: "O", value: 1}, {letter: "O", value: 1}, {letter: "O", value: 1}, {letter: "O", value: 1}, {letter: "O", value: 1},
{letter: "O", value: 1}, {letter: "P", value: 3}, {letter: "P", value: 3}, {letter: "Q", value: 10}, {letter: "R", value: 1},
{letter: "R", value: 1}, {letter: "R", value: 1}, {letter: "R", value: 1}, {letter: "R", value: 1}, {letter: "R", value: 1},
{letter: "S", value: 1}, {letter: "S", value: 1}, {letter: "S", value: 1}, {letter: "S", value: 1}, {letter: "T", value: 1}, 
{letter: "T", value: 1}, {letter: "T", value: 1}, {letter: "T", value: 1}, {letter: "T", value: 1}, {letter: "T", value: 1},
{letter: "U", value: 1}, {letter: "U", value: 1}, {letter: "U", value: 1}, {letter: "U", value: 1}, {letter: "V", value: 4},
{letter: "V", value: 4}, {letter: "W", value: 4}, {letter: "W", value: 4}, {letter: "X", value: 8}, {letter: "Y", value: 4},
{letter: "Y", value: 4}, {letter: "Z", value: 10}, {letter: "", value: 0}, {letter: "", value: 0} 
];


function selecting(){
    let check = tiles.splice(Math.floor(Math.random()*tiles.length), 1);
    let letterTile = document.createElement('div');
    letterTile.setAttribute("class", "letters");
    let letter = document.createElement("p");
    letter.textContent = check[0].letter;
    letterTile.appendChild(letter);
    letterTile.setAttribute("id", idLetter);
    idLetter += 1;
    letterTile.setAttribute("draggable", "true");
    letterTile.addEventListener('dragstart', (evt) => {
        evt.dataTransfer.setData("Text", evt.target.id);
    })
    racket1.appendChild(letterTile);
}

if(letters.length < 14){
    let moreLetter = 14 - letters.length;
    for(let i = 0; i < moreLetter; i++){
        selecting();
    }
}

letters.forEach((letter) => {
    letter.setAttribute("id", idLetter);
    idLetter += 1;
    letter.setAttribute("draggable", "true");
    letter.addEventListener('dragstart', (evt) => {
        evt.dataTransfer.setData("Text", evt.target.id);
    })
    
})

