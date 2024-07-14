// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2005/soukyuu-no-fafner-right-of-left.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Soukyuu no Fafner: Right of Left",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/naruto-narutimate-hero-3-tsuini-gekitotsu-jounin-vs-genin-musabetsu-dairansen-taikai-kaisai.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Naruto Narutimate Hero 3: Tsuini Gekitotsu! Jounin vs. Genin!! Musabetsu Dairansen Taikai Kaisai!!",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/saint-seiya-saga-de-hades.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Saint Seiya Saga de Hades Infierno",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/arashi-no-yoru-ni.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Arashi no Yoru ni",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/pale-cocoon.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Pale Cocoon",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/king-of-fighters-another-day.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "King of Fighters: Another Day",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/karin.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Karin",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/mushishi.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Mushishi",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/rozen-maiden-traumend.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Rozen Maiden: Traumend",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/paradise-kiss.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Paradise Kiss",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/ginban-kaleidoscope.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Ginban Kaleidoscope",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/blood.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Blood+",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/shakugan-no-shana.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Shakugan no Shana",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2005/solty-rei.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Solty Rei",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/black-cat.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Black Cat",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/jigoku-shoujo.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Jigoku Shoujo",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2005/mahou-shoujo-lyrical-nanoha-as.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Mahou Shoujo Lyrical Nanoha A's",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2005/air-in-summer.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Air in Summer",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/fullmetal-alchemist-the-conqueror-of-shamballa.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Fullmetal Alchemist: The Conqueror of Shamballa",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/full-metal-panic-tsr.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Full Metal Panic! The Second Raid",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/petopeto-san.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "PetoPeto-san",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/shuffle.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Shuffle!",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/suzuka.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Suzuka",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2005/gun-x-sword.jpg",
    dateAdded: "2005",
    dateOfRelease: "Fecha de emisión",
    name: "Gun x Sword",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
 
  // Agrega más objetos según sea necesario
];



// Función para agregar una tarjeta al contenedor
function addCard(cardData, index) {
  const cardsContainer = document.getElementById("cardsContainer");

  const visto = cardData.visto || false;
  const por_ver = cardData.por_ver || false;
  const mirando = cardData.mirando || false;

  const cardHTML = `
    <div class="p-4 w-full sm:w-1/2 lg:w-1/4 ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'} mx-auto card-container">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <a href="${cardData.readMoreLink || '#'}">
          <img class="h-72 w-full object-cover object-center" src="${cardData.imageSrc}" alt="blog">
        </a>
        <div class="p-6">
          <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateAdded}</h2>
          <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateOfRelease}</h2>
          <h1 class="text-2xl font-semibold mb-3 sm:text-xl sm:card-title">${cardData.name}</h1>
          <h3 class="text-black hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm mr-2 mb-2">${cardData.status}</h3>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-3">
              <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                ${cardData.availability}
              </span>
            </div>
          </li>
          <div class="flex items-center flex-wrap">
            <a href="${cardData.readMoreLink || '#'}" class="${visto ? 'text-orange-400' : por_ver ? 'text-orange-400' : mirando ? 'text-orange-400' : 'text-blue-600'} inline-flex items-center md:mb-2 lg:mb-0">Leer Más
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="flex items-center flex-wrap">
            <p class="${visto ? 'text-white' : por_ver ? 'text-white' : mirando ? 'text-white' : 'text-black-600'} inline-flex items-center md:mb-2 lg:mb-0">#${cardData.num}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  cardsContainer.innerHTML += cardHTML;
}

cardsData.forEach((data, index) => addCard(data, index));

document.getElementById("addCardBtn").addEventListener("click", () => {
  const newCardData = {
    // Datos para la nueva tarjeta
  };
  addCard(newCardData);
});

document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownContent = document.getElementById('dropdownContent');

  dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('hidden');
  });

  document.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.add('hidden');
    }
  });
});