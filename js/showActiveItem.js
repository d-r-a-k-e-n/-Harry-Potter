const itemList = document.querySelectorAll(".houses__item");

function showActiveItem() {
  itemList.forEach((item) => item.classList.remove("houses__btn--active"));
  this.classList.add("houses__btn--active");
}

itemList.forEach((item) => item.addEventListener("click", showActiveItem));
