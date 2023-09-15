

//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - INICIO//
let container = document.querySelector(".container");
//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - FIM//

//FUNÇÃO QUE RENDERIZA O GAME #6 - INICIO//
const game7 = () => {

  //LIMPA OS ELEMENTOS DO JOGO ANTERIOR - INICIO//
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  //LIMPA OS ELEMENTOS DO JOGOA ANTERIOR - FIM//


  //RENDERIZA O LORENZO INICIAL - INICIO//
  const lorenzo_background = document.createElement("div")
  lorenzo_background.classList.add("lorenzo_background")
  const lorenzo_cola = document.createElement("img")
  lorenzo_cola.classList.add("lorenzo_cola_game7")
  lorenzo_cola.src = "../assets/lorenzo/lorenzocola.png"
  container.append(lorenzo_background, lorenzo_cola)

  const button_continue_game7 = document.createElement("img")
  button_continue_game7.classList.add("button_continue_game7")
  button_continue_game7.src = "../assets/botoes/bt_continua.png"
  button_continue_game7.addEventListener("click", (e) => {
    container.removeChild(lorenzo_cola)
    container.removeChild(e.target)
    container.removeChild(lorenzo_background)
  })
  container.appendChild(button_continue_game7)
  //RENDERIZA O LORENZO INICIAL - FIM//


  //APENAS PARA PULAR PARA O JOGO 7//
  const botao_pula = document.createElement("button");
  botao_pula.style.position = "absolute";
  botao_pula.style.top = "0";
  botao_pula.style.left = "30%";
  botao_pula.innerText = "Jogo 7";
  botao_pula.style.zIndex = "38"
  botao_pula.addEventListener("click", () => {
    game7();
  });
  container.appendChild(botao_pula);
  //APENAS PARA PULAR PARA O JOGO 7//




  //RENDERIZA ELEMENTOS DO BACKGROUND - INICIO//
  const backgroundImage = "../assets/backgrounds/background_game1.png";
  container.style.backgroundImage = `url(${backgroundImage})`;
  const background_book = document.createElement("img");
  background_book.classList.add("background_book_game7");
  background_book.src = "../assets/backgrounds/album_transports.png";
  container.appendChild(background_book);
  //RENDERIZA ELEMENTOS DO BACKGROUND - FIM//




//BANCO DE DADOS DE TRANSPORTES - INICIO//
const toys = [
  "avião",
  "bicicleta",
  "caminhão",
  "canoa",
  "carro",
  "carroça",
  "foguete",
  "helicóptero",
  "metrô",
  "moto",
  "navio",
  "ônibus",
  "trem",
  "veleiro"
  ];
  //BANCO DE DADOS DE TRANSPORTES - FIM//





  //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER BRINQUEDOS ALEATÓRIOS - INICIO//
  let randomtoys = [];
  //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER BRINQUEDOS ALEATÓRIOS - FIM//







  //CRIA UM BANCO DE DADOS VAZIO PARA AS IMAGENS DOS BRINQUEDOS - INICIO//
  let toysImages = [];
  //CRIA UM BANCO DE DADOS VAZIO PARA AS IMAGENS DOS BRINQUEDOS - FIM//







  //FUNÇÃO QUE ESCOLHE ALEATORIAMENTE 12 BRINQUEDOS - INICIO//
  const chooseRandomtoys = () => {
    while (randomtoys.length < 12) {
      const randomIndex = Math.floor(Math.random() * toys.length);
      const randomToy = toys[randomIndex];

      if (!randomtoys.includes(randomToy)) {
        randomtoys.push(randomToy);
        toysImages.push(`../toys/${randomToy}.svg`);
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
        console.log("neste input:" + inputToy.value)
        console.log("slot do " + slot.id.split("_slot")[0].toUpperCase()) 
        
        if (inputToy.value === slot.id.split("_slot")[0].toUpperCase()){
          console.log("correto")
        } else {
          console.log("incorreto")
          inputToy.value = ""
        }
      }

    });
  };
  //FUNÇÃO QUE RESETA O JOGO APENAS COM OS ANIMAIS INCORRETOS - FIM//







  //FUNÇÃO QUE VERIFICA SE OS BRINQUEDOS INSERIDOS ESTÃO CORRETOS - INICIO //
  const renderResult = (total_correct) => {

    const divtoysImagesGame7 = document.querySelector(".divtoysImagesGame7");

    if (total_correct === 5) {
      const lorenzo_correct_game7 = document.createElement("img");
      lorenzo_correct_game7.classList.add("lorenzo_correct_game7");
      lorenzo_correct_game7.src = "../assets/lorenzo/lorenzo_ok1.png";

      const continue_button = document.createElement("img");
      continue_button.classList.add("button_continue_game7");
      continue_button.src = "../assets/botoes/bt_continua.png";

      const verifyButtonGame7 = container.querySelector(".verifyButtonGame7");
      if (verifyButtonGame7) {
        container.removeChild(verifyButtonGame7);
      }

      continue_button.addEventListener("click", () => {
        game7();
      });

      container.append(lorenzo_correct_game7, continue_button);
    } else if (total_correct < 12) {
      const lorenzo_incorrect_game7 = document.createElement("img");
      lorenzo_incorrect_game7.classList.add("lorenzo_incorrect_game7");
      lorenzo_incorrect_game7.src = "../assets/lorenzo/lorenzo_ops.png";

      const verifyButtonGame7 = container.querySelector(".verifyButtonGame7");
      if (verifyButtonGame7) {
        container.removeChild(verifyButtonGame7);
      }

      container.appendChild(lorenzo_incorrect_game7);

      setTimeout(() => {
        container.removeChild(lorenzo_incorrect_game7);
        resetGameWrongtoys();
      }, 4000);
    }
  };
  //FUNÇÃO QUE VERIFICA SE OS BRINQUEDOS INSERIDOS ESTÃO CORRETOS - INICIO //








  //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - INICIO //
  const renderVerifyButton = (total_inserted, total_correct) => {
    const existingButton = document.querySelector(".verifyButtonGame7");
    if (existingButton){
      let divtoysImagesGame7 = document.querySelector(".divtoysImagesGame7")
      container.removeChild(existingButton)
    }
    if (total_inserted === 5) {
      const verifyButtonGame7 = document.createElement("img");
      verifyButtonGame7.classList.add("verifyButtonGame7");
      verifyButtonGame7.src = "../assets/botoes/bt_verifica.png";

      verifyButtonGame7.addEventListener("click", () => {
        renderResult(total_correct);
      });

      container.appendChild(verifyButtonGame7);
    } else if (total_inserted < 5) {
      const divtoysImagesGame7 = document.querySelector(".divtoysImagesGame7");
      const verifyButtonGame7 = divtoysImagesGame7.querySelector(".verifyButtonGame7");
      if (verifyButtonGame7) {
        container.removeChild(verifyButtonGame7);
      }
    }
  };
  //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - FIM //






  //FUNÇÃO QUE VERIFICA SE OS BRINQUEDOS ENCAIXADOS ESTÃO CORRETOS - INICIO//
  const checkRighttoysSlots = (element) => {

    console.log("checando inserções")

    let total_inserted = 0;
    let total_correct = 0;

    element?.childNodes?.forEach((slot) => {

      const toy_slot_name = slot.id.split("_slot")[0];

      const input_toy = slot.querySelector(".inputToy")

      if(input_toy){
        if (input_toy.value !== ""){
          total_inserted += 1
        }
        if (input_toy.value === toy_slot_name.toUpperCase()){
          total_correct += 1
        }
      }

      //const animal_input_name = input_toy.value.toUpperCase()

      console.log("slot do " + toy_slot_name.toUpperCase())
  

    });

    console.log("BRINQUEDOS corretos: " + total_correct);
    console.log("BRINQUEDOS inseridos: " + total_inserted);

    renderVerifyButton(total_inserted, total_correct);
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
    for (let i = 0; i < randomtoys.length; i++) {
        //SLOT PARA SOLTAR BRINQUEDOS - INÍCIO
        const divSlotAnimal = document.createElement("div");
        divSlotAnimal.classList.add("divSlotTransport");
        divSlotAnimal.classList.add("containerDroppable");
        divSlotAnimal.id = `${randomtoys[i]}_slot`;
        //SLOT PARA SOLTAR BRINQUEDOS - FIM

        

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
          textAnimal.classList.add(`textToy`);
          textAnimal.id = randomtoys[i]
          textAnimal.classList.add(`inputToy`);
          textAnimal.addEventListener("input", function() {
            this.value = this.value.toUpperCase();
            checkRighttoysSlots(divSlotTransportsGame7)
          });
        } else {
          textAnimal = document.createElement("p");
          textAnimal.classList.add(`textToy`);
          textAnimal.innerText = `${randomtoys[i].toUpperCase()}`;
        }
        //TEXTO QUE FICA ABAIXO DO SLOT - FIM

        //INSERÇÃO DO NÚMERO DO ANIMAL E DO TEXTO NO SLOT SOLTÁVEL DOS BRINQUEDOS - INICIO//
        divSlotAnimal.append(numberAnimal, textAnimal);
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
        if (i === 0 || i === 2 || i === 5 || i === 7 || i === 10) {
          const imgPicAnimal = document.createElement("img");
          imgPicAnimal.classList.add("imgPicAnimal");
          imgPicAnimal.classList.add("imgPicAnimalGame5");
          imgPicAnimal.src = `../assets/veiculos/${randomtoys[i]}.svg`;
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
        imgPicAnimal.src = `../assets/veiculos/${randomtoys[i]}.svg`;

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
    container.appendChild(divtoysImagesGame7);
    container.appendChild(divSlotTransportsGame7);


        
  };
  //FUNÇÃO QUE CRIA OS CONTAINERES COM FIGURINHAS DE BRINQUEDOS ARRASTÁVEIS E SLOTS RECEBEDORES - FIM//


  chooseRandomtoys();
  placeToyInputs();
};
//FUNÇÃO QUE RENDERIZA O GAME #6 - FIM//

//TORNA ACESSÍVEL PARA ARQUIVOS EXTERNOS
export default game7;