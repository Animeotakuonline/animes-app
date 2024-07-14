// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2020/boku-no-tonari-ni-ankoku-hakaishin-ga-imasu.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Boku no Tonari ni Ankoku Hakaishin ga Imasu.",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"39",
  },
  {
    imageSrc: "../../img/2020/ishuzoku-reviewers.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Ishuzoku Reviewers",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"38",
  },
  {
    imageSrc: "../../img/2020/227.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "22/7",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"37",
  },
  {
    imageSrc: "../../img/2020/toaru-kagaku-no-railgun-t.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Toaru Kagaku no Railgun T",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"36",
  },
  {
    imageSrc: "../../img/2020/oda-cinnamon-nobunaga.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Oda Cinnamon Nobunaga",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"35",
  },
  {
    imageSrc: "../../img/2020/haikyuu-to-the-top.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Haikyuu!!: To the Top",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"34",
  },
  {
    imageSrc: "../../img/2020/runway-de-waratte.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Runway de Waratte",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"33",
  },
  {
    imageSrc: "../../img/2020/rikei-ga-koi-ni-ochita-no-de-shoumei-shitemita.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Rikei ga Koi ni Ochita no de Shoumei shitemita.",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"32",
  },
  {
    imageSrc: "../../img/2020/haikyuu-riku-vs-kuu.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Haikyuu!!: Riku vs. Kuu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"31",
  },
  {
    imageSrc: "../../img/2020/nekopara.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Nekopara",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"30",
  },
  {
    imageSrc: "../../img/2020/show-by-rock-mashumairesh.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Show By Rock!! Mashumairesh!!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"29",
  },
  {
    imageSrc: "../../img/2020/hatenaillusion.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Hatena☆Illusion",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"28",
  },
  {
    imageSrc: "../../img/2020/infinite-dendrogram.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Infinite Dendrogram",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"27",
  },
  {
    imageSrc: "../../img/2020/oshi-ga-budoukan-ittekuretara-shinu.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Oshi ga Budoukan Ittekuretara Shinu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"26",
  },
  {
    imageSrc: "../../img/2020/housekishou-richard-shi-no-nazo-kantei.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Housekishou Richard-shi no Nazo Kantei",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"25",
  },
  {
    imageSrc: "../../img/2020/uchi-tama-uchi-no-tama-shirimasen-ka.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Uchi Tama?! Uchi no Tama Shirimasen ka?",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"24",
  },
  {
    imageSrc: "../../img/2020/jibaku-shounen-hanako-kun.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Jibaku Shounen Hanako-kun",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"23",
  },
  {
    imageSrc: "../../img/2020/kyochuu-rettou-movie.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Kyochuu Rettou Movie",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"22",
  },
  {
    imageSrc: "../../img/2020/jie-yao.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Jie Yao",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"21",
  },
  {
    imageSrc: "../../img/2020/number24.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "number24",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"20",
  },
  {
    imageSrc: "../../img/2020/breakers.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Breakers",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"19",
  },
  {
    imageSrc: "../../img/2020/bang-dream-3rd-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "BanG Dream! 3rd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"18",
  },
  {
    imageSrc: "../../img/2020/overflow.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Overflow",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"17",
  },
  {
    imageSrc: "../../img/2020/itai-no-wa-iya-nano-de-bougyoryoku-ni-kyokufuri-shitai-to-omoimasu.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"16",
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