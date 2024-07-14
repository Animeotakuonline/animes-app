// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2018/killing-bites.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Killing Bites",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "32",
  },
  {
    imageSrc: "../../img/2018/dagashi-kashi-2.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Dagashi Kashi 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "31",
  },
  {
    imageSrc: "../../img/2018/miira-no-kaikata.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Miira no Kaikata",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "30",
  },
  {
    imageSrc: "../../img/2018/death-march-kara-hajimaru-isekai-kyousoukyoku.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Death March kara Hajimaru Isekai Kyousoukyoku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "29",
  },
  {
    imageSrc: "../../img/2018/mrchen-mdchen.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Marchen Madchen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "28",
  },
  {
    imageSrc: "../../img/2018/violet-evergarden.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Violet Evergarden",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "27",
  },
  {
    imageSrc: "../../img/2018/dame-x-prince-anime-caravan.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Dame x Prince Anime Caravan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "26",
  },
  {
    imageSrc: "../../img/2018/koi-wa-ameagari-no-you-ni.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Koi wa Ameagari no You ni",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "25",
  },
  {
    imageSrc: "../../img/2018/overlord-ii.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Overlord II",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "24",
  },
  {
    imageSrc: "../../img/2018/hitori-no-shita-the-outcast-2nd-season.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Hitori no Shita: The Outcast 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "23",
  },
  {
    imageSrc: "../../img/2018/kaijuu-girls-ultra-kaijuu-gijinka-keikaku-2nd-season.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Kaijuu Girls: Ultra Kaijuu Gijinka Keikaku 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "22",
  },
  {
    imageSrc: "../../img/2018/karakai-jouzu-no-takagi-san.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Karakai Jouzu no Takagi-san",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "21",
  },
  {
    imageSrc: "../../img/2018/basilisk-ouka-ninpouchou.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Basilisk: Ouka Ninpouchou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "20",
  },
  {
    imageSrc: "../../img/2018/ryuuou-no-oshigoto.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "yuuou no Oshigoto!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "19",
  },
  {
    imageSrc: "../../img/2018/yowamushi-pedal-glory-line.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Yowamushi Pedal: Glory Line",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "18",
  },
  {
    imageSrc: "../../img/2018/slow-start.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Slow Start",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "17",
  },
  {
    imageSrc: "../../img/2018/poputepipikku.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Poputepipikku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "16",
  },
  {
    imageSrc: "../../img/2018/cardcaptor-sakura-clear-card-hen.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Cardcaptor Sakura: Clear Card-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "15",
  },
  {
    imageSrc: "../../img/2018/gakuen-babysitters.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Gakuen Babysitters",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "14",
  },
  {
    imageSrc: "../../img/2018/kokkoku.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Kokkoku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "13",
  },
  {
    imageSrc: "../../img/2018/zoku-touken-ranbu-hanamaru.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Zoku Touken Ranbu: Hanamaru",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "12",
  },
  {
    imageSrc: "../../img/2018/nanatsu-no-taizai-imashime-no-fukkatsu.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Nanatsu no Taizai: Imashime no Fukkatsu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "11",
  },
  {
    imageSrc: "../../img/2018/citrus.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Citrus",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "10",
  },
  {
    imageSrc: "../../img/2018/sanrio-danshi.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Sanrio Danshi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "9",
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