console.log("page loaded...");
function deleteButton(e) {
    e.remove()
}

function decreaseNum(id) {
    var decreaseNum = parseInt(document.getElementById(id).innerText);
    decreaseNum--
    document.getElementById(id).innerText = decreaseNum;
}

function increaseNum(id) {
    var increaseNum = parseInt(document.getElementById(id).innerText)
    increaseNum++
    document.getElementById(id).innerText = increaseNum
}