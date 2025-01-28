let nodeList = document.querySelectorAll(".btnAuswahl");
let rowNumber = 0;
let columns;


for (let i = 0; i < nodeList.length; i++) {
    let item = nodeList[i];
    item.addEventListener("click", function (e) {
        columns = parseInt(item.textContent);
        let currentRow = getRow(rowNumber);
        for (let i = 0; i < columns; i++) {
            let input = document.createElement("input");
            input.classList.add("flex-item"); // Add class instead of inline style
            input.maxLength = 1;
            currentRow.appendChild(input);
        }
        const btnRaten = document.createElement("button");
        btnRaten.textContent = "Raten";
        btnRaten.classList.add("flex-button"); // Add class for consistency
        btnRaten.addEventListener("click", addNextRow)
        currentRow.appendChild(btnRaten);
        let firstElement = document.querySelector(".flex-item");
        firstElement.focus();
    });
}


function addNextRow(){
    if (getWord(getRow(rowNumber)) !== false){
        rowNumber++;
        let currentRow = getRow(rowNumber);
        if (rowNumber != 5){
            for (let i = 0; i < columns; i++) {
                let input = document.createElement("input");
                input.classList.add("flex-item"); // Add class instead of inline style
                input.maxLength = 1;
                currentRow.appendChild(input);
            }
            const btnRaten = document.createElement("button");
            btnRaten.textContent = "Raten";
            btnRaten.classList.add("flex-button"); // Add class for consistency
            btnRaten.addEventListener("click", addNextRow);
            currentRow.appendChild(btnRaten);
            let firstElement = document.querySelector(".flex-item");
            firstElement.focus();
        }
    };
    
}

function getWord(currentRow){
    let word = "";
    console.log(currentRow);
    console.log(currentRow.children);
    let children = currentRow.children;
    for (const element of children) {
        if (element.tagName === "INPUT") {
            word += element.value.toLowerCase(); // Use .value for input elements
            if (element.value == ""){
                return false;
            }
        }
    }
    alert(word);
    return true;
}

function getRow(rowIndex) {
    // Dynamically query the row list each time
    return document.querySelectorAll(".row")[rowIndex];
}
