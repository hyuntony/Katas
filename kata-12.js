const ingredientCheck = function (ingredient, bakery) {      // helper function to return true if the bakery has the ingredient
  for (let i = 0; i < bakery.length; i++) {
    if (ingredient == bakery[i]) {
      return true;
    }
  }
  return false;
}
const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for (let i = 0; i < recipes.length; i++) {             //looping through recipes
    for (let j = 0; j < 2; j++) {                        //looping through both ingredients
      if (ingredientCheck(recipes[i].ingredients[j], bakeryA) === true) {
        if (j === 0) {                                                  //if a match is found on the first recipe ingredient for bakeryA
          if (ingredientCheck(recipes[i].ingredients[1], bakeryB) === true) {
            return recipes[i].name;
          }
        } else {                                                         // if a match is found on the second recipe ingredient for bakeryA
          if (ingredientCheck(recipes[i].ingredients[0], bakeryB) === true) {
            return recipes[i].name;
          }
        }
      }
    }
  }
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));