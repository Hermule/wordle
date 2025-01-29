let nodeList = document.querySelectorAll(".btnAuswahl");
let rowNumber = 0;
let columns;
let targetWord = "Rooe";


for (let i = 0; i < nodeList.length; i++) {
    let item = nodeList[i];
    item.addEventListener("click", function (e) {
        columns = parseInt(item.textContent);
        let currentRow = getRow(rowNumber);
        for (let i = 0; i < columns; i++) {
            let input = document.createElement("input");
            input.classList.add("flex-item"); // Add class instead of inline style
            input.maxLength = 1;
            input.addEventListener("keydown", function(e){
                const regex = /[a-zA-Z]/;
                if (e.key.match(regex)) {
                    return;
                }
                e.preventDefault();
            });
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
    checkWord(word, targetWord, rowNumber);
    return true;
}

function getRow(rowIndex) {
    // Dynamically query the row list each time
    return document.querySelectorAll(".row")[rowIndex];
}

function checkWord(guessedWord, _targetWord, rowNumber){
    targetWord = _targetWord.toLowerCase();
    let characterCount = {};
    let alreadyChecked = {}; // if 1 = already checked
    for (let i = 0; i < targetWord.length; i++){
        if (targetWord[i] in characterCount){
            characterCount[targetWord[i]]++;
        }
        else{
            characterCount[targetWord[i]] = 1;
        }
        alreadyChecked[targetWord[i]] = 0;
    }
    let currentRow = getRow(rowNumber);

    //Check greens first
    for (let i = 0; i < columns; i++){
        if (currentRow.children[i].value == targetWord[i]){
            currentRow.children[i].classList.add("green");
            characterCount[targetWord[i]]--;
            alreadyChecked[targetWord[i]] = 1;
        }
    }
    for (let i = 0; i < columns; i++){
        if (alreadyChecked[i] == 1){
            continue;
        }
        for (let j = 0; j < columns; j++){
            let charGuess = currentRow.children[i].value;
            let charTarget = targetWord[j];
            if (charGuess == charTarget){
                if (characterCount[targetWord[j]] > 0){
                    currentRow.children[i].classList.add("yellow");
                    characterCount[targetWord[j]]--;
                }
            }
        }
    }
}
