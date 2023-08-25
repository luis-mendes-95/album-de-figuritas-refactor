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
    "aguia",
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
    "dragao",
    "elefante",
    "esquilo",
    "foca",
    "formiga",
    "galinha",
    "galo",
    "gato",
    "girafa",
    "gorila",
    "hipopotamo",
    "jacare",
    "jegue",
    "joaninha",
    "lagarto",
    "leao",
    "macaco",
    "mosquito",
    "onca",
    "ovelha",
    "papagaio",
    "pato",
    "pavao",
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

      console.log(randomAnimals);

      for (let i = 0; i < randomAnimals.length; i++) {
        const slotAnimal = document.createElement("img");
        slotAnimal.classList.add("slotAnimal");
        slotAnimal.src = "../assets/book_details/slotanimals.svg";
        divSlotAnimals.appendChild(slotAnimal);
        slotAnimal.style.display = "inline"
      }

      container.appendChild(divSlotAnimals);

  };

  chooseRandomAnimals();

  placeAnimalInputs(randomAnimals, animalsImages);
};

export default game1;
