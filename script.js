/* 
🌟 APP: Tip Calculator

=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML.

========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billDiv = document.getElementById("billTotalInput")
const tipDiv = document.getElementById("tipInput")
const peopleDiv = document.getElementById("numberOfPeople")
const personTotalDiv = document.getElementById("perPersonTotal")


// Get number of people from number of people div
let numberOfPeople = Number(peopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let bill = Number(billDiv.value)

  // get the tip from user & convert it into a percentage (divide by 100)
  let tip = Number(tipDiv.value) / 100

  // get the total tip amount
  tipAmount = bill * tip

  // calculate the total (tip amount + bill)
  total = bill + tipAmount

  // calculate the per person total (total divided by number of people)
  perPersonTotal = total / numberOfPeople

  // update the perPersonTotal on DOM & show it to user
  personTotalDiv.innerText = perPersonTotal
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1

  // update the DOM with the new number of people
  peopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (numberOfPeople <= 1) {
    return
  }

  // decrement the amount of people
  numberOfPeople -= 1

  // update the DOM with the new number of people
  peopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}