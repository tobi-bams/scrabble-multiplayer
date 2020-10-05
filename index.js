let boxes = document.querySelectorAll(".box");
let i = 1;

boxes.forEach(box => {
    console.log(i);
    console.log(box.textContent);
    if(i === 106 || i === 120 || i === 225 || i === 211 || i === 218){
        
    }
    box.setAttribute("draggable", "true");
    i+= 1;
})