import game1 from "./game1.js"

let comecar = document.querySelector(".comecar");
let contentDiv = document.querySelector(".content");
let container = document.querySelector(".container");

comecar.addEventListener("click", () => {

  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }

  let lorenzo_img = document.createElement("img");
  lorenzo_img.classList.add("lorenzo_img");
  lorenzo_img.src = "../assets/lorenzo/lorenzo_start.jpg"

  let continuar = document.createElement("img");
  continuar.classList.add("continuar");
  continuar.src = "../assets/botoes/bt_continua.png"

  contentDiv.append(lorenzo_img, continuar)

  continuar.addEventListener("click", () => {

    contentDiv.remove(lorenzo_img, continuar)

    game1();
  })

});
