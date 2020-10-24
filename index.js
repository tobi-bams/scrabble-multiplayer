let boxes = document.querySelectorAll(".box");
let letters1 = document.getElementsByClassName("letters1");
let letters2 = document.getElementsByClassName("letters2")
let i = 1;
let id = document.getElementById("1");
let targetContainer = document.getElementById('target');
let idLetter = 1;
let boxId = 1;

let racket1 = document.getElementById("racket1");
let racket2 = document.getElementById("racket2");

let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let player1ScoreCounter;
let player2ScoreCounter;

let player1ScoreArray = [];
let player2ScoreArray = [];

let player1ScoreDisplay = 0;
let player2ScoreDisplay = 0;

let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');

let playedTiles = [];
let words = [];

let emptyTile = document.querySelectorAll(".letterFill");

let blankLetterDiv = document.getElementById('blankLetter');


player2.disabled = true;

player1.addEventListener("click", () => {
    
    if(document.getElementById("boxId113").childElementCount !== 0){
        gettingLetters1();
        player2.disabled = false;
        player1.disabled = true;
        player1ScoreDisplay = 0;
        selectedpoint = [];
        boxes.forEach((box) => {
            if(box.childElementCount !== 0){
                box.firstChild.setAttribute("draggable", "false");
                if(box.childNodes[0].className === "letters1"){
                    let letterScore = +box.childNodes[0].childNodes[1].textContent;
                    if(box.className === "box DL"){
                       letterScore = letterScore * 2;
                        }
                    
                    player1ScoreDisplay += letterScore;
                    score1.textContent = player1ScoreDisplay;
                }
               
            }
        })
    }

    else {
        console.log("You must start playing your tiles from the center");
        alert('You must start playing your tiles from the center');
    }
  

})

player2.addEventListener("click", () => {
    gettingLetters2();
    player2.disabled = true;
    player1.disabled = false;
    //player2ScoreCounter = 0;
    player2ScoreDisplay = 0;
    boxes.forEach((box) => {
        if(box.childElementCount !== 0){
            box.firstChild.setAttribute("draggable", "false");
            if(box.childNodes[0].className === "letters2"){
                let letterScore = +box.childNodes[0].childNodes[1].textContent;
                player2ScoreDisplay += letterScore;
                score2.textContent = player2ScoreDisplay;
            }
           
        }
    })
})

racket1.addEventListener("dragover", (event) => {
    event.preventDefault();
})

racket1.addEventListener("drop", (event) => {
    event.preventDefault();
    let id = event.dataTransfer.getData("text");
    if(document.getElementById(id).className === "letters1"){
        event.target.appendChild(document.getElementById(id));
    }
})

racket2.addEventListener("dragover", (event) => {
    event.preventDefault();
});

racket2.addEventListener("drop", (event) => {
    event.preventDefault();
    let id = event.dataTransfer.getData("text");
    if(document.getElementById(id).className === "letters2"){
        event.target.appendChild(document.getElementById(id));
    }
});


boxes.forEach(box => {
    box.setAttribute("id", `boxId${boxId}`);
    boxId += 1;
    box.addEventListener('dragover', (ev) => {
        ev.preventDefault();
    });
    box.addEventListener('drop', (evt) => {
        evt.preventDefault();
        let id  = evt.dataTransfer.getData("text");
        evt.target.appendChild(document.getElementById(id));
        console.log(evt.target.id);
        
        // document.getElementById(id).setAttribute("draggable", "false");
        // console.log(+document.getElementById(id).childNodes[1].textContent);
        // if(document.getElementById(id).className === "letters1"){
        //     player1ScoreArray.push(+document.getElementById(id).childNodes[1].textContent);
        // }
        // if(document.getElementById(id).className === "letters2"){
        //     player2ScoreArray.push(+document.getElementById(id).childNodes[1].textContent);
        // }
        // if(box.className === "box DL"){
        //     document.getElementById(id).childNodes[1].textContent = +document.getElementById(id).childNodes[1].textContent * 2;
        // }
        if(document.getElementById(id).childNodes[0].textContent === ""){
            console.log("happy");
            blankLetterDiv.style.display = "grid";
            // fillEmptyTile();
            emptyTile.forEach((tile) => {
                tile.addEventListener('click', (event) => {
                    document.getElementById(id).childNodes[0].textContent = event.target.textContent;
                    blankLetterDiv.style.display = "none";
                })
            })
        }
        words = [];
        playedWords = [];
        playedwordsID = [];
        playedwordsID2 = [];
        word = '';
        word2 = '';
        wordCheck = '';
        let ids = evt.target.id;
        let value = +evt.target.id.substring(5);
        selectedpoint.push(value);
        selectedpoint.sort(function(a, b){return a - b});
        gettingwork(evt.target.id);
        console.log(selectedpoint);
        document.getElementById(ids).addEventListener("dragleave", (ev) => {
            let id = evt.target.id;
            leaveFuntion(id);
        })
    })

});

