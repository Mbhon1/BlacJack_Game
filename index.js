// THIS IS A BLACKJACK GAME

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let cards = []

let player = {
  name: "Gypsy",
  chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = `${player.name}: $ ${player.chips}`

const getRandomCard = () => {
  let randomCardNumber = Math.floor(Math.random() * 13) + 1
  
  if (randomCardNumber > 10){
    return 10
  } else if (randomCardNumber === 1){ // this conditional statement returns the value 10 and 11 
    return 11                         // which are a representation of Queen, King, and Jack in cards form
  } else {                            // and Ace which can represent any number between 1, 10 and 11
    return randomCardNumber
  }
}

const renderGame = () => {
  if (sum <= 20) {
    message = "Draw another card" 
} else if (sum === 21){
    message = "You've got BlackJack"
    hasBlackJack = true
 } else {
    message = "You're out of the game"
    isAlive = false
}
cardsEl.textContent = "Cards: " 

for (i = 0; i < cards.length;i++){
  cardsEl.textContent += cards[i] + " "
}

sumEl.textContent = `Sum: ${sum}`
messageEl.textContent = message
}

const newCard = () => {
  if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum = sum + card
    cards.push(card)
    renderGame()
  }
}

const startGame = () => {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}
