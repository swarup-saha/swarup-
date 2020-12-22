// console.log("Welcome to the Add notes ");
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let AddText = document.getElementById("AddText");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(AddText.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    AddText.value = "";
    // console.log(notesObj);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html +=
            `<div class="noteCard my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Notes ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button class="btn btn-primary" id="${index}" onclick="deletenote(this.id)">Delete Note</button>
                </div>
            </div> `  ;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerText = `Please add the note `;
    }
}


function deletenote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    // console.log(notesObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let SearchValue = document.getElementById('searchid');
SearchValue.addEventListener("input", function () {
    // console.log("hi click");
    let search = SearchValue.value.toLowerCase();
    // console.log(search);
    let noteCards = document.getElementsByClassName("noteCard");
    // console.log(noteCards);
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt);
        if (cardTxt.includes(search)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})
