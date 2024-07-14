// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2023/sugar-apple-fairy-tale.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Sugar Apple Fairy Tale",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"15",
  },
  {
    imageSrc: "../../img/2023/the-legend-of-heroes-sen-no-kiseki-northern-war.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "The Legend of Heroes: Sen no Kiseki - Northern War",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"14",
  },
  {
    imageSrc: "../../img/2023/ars-no-kyojuu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ars no Kyojuu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"13",
  },
  {
    imageSrc: "../../img/2023/nijiyon-animation.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Nijiyon Animation",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"12",
  },
  {
    imageSrc: "../../img/2023/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-iv-fuka-shou-yakusai-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Fuka Shou - Yakusai-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    por_ver:true,
    num:"11",
  },
  {
    imageSrc: "../../img/2023/spy-kyoushitsu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Spy Kyoushitsu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"10",
  },
  {
    imageSrc: "../../img/2023/hyouken-no-majutsushi-ga-sekai-wo-suberu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Hyouken no Majutsushi ga Sekai wo Suberu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"9",
  },
  {
    imageSrc: "../../img/2023/revenger.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Revenger",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"8",
  },
  {
    imageSrc: "../../img/2023/bungou-stray-dogs-4th-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Bungou Stray Dogs 4th Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"7",
  },
  {
    imageSrc: "../../img/2023/tomo-chan-wa-onnanoko.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tomo-chan wa Onnanoko!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"6",
  },
  {
    imageSrc: "../../img/2023/koori-zokusei-danshi-to-cool-na-douryou-joshi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Koori Zokusei Danshi to Cool na Douryou Joshi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"5",
  },
  {
    imageSrc: "../../img/2023/oniichan-wa-oshimai.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Oniichan wa Oshimai!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"4",
  },
  {
    imageSrc: "../../img/2023/tsurune-tsunagari-no-issha.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tsurune: Tsunagari no Issha",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"3",
  },
  {
    imageSrc: "../../img/2023/technoroid-overmind.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Technoroid: Overmind",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"2",
  },
  {
    imageSrc: "../../img/2023/ningen-fushin-no-boukensha-tachi-ga-sekai-wo-sukuu-you-desu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"1",
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
    <div class="p-4 w-full sm:w-1/2 lg:w-1/2 ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'} mx-auto card-container">
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