function leaveFuntion(id){
    let value = +id.substring(5);
    if(selectedpoint.includes(value) && playedwordsID.includes(value)){
        let index = selectedpoint.indexOf(value);
        selectedpoint.splice(index, 1);
        let index2 = playedwordsID.indexOf(value);
        playedwordsID.splice(index2, 1);
        let id = selectedpoint[selectedpoint.length - 1];
        console.log(id);
        // verticalPlay(id);
        // horizontalPlay(id);
        console.log("happy");
    }
    if(selectedpoint.includes(value) && playedwordsID2.includes(value)){
        let index = selectedpoint.indexOf(value);
        selectedpoint.splice(index, 1);
        let index2 = playedwordsID2.indexOf(value);
        playedwordsID2.splice(index2, 1);
        let id = selectedpoint[selectedpoint.length - 1];
        // verticalPlay(id);
        // horizontalPlay(id);
        console.log("happy2");
    }
   
}

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


function selecting1(){
    let check = tiles.splice(Math.floor(Math.random()*tiles.length), 1);
    let letterTile = document.createElement('div');
    letterTile.setAttribute("class", "letters1");
    let letter = document.createElement("p");
    let value = document.createElement('small');
    value.textContent = check[0].value;
    letter.textContent = check[0].letter;
    letterTile.appendChild(letter);
    letterTile.appendChild(value);
    letterTile.setAttribute("id", idLetter);
    idLetter += 1;
    letterTile.setAttribute("draggable", "true");
    letterTile.addEventListener('dragstart', (evt) => {
        evt.dataTransfer.setData("Text", evt.target.id);
    })
    racket1.appendChild(letterTile);
}

function selecting2(){
    let check = tiles.splice(Math.floor(Math.random()*tiles.length), 1);
    let letterTile = document.createElement('div');
    letterTile.setAttribute("class", "letters2");
    let letter = document.createElement("p");
    let value = document.createElement("small");
    letter.textContent = check[0].letter;
    value.textContent = check[0].value;
    letterTile.appendChild(letter);
    letterTile.appendChild(value);
    letterTile.setAttribute("id", idLetter);
    idLetter += 1;
    letterTile.setAttribute("draggable", "true");
    letterTile.addEventListener('dragstart', (evt) => {
        evt.dataTransfer.setData("Text", evt.target.id);
    })
    racket2.appendChild(letterTile);
}

function gettingLetters1(){
    if(racket1.childElementCount < 7){
        let moreLetter = 7 - racket1.childElementCount;
        for(let i = 0; i < moreLetter; i++){
            if(tiles.length !== 0){
                selecting1();
            }
        }
    }
}

gettingLetters1();


function gettingLetters2(){
    if(racket2.childElementCount < 7){
        let moreLetter = 7 - racket2.childElementCount;
        for(let i = 0; i < moreLetter; i++){
            if(tiles.length !== 0){
                selecting2();
            }
        }
    }
}

gettingLetters2();

let firstRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let lastRow = [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225];

