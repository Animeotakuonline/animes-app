// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2020/kaguya-sama-wa-kokurasetai-tensai-tachi-no-renai-zunousen-2.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Kaguya-sama wa Kokurasetai?: Tensai-tachi no Renai Zunousen season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"87",
  },
  {
    imageSrc: "../../img/2020/fugou-keiji-balanceunlimited.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Fugou Keiji: Balance:Unlimited",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"86",
  },
  {
    imageSrc: "../../img/2020/zashiki-warashi-no-tatami-chan.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Zashiki Warashi no Tatami-chan",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"85",
  },
  {
    imageSrc: "../../img/2020/strike-the-blood-iv.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Strike the Blood IV",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"84",
  },
  {
    imageSrc: "../../img/2020/princess-connect-redive.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Princess Connect! Re:Dive",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"83",
  },
  {
    imageSrc: "../../img/2020/fruits-basket-2nd-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Fruits Basket 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"82",
  },
  {
    imageSrc: "../../img/2020/shadowverse-tv.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Shadowverse (TV)",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"81",
  },
  {
    imageSrc: "../../img/2020/houkago-teibou-nisshi.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Houkago Teibou Nisshi",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"80",
  },
  {
    imageSrc: "../../img/2020/ore-no-yubi-de-midarero-heitengo-futarikiri-no-salon.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Ore no Yubi de Midarero.: Heitengo Futarikiri no Salon de...",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"79",
  },
  {
    imageSrc: "../../img/2020/shironeko-project-zero-chronicle.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Shironeko Project: Zero Chronicle",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"78",
  },
  {
    imageSrc: "../../img/2020/digimon-adventure-2020.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Digimon Adventure 2020",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"77",
  },
  {
    imageSrc: "../../img/2020/shachou-battle-no-jikan-desu.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Shachou, Battle no Jikan Desu!",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"76",
  },
  {
    imageSrc: "../../img/2020/gleipnir.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Gleipnir",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"75",
  },
  {
    imageSrc: "../../img/2020/kingdom-3rd-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Kingdom 3rd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"74",
  },
  {
    imageSrc: "../../img/2020/tsugu-tsugumomo.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Tsugu Tsugumomo",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"73",
  },
  {
    imageSrc: "../../img/2020/mewkledreamy.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Mewkledreamy",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"72",
  },
  {
    imageSrc: "../../img/2020/jashin-chan-dropkick-s2.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Jashin-chan Dropkick'",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"71",
  },
  {
    imageSrc: "../../img/2020/major-2nd-tv-2nd-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Major 2nd (TV) 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"70",
  },
  {
    imageSrc: "../../img/2020/arte.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Arte",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"69",
  },
  {
    imageSrc: "../../img/2020/otome-game-no-hametsu-flag-shika-nai-akuyaku-reijou-ni-tensei-shiteshimatta.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta...",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"68",
  },
  {
    imageSrc: "../../img/2020/yesterday-wo-utatte.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Yesterday wo Utatte",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"67",
  },
  {
    imageSrc: "../../img/2020/gal-to-kyouryuu.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Gal to Kyouryuu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"66",
  },
  {
    imageSrc: "../../img/2020/yugioh-sevens.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Yu☆Gi☆Oh!: Sevens",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"65",
  },
  {
    imageSrc: "../../img/2020/shin-sakura-taisen-the-animation.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Shin Sakura Taisen the Animation",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"64",
  },
  
  
  // Agrega más objetos según sea necesario
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