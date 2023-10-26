import game13 from "./game13.js";


//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - INICIO//
let container = document.querySelector(".container");
//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - FIM//

//FUNÇÃO QUE RENDERIZA O GAME #6 - INICIO//
const game12 = () => {

  //LIMPA OS ELEMENTOS DO JOGO ANTERIOR - INICIO//
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  //LIMPA OS ELEMENTOS DO JOGOA ANTERIOR - FIM//

  //APENAS PARA PULAR PARA O JOGO 13//
  //const botao_pula = document.createElement("button");
  //botao_pula.style.position = "absolute";
  //botao_pula.style.top = "0";
  //botao_pula.style.left = "30%";
  //botao_pula.innerText = "Jogo 13";
  //botao_pula.style.zIndex = "38"
  //botao_pula.addEventListener("click", () => {
  //  game13();
  //});
  //container.appendChild(botao_pula);
  //APENAS PARA PULAR PARA O JOGO 13//

    //RENDERIZA O LORENZO INICIAL - INICIO//
    const lorenzo_start_game_12 = document.createElement("img")
    lorenzo_start_game_12.classList.add("lorenzo_start_game_12")
    lorenzo_start_game_12.src = "../assets/lorenzo/lorenzo_memoria.png"

    container.append(lorenzo_start_game_12)

    //RENDERIZA O BOTÃO DE CONTINUAR PARA A FASE - INICIO//
    const button_continue_start_game_12 = document.createElement("img");
    button_continue_start_game_12.classList.add("button_continue_start_game_12");
    button_continue_start_game_12.src = "../assets/botoes/bt_continua.png"
    container.appendChild(button_continue_start_game_12);  

    //RENDERIZA O BOTÃO DE CONTINUAR PARA A FASE - FIM//

    const div_question_1_game_8 = document.createElement("div")
    div_question_1_game_8.classList.add("div_question_1_game_8")
    const p_question_1_game_8 = document.createElement("p");
    p_question_1_game_8.classList.add("p_question_1_game_8");
    p_question_1_game_8.innerText = "1 - ¿Cuántas figuritas quedan para completar esta página?"
    const input_question_1 = document.createElement("input");
    input_question_1.classList.add("input_question_1");
    div_question_1_game_8.append(p_question_1_game_8, input_question_1);

    input_question_1.addEventListener("input", function() {
      this.value = this.value.toUpperCase();
      checkRightAnswers()
    });


    const div_question_2_game_8 = document.createElement("div")
    div_question_2_game_8.classList.add("div_question_2_game_8")
    const p_question_2 = document.createElement("p");
    p_question_2.classList.add("p_question_2");
    p_question_2.innerText = "2 - ¿Cuántas figuritas ya se han pegado en la página?"
    const input_question_2 = document.createElement("input");
    input_question_2.classList.add("input_question_2");
    div_question_2_game_8.append(p_question_2, input_question_2);

    input_question_2.addEventListener("input", function() {
      this.value = this.value.toUpperCase();
      checkRightAnswers()
    });

    const div_question_3_game_8 = document.createElement("div")
    div_question_3_game_8.classList.add("div_question_3_game_8")
    const p_question_3 = document.createElement("p");
    p_question_3.classList.add("p_question_3");
    p_question_3.innerText = "3 - ¿Cuántas figuritas tiene la página en total?"
    const input_question_3 = document.createElement("input");
    input_question_3.classList.add("input_question_3");
    div_question_3_game_8.append(p_question_3, input_question_3);

    input_question_3.addEventListener("input", function() {
      this.value = this.value.toUpperCase();
      checkRightAnswers()
    });


    //RENDERIZA O LORENZO INICIAL - FIM//




  //RENDERIZA ELEMENTOS DO BACKGROUND - INICIO//
  const backgroundImage = "../assets/backgrounds/background_game1.png";
  container.style.backgroundImage = `url(${backgroundImage})`;
  const background_book = document.createElement("img");
  background_book.classList.add("background_book_game12");
  background_book.src = "../assets/backgrounds/album_animals_toys.png";
  container.appendChild(background_book);
  //RENDERIZA ELEMENTOS DO BACKGROUND - FIM//





  //BANCO DE DADOS DE ANIMAIS - INICIO//
  const animals = [
    "pelota",
    //"muñeca",
    //"caballito de palo",
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


  const arrayNovo = [];
  for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * animals.length);
      const selectedItem = animals.splice(randomIndex, 1)[0]; // Remove o item escolhido do array original
      arrayNovo.push(selectedItem);
  }

  const arrayAleatorio = [];
  while (arrayAleatorio.length < 6) {
      const randomIndex = Math.floor(Math.random() * arrayNovo.length);
      const selectedItem = arrayNovo[randomIndex];
      if (!arrayAleatorio.includes(selectedItem)) {
          arrayAleatorio.push(selectedItem);
      }
  }





  //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER BRINQUEDOS ALEATÓRIOS - INICIO//
  let randomtoys = [];
  //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER BRINQUEDOS ALEATÓRIOS - FIM//







  //CRIA UM BANCO DE DADOS VAZIO PARA AS IMAGENS DOS BRINQUEDOS - INICIO//
  let toysImages = [];
  //CRIA UM BANCO DE DADOS VAZIO PARA AS IMAGENS DOS BRINQUEDOS - FIM/




  //FUNÇÃO QUE RESETA O JOGO APENAS COM OS ANIMAIS INCORRETOS - INICIO//
  const resetGameWrongtoys = () => {

    const divSlotTransportsgame12 = document.querySelector(".divSlotTransportsgame12");

    divSlotTransportsgame12.childNodes.forEach((slot) => {

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
  const renderResult = () => {

      const lorenzo_correct_game12 = document.createElement("img");
      lorenzo_correct_game12.classList.add("lorenzo_correct_game12");
      lorenzo_correct_game12.src = "../assets/lorenzo/lorenzo_ok1.png";

      const continue_button = document.createElement("img");
      continue_button.classList.add("button_continue_game12");
      continue_button.src = "../assets/botoes/bt_continua.png";

      const verifyButtonGame8 = document.querySelector(".verifyButtonGame8");
      if (verifyButtonGame8) {
        verifyButtonGame8.parentNode.removeChild(verifyButtonGame8);
      }

      const lorenzo_start_game_12 = document.querySelector(".lorenzo_start_game_12");
      if (lorenzo_start_game_12) {
        lorenzo_start_game_12.parentNode.removeChild(lorenzo_start_game_12)
      }

      continue_button.addEventListener("click", () => {
        game13();
      });

      container.append(lorenzo_correct_game12, continue_button);

  };
  //FUNÇÃO QUE VERIFICA SE OS BRINQUEDOS INSERIDOS ESTÃO CORRETOS - INICIO //








  //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - INICIO //
  const renderVerifyButton = (input1, input2, input3) => {

    const existingButton = document.querySelector(".verifyButtonGame8");

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
    
      const verifyButtonGame8 = document.createElement("img");
      verifyButtonGame8.classList.add("verifyButtonGame8");
      verifyButtonGame8.src = "../assets/botoes/bt_verifica.png";

      verifyButtonGame8.addEventListener("click", () => {
        renderResult(input1, input2, input3);
      });

      container.appendChild(verifyButtonGame8);

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
    const divtoysImagesgame8 = document.createElement("div");
    divtoysImagesgame8.classList.add("divtoysImagesgame8");
    divtoysImagesgame8.classList.add("containerDroppable");
    divtoysImagesgame8.id = "figurinhasIniciais"; //CADA "containerX" poderá receber uma figurinha. Apenas esse receberá várias.
    //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - FIM//


    //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - INICIO//
    const divSlotTransportsgame12 = document.createElement("div");
    divSlotTransportsgame12.classList.add("divSlotTransportsgame12");
    //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - FIM//


    //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - INICIO//
    setTimeout(() => {


        for (let i = 0; i < 6; i++) {


            //SLOT COM IMAGEM DO ITEM - INÍCIO
            const divSlotAnimal = document.createElement("div");
            divSlotAnimal.classList.add("divSlotTransportGame11");
            divSlotAnimal.id = `${arrayNovo[i]}`; //ID DO ITEM INSERIDO**************************************
            if(arrayNovo[i] === "caballito de palo") {
              divSlotAnimal.classList.add(`caballito_de_palo`)
            } else {
              divSlotAnimal.classList.add(`${arrayNovo[i]}`)
            }
            



            //SLOT COM IMAGEM DO ITEM - FIM



                  
            //SLOT COM NOME DO ITEM - INÍCIO
            const divSlotName = document.createElement("div");
            divSlotName.classList.add("divSlotName");
            divSlotAnimal.id = `${arrayNovo[i]}`;
            //SLOT COM NOME DO ITEM - FIM







            


            //NOME QUE FICA DENTRO DO SLOT CENTRALIZADO - INÍCIO
            const numberAnimal = document.createElement("h2");
            numberAnimal.classList.add("numberAnimal");
            numberAnimal.innerText = arrayNovo[i];

            //NOME QUE FICA DENTRO DO SLOT CENTRALIZADO - FIM


            //TEXTO QUE FICA ABAIXO DO SLOT - INÍCIO
            let textAnimal

              textAnimal = document.createElement("p");
              textAnimal.classList.add(`textToyGame8`);
              textAnimal.innerText = `${arrayNovo[i].toUpperCase()}`;

            //TEXTO QUE FICA ABAIXO DO SLOT - FIM

            //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE BRINQUEDOS - INICIO//

            //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE BRINQUEDOS - FIM//

            //DIV ARRASTÁVEL QUE CONTERÁ A FIGURINHA DO ANIMAL - INICIO//
            const divImgAnimalGame11 = document.createElement("div");
            divImgAnimalGame11.classList.add("divImgAnimalGame11");
            divImgAnimalGame11.classList.add("divImgAnimalAfterDropped");
            divImgAnimalGame11.classList.add("draggable");
            divImgAnimalGame11.draggable = true;
            divImgAnimalGame11.id = `${arrayNovo[i]}`;
            divImgAnimalGame11.style.backgroundImage = "url('../assets/book_details/figtoys.svg')";
            divImgAnimalGame11.style.backgroundSize = "cover";
            divImgAnimalGame11.style.backgroundPosition = "center";
            //DIV ARRASTÁVEL QUE CONTERÁ A FIGURINHA DO ANIMAL - FIM//

            //DIV ARRASTÁVEL QUE CONTERÁ O NOME DO ANIMAL - INICIO//
            const divImgName = document.createElement("div");
            divImgName.classList.add("divImgName");
            setTimeout(() => {
              if(arrayAleatorio[i]){
                if(arrayAleatorio[i] === "caballito de palo") {
                  divImgName.classList.add(`caballito_de_palo_par`);
                } else {
                  divImgName.classList.add(`${arrayAleatorio[i]}_par`);
                }

              }
            }, 500);

              

            divImgName.id = arrayAleatorio[i];
            divImgName.innerText = arrayAleatorio[i].toUpperCase();
            divImgName.style.fontSize = "10pt"
            divImgName.style.backgroundImage = "url('../assets/book_details/figtoys.svg')";
            //DIV ARRASTÁVEL QUE CONTERÁ O NOME DO ANIMAL - FIM//

            //FUNÇÃO QUE TORNA A FIGURINHA ARRASTÁVEL - INÍCIO//
            divImgAnimalGame11.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", divImgAnimalGame11.id);
            });
            //FUNÇÃO QUE TORNA A FIGURINHA ARRASTÁVEL - FIM//

            //BACKGROUND DA FIGURINHA DO ANIMAL - INICIO//
            const imgAnimal = document.createElement("img");
            imgAnimal.classList.add("imgAnimal");
            //imgAnimal.style.maxWidth = "80%";
            //imgAnimal.style.maxHeigth = "80%"
            imgAnimal.classList.add("imgAnimalAfterDropped");
            //imgAnimal.src = "../assets/book_details/figtoys.svg";
            //BACKGROUND DA FIGURINHA DO ANIMAL - FIM//

            //BACKGROUND DA DIV NAME - INICIO//
            const imgNameBackground = document.createElement("img");
            imgNameBackground.classList.add("imgNameBackground");
            //imgAnimal.style.maxWidth = "80%";
            //imgAnimal.style.maxHeigth = "80%"
            imgNameBackground.src = "../assets/book_details/figtoys.svg";
            //divImgName.appendChild(imgNameBackground);
            divSlotName.appendChild(divImgName);
            //BACKGROUND DA DIV NAME - FIM//



            //IMAGEM DO ANIMAL QUE SERÁ INSERIDA NA FIGURINHA - INICIO//
              const imgPicAnimal = document.createElement("img");
              imgPicAnimal.classList.add("imgPicAnimal");
              imgPicAnimal.classList.add("imgPicAnimalGame5");
              //imgPicAnimal.src = "../assets/book_details/back_card.jpg"
              imgPicAnimal.src = `../assets/brinquedos/${arrayNovo[i]}.svg`;

            //NOME CORRESPONDENTE À IMAGEM DO ITEM - INICIO//
              const nameItem = document.createElement("p");
              nameItem.innerText = arrayNovo[i]
              nameItem.classList.add("nameItem")
              //divImgName.appendChild(nameItem)
            //NOME CORRESPONDENTE À IMAGEM DO ITEM - FIM//
            
              
            //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - INICIO//
            divImgAnimalGame11.append(imgPicAnimal);
            //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - FIM//


            //IMAGEM DO ANIMAL QUE SERÁ INSERIDA NA FIGURINHA - FIM//



            //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - INICIO//

              divSlotAnimal.appendChild(divImgAnimalGame11);
    
            //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - FIM//
            divSlotTransportsgame12.appendChild(divSlotAnimal);
            divSlotTransportsgame12.appendChild(divImgName);
            //divSlotTransportsgame12.appendChild(divImgName);

        }
    }, 500);
    //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - FIM//




    //INSERÇÃO
    container.appendChild(divtoysImagesgame8);
    container.appendChild(divSlotTransportsgame12);


        
  };
  //FUNÇÃO QUE CRIA OS CONTAINERES COM FIGURINHAS DE BRINQUEDOS ARRASTÁVEIS E SLOTS RECEBEDORES - FIM//



  //VARIÁVEIS GLOBAIS PARA A FUNÇÃO GAME DE MEMÓRIA - INICIO //

  let figuras_viradas = 0;
  let figuras_viradas_ = []
  let figuras_certas = 0

  const check_figuras = (element) => {

    let actual_clicked = element.id
    figuras_viradas += 1
    figuras_viradas_.push(actual_clicked)


    if (figuras_viradas === 2) {

      const element1 = document.querySelector(`.${figuras_viradas_[0]}`)






      

      const element2 = document.querySelector(`.${figuras_viradas_[1]}`)










      if (figuras_viradas_[0].replace(/_par$/, '') === figuras_viradas_[1].replace(/_par$/, ''))
      {
        figuras_viradas = 0
        figuras_viradas_ = []
        figuras_certas ++
        if (figuras_certas === 6) {
          renderResult()
        }
      } else {

        setTimeout(() => {
          if (element1) {
            const classNames = element1.className.split(' ');
            const hasClassWithPar = classNames.some(className => className.endsWith('_par'));
          
            if (hasClassWithPar) {
              // O elemento tem pelo menos uma classe que termina com "_par"
              //É O TEXTO, DEVOLVER A ESTILIZAÇÃO PARA O element1
              element1.style.fontSize = "0"
              element1.style.backgroundImage = `url("../assets/book_details/back_card.jpg")`;
              element1.style.backgroundSize = "cover"; // Para cobrir toda a área do elemento
              element1.style.backgroundPosition = "center"; // Para centralizar a imagem no centro do elemento
              element1.style.transform = "scaleX(-1)"; // Espelha a imagem horizontalmente
            } else {
              // O elemento não possui nenhuma classe que termina com "_par"
              //É IMAGEM, DEVOLVER A ESTILIZAÇÃO PARA O element1
              const imgToShow = element1.querySelector(".imgPicAnimal")
              const backgroundToChange = element1.querySelector(".divImgAnimalGame11") //IMAGEM DO ITEM
              backgroundToChange.style.backgroundImage = `url("../assets/book_details/back_card.jpg")`
              backgroundToChange.style.transform = "scaleX(-1)"; 
              imgToShow.style.display = "none"
            }
          }
  
          if (element2) {
            const classNames = element2.className.split(' ');
            const hasClassWithPar = classNames.some(className => className.endsWith('_par'));
          
            if (hasClassWithPar) {
              // O elemento tem pelo menos uma classe que termina com "_par"
              element2.style.fontSize = "0"
              element2.style.backgroundImage = `url("../assets/book_details/back_card.jpg")`;
              element2.style.backgroundSize = "cover"; // Para cobrir toda a área do elemento
              element2.style.backgroundPosition = "center"; // Para centralizar a imagem no centro do elemento
              element2.style.transform = "scaleX(-1)"; // Espelha a imagem horizontalmente
            } else {
              // O elemento não possui nenhuma classe que termina com "_par"
              const imgToShow = element2.querySelector(".imgPicAnimal")
              const backgroundToChange = element2.querySelector(".divImgAnimalGame11") //IMAGEM DO ITEM
              backgroundToChange.style.backgroundImage = `url("../assets/book_details/back_card.jpg")`
              backgroundToChange.style.transform = "scaleX(-1)"; 
              imgToShow.style.display = "none"
            }
          } 
        }, 300);

        figuras_viradas = 0
        figuras_viradas_ = []


      }

    }

  }

  //VARIÁVEIS GLOBAIS PARA A FUNÇÃO GAME DE MEMÓRIA - FIM //



  //ESQUEMATIZAÇÃO DO JOGO DE MEMÓRIA - INICIO//
    const memoryGameInitializeHalf = () => {

      for (let i = 0; i < 6; i++){

        const element = document.querySelector(`.${arrayAleatorio[i]}`);
        if(element){
          const imgToHide = element.querySelector(".imgPicAnimal")
          const backgroundToChange = element.querySelector(".divImgAnimalGame11") //IMAGEM DO ITEM
          backgroundToChange.style.backgroundImage = `url("../assets/book_details/back_card.jpg")`
          backgroundToChange.style.transform = "scaleX(-1)"; 
          imgToHide.style.display = "none"
        }

        const element_par = document.querySelector(`.${arrayAleatorio[i]}_par`); //NOME ESCRITO
        if(arrayAleatorio[i]){
          element_par.id = `${arrayAleatorio[i]}_par`
        }
        element_par.style.fontSize = "0"
        element_par.style.backgroundImage = `url("../assets/book_details/back_card.jpg")`;
        element_par.style.backgroundSize = "cover"; // Para cobrir toda a área do elemento
        element_par.style.backgroundPosition = "center"; // Para centralizar a imagem no centro do elemento
        element_par.style.transform = "scaleX(-1)"; // Espelha a imagem horizontalmente




        /**********************************FINALIZAR LÓGICA DE JOGO DE MEMÓRIA, CHECAR ID DOS ELEMENTOS CLICADOS */



      }

    }
    const memoryGameInitializeFull = () => {

      for (let i = 0; i < 6; i++){

        const element = document.querySelector(`.${arrayAleatorio[i]}`);
        const imgToHide = element.querySelector(".imgPicAnimal")
        const backgroundToChange = element.querySelector(".divImgAnimalGame11") //IMAGEM DO ITEM
        backgroundToChange.style.backgroundImage = `url("../assets/book_details/back_card.jpg")`
        backgroundToChange.style.transform = "scaleX(-1)"; 
        imgToHide.style.display = "none"







        const element_par = document.querySelector(`.${arrayAleatorio[i]}_par`); //NOME ESCRITO
        element_par.id = `${arrayAleatorio[i]}_par`
        element_par.style.fontSize = "0"
        element_par.style.backgroundImage = `url("../assets/book_details/back_card.jpg")`;
        element_par.style.backgroundSize = "cover"; // Para cobrir toda a área do elemento
        element_par.style.backgroundPosition = "center"; // Para centralizar a imagem no centro do elemento
        element_par.style.transform = "scaleX(-1)"; // Espelha a imagem horizontalmente





        backgroundToChange.addEventListener("click", () => {
          backgroundToChange.style.backgroundImage = `url("../assets/book_details/figtoys.svg")`;
          imgToHide.style.display = "flex"
          check_figuras(backgroundToChange)
        })




        element_par.addEventListener("click", () => {
          element_par.style.backgroundImage = `url("../assets/book_details/figtoys.svg")`;
          element_par.style.display = "flex"
          element_par.style.fontSize = "8pt"
          element_par.style.transform = "scaleX(1)"; 
          check_figuras(element_par)
        })



        /**********************************FINALIZAR LÓGICA DE JOGO DE MEMÓRIA, CHECAR ID DOS ELEMENTOS CLICADOS */



      }

    }
  //ESQUEMATIZAÇÃO DO JOGO DE MEMÓRIA - FIM//




  //chooseRandomtoys();
  placeToyInputs();

  setTimeout(() => {
    memoryGameInitializeHalf();
  }, 1500);

  button_continue_start_game_12.addEventListener("click", () => {
    lorenzo_start_game_12.parentNode.removeChild(lorenzo_start_game_12);
    button_continue_start_game_12.parentNode.removeChild(button_continue_start_game_12);
    memoryGameInitializeFull();
  })



};
//FUNÇÃO QUE RENDERIZA O GAME #6 - FIM//

//TORNA ACESSÍVEL PARA ARQUIVOS EXTERNOS
export default game12;
