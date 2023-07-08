// --------- always hungry ----------------

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
    alwaysHungry([4, 1, 5, 7, 2]);


// --------High Pass Filter--------//



// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     // your code here
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > cutoff) {
//         filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// // -------Better than average------//
// function betterThanAverage(arr) {
//     var sum = 0;
//     // calculate the average
//     for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     average = sum / arr.length;
//     }

//     var count = 0
//     // count how many values are greater than the average
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > average) {
//         count++;
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); 

// // -------Array Reverse------//


// function reverse(arr) {
//     // your code here
//     arr.reverse();
//     return arr;
// }

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]



// //----------Fibonacci---------//


// function fibonacciArray(n) {
//     // the [0, 1] are the starting values of the array to calculate the rest from
//     var fibArr = [0, 1];
//     // your code here
    
//     return fibArr;
// }

// var result = fibonacciArray(10);
// console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]