function getMealBoxTemplate(index) {
  return `<div class="meal_box">
  <button id="btn${index}" onclick="addToBasket(${index})">+</button>
                    <h4>${myDishes[index].name}</h4>
                    <p>${myDishes[index].description}</p>
                    <p class="price">${myDishes[index].price} €</p></div>`;
}

function getMealInBasketTemplate(index) {
  return `<div class="meal_box_in_basket" id="basket-item-${index}">
                        <h5>${myDishes[index].name}</h5>
                        <div><button onclick="decreaseAmountInBasket(${index})">-</button>
                            <p id="amount${index}"></p><button onclick="updateBasket(${index})">+</button>
                            <p>65€</p><button>x</button>
                        </div>
                    </div>`;
}
