let nodeList = document.querySelectorAll(".btnAuswahl");
let rowNodeList = document.querySelectorAll(".row");

for (let i = 0; i < nodeList.length; i++) {
    let item = nodeList[i];
    item.addEventListener("click", function (e) {
        let value = item.textContent;
        let firstRow = document.querySelector(".row");
        for (let i = 0; i < value; i++) {
            let input = document.createElement("input");
            input.classList.add("flex-item"); // Add class instead of inline style
            input.maxLength = 1;
            firstRow.appendChild(input);
        }
        const btnRaten = document.createElement("button");
        btnRaten.textContent = "Raten";
        btnRaten.classList.add("flex-button"); // Add class for consistency
        firstRow.appendChild(btnRaten);
        let firstElement = document.querySelector(".flex-item");
        firstElement.focus();
    });
}

