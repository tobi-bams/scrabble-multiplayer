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
})

racket2.addEventListener("drop", (event) => {
    event.preventDefault();
    let id = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(id));
})

// targetContainer.addEventListener('dragover', (ev) => {
//     ev.preventDefault();
//     let id  = ev.dataTransfer.getData("text");
//     console.log("happy");
// })

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
})

// id.addEventListener('dragstart', (e) => {
//     e.dataTransfer.setData("Text", e.target.id);
// })

letters.forEach((letter) => {
    letter.setAttribute("id", idLetter);
    idLetter += 1;
    letter.setAttribute("draggable", "true");
    letter.addEventListener('dragstart', (evt) => {
        evt.dataTransfer.setData("Text", evt.target.id);
    })
    
})