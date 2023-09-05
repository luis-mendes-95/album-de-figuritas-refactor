import game3 from "./game3.js";

//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - INICIO//
let body = document.querySelector("body");
let container = document.querySelector(".container");
let contentDiv = document.querySelector(".content");
//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - FIM//

//FUNÇÃO QUE RENDERIZA O GAME #2 - INICIO//
const game2 = () => {

    //LIMPA OS ELEMENTOS DO JOGO ANTERIOR - INICIO//
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //LIMPA OS ELEMENTOS DO JOGOA ANTERIOR - FIM//

    //RENDERIZA ELEMENTOS DO BACKGROUND - INICIO//
    const backgroundImage = "../assets/backgrounds/background_game1.png";
    container.style.backgroundImage = `url(${backgroundImage})`;
    const background_book = document.createElement("img");
    background_book.classList.add("background_book_game2");
    background_book.src = "../assets/backgrounds/album_animals_toys.png";
    container.appendChild(background_book);
    //RENDERIZA ELEMENTOS DO BACKGROUND - FIM//

    //BANCO DE DADOS DE BRINQUEDOS - INICIO//
    const toys = [
        "bola",
        "boneca",
        "cavalo de pau",
        "corda",
        "dado",
        "dominó",
        "estilingue",
        "ioiô",
        "patinete",
        "patins",
        "peteca",
        "pião",
        "pipa",
        "skate"
    ];
    //BANCO DE DADOS DE BRINQUEDOS - FIM//



    //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER BRINQUEDOS ALEATÓRIOS - INICIO//
    let randomToys = [];
    //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER BRINQUEDOS ALEATÓRIOS - FIM//



    //CRIA UM BANCO DE DADOS VAZIO PARA AS IMAGENS DOS BRINQUEDOS - INICIO//
    let toysImages = [];
    //CRIA UM BANCO DE DADOS VAZIO PARA AS IMAGENS DOS BRINQUEDOS - FIM//






    //FUNÇÃO QUE ESCOLHE ALEATORIAMENTE 12 BRINQUEDOS - INICIO//
    const chooseRandomToys = () => {

        while (randomToys.length < 12) {
        const randomIndex = Math.floor(Math.random() * toys.length);
        const randomToy = toys[randomIndex];

        if (!randomToys.includes(randomToy)) {
            randomToys.push(randomToy);
            toysImages.push(`../toys/${randomToy}.svg`);
        }
        }
    };
    //FUNÇÃO QUE ESCOLHE ALEATORIAMENTE 12 BRINQUEDOS - FIM//





    //FUNÇÃO QUE RESETA O JOGO APENAS COM OS BRINQUEDOS INCORRETOS - INICIO//
    const resetGameWrongToys = () => {

        const divToysImages = document.querySelector(".divToysImages")
        const divSlotToys = document.querySelector(".divSlotToys")

        divSlotToys.childNodes.forEach((slot) => {

        if(slot.id.split("_slot")[0] === slot.lastChild.id.split("_figurinha")[0]) {
            console.log("CORRETO!")
        } else {        
            const imgPicToy = slot.lastChild.querySelector(".imgPicToyAfterDropped");
            if(imgPicToy){
            imgPicToy.removeAttribute("class")
            imgPicToy.classList.remove("imgPicToyAfterDropped")
            imgPicToy.classList.add("imgPicToy")
            }
            slot.lastChild.classList.remove("divImgToyAfterDropped")
            slot.lastChild.classList.add("divImgToy")
            divToysImages.appendChild(slot.lastChild)
        }
        
        })
    }
    //FUNÇÃO QUE RESETA O JOGO APENAS COM OS BRINQUEDOS INCORRETOS - FIM//




  //FUNÇÃO QUE VERIFICA SE OS BRINQUEDOS INSERIDOS ESTÃO CORRETOS - INICIO //
  const renderResult = (total_correct) => {

    const divToysImages = document.querySelector(".divToysImages")

    if(total_correct === 12) {

      const lorenzo_correct = document.createElement("img")
      lorenzo_correct.classList.add("lorenzo_correct")
      lorenzo_correct.src = "../assets/lorenzo/lorenzo_ok1.png"

      const continue_button = document.createElement("img")
      continue_button.classList.add("continue_button")
      continue_button.src = "../assets/botoes/bt_continua.png"

      const verifyButton = divToysImages.querySelector(".verifyButton")
      if(verifyButton){
        divToysImages.removeChild(verifyButton)
      }

      continue_button.addEventListener("click", () => {
        game3();
      })

      divToysImages.append(lorenzo_correct, continue_button)

    } else if (total_correct < 12) {

      const lorenzo_incorrect = document.createElement("img")
      lorenzo_incorrect.classList.add("lorenzo_incorrect")
      lorenzo_incorrect.src = "../assets/lorenzo/lorenzo_ops.png"

      const verifyButton = divToysImages.querySelector(".verifyButton")
      if(verifyButton){
        divToysImages.removeChild(verifyButton)
      }

      divToysImages.appendChild(lorenzo_incorrect)

      setTimeout(() => {
        divToysImages.removeChild(lorenzo_incorrect)
        resetGameWrongToys();
      }, 4000);     

    }
  }
  //FUNÇÃO QUE VERIFICA SE OS BRINQUEDOS INSERIDOS ESTÃO CORRETOS - INICIO //





    //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - INICIO //
    const renderVerifyButton = (total_inserted, total_correct) => {
        if (total_inserted === 12) {
          const verifyButton = document.createElement("img")
          verifyButton.classList.add("verifyButton")
          verifyButton.src = "../assets/botoes/bt_verifica.png"
    
          verifyButton.addEventListener("click", () => {
            renderResult(total_correct)
          })
      
          const divToysImages = document.querySelector(".divToysImages")
          divToysImages.appendChild(verifyButton)
        } else if (total_inserted < 12){
          const divToysImages = document.querySelector(".divToysImages")
          const verifyButton = divToysImages.querySelector(".verifyButton")
          if(verifyButton){
            divToysImages.removeChild(verifyButton)
          }
    
        }
    
      }
      //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - FIM //






  //FUNÇÃO QUE VERIFICA SE OS BRINQUEDOS ENCAIXADOS ESTÃO CORRETOS - INICIO//
  const checkRightToysSlots = (element) => {

    let total_inserted = 0
    let total_correct = 0

    element.childNodes.forEach((slot) => {

      const toy_slot_name = slot.id.split("_slot")[0]

      const toy_inserted = slot.querySelector(".divImgToy")

      if (toy_inserted) {
        const toy_inserted_name = toy_inserted.id.split("_figurinha")[0]
        total_inserted += 1

        if (toy_slot_name === toy_inserted_name) {
          total_correct += 1
        }
      }


    })

    console.log("Brinquedos inseridos: " + total_inserted)
    console.log("Brinquedos corretos: " + total_correct)

    renderVerifyButton(total_inserted, total_correct)

  };
  //FUNÇÃO QUE VERIFICA SE OS BRINQUEDOS ENCAIXADOS ESTÃO CORRETOS - FIM//





    //FUNÇÃO QUE EMBARALHA OS 12 BRINQUEDOS ALEATÓRIOS ESCOLHIDOS - APENAS PARA EMBARALHAR AS FIGURINHAS - INICIO//
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
      }
    //FUNÇÃO QUE EMBARALHA OS 12 BRINQUEDOS ALEATÓRIOS ESCOLHIDOS - APENAS PARA EMBARALHAR AS FIGURINHAS - FIM//






      //FUNÇÃO QUE CRIA OS CONTAINERS COM FIGURINHAS DE ANIMAIS ARRASTÁVEIS E SLOTS RECEBEDORES- INICIO//
        const placeToyInputs = () => {


            //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - INICIO//
            const divToysImages = document.createElement("div")
            divToysImages.classList.add("divToysImages")
            divToysImages.classList.add("containerDroppable")
            divToysImages.id = "figurinhasIniciais" //CADA "containerX" poderá receber uma figurinha. Apenas esse receberá várias.
            //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - FIM//


            //FUNÇÃO QUE POSSIBILITA ARRASTAR AS FIGURINHAS DE VOLTA PARA DENTRO - INICIO// 
            divToysImages.addEventListener("dragover", (e) => {
                e.preventDefault();
            });
            divToysImages.addEventListener("drop", (e) => {
                e.preventDefault();
                const draggableId = e.dataTransfer.getData("text/plain");
                const draggedElement = document.getElementById(draggableId)
                const imgPicToy = draggedElement.querySelector(".imgPicToyAfterDropped");
                if(imgPicToy){
                imgPicToy.removeAttribute("class")
                imgPicToy.classList.remove("imgPicToyAfterDropped")
                imgPicToy.classList.add("imgPicToy")
                }

                draggedElement.classList.remove("divImgToyAfterDropped")

                draggedElement.classList.add("divImgToy")

                divToysImages.appendChild(draggedElement)
                checkRightToysSlots(divSlotToys)
            })
            //FUNÇÃO QUE POSSIBILITA ARRASTAR AS FIGURINHAS DE VOLTA PARA DENTRO - FIM// 


            //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - INICIO//
            const divSlotToys = document.createElement("div");
            divSlotToys.classList.add("divSlotToys");
            //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - FIM//


            //CRIA UMA LISTA DE 12 FIGURINHAS EMBARALHADAS - INICIO//
            let toysRandomOrder = randomToys;
            toysRandomOrder = shuffleArray(toysRandomOrder);
            //CRIA UMA LISTA DE 12 FIGURINHAS EMBARALHADAS - FIM//


            //LOOP PARA RENDERIZAR OS ARRASTÁVEIS - INICIO//
            setTimeout(() => {
            toysRandomOrder = shuffleArray(toysRandomOrder);
            for (let i = 0; i < toysRandomOrder.length; i++) {


                //DIV ARRASTÁVEL QUE CONTERÁ A FIGURINHA DO ANIMAL - INICIO//
                const divImgToy = document.createElement("div")
                divImgToy.classList.add("divImgToy")
                divImgToy.classList.add("draggable")
                divImgToy.draggable = true
                divImgToy.id = `${toysRandomOrder[i]}_figurinha`
                //DIV ARRASTÁVEL QUE CONTERÁ A FIGURINHA DO ANIMAL - FIM//


                //FUNÇÃO QUE TORNA A FIGURINHA ARRASTÁVEL - INÍCIO//
                divImgToy.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", divImgToy.id)
                })
                //FUNÇÃO QUE TORNA A FIGURINHA ARRASTÁVEL - FIM//


                //BACKGROUND DA FIGURINHA DO ANIMAL - INICIO//
                const imgToy = document.createElement("img")
                imgToy.classList.add("imgToy")
                imgToy.src = "../assets/book_details/figtoys.svg"
                //BACKGROUND DA FIGURINHA DO ANIMAL - FIM//


                //IMAGEM DO ANIMAL QUE SERÁ INSERIDA NA FIGURINHA - INICIO//
                const imgPicToy = document.createElement("img")
                imgPicToy.classList.add("imgPicToy")
                imgPicToy.src = `../assets/brinquedos/${toysRandomOrder[i]}.svg` 
                //IMAGEM DO ANIMAL QUE SERÁ INSERIDA NA FIGURINHA - FIM//


                //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - INICIO//
                divImgToy.append(imgToy, imgPicToy)
                //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - FIM//


                //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - INICIO//
                divToysImages.append(divImgToy);
                //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - FIM//

            }
            }, 1000);
            //LOOP PARA RENDERIZAR OS ARRASTÁVEIS - FIM//


            //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - INICIO//
            setTimeout(() => {
            for (let i = 0; i < randomToys.length; i++) {


            //SLOT PARA SOLTAR ANIMAIS - INÍCIO
            const divSlotToy = document.createElement("div")
            divSlotToy.classList.add("divSlotToy")
            divSlotToy.classList.add("containerDroppable")
            divSlotToy.id = `${randomToys[i]}_slot`
            //SLOT PARA SOLTAR ANIMAIS - FIM


            //FUNÇÃO QUE PERMITIRÁ ARRASTAR AS FIGURINHAS PARA DENTRO DO SLOT - INICIO//
            divSlotToy.addEventListener("dragover", (e) => {
                e.preventDefault();
            })

            divSlotToy.addEventListener("drop", (e) => {
                e.preventDefault();
                const existingDivImgToy = divSlotToy.querySelector(".divImgToy");
                if(existingDivImgToy){
                return;
                }
                const draggableId = e.dataTransfer.getData("text/plain");
                const draggedElement = document.getElementById(draggableId);
                const imgPicToy = draggedElement.querySelector(".imgPicToy");
                //imgPicToy.removeAttribute("class")
                //draggedElement.removeAttribute("class")
                imgPicToy.classList.add("imgPicToyAfterDropped")
                draggedElement.classList.add("divImgToyAfterDropped")
                draggedElement.classList.add("draggable")
                draggedElement.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", draggedElement.id)
                })
                divSlotToy.appendChild(draggedElement)
                checkRightToysSlots(divSlotToys)
            })
            //FUNÇÃO QUE PERMITIRÁ ARRASTAR AS FIGURINHAS PARA DENTRO DO SLOT - FIM//
            
            
            //NÚMERO QUE FICA DENTRO DO SLOT CENTRALIZADO - INÍCIO
            const numberToy = document.createElement("h2")
            numberToy.classList.add("numberToy")
            numberToy.innerText = i + 1
            //NÚMERO QUE FICA DENTRO DO SLOT CENTRALIZADO - FIM
            
            
            //TEXTO QUE FICA ABAIXO DO SLOT - INÍCIO
            const textToy = document.createElement("p")
            textToy.classList.add(`textToy`)
            textToy.innerText = `${randomToys[i].toUpperCase()}`    
            //TEXTO QUE FICA ABAIXO DO SLOT - FIM
            
                    
            //INSERÇÃO DO NÚMERO DO ANIMAL E DO TEXTO NO SLOT SOLTÁVEL DOS ANIMAIS - INICIO//
            divSlotToy.append(numberToy, textToy);
            //INSERÇÃO DO NÚMERO DO ANIMAL E DO TEXTO NO SLOT SOLTÁVEL DOS ANIMAIS - FIM//
            
            
            //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ANIMAIS - INICIO//
            divSlotToys.appendChild(divSlotToy);
            //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ANIMAIS - FIM//
            
            
            
            
            }
            }, 500);
            //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - FIM//

            //INSERÇÃO
            container.appendChild(divToysImages);
            setTimeout(() => {
                container.appendChild(divSlotToys);
            }, 1500);


        };
        //FUNÇÃO QUE CRIA OS CONTAINERES COM FIGURINHAS DE ANIMAIS ARRASTÁVEIS E SLOTS RECEBEDORES - FIM//


        chooseRandomToys();
        placeToyInputs();


};
//FUNÇÃO QUE RENDERIZA O GAME #2 - FIM//


//TORNA ACESSÍVEL PARA ARQUIVOS EXTERNOS
export default game2;