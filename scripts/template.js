function getMealBoxTemplate(indexDishes) {
  return `<div class="meal_box">
  <button id="btn${indexDishes}" onclick="moveDishes(${indexDishes}, 'myDishes', 'myDishesInBasket')">+</button>
                    <h4>${allDishes.myDishes[indexDishes].name}</h4>
                    <p>${allDishes.myDishes[indexDishes].description}</p>
                    <p class="price">${allDishes.myDishes[indexDishes].price} €</p></div>`;
}

function getMealInBasketTemplate(indexDishesInBasket) {
  return `<div class="meal_box_in_basket" id="basket-item-${indexDishesInBasket}">
                        <h5>${allDishes.myDishesInBasket[indexDishesInBasket].name}</h5>
                        <div><button onclick="decreaseAmountInBasket(${indexDishesInBasket})">-</button>
                            <p id="amount${indexDishesInBasket}"></p><button onclick="updateBasket(${indexDishesInBasket})">+</button>
                            <p>65€</p><button>x</button>
                        </div>
                    </div>`;
}