function checker(id){
    let value = +id.substring(5);
    let checker1 = `boxId${value - 15}`;
    let checker2 = `boxId${value + 15}`;
    console.log(checker2);
    let checker3 = `boxId${value - 1}`;
    let checker4 = `boxId${value + 1}`;

    if( firstRow.includes(value)){
        if(value === 1){
            if(document.getElementById(checker2).childElementCount === 0 || document.getElementById(checker4).childElementCount === 0){
                return console.log('invalid');
            }
        }
        else {
            return firstBoardChecker(id)
        }
        }

    else if(lastRow.includes(value)){
        if(value === 225){
            if(document.getElementById(checker1).childElementCount === 0 || document.getElementById(checker3)){
                return console.log('invalid');
            }
        }
        else{
            return lastBoardChecker(id);
        }
                
            }

    if(document.getElementById(checker1).childElementCount === 0 && document.getElementById(checker2).childElementCount === 0 && document.getElementById(checker3).childElementCount === 0 && document.getElementById(checker4).childElementCount === 0){

        return console.log('Not Valid');
    }
    else {
        horizontal(id);
        vertical(id);
        
    }
}

function firstBoardChecker(id){
    let value = +id.substring(5);
    let checker2 = `boxId${value + 15}`;
    let checker3 = `boxId${value - 1}`;
    let checker4 = `boxId${value + 1}`;

    if(document.getElementById(checker2).childElementCount === 0 && document.getElementById(checker3).childElementCount === 0 && document.getElementById(checker4).childElementCount === 0){

        return console.log('Not Valid');
    }
    else {
        horizontal(id);
        vertical(id);
        
    }
}

function lastBoardChecker(id){
    let value = +id.substring(5);
    let checker2 = `boxId${value - 15}`;
    let checker3 = `boxId${value - 1}`;
    let checker4 = `boxId${value + 1}`;

    if(document.getElementById(checker2).childElementCount === 0 && document.getElementById(checker3).childElementCount === 0 && document.getElementById(checker4).childElementCount === 0){

        return console.log('Not Valid');
    }
    else {
        horizontal(id);
        vertical(id);
        
    }
}

function horizontal(id) {
    value = +id.substring(5) - 15;
    if(value < 1){
        id = `boxId${value}`;
        return gettingValue(id);
    }
    if(document.getElementById(id).childElementCount === 0){
        return gettingValue(id);
    }

    else{
        id = `boxId${value}`;

        return horizontal(id);
    }  
}
let valuesP
let word = '';
function gettingValue (id){
    valuesP = +id.substring(5) + 15;
    id = `boxId${valuesP}`;
    

    if( valuesP > 225 || document.getElementById(id).childElementCount === 0){
        return console.log(word);
    }
    else{
        word = word+document.getElementById(id).childNodes[0].childNodes[0].textContent;
        return gettingValue(id);
    }
}

let word2 = '';
function vertical (id){
    let value = +id.substring(5) - 1;
    if(value === 1){
        value = value - 1;
        id = `boxId${value}`;
        return verticalWord(id);
    }
    if(document.getElementById(id).childElementCount === 0){
        return verticalWord(id);
    }

    else{
        id = `boxId${value}`;
        return vertical(id);
    }
}

function verticalWord(id){
    let value = +id.substring(5) + 1;
    id = `boxId${value}`;
    if(value > 225 || document.getElementById(id).childElementCount === 0){
        return console.log(word2);
    }

    else{
        word2 = word2 + document.getElementById(id).childNodes[0].childNodes[0].textContent;
        return verticalWord(id);
    }
}

let selectedpoint = [];

function gettingwork(id){
   
//     let happy = selectedpoint.every(tester);
//     let happy2 = selectedpoint.every(tester2);
//    if(happy === true){
//         horizontalWordsforVertical();
//        return verticalPlay(id);
//    }
//    else if(happy2 === true){
//        return horizon(id);  
//    }

    verticalPlay(id);
    horizontalPlay(id);

}

let tobiI = 1;
function tester(value){
   return playedwordsID.includes(value);
}
let tobiI2 = 1;
function tester2(value){
   return playedwordsID2.includes(value);
}
let playedwordsID = [];
function verticalPlay(id){
    let idHolder = +id.substring(5) - 15;
    id = `boxId${idHolder}`;
    if(document.getElementById(id).childElementCount === 0){
        return verticalPlayWord(id);
    }
    else{
        return verticalPlay(id);
    }
}

