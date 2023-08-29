let body = document.querySelector("body");
let container = document.querySelector(".container");

const game1 = () => {

  const backgroundImage = "../assets/backgrounds/background_game1.png";
  container.style.backgroundImage = `url(${backgroundImage})`;

  const background_book = document.createElement("img");
  background_book.classList.add("background_book_game1");
  background_book.src = "../assets/backgrounds/album_animals_toys.png";

  container.appendChild(background_book);

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
  
  let randomAnimals = [];

  let animalsImages = [];

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

  const placeAnimalInputs = (randomAnimals, animalsImages) => {

      const divSlotAnimals = document.createElement("div");
      divSlotAnimals.classList.add("divSlotAnimals");

      const divAnimalsImages = document.createElement("div")
      divAnimalsImages.classList.add("divAnimalsImages")
      divAnimalsImages.classList.add("draggable-elements")
      container.appendChild(divAnimalsImages)

      const divAnimalsImagesDroppable = document.createElement("div")
      divAnimalsImagesDroppable.classList.add("divAnimalsImagesDroppable")
      divAnimalsImagesDroppable.classList.add("droppable-elements")
  

      for (let i = 0; i < randomAnimals.length; i++) {

        //SLOT ANIMALS INÍCIO

        const divSlotAnimal = document.createElement("div")
        divSlotAnimal.classList.add("divSlotAnimal")

        const numberAnimal = document.createElement("h2")
        numberAnimal.classList.add("numberAnimal")
        numberAnimal.innerText = i + 1

        const textAnimal = document.createElement("p")
        textAnimal.classList.add(`textAnimal`)
        textAnimal.innerText = `${randomAnimals[i].toUpperCase()}`    

        const divImgAnimal = document.createElement("div")
        divImgAnimal.classList.add("divImgAnimal")
        divImgAnimal.classList.add("draggable")

        const imgAnimal = document.createElement("img")
        imgAnimal.classList.add("imgAnimal")
        imgAnimal.src = "../assets/book_details/figanimals.svg"

        const imgPicAnimal = document.createElement("img")
        imgPicAnimal.classList.add("imgPicAnimal")
        imgPicAnimal.src = `../assets/animals/${randomAnimals[i]}.svg` 

        divImgAnimal.append(imgAnimal, imgPicAnimal)
        let anotherImg = imgAnimal
        imgAnimal.removeAttribute("class")
        imgAnimal.classList.add("imgAnimalDropped")
        divSlotAnimal.append(numberAnimal, textAnimal);
        divSlotAnimals.appendChild(divSlotAnimal);

        divAnimalsImages.append(divImgAnimal);
        let another = divImgAnimal
        another.removeAttribute("class")
        another.classList.add("divImgAnimalDropped")
        divAnimalsImagesDroppable.append(another)


      }

      container.append(divAnimalsImagesDroppable)
      container.appendChild(divSlotAnimals);

  };

  const activateMouseListeners = () => {
    const AllDivImgAnimals = document.querySelectorAll('.divImgAnimal');

    //I need to be possible click and drag these elements visually on the screen.
};

  chooseRandomAnimals();
  placeAnimalInputs(randomAnimals, animalsImages);
  activateMouseListeners();

};

export default game1;