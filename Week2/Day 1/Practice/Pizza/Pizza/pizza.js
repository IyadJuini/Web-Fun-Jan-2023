function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {
    crustType: crustType,
    sauceType: sauceType,
    cheeses: cheeses,
    toppings: toppings
  };
  return pizza;
}

// Pizza with "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

// pizza with "hand tossed" , "marinara" , ["mozzarella", "feta"] , and ["mushrooms", "olives", "onions"]
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

// two pizzas with custom toppings
var pizza3 = pizzaOven("thin", "garlic", ["parmesan"], ["spinach", "tomatoes", "onions"]);
var pizza4 = pizzaOven("stuffed", "alfredo", ["cheddar", "swiss"], ["chicken", "bacon", "pineapple"]);

//  random pizza 
function randomPizza() {
  var crustTypes = ["deep dish", "hand tossed", "thin", "stuffed"];
  var sauceTypes = ["traditional", "marinara", "garlic", "alfredo"];
  var cheeses = ["mozzarella", "cheddar", "feta", "parmesan"];
  var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "tomatoes", "chicken"];

  var randomCrustType = crustTypes[Math.floor(Math.random() * crustTypes.length)];
  var randomSauceType = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
  var randomCheese = cheeses[Math.floor(Math.random() * cheeses.length)];
  var randomToppings = [];
  var numberOfToppings = Math.floor(Math.random() * (toppings.length + 1));

  for (var i = 0; i < numberOfToppings; i++) {
    var randomTopping = toppings[Math.floor(Math.random() * toppings.length)];
    randomToppings.push(randomTopping);
  }

  return pizzaOven(randomCrustType, randomSauceType, [randomCheese], randomToppings);
}

// Creating a random pizza
var randomPizza1 = randomPizza();
console.log(randomPizza1);

// Creating another random pizza
var randomPizza2 = randomPizza();
console.log(randomPizza2);
