// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2023/shangri-la-frontier-kusoge-hunter-kamige-ni-idoman-to-su.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"206",
  },
  {
    imageSrc: "../../img/2023/mf-ghost.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "MF Ghost",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"205",
  },
  {
    imageSrc: "../../img/2023/overtake.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Overtake",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"204",
  },
  {
    imageSrc: "../../img/2023/boushoku-no-berserk.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Boushoku no Berserk",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"203",
  },
  {
    imageSrc: "../../img/2023/dekoboko-majo-no-oyako-jijou.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Dekoboko Majo no Oyako Jijou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"202",
  },
  {
    imageSrc: "../../img/2023/captain-tsubasa-season-2-junior-youth-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Captain Tsubasa: Season 2 - Junior Youth Hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"201",
  },
  {
    imageSrc: "../../img/2023/aoshi-jiuchong-tian.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Aoshi Jiuchong Tian",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"200",
  },
  {
    imageSrc: "../../img/2023/megumi-no-daigo-kyuukoku-no-orange.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Megumi no Daigo: Kyuukoku no Orange",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"199",
  },
  {
    imageSrc: "../../img/2023/sousou-no-frieren.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Sousou no Frieren",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"198",
  },
  {
    imageSrc: "../../img/2023/ojou-to-banken-kun.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ojou to Banken-kun",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"197",
  },
  {
    imageSrc: "../../img/2023/xiao-lu-he-xiao-lan-3rd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Xiao Lu He Xiao Lan 3rd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"196",
  },
  {
    imageSrc: "../../img/2023/kengan-ashura-season-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kengan Ashura Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"195",
  },
  {
    imageSrc: "../../img/2023/alice-to-therese-no-maboroshi-koujou.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Alice to Therese no Maboroshi Koujou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"194",
  },
  {
    imageSrc: "../../img/2023/gamera-rebirth.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Gamera Rebirth",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"193",
  },
  {
    imageSrc: "../../img/2023/yi-kong-zhan-ge.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Yi Kong Zhan Ge",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"192",
  },
  {
    imageSrc: "../../img/2023/hibike-euphonium-ensemble-contest-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Hibike! Euphonium: Ensemble Contest-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"191",
  },
  {
    imageSrc: "../../img/2023/anhe-zhuan.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Anhe Zhuan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"191",
  },
  {
    imageSrc: "../../img/2023/zhen-hun-jie-3rd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Zhen Hun Jie 3rd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"190",
  },
  {
    imageSrc: "../../img/2023/azur-lane-queens-orders.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Azur Lane: Queen's Orders",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"189",
  },
  {
    imageSrc: "../../img/2023/hanma-baki-son-of-ogre-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Hanma Baki: Son of Ogre 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"188",
  },
  {
    imageSrc: "../../img/2023/di-yi-xulie.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Di Yi Xulie",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"187",
  },
  {
    imageSrc: "../../img/2023/si-ge-yongzhe.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Si Ge Yongzhe",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"186",
  },

  {
    imageSrc: "../../img/2023/shiguang-dailiren-ii.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Shiguang Dailiren II",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"185",
  },
  {
    imageSrc: "../../img/2023/5-toubun-no-hanayome.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "5-toubun no Hanayome∽",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"184",
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