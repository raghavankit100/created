let left = document.querySelector(".text-color").children;
let notes = left[0];
let color = left[1];
color.value = "#00ffa1";
let right = document.querySelector(".right-container");
let button = document.querySelector("button");
let para = document.querySelector("p");
let cards = document.querySelector(".cards");

button.addEventListener('click', () => {
    if (notes.value === '') {
        alert("Please add notes");
        return;
    }
    addnotes(notes.value, color.value);
    notes.value = '';
    para.style.display="none";
    removenote();
});

function addnotes(text, color1) {
    let div1 = document.createElement("div");
    div1.classList.add('card'); 
    div1.draggable="true";
    div1.innerHTML = `<p>${text}</p> <button class="button2">X</button>`;
    div1.style.backgroundColor = color1;
    cards.appendChild(div1); 

}

function removenote() {
    let button2 = document.querySelectorAll(".button2");
    button2.forEach((value) => {
        value.addEventListener('click', () => {
            value.parentElement.remove();
            checkNotes();
        });
    });
}

function checkNotes() {
    if (cards.children.length < 2) { // Only the initial 'p' tag is present
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}


