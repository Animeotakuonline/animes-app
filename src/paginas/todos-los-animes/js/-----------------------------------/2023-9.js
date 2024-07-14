// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2023/tensei-kizoku-no-isekai-boukenroku-jichou-wo-shiranai-kamigami-no-shito.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tensei Kizoku no Isekai Boukenroku: Jichou wo Shiranai Kamigami no Shito",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"63",
  },
  {
    imageSrc: "../../img/2023/jijou-wo-shiranai-tenkousei-ga-guigui-kuru.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Jijou wo Shiranai Tenkousei ga Guigui Kuru.",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"62",
  },
  {
    imageSrc: "../../img/2023/jigokuraku.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Jigokuraku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"61",
  },
  {
    imageSrc: "../../img/2023/tengoku-daimakyou.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tengoku Daimakyou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"60",
  },
  {
    imageSrc: "../../img/2023/mix-meisei-story-nidome-no-natsu-sora-no-mukou-e.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Mix: Meisei Story - Nidome no Natsu, Sora no Mukou e",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"59",
  },
  {
    imageSrc: "../../img/2023/inu-ni-nattara-suki-na-hito-ni-hirowareta-specials.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Inu ni Nattara Suki na Hito ni Hirowareta. Specials",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"58",
  },
  {
    imageSrc: "../../img/2023/gridman-universe.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Gridman Universe",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"57",
  },
  {
    imageSrc: "../../img/2023/shingeki-no-kyojin-the-final-season-kanketsu-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Shingeki no Kyojin: The Final Season - Kanketsu-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMore6Link: "../2023/informacion/",
    num:"56",
  },
  {
    imageSrc: "../../img/2023/sasaki-to-miyano-movie-sotsugyou-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Sasaki to Miyano Movie: Sotsugyou-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"55",
  },
  {
    imageSrc: "../../img/2023/hirogaru-sky-precure.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Hirogaru Sky! Precure",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"54",
  },
  {
    imageSrc: "../../img/2023/shuumatsu-no-walkre-ii.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Shuumatsu no Walküre II",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"53",
  },
  {
    imageSrc: "../../img/2023/majutsushi-orphen-hagure-tabi-urbanrama-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Majutsushi Orphen Hagure Tabi: Urbanrama-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"52",
  },
  {
    imageSrc: "../../img/2023/watashi-no-hashtag-ga-haenakute.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Watashi no Hashtag ga Haenakute.",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"51",
  },
  {
    imageSrc: "../../img/2023/wu-liuqi-anying-suming.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Wu Liuqi: Anying Suming",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"50",
  },
  {
    imageSrc: "../../img/2023/shin-shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Shin Shinka no Mi: Shiranai Uchi ni Kachigumi Jinsei",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"49",
  },
  {
    imageSrc: "../../img/2023/hikari-no-ou.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Hikari no Ou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"48",
  },
  {
    imageSrc: "../../img/2023/cardfight-vanguard-willdress-season-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Cardfight!! Vanguard: will+Dress Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"47",
  },
  {
    imageSrc: "../../img/2023/pokemon-mezase-pokemon-master.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Pokemon: Mezase Pokemon Master",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"46",
  },
  {
    imageSrc: "../../img/2023/ooyukiumi-no-kaina.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ooyukiumi no Kaina",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"45",
  },
  {
    imageSrc: "../../img/2023/itai-no-wa-iya-nano-de-bougyoryoku-ni-kyokufuri-shitai-to-omoimasu-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu. 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"44",
  },
  {
    imageSrc: "../../img/2023/kubo-san-wa-mob-wo-yurusanai.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kubo-san wa Mob wo Yurusanai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    por_ver:true,
    num:"43",
  },
  {
    imageSrc: "../../img/2023/tondemo-skill-de-isekai-hourou-meshi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tondemo Skill de Isekai Hourou Meshi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"42",
  },
  {
    imageSrc: "../../img/2023/vinland-saga-season-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Vinland Saga Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"41",
  },
  {
    imageSrc: "../../img/2023/eiyuuou-bu-wo-kiwameru-tame-tenseisu-soshite-sekai-saikyou-no-minarai-kishi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Eiyuuou, Bu wo Kiwameru Tame Tenseisu: Soshite, Sekai Saikyou no Minarai Kishi♀",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    por_ver:true,
    num:"40",
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