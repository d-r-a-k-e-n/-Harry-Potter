const url = window.location.href;
const fileName = url.match(/\/([^/]+)$/)[1];

let API = "";

if (fileName === "students.html") {
  API = "https://hp-api.onrender.com/api/characters/students";
} else if (fileName === "staff.html") {
  API = "https://hp-api.onrender.com/api/characters/staff";
} else if (fileName === "houses.html") {
  const buttons = document.querySelectorAll(".houses__btn");

  buttons.forEach((button) => {
    const id = button.id;

    button.addEventListener("click", () => {
      if (id === "gryffindor") {
        API = "https://hp-api.onrender.com/api/characters/house/gryffindor";
      } else if (id === "slytherin") {
        API = "https://hp-api.onrender.com/api/characters/house/slytherin";
      } else if (id === "ravenclaw") {
        API = "https://hp-api.onrender.com/api/characters/house/ravenclaw";
      } else if (id === "hufflepuff") {
        API = "https://hp-api.onrender.com/api/characters/house/hufflepuff";
      }
      // показано що апі міняється але за межами циклу залишається тим самим
      console.log(API);
    });
    // console.log(API);
  });
}

fetch(API)
  .then((response) => response.json())
  .then((json) => {
    const list = document.querySelector(".card__list");
    json.forEach((item) => {
      const id = item.id;
      const cardItem = document.createElement("li");
      cardItem.classList.add("card__item");

      cardItem.innerHTML = `
          <article class="card__content">
            <img class="card__img"
              src="${item.image === "" ? "../img/unknown.jpg" : item.image}"/>
            <h3 class="card__title">${item.name}</h3>
            <div class="card__text">
              <p>${item.alternate_names[0]}</p>
              <p>${item.house}</p>
              <p>${item.dateOfBirth}</p>
            </div>
            <button class="card__btn" onclick="toggleInfo('${id}')">
              More information<svg width="30" height="20">
                <use href="../img/sprite.svg#arrow"></use>
              </svg>
            </button>
          </article>
          <article id="${id}" class="card__info">
            <p>Name: <span class="card__info--yellow">${item.name}</span></p>
            <p>Alternate names: <span class="card__info--yellow">${item.alternate_names.slice(0,2)}</span></p>
            <p>Species: <span class="card__info--yellow">${item.species}</span></p>
            <p>Gender: <span class="card__info--yellow">${item.gender}</span></p>
            <p>House: <span class="card__info--yellow">${item.house}</span></p>
            <p>Date of birth: <span class="card__info--yellow">${item.dateOfBirth}</span></p>
            <p>Year of birth: <span class="card__info--yellow">${item.yearOfBirth}</span></p>
            <p>Wizard: <span class="card__info--yellow">${item.wizard}</span></p>
            <p>Ancestry: <span class="card__info--yellow">${item.ancestry}</span></p>
            <p>Eye colour: <span class="card__info--yellow">${item.eyeColour}</span></p>
            <p>Hair colour: <span class="card__info--yellow">${item.hairColour}</span></p>
            <p>Wand: <span class="card__info--yellow">${Object.entries(item.wand)
              .map(([key, value]) => `${key}: ${value}`)
              .join(", ")}}</span></p> 
            <p>Patronus: <span class="card__info--yellow">${item.patronus}</span></p>
            <p>Hogwarts student: <span class="card__info--yellow">${item.hogwartsStudent}</span></p>
            <p>Hogwarts staff: <span class="card__info--yellow">${item.hogwartsStaff}</span></p>
            <p>Actor: <span class="card__info--yellow">${item.actor}</span></p>
            <p>Alive: <span class="card__info--yellow">${item.alive}</span></p>
            </article>
      `;

      list.appendChild(cardItem);
    });
  });
