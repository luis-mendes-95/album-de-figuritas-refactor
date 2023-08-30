

//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - INICIO//
let body = document.querySelector("body");
let container = document.querySelector(".container");
//CRIA UMA REFERÊNCIA AOS ELEMENTOS QUE VÃO COMPOR O BACKGROUND - FIM//


//FUNÇÃO QUE RENDERIZA O GAME #1 - INICIO//
const game1 = () => {


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


  //FUNÇÃO QUE EMBARALHA OS 12 ANIMAIS ALEATÓRIOS ESCOLHIDOS - APENAS PARA EMBARALHAR AS FIGURINHAS - INICIO//
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  //FUNÇÃO QUE EMBARALHA OS 12 ANIMAIS ALEATÓRIOS ESCOLHIDOS - APENAS PARA EMBARALHAR AS FIGURINHAS - FIM//


  //FUNÇÃO QUE CRIA O CONTAINER COM FIGURINHAS DE ANIMAIS ARRASTÁVEIS E SLOTS RECEBEDORES- INICIO//
  const placeAnimalInputs = () => {


      //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - INICIO//
      const divAnimalsImages = document.createElement("div")
      divAnimalsImages.classList.add("divAnimalsImages")
      //CRIAÇÃO DA DIV QUE CONTERÁ AS FIGURINHAS ARRASTÁVEIS - FIM//

      
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
          //DIV ARRASTÁVEL QUE CONTERÁ A FIGURINHA DO ANIMAL - FIM//
  
  
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

        //SLOT PARA SOLTAR ANIMAIS - FIM
      
      
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
  //FUNÇÃO QUE CRIA O CONTAINER COM FIGURINHAS DE ANIMAIS ARRASTÁVEIS E SLOTS RECEBEDORES - FIM//

  const activateMouseListeners = () => {
    const AllDivImgAnimals = document.querySelectorAll('.divImgAnimal');

    //I need to be possible click and drag these elements visually on the screen.
};

  chooseRandomAnimals();
  placeAnimalInputs();


  activateMouseListeners();

};
//FUNÇÃO QUE RENDERIZA O GAME #1 - FIM//


//TORNA ACESSÍVEL PARA ARQUIVOS EXTERNOS
export default game1;


        //****IMPLEMENTAR = ALTERAÇÃO DA CLASSE DA FIGURINHA DEPOIS DE ARRASTADA *- INICIO//
        //const divImgAnimal = document.querySelector(".divImgAnimal")
        //const imgPicAnimal = divImgAnimal.querySelector(".imgPicAnimal");
        //imgPicAnimal.removeAttribute("class")
        //divImgAnimal.removeAttribute("class")
        //imgPicAnimal.classList.add("imgPicAnimalAfterDropped")
        //divImgAnimal.classList.add("divImgAnimalAfterDropped")
        //divSlotAnimal.append(divImgAnimal)
        //****IMPLEMENTAR = ALTERAÇÃO DA CLASSE DA FIGURINHA DEPOIS DE ARRASTADA *- FIM//