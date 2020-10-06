let boxes = document.querySelectorAll(".box");
let letters = document.querySelectorAll(".letters");
let i = 1;
let id = document.getElementById("1");
let targetContainer = document.getElementById('target');
let idLetter = 1;

// targetContainer.addEventListener('dragover', (ev) => {
//     ev.preventDefault();
//     let id  = ev.dataTransfer.getData("text");
//     console.log("happy");
// })

boxes.forEach(box => {
    i+= 1;
    box.addEventListener('dragover', (ev) => {
        ev.preventDefault();
        let id  = ev.dataTransfer.getData("text");
        console.log("happy");
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