//import game11 from "./game11.js";

import game11 from "./game11.js";


//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - INICIO//
let container = document.querySelector(".container");
//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - FIM//

//FUNÇÃO QUE RENDERIZA O GAME #6 - INICIO//
const game10 = () => {

  //LIMPA OS ELEMENTOS DO JOGO ANTERIOR - INICIO//
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  //LIMPA OS ELEMENTOS DO JOGOA ANTERIOR - FIM//

  //APENAS PARA PULAR PARA O JOGO 11//
  //const botao_pula = document.createElement("button");
  //botao_pula.style.position = "absolute";
  //botao_pula.style.top = "0";
  //botao_pula.style.left = "30%";
  //botao_pula.innerText = "Jogo 11";
  //botao_pula.style.zIndex = "38"
  //botao_pula.addEventListener("click", () => {
  //  game11();
  //});
  //container.appendChild(botao_pula);
  //APENAS PARA PULAR PARA O JOGO 11//

    //RENDERIZA O LORENZO INICIAL - INICIO//
    const lorenzo_duvidas = document.createElement("img")
    lorenzo_duvidas.classList.add("lorenzo_duvidas")
    lorenzo_duvidas.src = "../assets/lorenzo/lorenzo_duvidas.png"

    container.append(lorenzo_duvidas)

    //RENDERIZA O BACKGROUND DE INPUTS - INICIO//
    const game10_background_inputs = document.createElement("div");
    game10_background_inputs.classList.add("game10_background_inputs");
    container.appendChild(game10_background_inputs);  
    //RENDERIZA O BACKGROUND DE INPUTS - FIM//

    const div_question_1_game_10 = document.createElement("div")
    div_question_1_game_10.classList.add("div_question_1_game_10")
    const p_question_1 = document.createElement("p");
    p_question_1.classList.add("p_question_1");
    p_question_1.innerText = "1 - ¿Cuántas figuritas quedan para completar esta página?"
    const input_question_1 = document.createElement("input");
    input_question_1.classList.add("input_question_1");
    div_question_1_game_10.append(p_question_1, input_question_1);
    game10_background_inputs.appendChild(div_question_1_game_10); 

    input_question_1.addEventListener("input", function() {
      this.value = this.value.toUpperCase();
      checkRightAnswers()
    });


    const div_question_2_game_10 = document.createElement("div")
    div_question_2_game_10.classList.add("div_question_2_game_10")
    const p_question_2 = document.createElement("p");
    p_question_2.classList.add("p_question_2");
    p_question_2.innerText = "2 - ¿Cuántas figuritas ya se han pegado en la página?"
    const input_question_2 = document.createElement("input");
    input_question_2.classList.add("input_question_2");
    div_question_2_game_10.append(p_question_2, input_question_2);
    game10_background_inputs.appendChild(div_question_2_game_10); 

    input_question_2.addEventListener("input", function() {
      this.value = this.value.toUpperCase();
      checkRightAnswers()
    });

    const div_question_3_game_10 = document.createElement("div")
    div_question_3_game_10.classList.add("div_question_3_game_10")
    const p_question_3 = document.createElement("p");
    p_question_3.classList.add("p_question_3");
    p_question_3.innerText = "3 - ¿Cuántas figuritas tiene la página en total?"
    const input_question_3 = document.createElement("input");
    input_question_3.classList.add("input_question_3");
    div_question_3_game_10.append(p_question_3, input_question_3);
    game10_background_inputs.appendChild(div_question_3_game_10); 

    input_question_3.addEventListener("input", function() {
      this.value = this.value.toUpperCase();
      checkRightAnswers()
    });


    //RENDERIZA O LORENZO INICIAL - FIM//




  //RENDERIZA ELEMENTOS DO BACKGROUND - INICIO//
  const backgroundImage = "../assets/backgrounds/background_game1.png";
  container.style.backgroundImage = `url(${backgroundImage})`;
  const background_book = document.createElement("img");
  background_book.classList.add("background_book_game7");
  background_book.src = "../assets/backgrounds/album_transports.png";
  container.appendChild(background_book);
  //RENDERIZA ELEMENTOS DO BACKGROUND - FIM//





  //BANCO DE DADOS DE ANIMAIS - INICIO//
  const animals = [
    "avión",
    "bicicleta",
    "camión",
    "canoa",
    "coche",
    "carreta",
    "cohete",
    "helicóptero",
    "metro",
    "motocicleta",
    "barco",
    "autobús",
    "tren",
    "velero"
  ];

  //BANCO DE DADOS DE ANIMAIS - FIM//







  //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER BRINQUEDOS ALEATÓRIOS - INICIO//
  let randomtoys = [];
  //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER BRINQUEDOS ALEATÓRIOS - FIM//







  //CRIA UM BANCO DE DADOS VAZIO PARA AS IMAGENS DOS BRINQUEDOS - INICIO//
  let toysImages = [];
  //CRIA UM BANCO DE DADOS VAZIO PARA AS IMAGENS DOS BRINQUEDOS - FIM//







  //FUNÇÃO QUE ESCOLHE ALEATORIAMENTE 12 BRINQUEDOS - INICIO//
  const chooseRandomtoys = () => {
    while (randomtoys.length < 12) {
      const randomIndex = Math.floor(Math.random() * animals.length);
      const randomToy = animals[randomIndex];

      if (!randomtoys.includes(randomToy)) {
        randomtoys.push(randomToy);
        toysImages.push(`../animals/${randomToy}.svg`);
      }
    }
  };
  //FUNÇÃO QUE ESCOLHE ALEATORIAMENTE 12 BRINQUEDOS - FIM//




//********************************AQUI */



  //FUNÇÃO QUE RESETA O JOGO APENAS COM OS ANIMAIS INCORRETOS - INICIO//
  const resetGameWrongtoys = () => {

    const divSlotTransportsGame7 = document.querySelector(".divSlotTransportsGame7");

    divSlotTransportsGame7.childNodes.forEach((slot) => {

      let inputToy = slot.querySelector(".inputToy")

      if(inputToy){
        
        if (inputToy.value === slot.id.split("_slot")[0].toUpperCase()){

        } else {

          inputToy.value = ""
        }
      }

    });
  };
  //FUNÇÃO QUE RESETA O JOGO APENAS COM OS ANIMAIS INCORRETOS - FIM//







  //FUNÇÃO QUE VERIFICA SE OS BRINQUEDOS INSERIDOS ESTÃO CORRETOS - INICIO //
  const renderResult = (input1, input2, input3) => {

    if (input1 === "5" && input2 === "4" && input3 === "9") {
      const lorenzo_correct_game7 = document.createElement("img");
      lorenzo_correct_game7.classList.add("lorenzo_correct_game7");
      lorenzo_correct_game7.src = "../assets/lorenzo/lorenzo_ok1.png";

      const continue_button = document.createElement("img");
      continue_button.classList.add("button_continue_game7");
      continue_button.src = "../assets/botoes/bt_continua.png";

      const verifyButtonGame10 = document.querySelector(".verifyButtonGame10");
      if (verifyButtonGame10) {
        verifyButtonGame10.parentNode.removeChild(verifyButtonGame10);
      }

      const lorenzo_duvidas = document.querySelector(".lorenzo_duvidas");
      if (lorenzo_duvidas) {
        lorenzo_duvidas.parentNode.removeChild(lorenzo_duvidas)
      }

      const game10_background_inputs = document.querySelector(".game10_background_inputs");
      if (game10_background_inputs) {
        game10_background_inputs.parentNode.removeChild(game10_background_inputs)
      }

      continue_button.addEventListener("click", () => {
        game11();
      });

      container.append(lorenzo_correct_game7, continue_button);
    } else {

      const lorenzo_duvidas = document.querySelector(".lorenzo_duvidas");
      if (lorenzo_duvidas) {
        lorenzo_duvidas.parentNode.removeChild(lorenzo_duvidas)
      }

      const game10_background_inputs = document.querySelector(".game10_background_inputs");
      if (game10_background_inputs) {
        game10_background_inputs.parentNode.removeChild(game10_background_inputs)
      }

      const lorenzo_incorrect_game7 = document.createElement("img");
      lorenzo_incorrect_game7.classList.add("lorenzo_incorrect_game7");
      lorenzo_incorrect_game7.src = "../assets/lorenzo/lorenzo_ops.png";

      const verifyButtonGame10 = container.querySelector(".verifyButtonGame10");
      if (verifyButtonGame10) {
        container.removeChild(verifyButtonGame10);
      }

      container.appendChild(lorenzo_incorrect_game7);

      setTimeout(() => {
        container.removeChild(lorenzo_incorrect_game7);
        resetGameWrongtoys();
        container.append(lorenzo_duvidas, game10_background_inputs)
      }, 4000);
    }
  };
  //FUNÇÃO QUE VERIFICA SE OS BRINQUEDOS INSERIDOS ESTÃO CORRETOS - INICIO //








  //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - INICIO //
  const renderVerifyButton = (input1, input2, input3) => {

    const existingButton = document.querySelector(".verifyButtonGame10");

    if (existingButton){
      container.removeChild(existingButton)
    }

    if (input1 === "") {
      return;
    }

    if (input2 === "") {
      return;
    }

    if (input3 === "") {
      return;
    }
    
      const verifyButtonGame10 = document.createElement("img");
      verifyButtonGame10.classList.add("verifyButtonGame10");
      verifyButtonGame10.src = "../assets/botoes/bt_verifica.png";

      verifyButtonGame10.addEventListener("click", () => {
        renderResult(input1, input2, input3);
      });

      container.appendChild(verifyButtonGame10);

  };
  //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - FIM //






  //FUNÇÃO QUE VERIFICA SE OS BRINQUEDOS ENCAIXADOS ESTÃO CORRETOS - INICIO//
  const checkRightAnswers = () => {


    const input_question_1 = document.querySelector(".input_question_1");
    const input_question_2 = document.querySelector(".input_question_2");
    const input_question_3 = document.querySelector(".input_question_3");

    renderVerifyButton(input_question_1.value, input_question_2.value, input_question_3.value);


  };
  //FUNÇÃO QUE VERIFICA SE OS BRINQUEDOS ENCAIXADOS ESTÃO CORRETOS - FIM//






  

  //FUNÇÃO QUE EMBARALHA OS 12 BRINQUEDOS ALEATÓRIOS ESCOLHIDOS - APENAS PARA EMBARALHAR AS FIGURINHAS - INICIO//
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  //FUNÇÃO QUE EMBARALHA OS 12 BRINQUEDOS ALEATÓRIOS ESCOLHIDOS - APENAS PARA EMBARALHAR AS FIGURINHAS - FIM//

  //FUNÇÃO QUE CRIA OS CONTAINERS COM FIGURINHAS DE BRINQUEDOS ARRASTÁVEIS E SLOTS RECEBEDORES- INICIO//
  const placeToyInputs = () => {


    //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - INICIO//
    const divtoysImagesGame7 = document.createElement("div");
    divtoysImagesGame7.classList.add("divtoysImagesGame7");
    divtoysImagesGame7.classList.add("containerDroppable");
    divtoysImagesGame7.id = "figurinhasIniciais"; //CADA "containerX" poderá receber uma figurinha. Apenas esse receberá várias.
    //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - FIM//


    //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - INICIO//
    const divSlotTransportsGame7 = document.createElement("div");
    divSlotTransportsGame7.classList.add("divSlotTransportsGame7");
    //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - FIM//


//LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - INICIO//
setTimeout(() => {
    for (let i = 0; i < 9; i++) {
        //SLOT PARA SOLTAR BRINQUEDOS - INÍCIO
        const divSlotAnimal = document.createElement("div");
        divSlotAnimal.classList.add("divSlotTransportGame10");
        divSlotAnimal.classList.add("containerDroppable");
        divSlotAnimal.id = `${randomtoys[i]}_slot`;
        //SLOT PARA SOLTAR BRINQUEDOS - FIM

        

        //NÚMERO QUE FICA DENTRO DO SLOT CENTRALIZADO - INÍCIO
        const numberAnimalGame10 = document.createElement("h2");
        numberAnimalGame10.classList.add("numberAnimalGame10");
        numberAnimalGame10.innerText = i + 1;
        //NÚMERO QUE FICA DENTRO DO SLOT CENTRALIZADO - FIM

        //TEXTO QUE FICA ABAIXO DO SLOT - INÍCIO
        let textAnimal

          textAnimal = document.createElement("p");
          textAnimal.classList.add(`textToyGame10`);
          textAnimal.innerText = `${randomtoys[i].toUpperCase()}`;

        //TEXTO QUE FICA ABAIXO DO SLOT - FIM

        //INSERÇÃO DO NÚMERO DO ANIMAL E DO TEXTO NO SLOT SOLTÁVEL DOS BRINQUEDOS - INICIO//
        divSlotAnimal.append(numberAnimalGame10, textAnimal);
        //INSERÇÃO DO NÚMERO DO ANIMAL E DO TEXTO NO SLOT SOLTÁVEL DOS BRINQUEDOS - FIM//

        //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE BRINQUEDOS - INICIO//
        divSlotTransportsGame7.appendChild(divSlotAnimal);
        //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE BRINQUEDOS - FIM//

        //DIV ARRASTÁVEL QUE CONTERÁ A FIGURINHA DO ANIMAL - INICIO//
        const divImgAnimal = document.createElement("div");
        divImgAnimal.classList.add("divImgAnimal");
        divImgAnimal.classList.add("divImgAnimalAfterDropped");
        divImgAnimal.classList.add("draggable");
        divImgAnimal.draggable = true;
        divImgAnimal.id = `${randomtoys[i]}_figurinha`;
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
        imgAnimal.src = "../assets/book_details/figtransports.svg";
        //BACKGROUND DA FIGURINHA DO ANIMAL - FIM//




        //IMAGEM DO ANIMAL QUE SERÁ INSERIDA NA FIGURINHA - INICIO//
          const imgPicAnimal = document.createElement("img");
          imgPicAnimal.classList.add("imgPicAnimal");
          imgPicAnimal.classList.add("imgPicAnimalGame5");
          imgPicAnimal.src = `../assets/veiculos/${randomtoys[i]}.svg`;
        
          
        //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - INICIO//
        divImgAnimal.append(imgAnimal, imgPicAnimal);
        //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - FIM//


        //IMAGEM DO ANIMAL QUE SERÁ INSERIDA NA FIGURINHA - FIM//



        //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - INICIO//
        if (i === 0 || i === 2 || i === 3 || i === 5 || i === 8) {
          null
        } else {
          divSlotAnimal.appendChild(divImgAnimal);
        }
        //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - FIM//

    }
}, 500);
//LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - FIM//




    //INSERÇÃO
    container.appendChild(divtoysImagesGame7);
    container.appendChild(divSlotTransportsGame7);


        
  };
  //FUNÇÃO QUE CRIA OS CONTAINERES COM FIGURINHAS DE BRINQUEDOS ARRASTÁVEIS E SLOTS RECEBEDORES - FIM//


  chooseRandomtoys();
  placeToyInputs();
};
//FUNÇÃO QUE RENDERIZA O GAME #6 - FIM//

//TORNA ACESSÍVEL PARA ARQUIVOS EXTERNOS
export default game10;
