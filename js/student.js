// fetch("https://hp-api.onrender.com/api/characters/students")
//   .then((response) => response.json())
//   .then((json) => {
//     const list = document.querySelector(".card__list");
//     json.forEach((item) => {
//       // creating element
//       const card = document.createElement("li");
//       const cardCard = document.createElement("article");
//       const cardImg = document.createElement("img");
//       const cardTitle = document.createElement("h3");
//       const cardText = document.createElement("div");
//       const cardTextElement = document.createElement("p");

//       // adding class
//       card.classList.add("card__item");
//       cardCard.classList.add("card__card");
//       cardImg.classList.add("card__img");
//       cardTitle.classList.add("card__title");
//       cardText.classList.add("card__text");

//       // updating content
//       cardTitle.innerText = item.name;
//       cardText.innerText = item.alternate_names;
//       cardImg.innerHTML = item.image;

//       //inserting item into the list
//       card.append(cardCard, cardImg, cardTitle, cardText);
//       list.appendChild(card);
//     });
//   });

function toggleInfo(id) {
  const infos = document.querySelectorAll(".card__info");
  infos.forEach(function (info) {
    if (info.id !== id) {
      info.style.transform = "translateY(100%)";
    }
  });
  const info = document.getElementById(id);
  info.style.transform =
    info.style.transform === "translateY(100%)" || info.style.transform === ""
      ? "translateY(0)"
      : "translateY(100%)";
}
