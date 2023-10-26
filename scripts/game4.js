import game5 from "./game5.js";

//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - INICIO//
let body = document.querySelector("body");
let container = document.querySelector(".container");
let contentDiv = document.querySelector(".content");
//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - FIM//




//FUNÇÃO QUE RENDERIZA O GAME #2 - INICIO//
const game4 = () => {




    //LIMPA OS ELEMENTOS DO JOGO ANTERIOR - INICIO//
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //LIMPA OS ELEMENTOS DO JOGOA ANTERIOR - FIM//



    //APENAS PARA PULAR PARA O JOGO 5//
    //const botao_pula = document.createElement("button");
    //botao_pula.style.position = "absolute";
    //botao_pula.style.top = "0";
    //botao_pula.style.left = "30%";
    //botao_pula.innerText = "Jogo 5";
    //botao_pula.style.zIndex = "999"
    //botao_pula.addEventListener("click", () => {
    //  game5();
    //});
    //container.appendChild(botao_pula);
    //APENAS PARA PULAR PARA O JOGO 5//



    //RENDERIZA ELEMENTOS DO BACKGROUND - INICIO//
    const backgroundImage = "../assets/backgrounds/background_game1.png";
    container.style.backgroundImage = `url(${backgroundImage})`;
    const background_book = document.createElement("img");
    background_book.classList.add("background_book_game2");
    background_book.src = "../assets/backgrounds/album_transports.png";
    container.appendChild(background_book);
    //RENDERIZA ELEMENTOS DO BACKGROUND - FIM//




    //RENDERIZA O LORENZO + O BOTÃO DE CONTINUAR - INICIO//
    const divLorenzoStart = document.createElement("div")
    divLorenzoStart.classList.add("divLorenzoStart")
    const imgLorenzo = document.createElement("img")
    imgLorenzo.classList.add("imgLorenzo")
    imgLorenzo.src = "../assets/lorenzo/lorenzo_anota.png"
    const buttonContinue = document.createElement("img")
    buttonContinue.classList.add("buttonContinue")
    buttonContinue.src = "../assets/botoes/bt_continua.png"
    divLorenzoStart.append(imgLorenzo, buttonContinue)
    container.appendChild(divLorenzoStart)

    buttonContinue.addEventListener("click", () => {
      container.removeChild(divLorenzoStart)
    })
    //RENDERIZA O LORENZO + O BOTÃO DE CONTINUAR - FIM//




    //BANCO DE DADOS DE ItemES - INICIO//
    const transports = [
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
    //BANCO DE DADOS DE ItemES - FIM//



  

    //BANCO DE DADOS DE BRINQUEDOS - INICIO//
      const toys = [
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
    //BANCO DE DADOS DE BRINQUEDOS - FIM//




    //BANCO DE DADOS DE ANIMAIS - INICIO//
    const animals = [
      "abeja",
      "águila",
      "araña",
      "guacamayo",
      "avestruz",
      "ballena",
      "cucaracha",
      "escarabajo",
      "cabra",
      "perro",
      "camello",
      "caballo",
      "serpiente",
      "conejo",
      "búho",
      "dinosaurio",
      "dragón",
      "elefante",
      "ardilla",
      "foca",
      "hormiga",
      "gallina",
      "gallo",
      "gato",
      "jirafa",
      "gorila",
      "hipopótamo",
      "cocodrilo",
      "burro",
      "mariquita",
      "lagarto",
      "león",
      "mono",
      "mosquito",
      "leopardo",
      "oveja",
      "loro",
      "pato",
      "pavo real",
      "pez",
      "pulpo",
      "cerdo",
      "zorro",
      "ratón",
      "tamarín",
      "sapo",
      "tortuga",
      "armadillo",
      "tucán",
      "oso",
      "buitre",
      "vaca",
      "cebra"
    ];
    //BANCO DE DADOS DE ANIMAIS - FIM//




    //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER FIGURINHAS COM NOMES DE ANIMAIS/BRINQUEDOS/ItemES ALEATÓRIOS - INICIO//
    let randomItems = [];
    let randomShuffledItems = [];
    //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER FIGURINHAS COM NOMES DE ANIMAIS/BRINQUEDOS/ItemES ALEATÓRIOS - FIM//





    //FUNÇÃO QUE ESCOLHE ITENS ALEATORIAMENTE - INICIO//
    const chooseRandomItems = (items) => {

      let i = 0

      while (i < 5) {
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];
    
        if (!randomItems.includes(randomItem)) {
          randomItems.push(randomItem);
          i++
        }
      }
    };
    //FUNÇÃO QUE ESCOLHE ITENS ALEATORIAMENTE - FIM//





    //FUNÇÃO QUE EMBARALHA OS ITENS - INICIO//
    const shuffleItems = (items) => {

      let i = 0

      while (i < 15) {

        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];
      
        if (!randomShuffledItems.includes(randomItem)) {
          randomShuffledItems.push(randomItem);

          i++
        }
  
      }

    };
    //FUNÇÃO QUE EMBARALHA OS ITENS - FIM//




    //PREENCHIMENTO DO ARRAY DE ITENS ALEATÓRIOS - INICIO//
    chooseRandomItems(transports);
    chooseRandomItems(toys);
    chooseRandomItems(animals);
    shuffleItems(randomItems)
    //PREENCHIMENTO DO ARRAY DE ITENS ALEATÓRIOS - FIM//


    //FUNÇÃO QUE RESETA O JOGO APENAS COM OS ITENS INCORRETOS - INICIO//
    const resetGameWrongItems = () => {

      const divFigureNames = document.querySelector(".divFigureNames")

      const divSlotFigureNamesTransports = document.querySelector(".divSlotFigureNamesTransports")
      const divSlotFigureNamesToys = document.querySelector(".divSlotFigureNamesToys")
      const divSlotFigureNamesAnimals = document.querySelector(".divSlotFigureNamesAnimals")



      divSlotFigureNamesTransports.childNodes.forEach((transportSlot) => {
      
        if (transports.includes(transportSlot.firstChild.id.split("_figurinha")[0])){

        } else {

          transportSlot.firstChild.classList.remove("divTextFigureNameAfterDropped")
          divFigureNames.appendChild(transportSlot.firstChild)
        }
      })


      divSlotFigureNamesToys.childNodes.forEach((toySlot) => {

        if (toys.includes(toySlot.firstChild.id.split("_figurinha")[0])){

        } else {

          toySlot.firstChild.classList.remove("divTextFigureNameAfterDropped")
          divFigureNames.appendChild(toySlot.firstChild)
        }
      })


      divSlotFigureNamesAnimals.childNodes.forEach((animalSlot) => {

        if (animals.includes(animalSlot.firstChild.id.split("_figurinha")[0])){

        } else {

          animalSlot.firstChild.classList.remove("divTextFigureNameAfterDropped")
          divFigureNames.appendChild(animalSlot.firstChild)
        }
      })
  }
  //FUNÇÃO QUE RESETA O JOGO APENAS COM OS ITENS INCORRETOS - FIM//


    //FUNÇÃO QUE VERIFICA SE OS ITENS INSERIDOS ESTÃO CORRETOS - INICIO //
    const renderResult = (total_animal_correct, total_toys_correct, total_transports_correct) => {

      const divFigureNames = document.querySelector(".divFigureNames")

      const total_geral = total_animal_correct + total_toys_correct + total_transports_correct

      if(total_geral === 15) {

        const lorenzo_correct = document.createElement("img")
        lorenzo_correct.classList.add("lorenzo_correct")
        lorenzo_correct.src = "../assets/lorenzo/lorenzo_ok1.png"

        const continue_button = document.createElement("img")
        continue_button.classList.add("continue_button")
        continue_button.src = "../assets/botoes/bt_continua.png"

        const verifyButton = divFigureNames.querySelector(".verifyButton")
        if(verifyButton){
          divFigureNames.removeChild(verifyButton)
        }

        continue_button.addEventListener("click", () => {
          game5();
        })

        divFigureNames.append(lorenzo_correct, continue_button)

      } else if (total_geral < 15) {

        const lorenzo_incorrect = document.createElement("img")
        lorenzo_incorrect.classList.add("lorenzo_incorrect")
        lorenzo_incorrect.src = "../assets/lorenzo/lorenzo_ops.png"

        const verifyButton = divFigureNames.querySelector(".verifyButton")
        if(verifyButton){
          divFigureNames.removeChild(verifyButton)
        }

        divFigureNames.appendChild(lorenzo_incorrect)

        setTimeout(() => {
          divFigureNames.removeChild(lorenzo_incorrect)
          resetGameWrongItems();
        }, 4000);     

      }
    }
    //FUNÇÃO QUE VERIFICA SE OS ITENS INSERIDOS ESTÃO CORRETOS - FIM //


    //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - INICIO //
    const renderVerifyButton = (total_animal_inserted, total_transports_inserted, total_toys_inserted, total_animal_correct, total_toys_correct, total_transports_correct) => {
      
      if (total_animal_inserted + total_transports_inserted + total_toys_inserted === 15)  {

        const verifyButton = document.createElement("img")
        verifyButton.classList.add("verifyButton")
        verifyButton.src = "../assets/botoes/bt_verifica.png"
  
        verifyButton.addEventListener("click", () => {
          renderResult(total_animal_correct, total_toys_correct, total_transports_correct)
        })

    
        const divFigureNames = document.querySelector(".divFigureNames")
        divFigureNames.appendChild(verifyButton)
      } else if (total_animal_inserted < 5 || total_transports_inserted < 5 || total_toys_inserted < 5) {
        const divFigureNames = document.querySelector(".divFigureNames")
        const verifyButton = divFigureNames.querySelector(".verifyButton")
        if(verifyButton){
          divFigureNames.removeChild(verifyButton)
        }
  
      }
  
    }
    //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - FIM //


    //FUNÇÃO QUE VERIFICA SE OS ITENS ENCAIXADOS ESTÃO CORRETOS - INICIO//
    const checkRightItemsSlots = () => {

      let total_animal_inserted = 0
      let total_animal_correct = 0

      let total_toys_inserted = 0
      let total_toys_correct = 0

      let total_transports_inserted = 0
      let total_transports_correct = 0

      let divSlotFigureNamesAnimals = document.querySelector(".divSlotFigureNamesAnimals")
      let divSlotFigureNamesTransports = document.querySelector(".divSlotFigureNamesTransports")
      let divSlotFigureNamesToys = document.querySelector(".divSlotFigureNamesToys")


      divSlotFigureNamesAnimals.childNodes.forEach((animalSlot) => {

        const item_inserted = animalSlot.querySelector(".divTextFigureName")


        if (item_inserted) {
          const item_inserted_name = item_inserted.id.split("_figurinha")[0]
          const isAnimal = animals.includes(item_inserted_name)
 
          total_animal_inserted += 1

          if (isAnimal) {
            total_animal_correct += 1
          }
        }


      })

      divSlotFigureNamesTransports.childNodes.forEach((transportSlot) => {

        const item_inserted = transportSlot.querySelector(".divTextFigureName")

        if (item_inserted) {
          const item_inserted_name = item_inserted.id.split("_figurinha")[0]
          const isTransport = transports.includes(item_inserted_name)
          total_transports_inserted += 1

          if (isTransport) {
            total_transports_correct += 1
          }
        }


      })

      divSlotFigureNamesToys.childNodes.forEach((toySlot) => {

        const item_inserted = toySlot.querySelector(".divTextFigureName")

        if (item_inserted) {
          const item_inserted_name = item_inserted.id.split("_figurinha")[0]
          const isToy = toys.includes(item_inserted_name)
          total_toys_inserted += 1

          if (isToy) {
            total_toys_correct += 1
          }
        }


      })

      renderVerifyButton(total_animal_inserted, total_transports_inserted, total_toys_inserted, total_animal_correct, total_toys_correct, total_transports_correct)

    };
    //FUNÇÃO QUE VERIFICA SE OS ITENS ENCAIXADOS ESTÃO CORRETOS - FIM//


  //FUNÇÃO QUE CRIA OS CONTAINERS COM FIGURINHAS COM NOME DE ANIMAIS, BRINQUEDOS E ItemES ARRASTÁVEIS E SLOTS RECEBEDORES- INICIO//
    const placeFigureNamesInputs = () => {


      //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - INICIO//
      const divFigureNames = document.createElement("div")
      divFigureNames.classList.add("divFigureNames")
      divFigureNames.classList.add("containerDroppable")
      divFigureNames.id = "figurinhasIniciais" //CADA "containerX" poderá receber uma figurinha. Apenas esse receberá várias.
      //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - FIM//


      //FUNÇÃO QUE POSSIBILITA ARRASTAR AS FIGURINHAS DE VOLTA PARA DENTRO - INICIO// 
      divFigureNames.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
            
      divFigureNames.addEventListener("drop", (e) => {

        e.preventDefault();

        const draggableId = e.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(draggableId)
        const textFigureName = draggedElement.querySelector(".textFigureNameAfterDropped");

        if(textFigureName){
          textFigureName.removeAttribute("class")
          textFigureName.classList.remove("textFigureNameAfterDropped")
          textFigureName.classList.add("textFigureName")
        }

        draggedElement.classList.remove("divTextFigureNameAfterDropped")

        draggedElement.classList.add("divTextFigureName")

        divFigureNames.appendChild(draggedElement)
        
      })
      
      //FUNÇÃO QUE POSSIBILITA ARRASTAR AS FIGURINHAS DE VOLTA PARA DENTRO - FIM// 


            //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS DE ANIMAIS ONDE SERÃO SOLTAS - INICIO//
            const animals_title = document.createElement("img");
            animals_title.classList.add("animals_title")
            animals_title.src = "../assets/book_details/tit_animais.png"
            const divSlotFigureNamesAnimals = document.createElement("div");
            divSlotFigureNamesAnimals.classList.add("divSlotFigureNamesAnimals");
            //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS DE ANIMAIS ONDE SERÃO SOLTAS - FIM//


            //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS DE TRANSPORTES ONDE SERÃO SOLTAS - INICIO//
            const divSlotFigureNamesTransports = document.createElement("div");
            const transports_title = document.createElement("img");
            transports_title.classList.add("transports_title")
            transports_title.src = "../assets/book_details/tit_transportes.png"
            divSlotFigureNamesTransports.classList.add("divSlotFigureNamesTransports");
            //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS DE TRANSPORTES ONDE SERÃO SOLTAS - FIM//


            //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS DE BRINQUEDOS ONDE SERÃO SOLTAS - INICIO//
            const divSlotFigureNamesToys = document.createElement("div");
            const toys_title = document.createElement("img");
            toys_title.classList.add("toys_title")
            toys_title.src = "../assets/book_details/tit_brinquedos.png"
            divSlotFigureNamesToys.classList.add("divSlotFigureNamesToys");
            //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS DE BRINQUEDOS ONDE SERÃO SOLTAS - FIM//


            //CRIAÇÃO DA DIV QUE TERÁ OS SLOTS DO TIPO ANIMAIS - INICIO //
            const divSlotsTypeAnimal = document.createElement("div")
            divSlotsTypeAnimal.classList.add("divSlotsTypeAnimal")
            //CRIAÇÃO DA DIV QUE TERÁ OS SLOTS DO TIPO ANIMAIS - FIM //


            //CRIAÇÃO DA DIV QUE TERÁ OS SLOTS DO TIPO BRINQUEDOS - INICIO //
            const divSlotsTypeToys = document.createElement("div")
            divSlotsTypeToys.classList.add("divSlotsTypeToys")
            //CRIAÇÃO DA DIV QUE TERÁ OS SLOTS DO TIPO BRINQUEDOS - FIM //


            //CRIAÇÃO DA DIV QUE TERÁ OS SLOTS DO TIPO TRANSPORTES - INICIO //
            const divSlotsTypeTransports = document.createElement("div")
            divSlotsTypeTransports.classList.add("divSlotsTypeTransports")
            //CRIAÇÃO DA DIV QUE TERÁ OS SLOTS DO TIPO TRANSPORTES - FIM //



            //LOOP PARA RENDERIZAR OS ITENS ARRASTÁVEIS- INICIO//
            setTimeout(() => {
            for (let i = 0; i < randomShuffledItems.length; i++) {


                //DIV ARRASTÁVEL QUE CONTERÁ FIGURINHA COM NOME DO ANIMAL/ItemE/BRINQUEDO - INICIO//
                const divTextFigureName = document.createElement("div")
                divTextFigureName.classList.add("divTextFigureName")
                divTextFigureName.classList.add("draggable")
                divTextFigureName.draggable = true
                divTextFigureName.id = `${randomShuffledItems[i]}_figurinha`
                //DIV ARRASTÁVEL QUE CONTERÁ FIGURINHA COM NOME DO ANIMAL/ItemE/BRINQUEDO - FIM//


                //FUNÇÃO QUE TORNA A FIGURINHA ARRASTÁVEL - INÍCIO//
                divTextFigureName.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", divTextFigureName.id)
                })
                //FUNÇÃO QUE TORNA A FIGURINHA ARRASTÁVEL - FIM//


                //BACKGROUND DA FIGURINHA DO ITEM - INICIO//
                const imgBackgroundItem = document.createElement("img")
                imgBackgroundItem.classList.add("imgBackgroundItem")
                imgBackgroundItem.src = "../assets/book_details/dragword.svg"
                //BACKGROUND DA FIGURINHA DO ITEM - FIM//


                //NOME DO ITEM QUE SERÁ INSERIDO NA FIGURINHA - INICIO//
                const textFigureName = document.createElement("p")
                textFigureName.classList.add("textFigureName")
                textFigureName.innerText = `${randomShuffledItems[i].toUpperCase()}` 
                //NOME DO ITEM QUE SERÁ INSERIDO NA FIGURINHA - FIM//


                //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - INICIO//
                divTextFigureName.append(imgBackgroundItem, textFigureName)
                //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - FIM//


                //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - INICIO//
                divFigureNames.append(divTextFigureName);
                //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - FIM//

            }
            }, 1000);
            //LOOP PARA RENDERIZAR OS ITENS ARRASTÁVEIS - FIM//










            //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS ANIMAIS - INICIO//
            setTimeout(() => {
              for (let i = 0; i < 5; i++) {
  
  
              //SLOT PARA SOLTAR ITENS - INÍCIO
              const divSlotFigureName = document.createElement("div")
              divSlotFigureName.classList.add("divSlotFigureName")
              divSlotFigureName.classList.add("containerDroppable")
              divSlotFigureName.id = `animal_slot`
              //SLOT PARA SOLTAR ITENS - FIM
  
  
              //FUNÇÃO QUE PERMITIRÁ ARRASTAR AS FIGURINHAS PARA DENTRO DO SLOT - INICIO//
              divSlotFigureName.addEventListener("dragover", (e) => {
                  e.preventDefault();
              })
  
              divSlotFigureName.addEventListener("drop", (e) => {
                  e.preventDefault();
                  const existingDivFigureName = divSlotFigureName.querySelector(".divTextFigureName");
                  if(existingDivFigureName){
                  return;
                  }
                  const draggableId = e.dataTransfer.getData("text/plain");
                  const draggedElement = document.getElementById(draggableId);
                  const textFigureName = draggedElement.querySelector(".textFigureName");
                  //textFigureName.removeAttribute("class")
                  //draggedElement.removeAttribute("class")
                  textFigureName.classList.add("textFigureNameAfterDropped")
                  draggedElement.classList.add("divTextFigureNameAfterDropped")
                  draggedElement.classList.add("draggable")
                  draggedElement.addEventListener("dragstart", (e) => {
                  e.dataTransfer.setData("text/plain", draggedElement.id)
                  })
                  divSlotFigureName.appendChild(draggedElement)
                  checkRightItemsSlots()
              })
              //FUNÇÃO QUE PERMITIRÁ ARRASTAR AS FIGURINHAS PARA DENTRO DO SLOT - FIM//
  
  
  
              //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ITENS - INICIO//
              divSlotFigureNamesAnimals.appendChild(divSlotFigureName);
              //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ITENS - FIM//
              
              
              }
              }, 500);
              //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS ANIMAIS - FIM//





            //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS TRANSPORTES - INICIO//
            setTimeout(() => {
            for (let i = 0; i < 5; i++) {


            //SLOT PARA SOLTAR ITENS - INÍCIO
            const divSlotFigureName = document.createElement("div")
            divSlotFigureName.classList.add("divSlotFigureName")
            divSlotFigureName.classList.add("containerDroppable")
            divSlotFigureName.id = `transport_slot`
            //SLOT PARA SOLTAR ITENS - FIM


            //FUNÇÃO QUE PERMITIRÁ ARRASTAR AS FIGURINHAS PARA DENTRO DO SLOT - INICIO//
            divSlotFigureName.addEventListener("dragover", (e) => {
                e.preventDefault();
            })

            divSlotFigureName.addEventListener("drop", (e) => {
                e.preventDefault();
                const existingDivFigureName = divSlotFigureName.querySelector(".divTextFigureName");
                if(existingDivFigureName){
                return;
                }
                const draggableId = e.dataTransfer.getData("text/plain");
                const draggedElement = document.getElementById(draggableId);
                const textFigureName = draggedElement.querySelector(".textFigureName");
                //textFigureName.removeAttribute("class")
                //draggedElement.removeAttribute("class")
                textFigureName.classList.add("textFigureNameAfterDropped")
                draggedElement.classList.add("divTextFigureNameAfterDropped")
                draggedElement.classList.add("draggable")
                draggedElement.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", draggedElement.id)
                })
                divSlotFigureName.appendChild(draggedElement)
                checkRightItemsSlots()
            })
            //FUNÇÃO QUE PERMITIRÁ ARRASTAR AS FIGURINHAS PARA DENTRO DO SLOT - FIM//



            //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ITENS - INICIO//
            divSlotFigureNamesTransports.appendChild(divSlotFigureName);
            //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ITENS - FIM//
            
            
            }
            }, 500);
            //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS TRANSPORTES - FIM//




            //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS BRINQUEDOS - INICIO//
            setTimeout(() => {
              for (let i = 0; i < 5; i++) {
  
  
              //SLOT PARA SOLTAR ITENS - INÍCIO
              const divSlotFigureName = document.createElement("div")
              divSlotFigureName.classList.add("divSlotFigureName")
              divSlotFigureName.classList.add("containerDroppable")
              divSlotFigureName.id = `toy_slot`
              //SLOT PARA SOLTAR ITENS - FIM
  
  
              //FUNÇÃO QUE PERMITIRÁ ARRASTAR AS FIGURINHAS PARA DENTRO DO SLOT - INICIO//
              divSlotFigureName.addEventListener("dragover", (e) => {
                  e.preventDefault();
              })
  
              divSlotFigureName.addEventListener("drop", (e) => {
                  e.preventDefault();
                  const existingDivFigureName = divSlotFigureName.querySelector(".divTextFigureName");
                  if(existingDivFigureName){
                  return;
                  }
                  const draggableId = e.dataTransfer.getData("text/plain");
                  const draggedElement = document.getElementById(draggableId);
                  const textFigureName = draggedElement.querySelector(".textFigureName");
                  //textFigureName.removeAttribute("class")
                  //draggedElement.removeAttribute("class")
                  textFigureName.classList.add("textFigureNameAfterDropped")
                  draggedElement.classList.add("divTextFigureNameAfterDropped")
                  draggedElement.classList.add("draggable")
                  draggedElement.addEventListener("dragstart", (e) => {
                  e.dataTransfer.setData("text/plain", draggedElement.id)
                  })
                  divSlotFigureName.appendChild(draggedElement)
                  checkRightItemsSlots()
              })
              //FUNÇÃO QUE PERMITIRÁ ARRASTAR AS FIGURINHAS PARA DENTRO DO SLOT - FIM//
  
  
  
              //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ITENS - INICIO//
              divSlotFigureNamesToys.appendChild(divSlotFigureName);
              //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ITENS - FIM//
              
              
              }
            }, 500);
            //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS BRINQUEDOS - FIM//
  

            //INSERÇÃO
            container.appendChild(divFigureNames);
            setTimeout(() => {
                container.append(divSlotFigureNamesAnimals, divSlotFigureNamesToys, divSlotFigureNamesTransports, animals_title, toys_title, transports_title);
            }, 1500);


      };
  //FUNÇÃO QUE CRIA OS CONTAINERES COM FIGURINHAS DE ANIMAIS ARRASTÁVEIS E SLOTS RECEBEDORES - FIM//


        placeFigureNamesInputs();


};
//FUNÇÃO QUE RENDERIZA O GAME #2 - FIM//


//TORNA ACESSÍVEL PARA ARQUIVOS EXTERNOS
export default game4;