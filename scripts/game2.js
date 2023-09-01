//import game3 from "./game3.js"

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


};
//FUNÇÃO QUE RENDERIZA O GAME #2 - FIM//


//TORNA ACESSÍVEL PARA ARQUIVOS EXTERNOS
export default game2;