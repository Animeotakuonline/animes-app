// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2006/rozen-maiden-ouvertre.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Rozen Maiden: Ouvertüre",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/genshiken-ova.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Genshiken OVA",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/bleach-memories-of-nobody.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Bleach: Memories of Nobody",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/kashimashi-girl-meets-girl-ova.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Kashimashi: Girl Meets Girl OVA",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/bartender.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Bartender",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/katekyo-hitman-reborn.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Katekyo Hitman Reborn!",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/kenichi.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Shijou Saikyou no Deshi Kenichi",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/code-geass-hangyaku-no-lelouch.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Code Geass: Hangyaku no Lelouch",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/jigoku-shoujo-futakomori.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Jigoku Shoujo Futakomori",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2006/kanon2006.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Kanon (2006)",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2006/busou-renkin.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Busou Renkin",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/yoake-mae-yori-ruriiro-na.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Yoake Mae yori Ruriiro na",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/death-note.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Death Note",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2006/yamato-nadeshiko-shichi-henge.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Yamato Nadeshiko Shichi Henge",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/d-gray-man.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "D.Gray-man",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/black-lagoon-the-second-barrage.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Black Lagoon: The Second Barrage",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/pokemon-diamond-pearl.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Pokemon Diamond Pearl",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/toki-wo-kakeru-shoujo.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Toki wo Kakeru Shoujo",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2006/welcome-to-the-nhk.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Welcome to the NHK!",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/kujibiki-unbalance-tv.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Kujibiki♥Unbalance (TV)",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/brave-story.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Brave Story",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/bokura-ga-ita.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Bokura ga Ita",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2006/zero-no-tsukaima.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Zero no Tsukaima",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2006/demonbane-tv.jpg",
    dateAdded: "2006",
    dateOfRelease: "Fecha de emisión",
    name: "Demonbane (TV)",
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