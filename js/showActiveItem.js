const housesBtn = document.querySelectorAll(".houses__btn");

function showActiveItem() {
  housesBtn.forEach((item) => item.classList.remove("houses__btn--active"));
  housesBtn.forEach((item) => item.classList.remove("houses__btn--active"));
  this.classList.add("houses__btn--active");
}

housesBtn.forEach((item) => item.addEventListener("click", showActiveItem));
