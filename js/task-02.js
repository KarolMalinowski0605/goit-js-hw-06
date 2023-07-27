const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

for(let i = 0; i < ingredients.length; i += 1){
 
  const newElementLi = document.createElement('li');
  

  newElementLi.textContent = ingredients[i];
  newElementLi.classList.add('item');
  listIngredients.append(newElementLi);

}

console.log(listIngredients);
