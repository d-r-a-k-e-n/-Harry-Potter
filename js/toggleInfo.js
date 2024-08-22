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

// Ця функція toggleInfo(id) змінює видимість елементів з класом .card__info на веб-сторінці.
// Спочатку вона отримує всі елементи з класом .card__info.
// Потім перебирає всі ці елементи і приховує ті, що не відповідають заданому id.
// Нарешті, вона отримує елемент з заданим id і перемикає його видимість.
// Коли ви викликаєте цю функцію з певним id, вона приховує всі інші елементи .card__info і
// перемикає видимість елемента з цим id.
