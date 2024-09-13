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
      // creating variables
      const id = item.id;

      // creating element
      const cardItem = document.createElement("li");
      const cardContent = document.createElement("article");
      const cardImg = document.createElement("img");
      const cardTitle = document.createElement("h3");
      const cardText = document.createElement("div");
      const cardTextAlternateNames = document.createElement("p");
      const cardTextHouse = document.createElement("p");
      const cardTextDateOfBirth = document.createElement("p");
      const cardBtn = document.createElement("button");
      const cardInfo = document.createElement("article");
      const cardInfoName = document.createElement("p");
      const cardInfoAlternateNames = document.createElement("p");
      const cardInfoSpecies = document.createElement("p");
      const cardInfoGender = document.createElement("p");
      const cardInfoHouse = document.createElement("p");
      const cardInfoDateOfBirth = document.createElement("p");
      const cardInfoYearOfBirth = document.createElement("p");
      const cardInfoWizard = document.createElement("p");
      const cardInfoAncestry = document.createElement("p");
      const cardInfoEyeColour = document.createElement("p");
      const cardInfoHairColour = document.createElement("p");
      const cardInfoWand = document.createElement("p");
      const cardInfoPatronus = document.createElement("p");
      const cardInfoHogwartsStudent = document.createElement("p");
      const cardInfoHogwartsStaff = document.createElement("p");
      const cardInfoActor = document.createElement("p");
      const cardInfoAlive = document.createElement("p");

      // adding class
      cardItem.classList.add("card__item");
      cardContent.classList.add("card__content");
      cardImg.classList.add("card__img");
      cardTitle.classList.add("card__title");
      cardText.classList.add("card__text");
      cardBtn.classList.add("card__btn");
      cardInfo.id = `${id}`;
      cardInfo.classList.add("card__info");

      // updating content
      if (item.image === "") {
        cardImg.src = "../img/unknown.jpg";
      } else {
        cardImg.src = item.image;
      }
      cardTitle.innerText = item.name;
      cardTextAlternateNames.innerText = item.alternate_names[0];
      cardTextHouse.innerText = item.house;
      cardTextDateOfBirth.innerText = item.dateOfBirth;
      cardBtn.setAttribute("onclick", `toggleInfo('${id}')`);
      cardInfoName.innerText = "Name: " + item.name;
      cardInfoAlternateNames.innerText =
        "Alternate names: " + item.alternate_names.slice(0, 2);
      cardInfoSpecies.innerText = "Species: " + item.species;
      cardInfoGender.innerText = "Gender: " + item.gender;
      cardInfoHouse.innerText = "House: " + item.house;
      cardInfoDateOfBirth.innerText = "Date of birth: " + item.dateOfBirth;
      cardInfoYearOfBirth.innerText = "Year of birth: " + item.yearOfBirth;
      cardInfoWizard.innerText = "Wizard: " + item.wizard;
      cardInfoAncestry.innerText = "Ancestry: " + item.ancestry;
      cardInfoEyeColour.innerText = "Eye colour: " + item.eyeColour;
      cardInfoHairColour.innerText = "Hair colour: " + item.hairColour;
      let wandDetails = "Wand: ";
      for (let key in item.wand) {
        wandDetails += `${key}: ${item.wand[key]}, `;
      }
      cardInfoWand.innerText = wandDetails.slice(0, -2);
      // Цей код перебирає всі властивості об’єкта item.wand за допомогою циклу for...in.
      // Для кожної властивості він додає її назву та значення до рядка wandDetails, розділяючи їх комами.
      // Після завершення циклу, метод slice(0, -2) видаляє останню кому і пробіл з рядка, щоб він виглядав акуратно.
      // Нарешті, оновлений рядок встановлюється як текстовий вміст для елемента cardInfoWand.

      cardInfoPatronus.innerText = "Patronus: " + item.patronus;
      cardInfoHogwartsStudent.innerText =
        "Hogwarts student: " + item.hogwartsStudent;
      cardInfoHogwartsStaff.innerText = "Hogwarts staff: " + item.hogwartsStaff;
      cardInfoActor.innerText = "Actor: " + item.actor;
      cardInfoAlive.innerText = "Alive: " + item.alive;

      // svg creation
      const svg = document.createElement("svg");
      svg.setAttribute("width", "30");
      svg.setAttribute("height", "20");
      const use = document.createElement("use");
      use.setAttribute("href", "../img/sprite.svg#arrow");
      svg.appendChild(use);
      cardBtn.append("More information", svg);

      // inserting item into the list
      cardText.append(
        cardTextAlternateNames,
        cardTextHouse,
        cardTextDateOfBirth
      );
      cardContent.append(cardImg, cardTitle, cardText, cardBtn);
      cardInfo.append(
        cardInfoName,
        cardInfoAlternateNames,
        cardInfoSpecies,
        cardInfoGender,
        cardInfoHouse,
        cardInfoDateOfBirth,
        cardInfoYearOfBirth,
        cardInfoWizard,
        cardInfoAncestry,
        cardInfoEyeColour,
        cardInfoHairColour,
        cardInfoWand,
        cardInfoPatronus,
        cardInfoHogwartsStudent,
        cardInfoHogwartsStaff,
        cardInfoActor,
        cardInfoAlive
      );
      cardItem.append(cardContent, cardInfo);
      list.appendChild(cardItem);
    });
  });
