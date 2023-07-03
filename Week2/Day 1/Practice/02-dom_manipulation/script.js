
function deleteElement(id){
    //console.log("Element to remove ID = ", id);
    //document.getElementById(id).remove();
    document.querySelector(`#${id}`).remove()
    console.log("Element Remove ")
}

function like (id){
    // console.log("like🖤", document.getElementById(id).innerText);
    var like = parseInt(document.getElementById(id).innerText);
    like++
    console.log("like🖤", like);
    document.getElementById(id).innerText = like;
}


function likeTwo(e){
    console.log(e);
    e.innerText++;
}


// function onImage(e){
//     console.log(e.src);
//     if(e.src == "http://127.0.0.1:5502/images/1.jpg"){
//         e.src ="./images/5.png"
//     }
//     else{
//         e.src="./images/1.jpg"
//     }

// }





function onMouseImage (id){
    document.getElementById(id).src ="./images/6.png"

}

function outMouseImage (id){
    document.getElementById(id).src ="./images/2.jpg"
}

function login(){
    stetTimeout(raiseAlert, 3000)
}

function raiseAlert(){
    alert("Please try to register")
}


function message() {
    console.log("Delayed message");    
}
    
console.log("START");
setTimeout(message, 5000);
console.log("End");                                                  