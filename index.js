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

let player1ScoreDisplay = 0;
let player2ScoreDisplay = 0;
let currentplayedWordScore = 0;

let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');

let playedTiles = [];
let words = [];

let emptyTile = document.querySelectorAll(".letterFill");

let blankLetterDiv = document.getElementById('blankLetter');

let counterholder = document.getElementById('currentplayedcounter');


player2.disabled = true;

player1.addEventListener("click", () => {
    
    if(document.getElementById("boxId113").childElementCount !== 0){
        gettingLetters1();
        player2.disabled = false;
        player1.disabled = true;
        player1ScoreDisplay += currentplayedWordScore;
        boxes.forEach((box) => {
            if(box.childElementCount !== 0){
                box.firstChild.setAttribute("draggable", "false");
            }
        })
        score1.textContent = player1ScoreDisplay;
        storePlayedTiles(); 
        
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
    player2ScoreDisplay += currentplayedWordScore;
    boxes.forEach((box) => {
        if(box.childElementCount !== 0){
            box.firstChild.setAttribute("draggable", "false");
           
        }
    })
    storePlayedTiles();
    score2.textContent = player2ScoreDisplay;
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
        
        if(document.getElementById(id).childNodes[0].textContent === ""){
            blankLetterDiv.style.display = "grid";
            emptyTile.forEach((tile) => {
                tile.addEventListener('click', (event) => {
                    document.getElementById(id).childNodes[0].textContent = event.target.textContent;
                    blankLetterDiv.style.display = "none";
                    words = [];
                    currentplayedWordScore = 0;
                    counterholder.textContent = currentplayedWordScore;
                    playedWords = [];
                    playedwordsID = [];
                    playedwordsID2 = [];
                    word = {word: "", point: 0};
                    wordCheck = {word: "", point: 0};
                    let ids = evt.target.id;
                    let value = +evt.target.id.substring(5);
                    selectedpoint.push(value);
                    selectedpoint.sort(function(a, b){return a - b});
                    gettingwork(evt.target.id);
                    // console.log(selectedpoint);
                    document.getElementById(ids).addEventListener("dragleave", (ev) => {
                        let id = evt.target.id;
                        leaveFuntion(id);
                    })
                })
            })
        }
        else{
            words = [];
        currentplayedWordScore = 0;
        counterholder.textContent = currentplayedWordScore;
        playedWords = [];
        playedwordsID = [];
        playedwordsID2 = [];
        word = {word: "", point: 0};
        wordCheck = {word: "", point: 0};
        let ids = evt.target.id;
        let value = +evt.target.id.substring(5);
        selectedpoint.push(value);
        selectedpoint.sort(function(a, b){return a - b});
        gettingwork(evt.target.id);
        // console.log(selectedpoint);
        document.getElementById(ids).addEventListener("dragleave", (ev) => {
            let id = evt.target.id;
            leaveFuntion(id);
        })
        }  
    })

});

function leaveFuntion(id){
    let value = +id.substring(5);
    if(selectedpoint.includes(value)){
        let index = selectedpoint.indexOf(value);
        let splicedId = selectedpoint.splice(index, 1);
        console.log(selectedpoint);
        wordCheck = {word: "", point: 0};
        word = {word: "", point: 0};
        playedWords = [];
        playedwordsID = [];
        playedwordsID2 = [];
        let id = `boxId${selectedpoint[selectedpoint.length - 1]}`;
        console.log(id);
        gettingwork(id);
        console.log("happy");
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
    notification();
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
    notification();
}

gettingLetters2();

let word = '';
let rightBoardPath = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225];
let leftBoardPath = [16, 31, 46, 61, 76, 91, 106, 121, 136, 151, 166, 181, 196, 211];

let selectedpoint = [];

