import game10 from "./game10.js";


//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - INICIO//
let container = document.querySelector(".container");
//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - FIM//

//FUNÇÃO QUE RENDERIZA O GAME #6 - INICIO//
const game9 = () => {

  //LIMPA OS ELEMENTOS DO JOGO ANTERIOR - INICIO//
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  //LIMPA OS ELEMENTOS DO JOGOA ANTERIOR - FIM//

  //APENAS PARA PULAR PARA O JOGO 10//
  //const botao_pula = document.createElement("button");
  //botao_pula.style.position = "absolute";
  //botao_pula.style.top = "0";
  //botao_pula.style.left = "30%";
  //botao_pula.innerText = "Jogo 10";
  //botao_pula.style.zIndex = "38"
  //botao_pula.addEventListener("click", () => {
  //  game10();
  //});
  //container.appendChild(botao_pula);
  //APENAS PARA PULAR PARA O JOGO 9//

    //RENDERIZA O LORENZO INICIAL - INICIO//
    const lorenzo_duvidas_game_9 = document.createElement("img")
    lorenzo_duvidas_game_9.classList.add("lorenzo_duvidas_game_9")
    lorenzo_duvidas_game_9.src = "../assets/lorenzo/lorenzo_duvidas.png"

    container.append(lorenzo_duvidas_game_9)

    //RENDERIZA O BACKGROUND DE INPUTS - INICIO//
    const game9_background_inputs = document.createElement("div");
    game9_background_inputs.classList.add("game9_background_inputs");
    container.appendChild(game9_background_inputs);  
    //RENDERIZA O BACKGROUND DE INPUTS - FIM//

    const div_question_1_game_9 = document.createElement("div")
    div_question_1_game_9.classList.add("div_question_1_game_9")
    const p_question_1 = document.createElement("p");
    p_question_1.classList.add("p_question_1");
    p_question_1.innerText = "1 - ¿Cuántas figuritas quedan para completar esta página?"
    const input_question_1 = document.createElement("input");
    input_question_1.classList.add("input_question_1");
    div_question_1_game_9.append(p_question_1, input_question_1);
    game9_background_inputs.appendChild(div_question_1_game_9); 

    input_question_1.addEventListener("input", function() {
      this.value = this.value.toUpperCase();
      checkRightAnswers()
    });


    const div_question_2_game_9 = document.createElement("div")
    div_question_2_game_9.classList.add("div_question_2_game_9")
    const p_question_2 = document.createElement("p");
    p_question_2.classList.add("p_question_2");
    p_question_2.innerText = "2 - ¿Cuántas figuritas ya se han pegado en la página?"
    const input_question_2 = document.createElement("input");
    input_question_2.classList.add("input_question_2");
    div_question_2_game_9.append(p_question_2, input_question_2);
    game9_background_inputs.appendChild(div_question_2_game_9); 

    input_question_2.addEventListener("input", function() {
      this.value = this.value.toUpperCase();
      checkRightAnswers()
    });

    const div_question_3_game_9 = document.createElement("div")
    div_question_3_game_9.classList.add("div_question_3_game_9")
    const p_question_3 = document.createElement("p");
    p_question_3.classList.add("p_question_3");
    p_question_3.innerText = "3 - ¿Cuántas figuritas tiene la página en total?"
    const input_question_3 = document.createElement("input");
    input_question_3.classList.add("input_question_3");
    div_question_3_game_9.append(p_question_3, input_question_3);
    game9_background_inputs.appendChild(div_question_3_game_9); 

    input_question_3.addEventListener("input", function() {
      this.value = this.value.toUpperCase();
      checkRightAnswers()
    });


    //RENDERIZA O LORENZO INICIAL - FIM//




  //RENDERIZA ELEMENTOS DO BACKGROUND - INICIO//
  const backgroundImage = "../assets/backgrounds/background_game1.png";
  container.style.backgroundImage = `url(${backgroundImage})`;
  const background_book = document.createElement("img");
  background_book.classList.add("background_book_game9");
  background_book.src = "../assets/backgrounds/album_animals_toys.png";
  container.appendChild(background_book);
  //RENDERIZA ELEMENTOS DO BACKGROUND - FIM//





  //BANCO DE DADOS DE ANIMAIS - INICIO//
  const animals = [
    "pelota",
    "muñeca",
    "caballito de palo",
    "cuerda",
    "dado",
    "dominó",
    "tirachinas",
    "yoyó",
    "patinete",
    "patines",
    "volante",
    "trompo",
    "cometa",
    "monopatín"
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
        toysImages.push(`../brinquedos/${randomToy}.svg`);
      }
    }
  };
  //FUNÇÃO QUE ESCOLHE ALEATORIAMENTE 12 BRINQUEDOS - FIM//




