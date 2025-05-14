function getMealBoxTemplate(index) {
  return `<div class="meal_box">
  <button onclick="addToBasket()">+</button>
                    <h4>${myDishes[index].name}</h4>
                    <p>${myDishes[index].description}</p>
                    <p class="price">${myDishes[index].price} €</p></div>`;
}
