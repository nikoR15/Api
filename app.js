const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

const generateApi = document.getElementById("btn-generate");
const card = document.getElementById("card");
const img = document.getElementById("img");
const character = document.getElementById("character");
const pCard = document.getElementById("pCard");
generateApi.addEventListener("click",getApi);

function getApi() {
    fetch(URL)
    .then(responce => responce.json())
    .then( data => {
        character.textContent = data[0].character
        img.src = data[0].image
        pCard.textContent = data[0].quote
    } )
}