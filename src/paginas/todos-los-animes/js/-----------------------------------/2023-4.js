// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2023/hataraku-maou-sama-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Hataraku Maou-sama!! 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"183",
  },
  {
    imageSrc: "../../img/2023/shiro-seijo-to-kuro-bokushi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Shiro Seijo to Kuro Bokushi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"182",
  },
  {
    imageSrc: "../../img/2023/guaishou-xiao-guan.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Guaishou Xiao Guan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"181",
  },
  {
    imageSrc: "../../img/2023/bungou-stray-dogs-5th-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Bungou Stray Dogs 5th Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"180",
  },
  {
    imageSrc: "../../img/2023/helck.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Helck",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"179",
  },
  {
    imageSrc: "../../img/2023/tonikaku-kawaii-joshikou-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tonikaku Kawaii: Joshikou-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"178",
  },
  {
    imageSrc: "../../img/2023/shuumatsu-no-walkre-ii-part-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Shuumatsu no Walküre II Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"177",
  },
  {
    imageSrc: "../../img/2023/xiao-lu-he-xiao-lan-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Xiao Lu He Xiao Lan 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"176",
  },
  {
    imageSrc: "../../img/2023/dark-gathering.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Dark Gathering",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"175",
  },
  {
    imageSrc: "../../img/2023/synduality-noir.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Synduality: Noir",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"174",
  },
  {
    imageSrc: "../../img/2023/zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Zom 100: Zombie ni Naru made ni Shitai 100 no Koto",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"173",
  },
  {
    imageSrc: "../../img/2023/shinigami-bocchan-to-kuro-maid-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Shinigami Bocchan to Kuro Maid 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"172",
  },
  {
    imageSrc: "../../img/2023/eiyuu-kyoushitsu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Eiyuu Kyoushitsu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"171",
  },
  {
    imageSrc: "../../img/2023/temple.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Temple",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"170",
  },
  {
    imageSrc: "../../img/2023/yami-shibai-11.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Yami Shibai 11",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"169",
  },
  {
    imageSrc: "../../img/2023/bleach-sennen-kessen-hen-ketsubetsu-tan.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"168",
  },
  {
    imageSrc: "../../img/2023/kanojo-okarishimasu-3rd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kanojo, Okarishimasu 3rd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"167",
  },
  {
    imageSrc: "../../img/2023/liar-liar.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Liar Liar",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"166",
  },
  {
    imageSrc: "../../img/2023/nanatsu-no-maken-ga-shihai-suru.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Nanatsu no Maken ga Shihai suru",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"165",
  },
  {
    imageSrc: "../../img/2023/level-1-dakedo-unique-skill-de-saikyou-desu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Level 1 dakedo Unique Skill de Saikyou desu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"164",
  },
  {
    imageSrc: "../../img/2023/dekiru-neko-wa-kyou-mo-yuuutsu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Dekiru Neko wa Kyou mo Yuuutsu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"163",
  },
  {
    imageSrc: "../../img/2023/ai-no-idenshi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "AI no Idenshi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"162",
  },
  {
    imageSrc: "../../img/2023/cardfight-vanguard-willdress-season-3.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Cardfight!! Vanguard: will+Dress Season 3",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"161",
  },
  {
    imageSrc: "../../img/2023/shadowverse-flame-seven-shadows-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Shadowverse Flame: Seven Shadows-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"160",
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