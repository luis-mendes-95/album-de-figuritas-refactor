import game2 from "./game2.js"
import game3 from "./game3.js";
import game4 from "./game4.js";

//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - INICIO//
let body = document.querySelector("body");
let container = document.querySelector(".container");
//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - FIM//


//FUNÇÃO QUE RENDERIZA O GAME #1 - INICIO//
const game1 = () => {

  //APENAS PARA PULAR PARA O JOGO 3//
  const botao_pula = document.createElement("button")
  botao_pula.style.position = "absolute"
  botao_pula.style.top = "0"
  botao_pula.style.left = "30%"
  botao_pula.innerText = "Jogo 3"
  botao_pula.addEventListener("click", () =>{
    game3();
  })
  container.appendChild(botao_pula)
  //APENAS PARA PULAR PARA O JOGO 4//


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







  //FUNÇÃO QUE RESETA O JOGO APENAS COM OS ANIMAIS INCORRETOS - INICIO//
  const resetGameWrongAnimals = () => {

    const divAnimalsImages = document.querySelector(".divAnimalsImages")
    const divSlotAnimals = document.querySelector(".divSlotAnimals")

    divSlotAnimals.childNodes.forEach((slot) => {

      if(slot.id.split("_slot")[0] === slot.lastChild.id.split("_figurinha")[0]) {
        console.log("CORRETO!")
      } else {        
        const imgPicAnimal = slot.lastChild.querySelector(".imgPicAnimalAfterDropped");
        if(imgPicAnimal){
          imgPicAnimal.removeAttribute("class")
          imgPicAnimal.classList.remove("imgPicAnimalAfterDropped")
          imgPicAnimal.classList.add("imgPicAnimal")
        }
        slot.lastChild.classList.remove("divImgAnimalAfterDropped")
        slot.lastChild.classList.add("divImgAnimal")
        divAnimalsImages.appendChild(slot.lastChild)
      }
      


    })
  }
  //FUNÇÃO QUE RESETA O JOGO APENAS COM OS ANIMAIS INCORRETOS - FIM//











  //FUNÇÃO QUE VERIFICA SE OS ANIMAIS INSERIDOS ESTÃO CORRETOS - INICIO //
  const renderResult = (total_correct) => {

    const divAnimalsImages = document.querySelector(".divAnimalsImages")

    if(total_correct === 12) {

      const lorenzo_correct = document.createElement("img")
      lorenzo_correct.classList.add("lorenzo_correct")
      lorenzo_correct.src = "../assets/lorenzo/lorenzo_ok1.png"

      const continue_button = document.createElement("img")
      continue_button.classList.add("continue_button")
      continue_button.src = "../assets/botoes/bt_continua.png"

      const verifyButton = divAnimalsImages.querySelector(".verifyButton")
      if(verifyButton){
        divAnimalsImages.removeChild(verifyButton)
      }

      continue_button.addEventListener("click", () => {
        game2();
      })

      divAnimalsImages.append(lorenzo_correct, continue_button)

    } else if (total_correct < 12) {

      const lorenzo_incorrect = document.createElement("img")
      lorenzo_incorrect.classList.add("lorenzo_incorrect")
      lorenzo_incorrect.src = "../assets/lorenzo/lorenzo_ops.png"

      const verifyButton = divAnimalsImages.querySelector(".verifyButton")
      if(verifyButton){
        divAnimalsImages.removeChild(verifyButton)
      }

      divAnimalsImages.appendChild(lorenzo_incorrect)

      setTimeout(() => {
        divAnimalsImages.removeChild(lorenzo_incorrect)
        resetGameWrongAnimals();
      }, 4000);     

    }
  }
  //FUNÇÃO QUE VERIFICA SE OS ANIMAIS INSERIDOS ESTÃO CORRETOS - INICIO //








  //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - INICIO //
  const renderVerifyButton = (total_inserted, total_correct) => {
    if (total_inserted === 12) {
      const verifyButton = document.createElement("img")
      verifyButton.classList.add("verifyButton")
      verifyButton.src = "../assets/botoes/bt_verifica.png"

      verifyButton.addEventListener("click", () => {
        renderResult(total_correct)
      })
  
      const divAnimalsImages = document.querySelector(".divAnimalsImages")
      divAnimalsImages.appendChild(verifyButton)
    } else if (total_inserted < 12){
      const divAnimalsImages = document.querySelector(".divAnimalsImages")
      const verifyButton = divAnimalsImages.querySelector(".verifyButton")
      if(verifyButton){
        divAnimalsImages.removeChild(verifyButton)
      }

    }

  }
  //RENDERIZA BOTÃO DE VERIFICAR CASO TODOS OS SLOTS ESTEJAM PREENCHIDOS - FIM //






  //FUNÇÃO QUE VERIFICA SE OS ANIMAIS ENCAIXADOS ESTÃO CORRETOS - INICIO//
  const checkRightAnimalsSlots = (element) => {

    let total_inserted = 0
    let total_correct = 0

    element.childNodes.forEach((slot) => {

      const animal_slot_name = slot.id.split("_slot")[0]

      const animal_inserted = slot.querySelector(".divImgAnimal")

      if (animal_inserted) {
        const animal_inserted_name = animal_inserted.id.split("_figurinha")[0]
        total_inserted += 1

        if (animal_slot_name === animal_inserted_name) {
          total_correct += 1
        }
      }


    })

    console.log("Animais inseridos: " + total_inserted)
    console.log("Animais corretos: " + total_correct)

    renderVerifyButton(total_inserted, total_correct)

  };
  //FUNÇÃO QUE VERIFICA SE OS ANIMAIS ENCAIXADOS ESTÃO CORRETOS - FIM//









  //FUNÇÃO QUE EMBARALHA OS 12 ANIMAIS ALEATÓRIOS ESCOLHIDOS - APENAS PARA EMBARALHAR AS FIGURINHAS - INICIO//
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  //FUNÇÃO QUE EMBARALHA OS 12 ANIMAIS ALEATÓRIOS ESCOLHIDOS - APENAS PARA EMBARALHAR AS FIGURINHAS - FIM//









  

  //FUNÇÃO QUE CRIA OS CONTAINERS COM FIGURINHAS DE ANIMAIS ARRASTÁVEIS E SLOTS RECEBEDORES- INICIO//
  const placeAnimalInputs = () => {


      //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - INICIO//
      const divAnimalsImages = document.createElement("div")
      divAnimalsImages.classList.add("divAnimalsImages")
      divAnimalsImages.classList.add("containerDroppable")
      divAnimalsImages.id = "figurinhasIniciais" //CADA "containerX" poderá receber uma figurinha. Apenas esse receberá várias.
      //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - FIM//


      //FUNÇÃO QUE POSSIBILITA ARRASTAR AS FIGURINHAS DE VOLTA PARA DENTRO - INICIO// 
      divAnimalsImages.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        divAnimalsImages.addEventListener("drop", (e) => {
          e.preventDefault();
          const draggableId = e.dataTransfer.getData("text/plain");
          const draggedElement = document.getElementById(draggableId)
          const imgPicAnimal = draggedElement.querySelector(".imgPicAnimalAfterDropped");
          if(imgPicAnimal){
            imgPicAnimal.removeAttribute("class")
            imgPicAnimal.classList.remove("imgPicAnimalAfterDropped")
            imgPicAnimal.classList.add("imgPicAnimal")
          }

          draggedElement.classList.remove("divImgAnimalAfterDropped")

          draggedElement.classList.add("divImgAnimal")

          divAnimalsImages.appendChild(draggedElement)
          checkRightAnimalsSlots(divSlotAnimals)
        })
      //FUNÇÃO QUE POSSIBILITA ARRASTAR AS FIGURINHAS DE VOLTA PARA DENTRO - FIM// 


      //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - INICIO//
      const divSlotAnimals = document.createElement("div");
      divSlotAnimals.classList.add("divSlotAnimals");
      //CRIAÇÃO DA DIV QUE RECEBERÁ AS FIGURINHAS ONDE SERÃO SOLTAS - FIM//


      //CRIA UMA LISTA DE 12 FIGURINHAS EMBARALHADAS - INICIO//
      let animalsRandomOrder = randomAnimals;
      animalsRandomOrder = shuffleArray(animalsRandomOrder);
      //CRIA UMA LISTA DE 12 FIGURINHAS EMBARALHADAS - FIM//


      //LOOP PARA RENDERIZAR OS ARRASTÁVEIS - INICIO//
      setTimeout(() => {
        animalsRandomOrder = shuffleArray(animalsRandomOrder);
        for (let i = 0; i < animalsRandomOrder.length; i++) {


          //DIV ARRASTÁVEL QUE CONTERÁ A FIGURINHA DO ANIMAL - INICIO//
          const divImgAnimal = document.createElement("div")
          divImgAnimal.classList.add("divImgAnimal")
          divImgAnimal.classList.add("draggable")
          divImgAnimal.draggable = true
          divImgAnimal.id = `${animalsRandomOrder[i]}_figurinha`
          //DIV ARRASTÁVEL QUE CONTERÁ A FIGURINHA DO ANIMAL - FIM//


          //FUNÇÃO QUE TORNA A FIGURINHA ARRASTÁVEL - INÍCIO//
          divImgAnimal.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", divImgAnimal.id)
          })
          //FUNÇÃO QUE TORNA A FIGURINHA ARRASTÁVEL - FIM//
  
  
          //BACKGROUND DA FIGURINHA DO ANIMAL - INICIO//
          const imgAnimal = document.createElement("img")
          imgAnimal.classList.add("imgAnimal")
          imgAnimal.src = "../assets/book_details/figanimals.svg"
          //BACKGROUND DA FIGURINHA DO ANIMAL - FIM//
  
  
          //IMAGEM DO ANIMAL QUE SERÁ INSERIDA NA FIGURINHA - INICIO//
          const imgPicAnimal = document.createElement("img")
          imgPicAnimal.classList.add("imgPicAnimal")
          imgPicAnimal.src = `../assets/animals/${animalsRandomOrder[i]}.svg` 
          //IMAGEM DO ANIMAL QUE SERÁ INSERIDA NA FIGURINHA - FIM//
  
  
          //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - INICIO//
          divImgAnimal.append(imgAnimal, imgPicAnimal)
          //INSERÇÃO DO FUNDO DA FIGURINHA E IMAGEM DA FIGURINHA NA DIV ARRASTÁVEL DA FIGURINHA - FIM//
  
  
          //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - INICIO//
          divAnimalsImages.append(divImgAnimal);
          //INSERÇÃO DE FIGURINHA ARRASTÁVEL NA DIV DE FIGURINHAS ARRASTÁVEIS - FIM//

        }
      }, 1000);
      //LOOP PARA RENDERIZAR OS ARRASTÁVEIS - FIM//


      //LOOP PARA RENDERIZAR AS DIVS RECEBEDORAS - INICIO//
      setTimeout(() => {
      for (let i = 0; i < randomAnimals.length; i++) {


        //SLOT PARA SOLTAR ANIMAIS - INÍCIO
        const divSlotAnimal = document.createElement("div")
        divSlotAnimal.classList.add("divSlotAnimal")
        divSlotAnimal.classList.add("containerDroppable")
        divSlotAnimal.id = `${randomAnimals[i]}_slot`
        //SLOT PARA SOLTAR ANIMAIS - FIM


        //FUNÇÃO QUE PERMITIRÁ ARRASTAR AS FIGURINHAS PARA DENTRO DO SLOT - INICIO//
        divSlotAnimal.addEventListener("dragover", (e) => {
          e.preventDefault();
        })

        divSlotAnimal.addEventListener("drop", (e) => {
          e.preventDefault();
          const existingDivImgAnimal = divSlotAnimal.querySelector(".divImgAnimal");
          if(existingDivImgAnimal){
            return;
          }
          const draggableId = e.dataTransfer.getData("text/plain");
          const draggedElement = document.getElementById(draggableId);
          const imgPicAnimal = draggedElement.querySelector(".imgPicAnimal");
          //imgPicAnimal.removeAttribute("class")
          //draggedElement.removeAttribute("class")
          imgPicAnimal.classList.add("imgPicAnimalAfterDropped")
          draggedElement.classList.add("divImgAnimalAfterDropped")
          draggedElement.classList.add("draggable")
          draggedElement.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", draggedElement.id)
          })
          divSlotAnimal.appendChild(draggedElement)
          checkRightAnimalsSlots(divSlotAnimals)
        })
        //FUNÇÃO QUE PERMITIRÁ ARRASTAR AS FIGURINHAS PARA DENTRO DO SLOT - FIM//
      
      
        //NÚMERO QUE FICA DENTRO DO SLOT CENTRALIZADO - INÍCIO
        const numberAnimal = document.createElement("h2")
        numberAnimal.classList.add("numberAnimal")
        numberAnimal.innerText = i + 1
        //NÚMERO QUE FICA DENTRO DO SLOT CENTRALIZADO - FIM
      
      
        //TEXTO QUE FICA ABAIXO DO SLOT - INÍCIO
        const textAnimal = document.createElement("p")
        textAnimal.classList.add(`textAnimal`)
        textAnimal.innerText = `${randomAnimals[i].toUpperCase()}`    
        //TEXTO QUE FICA ABAIXO DO SLOT - FIM
         
              
        //INSERÇÃO DO NÚMERO DO ANIMAL E DO TEXTO NO SLOT SOLTÁVEL DOS ANIMAIS - INICIO//
        divSlotAnimal.append(numberAnimal, textAnimal);
        //INSERÇÃO DO NÚMERO DO ANIMAL E DO TEXTO NO SLOT SOLTÁVEL DOS ANIMAIS - FIM//
      
      
        //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ANIMAIS - INICIO//
        divSlotAnimals.appendChild(divSlotAnimal);
        //INSERÇÃO DE SLOT RECEBEDOR NA DIV DE SLOTS DE ANIMAIS - FIM//
      
      
      
      
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
export default game1;