let body = document.querySelector("body")
let container = document.querySelector(".container")

const game1 = () => {

    const backgroundImage = "../assets/backgrounds/background_game1.png"
    container.style.backgroundImage = `url(${backgroundImage})`;

    const background_book = document.createElement("img");
    background_book.classList.add("background_book_game1")
    background_book.src = "../assets/backgrounds/album_animals_toys.png"

    container.appendChild(background_book)
}

export default game1