// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2023/ayaka.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ayaka",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"135",
  },
  
  {
    imageSrc: "../../img/2023/lv1-maou-to-one-room-yuusha.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Lv1 Maou to One Room Yuusha",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"134",
  },
  {
    imageSrc: "../../img/2023/you-shou-yan-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "You Shou Yan 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"133",
  },
  {
    imageSrc: "../../img/2023/bang-dream-its-mygo.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "BanG Dream! It's MyGO!!!!!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"132",
  },
  {
    imageSrc: "../../img/2023/genjitsu-no-yohane-sunshine-in-the-mirror.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Genjitsu no Yohane: Sunshine in the Mirror",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"131",
  },
  {
    imageSrc: "../../img/2023/seishun-buta-yarou-wa-odekake-sister-no-yume-wo-minai.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Seishun Buta Yarou wa Odekake Sister no Yume wo Minai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"130",
  },
  {
    imageSrc: "../../img/2023/cang-yuan-tu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Cang Yuan Tu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"129",
  },

  {
    imageSrc: "../../img/2023/black-clover-mahou-tei-no-ken.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Nombre del anime",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"127",
  },
  {
    imageSrc: "../../img/2023/jian-gu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Jian Gu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"126",
  },
  {
    imageSrc: "../../img/2023/bishoujo-senshi-sailor-moon-cosmos-movie.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Bishoujo Senshi Sailor Moon Cosmos Movie",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"126",
  },
  {
    imageSrc: "../../img/2023/quanzhi-fashi-vi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Quanzhi Fashi VI",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"125",
  },
  {
    imageSrc: "../../img/2023/biao-ren-blades-of-the-guardians.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Biao Ren: Blades of the Guardians",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"124",
  },
  {
    imageSrc: "../../img/2023/shu-tian-fu-mo-lu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Shu Tian Fu Mo Lu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"123",
  },
  {
    imageSrc: "../../img/2023/tenchi-muyou-gxp-paradise-shidou-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tenchi Muyou! GXP: Paradise Shidou-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"122",
  },
  {
    imageSrc: "../../img/2023/idolish7-movie-live-4bit-beyond-the-period.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "IDOLiSH7 Movie: LIVE 4bit - BEYOND THE PERiOD",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"121",
  },
  {
    imageSrc: "../../img/2023/psycho-pass-movie-providence.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Psycho-Pass Movie: Providence",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"120",
  },
  {
    imageSrc: "../../img/2023/yahari-ore-no-seishun-love-comedy-wa-machigatteiru-kan-dakara-shishunki-wa-owarazu-ni-seishun-wa-tsuzuiteiku.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan: Dakara, Shishunki wa Owarazu ni, Seishun wa Tsuzuiteiku.",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"119",
  },
  {
    imageSrc: "../../img/2023/ta-bu-dang-nuzhu-hen-duo-nian.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ta Bu Dang Nuzhu Hen Duo Nian",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"118",
  },
  {
    imageSrc: "../../img/2023/aishang-ta-de-liyou.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Aishang Ta de Liyou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"117",
  },
  {
    imageSrc: "../../img/2023/niehime-to-kemono-no-ou.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Niehime to Kemono no Ou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"116",
  },
  {
    imageSrc: "../../img/2023/uma-musume-pretty-derby-road-to-the-top.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Uma Musume: Pretty Derby - Road to the Top",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"115",
  },
  {
    imageSrc: "../../img/2023/ququ-bucai-zaixia-yeguai.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ququ Bucai, Zaixia Yeguai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"114",
  },
  {
    imageSrc: "../../img/2023/pokemon-shinsaku-anime.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Pokemon (Shinsaku Anime)",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"113",
  },
  {
    imageSrc: "../../img/2023/you-shou-yan.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "You Shou Yan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"112",
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