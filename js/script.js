// Creare un carosello come nella foto allegata.

// Milestone 1:
// usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

/**Svolgimento Milestone 1
 * Creo una funzione per stampare le immagini dell'array images nel carosello
 * 
 */
 
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const itemsContainer = document.querySelector(".items");
const thumbsContainer = document.querySelector(".thumbs");
console.log(itemsContainer, thumbsContainer);

printImages();

// FUNCTIONS

/**
 * Description: stampa il contenuto dell'array images
 */
function printImages() {
    for (let i = 0; i < images.length; i++ ) {
        const thisImage = images[i];

        // stampa gli item
        itemsContainer.innerHTML += `
        <div class="item active">
            <div class="text-item">
                <h1>${thisImage.title}</h1>
                <p>
                    ${thisImage.text}
                </p>
            </div>
            <img src="img/${thisImage.image}" alt="">
        </div>
        `;

        // stampa i thumb
        thumbsContainer.innerHTML += `
        <div class="thumb active">
            <img src="img/${thisImage.image}" alt="">
        </div>
        `;
    }
}
