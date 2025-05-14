function render() {
  let contentRefMealBox = document.getElementById("meal_box_content");
  contentRefMealBox.innerHTML = "";
  for (let index = 0; index < myDishes.length; index++) {
    contentRefMealBox.innerHTML += getMealBoxTemplate(index);
  }
}
