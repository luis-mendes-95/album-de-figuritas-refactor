import game6 from "./game6.js";

//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - INICIO//
let container = document.querySelector(".container");
//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - FIM//

//FUNÇÃO QUE RENDERIZA O GAME #1 - INICIO//
const game5 = () => {

  //LIMPA OS ELEMENTOS DO JOGO ANTERIOR - INICIO//
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  //LIMPA OS ELEMENTOS DO JOGOA ANTERIOR - FIM//


  //RENDERIZA O LORENZO INICIAL - INICIO//
  const lorenzo_background = document.createElement("div")
  lorenzo_background.classList.add("lorenzo_background")
  const lorenzo_cola = document.createElement("img")
  lorenzo_cola.classList.add("lorenzo_cola")
  lorenzo_cola.src = "../assets/lorenzo/lorenzocola.png"
  container.append(lorenzo_cola, lorenzo_background)

  const button_continue = document.createElement("img")
  button_continue.classList.add("button_continue_game5")
  button_continue.src = "../assets/botoes/bt_continua.png"
  button_continue.addEventListener("click", (e) => {
    container.removeChild(lorenzo_cola)
    container.removeChild(e.target)
    container.removeChild(lorenzo_background)
  })
  container.appendChild(button_continue)
  //RENDERIZA O LORENZO INICIAL - FIM//


  //APENAS PARA PULAR PARA O JOGO 6//
  const botao_pula = document.createElement("button");
  botao_pula.style.position = "absolute";
  botao_pula.style.top = "0";
  botao_pula.style.left = "30%";
  botao_pula.innerText = "Jogo 6";
  botao_pula.style.zIndex = "38"
  botao_pula.addEventListener("click", () => {
    game6();
  });
  container.appendChild(botao_pula);
  //APENAS PARA PULAR PARA O JOGO 6//




  //RENDERIZA ELEMENTOS DO BACKGROUND - INICIO//
  const backgroundImage = "../assets/backgrounds/background_game1.png";
  container.style.backgroundImage = `url(${backgroundImage})`;
  const background_book = document.createElement("img");
  background_book.classList.add("background_book_game1");
  background_book.src = "../assets/backgrounds/album_animals_toys.png";
  container.appendChild(background_book);
  //RENDERIZA ELEMENTOS DO BACKGROUND - FIM//




  //BANCO DE DADOS DE ANIMAIS - INICIO//
  const animals = [
    "abelha",
    "águia",
    "aranha",
    "arara",
    "avestruz",
    "baleia",
    "barata",
    "besouro",
    "bode",
    "cachorro",
    "camelo",
    "cavalo",
    "cobra",
    "coelho",
    "coruja",
    "dinossauro",
    "dragão",
    "elefante",
    "esquilo",
    "foca",
    "formiga",
    "galinha",
    "galo",
    "gato",
    "girafa",
    "gorila",
    "hipopótamo",
    "jacaré",
    "jegue",
    "joaninha",
    "lagarto",
    "leão",
    "macaco",
    "mosquito",
    "onça",
    "ovelha",
    "papagaio",
    "pato",
    "pavão",
    "peixe",
    "polvo",
    "porco",
    "raposa",
    "rato",
    "sagui",
    "sapo",
    "tartaruga",
    "tatu",
    "tucano",
    "urso",
    "urubu",
    "vaca",
    "zebra",
  ];
  //BANCO DE DADOS DE ANIMAIS - FIM//





  //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER ANIMAIS ALEATÓRIOS - INICIO//
  let randomAnimals = [];
  //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER ANIMAIS ALEATÓRIOS - FIM//







  //CRIA UM BANCO DE DADOS VAZIO PARA AS IMAGENS DOS ANIMAIS - INICIO//
  let animalsImages = [];
  //CRIA UM BANCO DE DADOS VAZIO PARA AS IMAGENS DOS ANIMAIS - FIM//







  //FUNÇÃO QUE ESCOLHE ALEATORIAMENTE 12 ANIMAIS - INICIO//
  const chooseRandomAnimals = () => {
    while (randomAnimals.length < 12) {
      const randomIndex = Math.floor(Math.random() * animals.length);
      const randomAnimal = animals[randomIndex];

      if (!randomAnimals.includes(randomAnimal)) {
        randomAnimals.push(randomAnimal);
        animalsImages.push(`../animals/${randomAnimal}.svg`);
      }
    }
  };
  //FUNÇÃO QUE ESCOLHE ALEATORIAMENTE 12 ANIMAIS - FIM//




//********************************AQUI */



  //FUNÇÃO QUE RESETA O JOGO APENAS COM OS ANIMAIS INCORRETOS - INICIO//
  const resetGameWrongAnimals = () => {

    const divSlotAnimals = document.querySelector(".divSlotAnimals");

    divSlotAnimals.childNodes.forEach((slot) => {

      let inputAnimal = slot.querySelector(".inputAnimal")

      if(inputAnimal){
        console.log("neste input:" + inputAnimal.value)
        console.log("slot do " + slot.id.split("_slot")[0].toUpperCase()) 
        
        if (inputAnimal.value === slot.id.split("_slot")[0].toUpperCase()){
          console.log("correto")
        } else {
          console.log("incorreto")
          inputAnimal.value = ""
        }
      }

    });
  };
  //FUNÇÃO QUE RESETA O JOGO APENAS COM OS ANIMAIS INCORRETOS - FIM//







  //FUNÇÃO QUE VERIFICA SE OS ANIMAIS INSERIDOS ESTÃO CORRETOS - INICIO //
  const renderResult = (total_correct) => {

    const divAnimalsImages = document.querySelector(".divAnimalsImages");

    if (total_correct === 5) {
      const lorenzo_correct = document.createElement("img");
      lorenzo_correct.classList.add("lorenzo_correct");
      lorenzo_correct.src = "../assets/lorenzo/lorenzo_ok1.png";

      const continue_button = document.createElement("img");
      continue_button.classList.add("continue_button");
      continue_button.src = "../assets/botoes/bt_continua.png";

      const verifyButton = divAnimalsImages.querySelector(".verifyButton");
      if (verifyButton) {
        divAnimalsImages.removeChild(verifyButton);
      }

      continue_button.addEventListener("click", () => {
        game6();
      });

      divAnimalsImages.append(lorenzo_correct, continue_button);
    } else if (total_correct < 5) {
      const lorenzo_incorrect = document.createElement("img");
      lorenzo_incorrect.classList.add("lorenzo_incorrect");
      lorenzo_incorrect.src = "../assets/lorenzo/lorenzo_ops.png";

      const verifyButton = divAnimalsImages.querySelector(".verifyButton");
      if (verifyButton) {
        divAnimalsImages.removeChild(verifyButton);
      }

      divAnimalsImages.appendChild(lorenzo_incorrect);

      setTimeout(() => {
        divAnimalsImages.removeChild(lorenzo_incorrect);
        resetGameWrongAnimals();
      }, 4000);
    }
  };
  //FUNÇÃO QUE VERIFICA SE OS ANIMAIS INSERIDOS ESTÃO CORRETOS - INICIO //








  //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - INICIO //
  const renderVerifyButton = (total_inserted, total_correct) => {
    const existingButton = document.querySelector(".verifyButton");
    if (existingButton){
      let divAnimalsImages = document.querySelector(".divAnimalsImages")
      divAnimalsImages.removeChild(existingButton)
    }
    if (total_inserted === 5) {
      const verifyButton = document.createElement("img");
      verifyButton.classList.add("verifyButton");
      verifyButton.src = "../assets/botoes/bt_verifica.png";

      verifyButton.addEventListener("click", () => {
        renderResult(total_correct);
      });

      const divAnimalsImages = document.querySelector(".divAnimalsImages");
      divAnimalsImages.appendChild(verifyButton);
    } else if (total_inserted < 5) {
      const divAnimalsImages = document.querySelector(".divAnimalsImages");
      const verifyButton = divAnimalsImages.querySelector(".verifyButton");
      if (verifyButton) {
        divAnimalsImages.removeChild(verifyButton);
      }
    }
  };
  //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - FIM //






  //FUNÇÃO QUE VERIFICA SE OS ANIMAIS ENCAIXADOS ESTÃO CORRETOS - INICIO//
  const checkRightAnimalsSlots = (element) => {

    console.log("checando inserções")

    let total_inserted = 0;
    let total_correct = 0;

    element?.childNodes?.forEach((slot) => {

      const animal_slot_name = slot.id.split("_slot")[0];

      const input_animal = slot.querySelector(".inputAnimal")

      if(input_animal){
        if (input_animal.value !== ""){
          total_inserted += 1
        }
        if (input_animal.value === animal_slot_name.toUpperCase()){
          total_correct += 1
        }
      }

      //const animal_input_name = input_animal.value.toUpperCase()

      console.log("slot do " + animal_slot_name.toUpperCase())
  

    });

    console.log("Animais corretos: " + total_correct);
    console.log("Animais inseridos: " + total_inserted);

    renderVerifyButton(total_inserted, total_correct);
  };
  //FUNÇÃO QUE VERIFICA SE OS ANIMAIS ENCAIXADOS ESTÃO CORRETOS - FIM//






  

  //FUNÇÃO QUE EMBARALHA OS 12 ANIMAIS ALEATÓRIOS ESCOLHIDOS - APENAS PARA EMBARALHAR AS FIGURINHAS - INICIO//
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  //FUNÇÃO QUE EMBARALHA OS 12 ANIMAIS ALEATÓRIOS ESCOLHIDOS - APENAS PARA EMBARALHAR AS FIGURINHAS - FIM//

  //FUNÇÃO QUE CRIA OS CONTAINERS COM FIGURINHAS DE ANIMAIS ARRASTÁVEIS E SLOTS RECEBEDORES- INICIO//
  const placeAnimalInputs = () => {






    //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - INICIO//
    const divAnimalsImages = document.createElement("div");
    divAnimalsImages.classList.add("divAnimalsImages");
    divAnimalsImages.classList.add("containerDroppable");
    divAnimalsImages.id = "figurinhasIniciais"; //CADA "containerX" poderá receber uma figurinha. Apenas esse receberá várias.
    //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - FIM//







    












    //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - INICIO//
    const divSlotAnimals = document.createElement("div");
    divSlotAnimals.classList.add("divSlotAnimals");
    //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - FIM//










//LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - INICIO//
setTimeout(() => {
    for (let i = 0; i < randomAnimals.length; i++) {
        //SLOT PARA SOLTAR ANIMAIS - INÍCIO
        const divSlotAnimal = document.createElement("div");
        divSlotAnimal.classList.add("divSlotAnimal");
        divSlotAnimal.classList.add("containerDroppable");
        divSlotAnimal.id = `${randomAnimals[i]}_slot`;
        //SLOT PARA SOLTAR ANIMAIS - FIM

        

        //NÚMERO QUE FICA DENTRO DO SLOT CENTRALIZADO - INÍCIO
        const numberAnimal = document.createElement("h2");
        numberAnimal.classList.add("numberAnimal");
        numberAnimal.innerText = i + 1;
        //NÚMERO QUE FICA DENTRO DO SLOT CENTRALIZADO - FIM

        //TEXTO QUE FICA ABAIXO DO SLOT - INÍCIO
        let textAnimal
        if (i === 0 || i === 2 || i === 5 || i === 7 || i === 10) {
          textAnimal = document.createElement("input");
          textAnimal.type = "text"
          textAnimal.classList.add(`textAnimal`);
          textAnimal.id = randomAnimals[i]
          textAnimal.classList.add(`inputAnimal`);
          textAnimal.addEventListener("input", function() {
            this.value = this.value.toUpperCase();
            checkRightAnimalsSlots(divSlotAnimals)
          });
        } else {
          textAnimal = document.createElement("p");
          textAnimal.classList.add(`textAnimal`);
          textAnimal.innerText = `${randomAnimals[i].toUpperCase()}`;
        }
        //TEXTO QUE FICA ABAIXO DO SLOT - FIM

        //INSERÇÃO DO NÚMERO DO ANIMAL E DO TEXTO NO SLOT SOLTÁVEL DOS ANIMAIS - INICIO//
        divSlotAnimal.append(numberAnimal, textAnimal);
        //INSERÇÃO DO NÚMERO DO ANIMAL E DO TEXTO NO SLOT SOLTÁVEL DOS ANIMAIS - FIM//

        //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ANIMAIS - INICIO//
        divSlotAnimals.appendChild(divSlotAnimal);
        //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ANIMAIS - FIM//

        //DIV ARRASTÁVEL QUE CONTERÁ A FIGURINHA DO ANIMAL - INICIO//
        const divImgAnimal = document.createElement("div");
        divImgAnimal.classList.add("divImgAnimal");
        divImgAnimal.classList.add("divImgAnimalAfterDropped");
        divImgAnimal.classList.add("draggable");
        divImgAnimal.draggable = true;
        divImgAnimal.id = `${randomAnimals[i]}_figurinha`;
        //DIV ARRASTÁVEL QUE CONTERÁ A FIGURINHA DO ANIMAL - FIM//

        //FUNÇÃO QUE TORNA A FIGURINHA ARRASTÁVEL - INÍCIO//
        divImgAnimal.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", divImgAnimal.id);
        });
        //FUNÇÃO QUE TORNA A FIGURINHA ARRASTÁVEL - FIM//

        //BACKGROUND DA FIGURINHA DO ANIMAL - INICIO//
        const imgAnimal = document.createElement("img");
        imgAnimal.classList.add("imgAnimal");
        //imgAnimal.style.maxWidth = "80%";
        //imgAnimal.style.maxHeigth = "80%"
        imgAnimal.classList.add("imgAnimalAfterDropped");
        imgAnimal.src = "../assets/book_details/figanimals.svg";
        //BACKGROUND DA FIGURINHA DO ANIMAL - FIM//




        //IMAGEM DO ANIMAL QUE SERÁ INSERIDA NA FIGURINHA - INICIO//
        if (i === 0 || i === 2 || i === 5 || i === 7 || i === 10) {
          const imgPicAnimal = document.createElement("img");
          imgPicAnimal.classList.add("imgPicAnimal");
          imgPicAnimal.classList.add("imgPicAnimalGame5");
          imgPicAnimal.src = `../assets/animals/${randomAnimals[i]}.svg`;
          const imgRipped = document.createElement("img")
          imgRipped.classList.add("imgRipped")
          if (i === 0 || i === 7) {
            imgRipped.src = "../assets/book_details/ripped1.png"
          }
          if (i === 2 || i === 10) {
            imgRipped.src = "../assets/book_details/ripped2.png"
          }
          if (i === 5) {
            imgRipped.src = "../assets/book_details/ripped3.png"
          }
          
        //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - INICIO//
        divImgAnimal.append(imgAnimal, imgPicAnimal, imgRipped);
        //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - FIM//

        } else {
        const imgPicAnimal = document.createElement("img");
        imgPicAnimal.classList.add("imgPicAnimal");
        imgPicAnimal.classList.add("imgPicAnimalGame5");
        imgPicAnimal.src = `../assets/animals/${randomAnimals[i]}.svg`;

                //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - INICIO//
                divImgAnimal.append(imgAnimal, imgPicAnimal);
                //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - FIM//
        }
        //IMAGEM DO ANIMAL QUE SERÁ INSERIDA NA FIGURINHA - FIM//



        //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - INICIO//
        divSlotAnimal.appendChild(divImgAnimal);
        //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - FIM//

    }
}, 500);
//LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - FIM//




    //INSERÇÃO
    container.appendChild(divAnimalsImages);
    container.appendChild(divSlotAnimals);


        
  };
  //FUNÇÃO QUE CRIA OS CONTAINERES COM FIGURINHAS DE ANIMAIS ARRASTÁVEIS E SLOTS RECEBEDORES - FIM//


  chooseRandomAnimals();
  placeAnimalInputs();
};
//FUNÇÃO QUE RENDERIZA O GAME #1 - FIM//

//TORNA ACESSÍVEL PARA ARQUIVOS EXTERNOS
export default game5;