function gettingwork(id){
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

function tester3(value){
    let valuePlus = value + 1;
    let valueMinus = value - 1;
    if(playedTiles.includes(valuePlus) && !rightBoardPath.includes(value)){
        return playedTiles.includes(valuePlus);
    }
    else if(playedTiles.includes(valueMinus) && !leftBoardPath.includes(value)){
        return playedTiles.includes(valueMinus)
    }
    else{
        return playedTiles.includes(value);
    }
}

function tester4(value){
    let valuePlus = value + 15;
    let valueMinus = value - 15;
    if(playedTiles.includes(valuePlus)){
        return playedTiles.includes(valuePlus);
    }
    else if(playedTiles.includes(valueMinus)){
        return playedTiles.includes(valueMinus);
    }
    else {
        return playedTiles.includes(value);
    }
}


let playedwordsID = [];
function verticalPlay(id){
    let idHolder = +id.substring(5) - 15;
    id = `boxId${idHolder}`;
   
    if(idHolder < 1 || document.getElementById(id).childElementCount === 0){
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
    if(idHolder > 225 || document.getElementById(id).childElementCount === 0){
        let checkingvertical = selectedpoint.every(tester);
        let testers = playedwordsID.some(tester3);
        if(checkingvertical === true && (playedTiles.length === 0 || testers === true)){
            return gettingMainword();
            
        }
    }
    else{
        playedwordsID.push(idHolder);
        playedwordsID.sort(function(a, b){return a - b});
        return verticalPlayWord(id);
    }
}
let playedwordsID2 = [];
function horizontalPlay(id){
    let idHolder = +id.substring(5);
    if(leftBoardPath.includes(idHolder)){
        idHolder = idHolder - 1;
        id = `boxId${idHolder}`;
        return horizonWord2(id);
    }
    idHolder = idHolder - 1;
    id = `boxId${idHolder}`;
    if(idHolder < 1 || document.getElementById(id).childElementCount === 0){
        return horizonWord2(id);
    }
    else{
        horizontalPlay(id);
    }
}
let wordCheck = {word: "", point: 0};
function horizonWord2(id){
    let idHolder = +id.substring(5) + 1;
    id = `boxId${idHolder}`;
    if(idHolder > 225 || document.getElementById(id).childElementCount === 0){
       let checker2 = selectedpoint.every(tester2);
       let tester = playedwordsID2.some(tester4);
       if(checker2 === true && playedwordsID2.length > 1 && selectedpoint.length > 1 && (playedTiles.length === 0 || tester === true)){
           return horizontalMainWord();
       }
    }
    else if(rightBoardPath.includes(idHolder)){
        playedwordsID2.push(idHolder);
        let checker2 = selectedpoint.every(tester2);
        let tester = playedwordsID2.some(tester4);
        if(checker2 === true && playedwordsID2.length > 1 && selectedpoint.length > 1 && (playedTiles.length === 0 || tester === true)){
            return horizontalMainWord();
        }
    }
    else{
        playedwordsID2.push(idHolder);
        return horizonWord2(id);
    }
}

function gettingMainword(){
    let word = {word: "", point: 0};
    let multiplier = 1;
    playedwordsID.forEach((value) => {
        let id = `boxId${value}`;
        if(document.getElementById(id).className === "box DW" && selectedpoint.includes(value)){
            multiplier = 2;
        }
        if(document.getElementById(id).className === "box TW" && selectedpoint.includes(value)){
            multiplier = 3;
        }
        if(document.getElementById(id).className === "box DL" && selectedpoint.includes(value)){
            word.point = word.point + ((+document.getElementById(id).childNodes[0].childNodes[1].textContent) * 2);
        }
        else if(document.getElementById(id).className === "box TL" && selectedpoint.includes(value)){
            word.point = word.point + ((+document.getElementById(id).childNodes[0].childNodes[1].textContent) * 3);
        }
        else{
            word.point = word.point + (+document.getElementById(id).childNodes[0].childNodes[1].textContent);
        }
        word.word = word.word + document.getElementById(id).childNodes[0].childNodes[0].textContent;
    })
    if(word.word.length > 1){
        word.point = word.point * multiplier;
        playedWords.push(word);
        multiplier = 1;
    }

    selectedpoint.forEach((value) => {
        wordCheck = {word: "", point: 0};
        let id = `boxId${value}`;
        gettingHorizonalWordForVerticalPlay(id);
    })
    playedWords.forEach((value) => {
        currentplayedWordScore += value.point;
    })
    console.log(currentplayedWordScore);
    counterholder.textContent = currentplayedWordScore;
    return console.log(playedWords);
}

function gettingHorizonalWordForVerticalPlay(id){
    return horizonForVertical(id);
}

function horizonForVertical(id){
    let idHolder = +id.substring(5);
    if(leftBoardPath.includes(idHolder)){
        idHolder = idHolder - 1;
        id = `boxId${idHolder}`;
        return horizonWord(id);
    }
    idHolder = idHolder - 1;
    id = `boxId${idHolder}`;
    if(idHolder < 1 || document.getElementById(id).childElementCount === 0){
        return horizonWord(id);
    }
    else{
        horizonForVertical(id);
    }
}
let multiplier2 = 1;
function horizonWord(id){
    let idHolder = +id.substring(5) + 1;
    id = `boxId${idHolder}`;
    if(idHolder > 225 || document.getElementById(id).childElementCount === 0){
        if(wordCheck.word.length > 1){
            wordCheck.point = wordCheck.point * multiplier2;
            multiplier2 = 1;
            return playedWords.push(wordCheck);
        }
    }
    else if(rightBoardPath.includes(idHolder)){
        if(wordCheck.word.length > 1){

            if(document.getElementById(id).className === "box DW" && selectedpoint.includes(idHolder)){
                multiplier2 = 2;
            }
            if(document.getElementById(id).className === "box TW" && selectedpoint.includes(idHolder)){
                multiplier2 = 3;
            }
            if(document.getElementById(id).className === "box DL" && selectedpoint.includes(idHolder)){
                wordCheck.point = wordCheck.point + ((+document.getElementById(id).childNodes[0].childNodes[1].textContent) * 2);
            }
            else if(document.getElementById(id).className === "box TL" && selectedpoint.includes(idHolder)){
                wordCheck.point = wordCheck.point + ((+document.getElementById(id).childNodes[0].childNodes[1].textContent) * 3);
            }
            else{
                wordCheck.point = wordCheck.point + (+document.getElementById(id).childNodes[0].childNodes[1].textContent);
            }
            wordCheck.word = wordCheck.word + document.getElementById(id).childNodes[0].childNodes[0].textContent;
            wordCheck.point = wordCheck.point * multiplier2;
            multiplier2 = 1;
            return playedWords.push(wordCheck);
        }
    }
    else{
        if(document.getElementById(id).className === "box DW" && selectedpoint.includes(idHolder)){
            multiplier2 = 2;
        }
        if(document.getElementById(id).className === "box TW" && selectedpoint.includes(idHolder)){
            multiplier2 = 3;
        }
        if(document.getElementById(id).className === "box DL" && selectedpoint.includes(idHolder)){
            wordCheck.point = wordCheck.point + ((+document.getElementById(id).childNodes[0].childNodes[1].textContent) * 2);
        }
        else if(document.getElementById(id).className === "box TL" && selectedpoint.includes(idHolder)){
            wordCheck.point = wordCheck.point + ((+document.getElementById(id).childNodes[0].childNodes[1].textContent) * 3);
        }
        else{
            wordCheck.point = wordCheck.point + (+document.getElementById(id).childNodes[0].childNodes[1].textContent);
        }
        wordCheck.word = wordCheck.word + document.getElementById(id).childNodes[0].childNodes[0].textContent;
        return horizonWord(id);
    }
}

function horizontalMainWord(){
    let word = {word: "", point: 0};
    let multiplier4 = 1;
    console.log(playedwordsID2);
    playedwordsID2.forEach((value) => {
        let id = `boxId${value}`;
        if(document.getElementById(id).className === "box DW" && selectedpoint.includes(value)){
            multiplier4 = 2;
        }
        if(document.getElementById(id).className === "box TW" && selectedpoint.includes(value)){
            multiplier4 = 3;
        }
        if(document.getElementById(id).className === "box DL" && selectedpoint.includes(value)){
            word.point = word.point + ((+document.getElementById(id).childNodes[0].childNodes[1].textContent) * 2);
        }
        else if(document.getElementById(id).className === "box TL" && selectedpoint.includes(value)){
            word.point = word.point + ((+document.getElementById(id).childNodes[0].childNodes[1].textContent) * 3);
        }
        else{
            word.point = word.point + (+document.getElementById(id).childNodes[0].childNodes[1].textContent);
        }
        word.word = word.word + document.getElementById(id).childNodes[0].childNodes[0].textContent;
    })
    word.point = word.point * multiplier4;
    playedWords.push(word);
    multiplier4 = 1;
    selectedpoint.forEach((value) => {
        wordCheck = {word: "", point: 0};
        let id = `boxId${value}`;
        verticalwordforHorizontalPlay(id);
    })
    playedWords.forEach((value) => {
        currentplayedWordScore += value.point;
    })
    counterholder.textContent = currentplayedWordScore;
    console.log(playedWords);
}

function verticalwordforHorizontalPlay(id){
    let idHolder = +id.substring(5) - 15;
    id = `boxId${idHolder}`;
    if(idHolder < 1 || document.getElementById(id).childElementCount === 0){
        return verticalWordforHorizontal(id)
    }
    else{
        return verticalwordforHorizontalPlay(id);
    }
}

let multiplier3 = 1;
function verticalWordforHorizontal(id){
    let idHolder = +id.substring(5) + 15;
    id = `boxId${idHolder}`;
    if(idHolder > 225 || document.getElementById(id).childElementCount === 0){
        if(wordCheck.word.length > 1){
            wordCheck.point = wordCheck.point * multiplier3;
            playedWords.push(wordCheck);
            multiplier3 = 1;
        }
    }

    else{
        if(document.getElementById(id).className === "box DW" && selectedpoint.includes(idHolder)){
            multiplier3 = 2;
        }
        if(document.getElementById(id).className === "box TW" && selectedpoint.includes(idHolder)){
            multiplier3 = 3;
        }
        if(document.getElementById(id).className === "box DL" && selectedpoint.includes(idHolder)){
            wordCheck.point = wordCheck.point + ((+document.getElementById(id).childNodes[0].childNodes[1].textContent) * 2);
        }
        else if(document.getElementById(id).className === "box TL" && selectedpoint.includes(idHolder)){
            wordCheck.point = wordCheck.point + ((+document.getElementById(id).childNodes[0].childNodes[1].textContent) * 3);
        }
        else{
            wordCheck.point = wordCheck.point + (+document.getElementById(id).childNodes[0].childNodes[1].textContent);
        }
        wordCheck.word = wordCheck.word + document.getElementById(id).childNodes[0].childNodes[0].textContent;
        return verticalWordforHorizontal(id);
    }
}

function storePlayedTiles(){
    selectedpoint.forEach((value) => {
        playedTiles.push(value);
    })
    selectedpoint = [];
    currentplayedWordScore = 0;
    counterholder.textContent = currentplayedWordScore;
    return console.log(playedTiles);
}

function notification(){
    if(tiles.length < 5){
        alert(`There are only ${tiles.length} tiles remaining.`);
    }
}



