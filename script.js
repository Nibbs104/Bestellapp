function render() {
  let contentRefMealBox = document.getElementById("meal_box_content");
  contentRefMealBox.innerHTML = "";
  for (let index = 0; index < myDishes.length; index++) {
    contentRefMealBox.innerHTML += getMealBoxTemplate(index);
  }
}

// function updateBasket(index) {
//   let amountCounter = 0;
//   let contentRefAmountInBasket = document.getElementById("amount" + index);
//   console.log((contentRefAmountInBasket.innerText = 0));
// }

// function addToBasket() {
//   let contentRefMealInBasket = document.getElementById(
//     "meal_box_content_in_basket"
//   );
//   contentRefMealInBasket.innerHTML = "";
//   for (let index = 0; index < myDishes.length; index++) {
//     let buttonAddtoBasket = (document.getElementById("btn" + index).onclick =
//       function (event) {
//         if (event.target.tagName === "BUTTON") {
//           if (event.target.id == "btn" + index) {
//             updateBasket(index);
//           }
//           contentRefMealInBasket.innerHTML += getMealInBasketTemplate(index);
//         }
//       });
//   }
// }

function updateBasket(index) {
  // Erst prüfen, ob das Element existiert
  let contentRefAmountInBasket = document.getElementById("amount" + index);
  if (contentRefAmountInBasket) {
    let amountCounter = parseInt(contentRefAmountInBasket.innerText) || 0;
    amountCounter++; // Erhöhe den Zähler
    contentRefAmountInBasket.innerText = amountCounter;
  } else {
    console.log("Element amount" + index + " existiert noch nicht");
  }
}

function decreaseAmountInBasket(index) {
  // Erst prüfen, ob das Element existiert
  let contentRefAmountInBasket = document.getElementById("amount" + index);
  if (contentRefAmountInBasket) {
    let amountCounter = parseInt(contentRefAmountInBasket.innerText) || 0;
    amountCounter--; // Erhöhe den Zähler
    contentRefAmountInBasket.innerText = amountCounter;
  } else {
    console.log("Element amount" + index + " existiert noch nicht");
  }
}

function removeFromBasket() {}

function addToBasket() {
  let contentRefMealInBasket = document.getElementById(
    "meal_box_content_in_basket"
  );

  // Event-Listener für alle "btn"+index Elemente einrichten
  for (let index = 0; index < myDishes.length; index++) {
    let button = document.getElementById("btn" + index);

    if (button) {
      button.onclick = function () {
        // Prüfen, ob dieses Element bereits im Warenkorb ist
        let existingItem = document.getElementById("basket-item-" + index);

        if (!existingItem) {
          // Wenn nicht vorhanden, füge es dem Warenkorb hinzu

          contentRefMealInBasket.innerHTML += getMealInBasketTemplate(index);
        }

        // Nach dem Hinzufügen zum DOM kann updateBasket sicher aufgerufen werden
        updateBasket(index);
      };
    }
  }
}
