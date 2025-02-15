var theDojo = [[1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0]];
var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    console.log({ i, j });
    var sum = 0;
    for (let x =-1; x <= 1; x++){
        for (let y=-1;y<=1;y++){ 
            if ( i+x >=0 && i+x <= theDojo.length-1 && j+y >=0 && j+y <= theDojo.length-1  ){
                sum += theDojo[i+x][j+y];
            }
        }
    }
    console.log({i, j});
    console.log(sum)
    // alert("TODO - determine how many ninjas are hiding in adjacent squares");
        //   alert("TODO - determine how many ninjas are hiding in adjacent squares");
        alert(`There are ${sum} ninjas hiding`);
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);

/////////////////////////////////////////////////////////

// always hungry

function alwaysHungry(arr) {
    var hasFood = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            hasFood = true;
        }
    }
    if (!hasFood) {
        console.log("I'm hungry");
        }
    }
    alwaysHungry([3.14, "food", "pie", true, "food"]);
    // this should console log "yummy", "yummy"
    alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"copy

