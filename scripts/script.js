console.log("Script loaded!");

function moveTheThing() {
    if (document.getElementById("leftBlock").innerHTML != "") {
        document.getElementById("rightBlock").innerHTML =
        document.getElementById("leftBlock").innerHTML;
        document.getElementById("leftBlock").innerHTML = "";
    } else {
        document.getElementById("leftBlock").innerHTML =
        document.getElementById("rightBlock").innerHTML;
        document.getElementById("rightBlock").innerHTML = "";
    }
}

function styleTheText() {
    let styles = `
    #fancyText {
        font-size: 100px;
        font-family: "Comic Sans MS", "Comic Sans", "Courier New", monospace;
        color: blue;
    }
`;

    let styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

function getFormValues() {
    document.getElementById("firstResult").innerHTML = document.getElementById("firstField").value;
    document.getElementById("secondResult").innerHTML = document.getElementById("secondField").value;
    document.getElementById("thirdResult").innerHTML = document.getElementById("thirdField").checked;
}

function countTheStuff() {
    document.getElementById("countOfP").innerHTML = document.documentElement.innerHTML.split("</p>").length
    document.getElementById("countOfH2").innerHTML = document.documentElement.innerHTML.split("</h2>").length
    document.getElementById("countOfTD").innerHTML = document.documentElement.innerHTML.split("</td>").length
}

let rowCount = 3

function addNewRow() {  
    document.getElementById("addRowsTable").insertRow(-1).innerHTML = "<td>" + ++rowCount +"</td>"
}

function yourBonusChallenge() {
    window.close();
}
