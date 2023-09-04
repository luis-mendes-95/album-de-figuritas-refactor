//import game5 from "./game5.js";

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




    //BANCO DE DADOS DE TRANSPORTES - INICIO//
    const transports = [
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




    //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER FIGURINHAS COM NOMES DE ANIMAIS/BRINQUEDOS/TRANSPORTES ALEATÓRIOS - INICIO//
    let randomItems = [];
    let randomShuffledItems = [];
    //CRIA UM BANCO DE DADOS VAZIO PARA RECEBER FIGURINHAS COM NOMES DE ANIMAIS/BRINQUEDOS/TRANSPORTES ALEATÓRIOS - FIM//





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
      console.log(randomShuffledItems)

    };
    //FUNÇÃO QUE EMBARALHA OS ITENS - FIM//




    //PREENCHIMENTO DO ARRAY DE ITENS ALEATÓRIOS - INICIO//
    chooseRandomItems(transports);
    chooseRandomItems(toys);
    chooseRandomItems(animals);
    shuffleItems(randomItems)
    //PREENCHIMENTO DO ARRAY DE ITENS ALEATÓRIOS - FIM//



  //FUNÇÃO QUE CRIA OS CONTAINERS COM FIGURINHAS COM NOME DE ANIMAIS, BRINQUEDOS E TRANSPORTES ARRASTÁVEIS E SLOTS RECEBEDORES- INICIO//
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


            //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - INICIO//
            const divSlotFigureNames = document.createElement("div");
            divSlotFigureNames.classList.add("divSlotFigureNames");
            //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - FIM//


            //LOOP PARA RENDERIZAR OS ARRASTÁVEIS - INICIO//
            setTimeout(() => {
            for (let i = 0; i < randomShuffledItems.length; i++) {


                //DIV ARRASTÁVEL QUE CONTERÁ FIGURINHA COM NOME DO ANIMAL/TRANSPORTE/BRINQUEDO - INICIO//
                const divTextFigureName = document.createElement("div")
                divTextFigureName.classList.add("divTextFigureName")
                divTextFigureName.classList.add("draggable")
                divTextFigureName.draggable = true
                divTextFigureName.id = `${randomShuffledItems[i]}_figurinha`
                //DIV ARRASTÁVEL QUE CONTERÁ FIGURINHA COM NOME DO ANIMAL/TRANSPORTE/BRINQUEDO - FIM//


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
                textFigureName.innerText = `${randomShuffledItems[i]}` 
                //NOME DO ITEM QUE SERÁ INSERIDO NA FIGURINHA - FIM//


                //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - INICIO//
                divTextFigureName.append(imgBackgroundItem, textFigureName)
                //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - FIM//


                //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - INICIO//
                divFigureNames.append(divTextFigureName);
                //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - FIM//

            }
            }, 1000);
            //LOOP PARA RENDERIZAR OS ARRASTÁVEIS - FIM//


            //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - INICIO//
            setTimeout(() => {
            for (let i = 0; i < randomTransports.length; i++) {


            //SLOT PARA SOLTAR ITENS - INÍCIO
            const divSlotFigureName = document.createElement("div")
            divSlotFigureName.classList.add("divSlotFigureName")
            divSlotFigureName.classList.add("containerDroppable")
            divSlotFigureName.id = `${randomTransports[i]}_slot`
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

            })
            //FUNÇÃO QUE PERMITIRÁ ARRASTAR AS FIGURINHAS PARA DENTRO DO SLOT - FIM//



            //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ITENS - INICIO//
            divSlotFigureNames.appendChild(divSlotFigureName);
            //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ITENS - FIM//
            
            
            }
            }, 500);
            //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - FIM//




            //INSERÇÃO
            container.appendChild(divFigureNames);
            setTimeout(() => {
                container.appendChild(divSlotFigureNames);
            }, 1500);


      };
  //FUNÇÃO QUE CRIA OS CONTAINERES COM FIGURINHAS DE ANIMAIS ARRASTÁVEIS E SLOTS RECEBEDORES - FIM//


        placeFigureNamesInputs();


};
//FUNÇÃO QUE RENDERIZA O GAME #2 - FIM//


//TORNA ACESSÍVEL PARA ARQUIVOS EXTERNOS
export default game4;