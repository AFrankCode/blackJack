let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive=true
let message= ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")

function startGame() {
    renderGame()
}


function renderGame() {

    if (sum <= 20) {
        message ="Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
}
function newCard() {
  console.log("Drawing a new card from the deck!")
  let card = 7
  sum += card
  cards.push(card)
  renderGame()

}


console.log (message)

//let myLearning = [
  //  "Can you believe its only been a few months",
   // "Here the code to what I've made so far",
   // "Take a look at my porfolio showing examples of javascript/html"

//]
//let mySelf = [
  //  "I am a complex being",
  //  29,
   // iLikePizza = true,
//]
//for (let i=10; count < 101; i += 10 ) {
   // console.log(i)
//}

// function Car(make, model, wheels) {
//     this.make=make;
//     this.model=model;
//     this.wheels=wheels;
// }

// let diablo = new Car('Lambo', 'Diablo', '4')
