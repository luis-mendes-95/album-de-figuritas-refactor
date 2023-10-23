import game3 from "./game3.js";
import game4 from "./game4.js";

//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - INICIO//
let body = document.querySelector("body");
let container = document.querySelector(".container");
//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - FIM//


//FUNÇÃO QUE RENDERIZA O GAME #1 - INICIO//
const game1 = () => {

      //LIMPA OS ELEMENTOS DO JOGO ANTERIOR - INICIO//
      while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //LIMPA OS ELEMENTOS DO JOGOA ANTERIOR - FIM//

      //APENAS PARA PULAR PARA O JOGO 4//
      //const botao_pula = document.createElement("button")
      //botao_pula.style.position = "absolute"
      //botao_pula.style.top = "0"
      //botao_pula.style.left = "30%"
      //botao_pula.innerText = "Jogo 4"
      //botao_pula.addEventListener("click", () =>{
      //  game4();
      //})
      //container.appendChild(botao_pula)
      //APENAS PARA PULAR PARA O JOGO 4//


  //RENDERIZA ELEMENTOS DO BACKGROUND - INICIO//
  const backgroundImage = "../assets/backgrounds/background_game1.png";
  container.style.backgroundImage = `url(${backgroundImage})`;
  const background_book = document.createElement("img");
  background_book.classList.add("background_book_game1");
  background_book.src = "../assets/backgrounds/album_transports.png";
  container.appendChild(background_book);
  //RENDERIZA ELEMENTOS DO BACKGROUND - FIM//


//BANCO DE DADOS DE TRANSPORTES - INICIO//
const Transports = [
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
  //BANCO DE DADOS DE TRANSPORTES - FIM//


  //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER TRANSPORTES ALEATÓRIOS - INICIO//
  let randomTransports = [];
  //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER TRANSPORTES ALEATÓRIOS - FIM//


  //CRIA UM BANCO DE DADOS VAZIO PARA AS IMAGENS DOS TRANSPORTES - INICIO//
  let TransportsImages = [];
  //CRIA UM BANCO DE DADOS VAZIO PARA AS IMAGENS DOS TRANSPORTES - FIM//


  //FUNÇÃO QUE ESCOLHE ALEATORIAMENTE 12 TRANSPORTES - INICIO//
  const chooseRandomTransports = () => {

    while (randomTransports.length < 12) {
      const randomIndex = Math.floor(Math.random() * Transports.length);
      const randomTransport = Transports[randomIndex];

      if (!randomTransports.includes(randomTransport)) {
        randomTransports.push(randomTransport);
        TransportsImages.push(`../veiculos/${randomTransport}.svg`);
      }
    }
  };
  //FUNÇÃO QUE ESCOLHE ALEATORIAMENTE 12 TRANSPORTES - FIM//







  //FUNÇÃO QUE RESETA O JOGO APENAS COM OS TRANSPORTES INCORRETOS - INICIO//
  const resetGameWrongTransports = () => {

    const divTransportsImages = document.querySelector(".divTransportsImages")
    const divSlotTransports = document.querySelector(".divSlotTransports")

    divSlotTransports.childNodes.forEach((slot) => {

      if(slot.id.split("_slot")[0] === slot.lastChild.id.split("_figurinha")[0]) {
      } else {        
        const imgPicTransport = slot.lastChild.querySelector(".imgPicTransportAfterDropped");
        if(imgPicTransport){
          imgPicTransport.removeAttribute("class")
          imgPicTransport.classList.remove("imgPicTransportAfterDropped")
          imgPicTransport.classList.add("imgPicTransport")
        }
        slot.lastChild.classList.remove("divImgTransportAfterDropped")
        slot.lastChild.classList.add("divImgTransport")
        divTransportsImages.appendChild(slot.lastChild)
      }
      


    })
  }
  //FUNÇÃO QUE RESETA O JOGO APENAS COM OS TRANSPORTES INCORRETOS - FIM//











  //FUNÇÃO QUE VERIFICA SE OS TRANSPORTES INSERIDOS ESTÃO CORRETOS - INICIO //
  const renderResult = (total_correct) => {

    const divTransportsImages = document.querySelector(".divTransportsImages")

    if(total_correct === 12) {

      const lorenzo_correct = document.createElement("img")
      lorenzo_correct.classList.add("lorenzo_correct")
      lorenzo_correct.src = "../assets/lorenzo/lorenzo_ok1.png"

      const continue_button = document.createElement("img")
      continue_button.classList.add("continue_button")
      continue_button.src = "../assets/botoes/bt_continua.png"

      const verifyButton = divTransportsImages.querySelector(".verifyButton")
      if(verifyButton){
        divTransportsImages.removeChild(verifyButton)
      }

      continue_button.addEventListener("click", () => {
        game4();
      })

      divTransportsImages.append(lorenzo_correct, continue_button)

    } else if (total_correct < 12) {

      const lorenzo_incorrect = document.createElement("img")
      lorenzo_incorrect.classList.add("lorenzo_incorrect")
      lorenzo_incorrect.src = "../assets/lorenzo/lorenzo_ops.png"

      const verifyButton = divTransportsImages.querySelector(".verifyButton")
      if(verifyButton){
        divTransportsImages.removeChild(verifyButton)
      }

      divTransportsImages.appendChild(lorenzo_incorrect)

      setTimeout(() => {
        divTransportsImages.removeChild(lorenzo_incorrect)
        resetGameWrongTransports();
      }, 4000);     

    }
  }
  //FUNÇÃO QUE VERIFICA SE OS TRANSPORTES INSERIDOS ESTÃO CORRETOS - INICIO //








  //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - INICIO //
  const renderVerifyButton = (total_inserted, total_correct) => {
    if (total_inserted === 12) {
      const verifyButton = document.createElement("img")
      verifyButton.classList.add("verifyButton")
      verifyButton.src = "../assets/botoes/bt_verifica.png"

      verifyButton.addEventListener("click", () => {
        renderResult(total_correct)
      })
  
      const divTransportsImages = document.querySelector(".divTransportsImages")
      divTransportsImages.appendChild(verifyButton)
    } else if (total_inserted < 12){
      const divTransportsImages = document.querySelector(".divTransportsImages")
      const verifyButton = divTransportsImages.querySelector(".verifyButton")
      if(verifyButton){
        divTransportsImages.removeChild(verifyButton)
      }

    }

  }
  //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - FIM //






  //FUNÇÃO QUE VERIFICA SE OS TRANSPORTES ENCAIXADOS ESTÃO CORRETOS - INICIO//
  const checkRightTransportsSlots = (element) => {

    let total_inserted = 0
    let total_correct = 0

    element.childNodes.forEach((slot) => {

      const Transport_slot_name = slot.id.split("_slot")[0]

      const Transport_inserted = slot.querySelector(".divImgTransport")

      if (Transport_inserted) {
        const Transport_inserted_name = Transport_inserted.id.split("_figurinha")[0]
        total_inserted += 1

        if (Transport_slot_name === Transport_inserted_name) {
          total_correct += 1
        }
      }


    })

    renderVerifyButton(total_inserted, total_correct)

  };
  //FUNÇÃO QUE VERIFICA SE OS TRANSPORTES ENCAIXADOS ESTÃO CORRETOS - FIM//









  //FUNÇÃO QUE EMBARALHA OS 12 TRANSPORTES ALEATÓRIOS ESCOLHIDOS - APENAS PARA EMBARALHAR AS FIGURINHAS - INICIO//
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  //FUNÇÃO QUE EMBARALHA OS 12 TRANSPORTES ALEATÓRIOS ESCOLHIDOS - APENAS PARA EMBARALHAR AS FIGURINHAS - FIM//









  

  //FUNÇÃO QUE CRIA OS CONTAINERS COM FIGURINHAS DE TRANSPORTES ARRASTÁVEIS E SLOTS RECEBEDORES- INICIO//
  const placeTransportInputs = () => {


      //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - INICIO//
      const divTransportsImages = document.createElement("div")
      divTransportsImages.classList.add("divTransportsImages")
      divTransportsImages.classList.add("containerDroppable")
      divTransportsImages.id = "figurinhasIniciais" //CADA "containerX" poderá receber uma figurinha. Apenas esse receberá várias.
      //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - FIM//


      //FUNÇÃO QUE POSSIBILITA ARRASTAR AS FIGURINHAS DE VOLTA PARA DENTRO - INICIO// 
      divTransportsImages.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        divTransportsImages.addEventListener("drop", (e) => {
          e.preventDefault();
          const draggableId = e.dataTransfer.getData("text/plain");
          const draggedElement = document.getElementById(draggableId)
          const imgPicTransport = draggedElement.querySelector(".imgPicTransportAfterDropped");
          if(imgPicTransport){
            imgPicTransport.removeAttribute("class")
            imgPicTransport.classList.remove("imgPicTransportAfterDropped")
            imgPicTransport.classList.add("imgPicTransport")
          }

          draggedElement.classList.remove("divImgTransportAfterDropped")

          draggedElement.classList.add("divImgTransport")

          divTransportsImages.appendChild(draggedElement)
          checkRightTransportsSlots(divSlotTransports)
        })
      //FUNÇÃO QUE POSSIBILITA ARRASTAR AS FIGURINHAS DE VOLTA PARA DENTRO - FIM// 


      //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - INICIO//
      const divSlotTransports = document.createElement("div");
      divSlotTransports.classList.add("divSlotTransports");
      //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - FIM//


      //CRIA UMA LISTA DE 12 FIGURINHAS EMBARALHADAS - INICIO//
      let TransportsRandomOrder = randomTransports;
      TransportsRandomOrder = shuffleArray(TransportsRandomOrder);
      //CRIA UMA LISTA DE 12 FIGURINHAS EMBARALHADAS - FIM//


      //LOOP PARA RENDERIZAR OS ARRASTÁVEIS - INICIO//
      setTimeout(() => {
        TransportsRandomOrder = shuffleArray(TransportsRandomOrder);
        for (let i = 0; i < TransportsRandomOrder.length; i++) {


          //DIV ARRASTÁVEL QUE CONTERÁ A FIGURINHA DO Transport - INICIO//
          const divImgTransport = document.createElement("div")
          divImgTransport.classList.add("divImgTransport")
          divImgTransport.classList.add("draggable")
          divImgTransport.draggable = true
          divImgTransport.id = `${TransportsRandomOrder[i]}_figurinha`
          //DIV ARRASTÁVEL QUE CONTERÁ A FIGURINHA DO Transport - FIM//


          //FUNÇÃO QUE TORNA A FIGURINHA ARRASTÁVEL - INÍCIO//
          divImgTransport.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", divImgTransport.id)
          })
          //FUNÇÃO QUE TORNA A FIGURINHA ARRASTÁVEL - FIM//
  
  
          //BACKGROUND DA FIGURINHA DO Transport - INICIO//
          const imgTransport = document.createElement("img")
          imgTransport.classList.add("imgTransport")
          imgTransport.src = "../assets/book_details/figtransports.svg"
          //BACKGROUND DA FIGURINHA DO Transport - FIM//
  
  
          //IMAGEM DO Transport QUE SERÁ INSERIDA NA FIGURINHA - INICIO//
          const imgPicTransport = document.createElement("img")
          imgPicTransport.classList.add("imgPicTransport")
          imgPicTransport.src = `../assets/veiculos/${TransportsRandomOrder[i]}.svg` 
          //IMAGEM DO Transport QUE SERÁ INSERIDA NA FIGURINHA - FIM//
  
  
          //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - INICIO//
          divImgTransport.append(imgTransport, imgPicTransport)
          //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - FIM//
  
  
          //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - INICIO//
          divTransportsImages.append(divImgTransport);
          //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - FIM//

        }
      }, 1000);
      //LOOP PARA RENDERIZAR OS ARRASTÁVEIS - FIM//


      //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - INICIO//
      setTimeout(() => {
      for (let i = 0; i < randomTransports.length; i++) {


        //SLOT PARA SOLTAR TRANSPORTES - INÍCIO
        const divSlotTransport = document.createElement("div")
        divSlotTransport.classList.add("divSlotTransport")
        divSlotTransport.classList.add("containerDroppable")
        divSlotTransport.id = `${randomTransports[i]}_slot`
        //SLOT PARA SOLTAR TRANSPORTES - FIM


        //FUNÇÃO QUE PERMITIRÁ ARRASTAR AS FIGURINHAS PARA DENTRO DO SLOT - INICIO//
        divSlotTransport.addEventListener("dragover", (e) => {
          e.preventDefault();
        })

        divSlotTransport.addEventListener("drop", (e) => {
          e.preventDefault();
          const existingDivImgTransport = divSlotTransport.querySelector(".divImgTransport");
          if(existingDivImgTransport){
            return;
          }
          const draggableId = e.dataTransfer.getData("text/plain");
          const draggedElement = document.getElementById(draggableId);
          const imgPicTransport = draggedElement.querySelector(".imgPicTransport");
          //imgPicTransport.removeAttribute("class")
          //draggedElement.removeAttribute("class")
          imgPicTransport.classList.add("imgPicTransportAfterDropped")
          draggedElement.classList.add("divImgTransportAfterDropped")
          draggedElement.classList.add("draggable")
          draggedElement.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", draggedElement.id)
          })
          divSlotTransport.appendChild(draggedElement)
          checkRightTransportsSlots(divSlotTransports)
        })
        //FUNÇÃO QUE PERMITIRÁ ARRASTAR AS FIGURINHAS PARA DENTRO DO SLOT - FIM//
      
      
        //NÚMERO QUE FICA DENTRO DO SLOT CENTRALIZADO - INÍCIO
        const numberTransport = document.createElement("h2")
        numberTransport.classList.add("numberTransport")
        numberTransport.innerText = i + 1
        //NÚMERO QUE FICA DENTRO DO SLOT CENTRALIZADO - FIM
      
      
        //TEXTO QUE FICA ABAIXO DO SLOT - INÍCIO
        const textTransport = document.createElement("p")
        textTransport.classList.add(`textTransport`)
        textTransport.innerText = `${randomTransports[i].toUpperCase()}`    
        //TEXTO QUE FICA ABAIXO DO SLOT - FIM
         
              
        //INSERÇÃO DO NÚMERO DO Transport E DO TEXTO NO SLOT SOLTÁVEL DOS TRANSPORTES - INICIO//
        divSlotTransport.append(numberTransport, textTransport);
        //INSERÇÃO DO NÚMERO DO Transport E DO TEXTO NO SLOT SOLTÁVEL DOS TRANSPORTES - FIM//
      
      
        //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE TRANSPORTES - INICIO//
        divSlotTransports.appendChild(divSlotTransport);
        //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE TRANSPORTES - FIM//
      
      
      
      
      }
      }, 500);
      //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - FIM//

      //INSERÇÃO
      container.appendChild(divTransportsImages);
      container.appendChild(divSlotTransports);

  };
  //FUNÇÃO QUE CRIA OS CONTAINERES COM FIGURINHAS DE TRANSPORTES ARRASTÁVEIS E SLOTS RECEBEDORES - FIM//





  chooseRandomTransports();
  placeTransportInputs();



};
//FUNÇÃO QUE RENDERIZA O GAME #1 - FIM//


//TORNA ACESSÍVEL PARA ARQUIVOS EXTERNOS
export default game1;