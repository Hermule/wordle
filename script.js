let nodeList = document.querySelectorAll(".btnAuswahl");
let rowNodeList = document.querySelectorAll(".row");

for (let i = 0; i < nodeList.length; i++) {
    let item = nodeList[i];
    item.addEventListener("click", function (e) {
        let value = item.textContent;
        for (let i = 0; i < rowNodeList.length; i++) {
            let row = rowNodeList[i];
            for (let i = 0; i < value; i++){
                let input = document.createElement("input");
                input.setAttribute("style", "flex: 1 1 auto");
                row.appendChild(input);
            }
            const btnRaten = document.createElement("button");
            btnRaten.setAttribute("style", "min-width: 100px");
            row.appendChild(btnRaten);
          }
    })
  };