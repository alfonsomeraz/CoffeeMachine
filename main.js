// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

// Initial State
let coffeeMachine = {
  dollars: 550,
  water: 400,
  milk: 540,
  beans: 120,
  cups: 9
}
// Types of coffee
let espresso = {
  water: 250,
  beans: 16,
  price: 4
}
let latte = {
  water: 350,
  milk: 75,
  beans: 20,
  price: 7
}
let cappuccino = {
  water: 200,
  milk: 100,
  beans: 12,
  price: 6
}
///////////
//
//  Coffee Machine Program
//  Functions of machine: Buy, Fill, Take
//
///////////

// Functions
// Print Coffee Machine State
let remaining = () => {
  console.log("The coffee machine has:");
  console.log(coffeeMachine.water + " ml of water");
  console.log(coffeeMachine.milk + " ml of milk");
  console.log(coffeeMachine.beans + " g of coffee beans");
  console.log(coffeeMachine.cups + " disposable cups");
  console.log("$" + coffeeMachine.dollars + " of money\n");
}

let coffeeMachineFunctions = () => {
  console.log("Write action (buy, fill, take, remaining, exit):");
  let userAction = input();
  if (userAction === "exit") {
    return false;
  } else {
    action(userAction);
  }
  return true;
}

// Process User Input
let action = (userInput) => {
  switch (userInput) {
    case "buy":
      buy();
      break;
    case "fill":
      fill();
      break;
    case "take":
      take();
      break;
    case "remaining":
      remaining();
      break;
  }
}

// Buy, Fill, Take
let buy = () => {
  console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
  let coffee = input();
  switch (coffee) {
    case "1":
      buyEspresso()
      break;
    case "2":
      buyLatte();
      break;
    case "3":
      buyCappuccino();
      break;
    case "back":
      break;
  }
}
let fill = () => {
  console.log("Write how many ml of water you want to add:");
  let addWater = Number(input());
  console.log("Write how many ml of milk you want to add:");
  let addMilk = Number(input());
  console.log("Write how many grams of coffee beans you want to add:");
  let addBeans = Number(input());
  console.log("Write how many disposable cups you want to add:");
  let addCups = Number(input());

  updateCoffeeMachine(addWater, addMilk, addBeans, addCups);
}

let take = () => {
  console.log("I gave you $" + coffeeMachine.dollars + "\n");
  coffeeMachine.dollars = 0;
}

// Helper Functions
let buyEspresso = () => {
  let check = checkEspressoSupply();
  if (check) {
    console.log("I have enough resources, making you a coffee!");
    coffeeMachine.water -= espresso.water;
    coffeeMachine.beans -= espresso.beans;
    coffeeMachine.cups -= 1;
    coffeeMachine.dollars += espresso.price;
  }
}
let buyLatte = () => {
  let check = checkLatteSupply();
  if (check) {
    console.log("I have enough resources, making you a coffee!");
    coffeeMachine.water -= latte.water;
    coffeeMachine.milk -= latte.milk
    coffeeMachine.beans -= latte.beans;
    coffeeMachine.cups -= 1;
    coffeeMachine.dollars += latte.price;
  }
}
let buyCappuccino = () => {
  let check = checkCappuccinoSupply();
  if (check) {
    console.log("I have enough resources, making you a coffee!");
    coffeeMachine.water -= cappuccino.water;
    coffeeMachine.milk -= cappuccino.milk;
    coffeeMachine.beans -= cappuccino.beans;
    coffeeMachine.cups -= 1;
    coffeeMachine.dollars += cappuccino.price;
  }
}

let updateCoffeeMachine = (water, milk, beans, cups) => {
  coffeeMachine.water += water;
  coffeeMachine.milk += milk;
  coffeeMachine.beans += beans;
  coffeeMachine.cups += cups;
}

let checkEspressoSupply = () => {
  let flag = true;
  if (coffeeMachine.water - espresso.water < 0) {
    console.log("Sorry, not enough water!");
    flag = false;
  } else if (coffeeMachine.beans - espresso.beans < 0) {
    console.log("Sorry, not enough beans!");
    flag = false;
  } else if (coffeeMachine.cups - espresso.cups < 0) {
    console.log("Sorry, not enough cups!");
    flag = false;
  }
  return flag;
}
let checkLatteSupply = () => {
  let flag = true;
  if (coffeeMachine.water - latte.water < 0) {
    console.log("Sorry, not enough water!");
    flag = false;
  } else if (coffeeMachine.milk - latte.milk < 0) {
    console.log("Sorry, not enough milk!");
    flag = false;
  } else if (coffeeMachine.beans - latte.beans < 0) {
    console.log("Sorry, not enough beans!");
    flag = false;
  } else if (coffeeMachine.cups - latte.cups < 0) {
    console.log("Sorry, not enough cups!");
    flag = false;
  }
  return flag;
}
let checkCappuccinoSupply = () => {
  let flag = true;
  if (coffeeMachine.water - cappuccino.water < 0) {
    console.log("Sorry, not enough water!");
    flag = false;
  } else if (coffeeMachine.milk - cappuccino.milk < 0) {
    console.log("Sorry, not enough milk!");
    flag = false;
  } else if (coffeeMachine.beans - cappuccino.beans < 0) {
    console.log("Sorry, not enough beans!");
    flag = false;
  } else if (coffeeMachine.cups - cappuccino.cups < 0) {
    console.log("Sorry, not enough cups!");
    flag = false;
  }
  return flag;
}


// Main Program
let check = true;
do {
  check = coffeeMachineFunctions();
} while (check);
