const body = document.querySelector("body");
const gallery = document.querySelector("#galeria");
const column = document.querySelector(".column");
const formSearch = document.querySelector(".form");
const inputSearch = document.querySelector(".searchImages");
const toggle = document.querySelector("#darkMode-toggle");
const btnMode = document.querySelector(".switch-mode");
const root = document.querySelector(":root");
const showImages = document.querySelector(".all-Images");
const boxMessage = document.querySelector(".messageBoxError");

const fullScreen = document.createElement("div");

async function fetchGalleryImgs(url) {
  try {
    const res = await fetch(url);
    if (res.status === 200) {
      console.log("tudo certo");
      return res.json();
    }
  } catch (error) {
    console.error("Deu ruim", error);
  } finally {
    console.log("Consumindo um arquivo json");
  }
}

async function loadImages(url) {
  const data = await fetchGalleryImgs(url);

  createBoxImgs(data);
  showFullScreen();
  searchByName(data);
}

loadImages("https://digimon-api.vercel.app/api/digimon/level/rookie");

//EVENTOS

fullScreen.addEventListener("click", closeFullScreen);

btnMode.addEventListener("click", switchDarkAndLightMode);

showImages.addEventListener("click", showAllFiguresCards);

inputSearch.addEventListener("keyup", cleanSearch);

//FUNÇÕES

function createBoxImgs(data) {
  data.forEach(({ name, img }) => {
    column.innerHTML += `
        <figure >
            <img src=${img} alt="${name} image">
            <figcaption class="caption">${name}</ficaption>
        </figure>
        `;
    gallery.appendChild(column);
  });
}

function showImagesInFullScreen(e) {
  const image = e.target;
  // console.log(image);

  fullScreen.classList.add("tela-cheia");

  fullScreen.innerHTML = `<img class="imagem-tela-cheia" src="${image.src}" alt="${image.alt}">`;

  document.body.appendChild(fullScreen);
}

function showFullScreen() {
  document
    .querySelectorAll(".column img")
    .forEach((img) => img.addEventListener("click", showImagesInFullScreen));
}

function closeFullScreen() {
  document.body.removeChild(fullScreen);
}

function showAllFiguresCards() {
  document
    .querySelectorAll(".column figure")
    .forEach((card) => card.classList.remove("ocultar"));
  boxMessageError({ msg: "", status: false });
}

function searchByName(data) {
  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputSearched = inputSearch.value.toLowerCase();
    let cards = document.querySelectorAll(".column figure");
    let tryCounter = 0;

    if (inputSearched !== "") {
      data.filter(({ name }, index) => {
        if (!name.toLowerCase().includes(inputSearched)) {
          cards[index].classList.add("ocultar");
          boxMessageError({ msg: "", status: false });
          tryCounter++;
          if (tryCounter === cards.length) {
            boxMessageError({ msg: "Image not found!", status: true });
          }
        } else {
          cards[index].classList.remove("ocultar");
        }
      });
    }
  });
}

function cleanSearch() {
  if (inputSearch.value !== "") return;
  showAllFiguresCards();
}

const boxMessageError = ({ msg, status }) => {
  boxMessage.textContent = msg;
  if (status === true) boxMessage.classList.add("inview");
  else boxMessage.classList.remove("inview");
};

//LocalStorage dark Mode
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "darkMode") {
  body.classList.add("darkMode");
  toggle.checked = true;
}

function switchDarkAndLightMode() {
  body.classList.toggle("darkMode");

  if (!body.classList.contains("darkMode")) {
    return localStorage.setItem("mode", "lightMode");
  }
  localStorage.setItem("mode", "darkMode");
}