let playedWords = [];

function verticalPlayWord(id){
    let idHolder = +id.substring(5) + 15;
    id = `boxId${idHolder}`;
    if(document.getElementById(id).childElementCount === 0){
        let checkingvertical = selectedpoint.every(tester);
        if(checkingvertical === true){
            return gettingMainword();
            
        }
        // playedWords.push(word2);
        // return console.log(playedWords);
    }
    else{
        playedwordsID.push(idHolder);
        playedwordsID.sort(function(a, b){return a - b});
        return verticalPlayWord(id);
    }
}
let playedwordsID2 = [];
function horizontalPlay(id){
    let idHolder = +id.substring(5) - 1;
    id = `boxId${idHolder}`;
    if(document.getElementById(id).childElementCount === 0){
        return horizonWord2(id);
    }
    else{
        horizontalPlay(id);
    }
}
let wordCheck = '';
function horizonWord2(id){
    let idHolder = +id.substring(5) + 1;
    id = `boxId${idHolder}`;
    if(document.getElementById(id).childElementCount === 0){
       let checker2 = selectedpoint.every(tester2);
       if(checker2 === true && playedwordsID2.length > 1 && selectedpoint.length > 1){
           return horizontalMainWord();
       }
    }
    else{
        playedwordsID2.push(idHolder);
        return horizonWord2(id);
    }
}

function verticalTobi(){
    selectedpoint.forEach((value) => {
        wordCheck = '';
        let id = `boxId${value}`;
        return verticalPlay(id);
    })
}

function gettingMainword(){
    let word = '';
    playedwordsID.forEach((value) => {
        let id = `boxId${value}`;
        word = word + document.getElementById(id).childNodes[0].childNodes[0].textContent;
    })
    if(word.length > 1){
        playedWords.push(word);
    }

    selectedpoint.forEach((value) => {
        wordCheck = '';
        let id = `boxId${value}`;
        gettingHorizonalWordForVerticalPlay(id);
    })
    return console.log(playedWords);
}

function gettingHorizonalWordForVerticalPlay(id){
    return horizonForVertical(id);
}

function horizonForVertical(id){
    let idHolder = +id.substring(5) - 1;
    id = `boxId${idHolder}`;
    if(document.getElementById(id).childElementCount === 0){
        return horizonWord(id);
    }
    else{
        horizonForVertical(id);
    }
}
function horizonWord(id){
    let idHolder = +id.substring(5) + 1;
    id = `boxId${idHolder}`;
    if(document.getElementById(id).childElementCount === 0){
        if(wordCheck.length === 1){
            wordCheck = '';
        }
        else{
            playedWords.push(wordCheck);
        }
    }
    else{
        wordCheck = wordCheck + document.getElementById(id).childNodes[0].childNodes[0].textContent;
        return horizonWord(id);
    }
}

function horizontalMainWord(){
    let word = '';
    playedwordsID2.forEach((value) => {
        let id = `boxId${value}`;
        word = word + document.getElementById(id).childNodes[0].childNodes[0].textContent;
    })
    playedWords.push(word);
    selectedpoint.forEach((value) => {
        wordCheck = '';
        let id = `boxId${value}`;
        verticalwordforHorizontalPlay(id);
    })
    console.log(playedWords);
}

function verticalwordforHorizontalPlay(id){
    let idHolder = +id.substring(5) - 15;
    id = `boxId${idHolder}`;
    if(document.getElementById(id).childElementCount === 0){
        return verticalWordforHorizontal(id)
    }
    else{
        return verticalwordforHorizontalPlay(id);
    }
}

function verticalWordforHorizontal(id){
    let idHolder = +id.substring(5) + 15;
    id = `boxId${idHolder}`;
    if(document.getElementById(id).childElementCount === 0){
        if(wordCheck.length > 1){
            playedWords.push(wordCheck);
        }
    }

    else{
        wordCheck = wordCheck + document.getElementById(id).childNodes[0].childNodes[0].textContent;
        return verticalWordforHorizontal(id);
    }
}