//********************************AQUI */



  //FUNÇÃO QUE RESETA O JOGO APENAS COM OS ANIMAIS INCORRETOS - INICIO//
  const resetGameWrongtoys = () => {

    const divSlotTransportsGame9 = document.querySelector(".divSlotTransportsGame9");

    divSlotTransportsGame9.childNodes.forEach((slot) => {

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

    if (input1 === "3" && input2 === "6" && input3 === "9") {
      const lorenzo_correct_game9 = document.createElement("img");
      lorenzo_correct_game9.classList.add("lorenzo_correct_game9");
      lorenzo_correct_game9.src = "../assets/lorenzo/lorenzo_ok1.png";

      const continue_button = document.createElement("img");
      continue_button.classList.add("button_continue_game9");
      continue_button.src = "../assets/botoes/bt_continua.png";

      const verifyButtonGame9 = document.querySelector(".verifyButtonGame9");
      if (verifyButtonGame9) {
        verifyButtonGame9.parentNode.removeChild(verifyButtonGame9);
      }

      const lorenzo_duvidas_game_9 = document.querySelector(".lorenzo_duvidas_game_9");
      if (lorenzo_duvidas_game_9) {
        lorenzo_duvidas_game_9.parentNode.removeChild(lorenzo_duvidas_game_9)
      }

      const game9_background_inputs = document.querySelector(".game9_background_inputs");
      if (game9_background_inputs) {
        game9_background_inputs.parentNode.removeChild(game9_background_inputs)
      }

      continue_button.addEventListener("click", () => {
        game10();
      });

      container.append(lorenzo_correct_game9, continue_button);
    } else {
      const lorenzo_incorrect_game9 = document.createElement("img");
      lorenzo_incorrect_game9.classList.add("lorenzo_incorrect_game9");
      lorenzo_incorrect_game9.src = "../assets/lorenzo/lorenzo_ops.png";

      const verifyButtonGame9 = container.querySelector(".verifyButtonGame9");
      if (verifyButtonGame9) {
        container.removeChild(verifyButtonGame9);
      }
      const lorenzo_duvidas_game_9 = document.querySelector(".lorenzo_duvidas_game_9");
      if (lorenzo_duvidas_game_9) {
        lorenzo_duvidas_game_9.parentNode.removeChild(lorenzo_duvidas_game_9)
      }

      const game9_background_inputs = document.querySelector(".game9_background_inputs");
      if (game9_background_inputs) {
        game9_background_inputs.parentNode.removeChild(game9_background_inputs)
      }

      container.appendChild(lorenzo_incorrect_game9);

      setTimeout(() => {
        container.removeChild(lorenzo_incorrect_game9);
        resetGameWrongtoys();
        container.append(lorenzo_duvidas_game_9, game9_background_inputs)
      }, 4000);
    }
  };
  //FUNÇÃO QUE VERIFICA SE OS BRINQUEDOS INSERIDOS ESTÃO CORRETOS - INICIO //








  //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - INICIO //
  const renderVerifyButton = (input1, input2, input3) => {

    const existingButton = document.querySelector(".verifyButtonGame9");

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
    
      const verifyButtonGame9 = document.createElement("img");
      verifyButtonGame9.classList.add("verifyButtonGame9");
      verifyButtonGame9.src = "../assets/botoes/bt_verifica.png";

      verifyButtonGame9.addEventListener("click", () => {
        renderResult(input1, input2, input3);
      });

      container.appendChild(verifyButtonGame9);

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
    const divSlotTransportsGame9 = document.createElement("div");
    divSlotTransportsGame9.classList.add("divSlotTransportsGame9");
    //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - FIM//


//LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - INICIO//
setTimeout(() => {
    for (let i = 0; i < 9; i++) {
        //SLOT PARA SOLTAR BRINQUEDOS - INÍCIO
        const divSlotAnimal = document.createElement("div");
        divSlotAnimal.classList.add("divSlotTransportGame9");
        divSlotAnimal.classList.add("containerDroppable");
        divSlotAnimal.id = `${randomtoys[i]}_slot`;
        //SLOT PARA SOLTAR BRINQUEDOS - FIM

        

        //NÚMERO QUE FICA DENTRO DO SLOT CENTRALIZADO - INÍCIO
        const numberAnimal = document.createElement("h2");
        numberAnimal.classList.add("numberToy");
        numberAnimal.innerText = i + 1;
        //NÚMERO QUE FICA DENTRO DO SLOT CENTRALIZADO - FIM

        //TEXTO QUE FICA ABAIXO DO SLOT - INÍCIO
        let textAnimal

          textAnimal = document.createElement("p");
          textAnimal.classList.add(`textToyGame9`);
          textAnimal.innerText = `${randomtoys[i].toUpperCase()}`;

        //TEXTO QUE FICA ABAIXO DO SLOT - FIM

        //INSERÇÃO DO NÚMERO DO ANIMAL E DO TEXTO NO SLOT SOLTÁVEL DOS BRINQUEDOS - INICIO//
        divSlotAnimal.append(numberAnimal, textAnimal);
        //INSERÇÃO DO NÚMERO DO ANIMAL E DO TEXTO NO SLOT SOLTÁVEL DOS BRINQUEDOS - FIM//

        //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE BRINQUEDOS - INICIO//
        divSlotTransportsGame9.appendChild(divSlotAnimal);
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
        imgAnimal.src = "../assets/book_details/figtoys.svg";
        //BACKGROUND DA FIGURINHA DO ANIMAL - FIM//




        //IMAGEM DO ANIMAL QUE SERÁ INSERIDA NA FIGURINHA - INICIO//
          const imgPicAnimal = document.createElement("img");
          imgPicAnimal.classList.add("imgPicAnimal");
          imgPicAnimal.classList.add("imgPicAnimalGame5");
          imgPicAnimal.src = `../assets/brinquedos/${randomtoys[i]}.svg`;
        
          
        //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - INICIO//
        divImgAnimal.append(imgAnimal, imgPicAnimal);
        //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - FIM//


        //IMAGEM DO ANIMAL QUE SERÁ INSERIDA NA FIGURINHA - FIM//



        //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - INICIO//
        if (i === 0 || i === 2 || i === 3 || i == 4 || i === 7 || i === 8) {
          divSlotAnimal.appendChild(divImgAnimal);
        } else {
          null
        }
        //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - FIM//

    }
}, 500);
//LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - FIM//




    //INSERÇÃO
    container.appendChild(divtoysImagesGame7);
    container.appendChild(divSlotTransportsGame9);


        
  };
  //FUNÇÃO QUE CRIA OS CONTAINERES COM FIGURINHAS DE BRINQUEDOS ARRASTÁVEIS E SLOTS RECEBEDORES - FIM//


  chooseRandomtoys();
  placeToyInputs();
};
//FUNÇÃO QUE RENDERIZA O GAME #6 - FIM//

//TORNA ACESSÍVEL PARA ARQUIVOS EXTERNOS
export default game9;
