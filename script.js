let playerOne = document.querySelector('.playerOne')
let playerTwo = document.querySelector('.playerTwo')

let heading = document.querySelector('h1')
let audio1 = new Audio('audio1.mp3');
let audio2 = new Audio('audio2.mp3')
let audio3 = new Audio('bruh.mp3')

document.querySelector('.btn').addEventListener("click", ()=>{
    let randomNumberOne = Math.floor((Math.random() * 6) + 1);
    let randomNumberTwo = Math.floor((Math.random() * 6) + 1);

    playerOne.setAttribute("src", 'images/dice'+randomNumberOne+'.jpg')
    playerTwo.setAttribute("src", 'images/dice'+randomNumberTwo+'.jpg') 

    if (randomNumberOne > randomNumberTwo) {
        heading.innerHTML = "🚩Player One Win!"
        audio1.play()
    }else if (randomNumberTwo > randomNumberOne) {
        heading.innerHTML = "Player Two Win!🚩"
        audio2.play()
    }else{
        heading.innerHTML = "It's a Tie!😁"
        audio3.play()
    }

})
