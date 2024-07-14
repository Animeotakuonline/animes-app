// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [  
    {
        imageSrc: "../../img/2022/kobayashi-san-chi-no-maidragon-s-nippon-no-omotenashi-attend-wa-dragon-desu.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Kobayashi-san Chi no Maidragon S: Nippon no Omotenashi - Attend wa Dragon Desu",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        por_ver:true,
        num:"32",
      },
      {
        imageSrc: "../../img/2022/vanitas-no-karte-2nd-season.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Vanitas no Karte 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"31",
      },
      {
        imageSrc: "../../img/2022/arifureta-shokugyou-de-sekai-saikyou-2nd-season.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Arifureta Shokugyou de Sekai Saikyou 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        visto:true,
        num:"30",
      },
      {
        imageSrc: "../../img/2022/koroshi-ai.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Koroshi Ai",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"29",
      },
      {
        imageSrc: "../../img/2022/kenja-no-deshi-wo-nanoru-kenja.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Kenja no Deshi wo Nanoru Kenja",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        por_ver:true,
        num:"28",
      },
      {
        imageSrc: "../../img/2022/fantasy-bishoujo-juniku-ojisan-to.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Fantasy Bishoujo Juniku Ojisan to",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"27",
      },
      {
        imageSrc: "../../img/2022/princess-connect-redive-season-2.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Princess Connect! Re:Dive Season 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        visto:true,
        num:"26",
      },
      {
        imageSrc: "../../img/2022/tensai-ouji-no-akaji-kokka-saisei-jutsu.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Tensai Ouji no Akaji Kokka Saisei Jutsu",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"25",
      },
      {
        imageSrc: "../../img/2022/sabikui-bisco.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Sabikui Bisco",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"24",
      },
      {
        imageSrc: "../../img/2022/gensou-sangokushi-tengen-reishinki.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Gensou Sangokushi: Tengen Reishinki",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"23",
      },
      {
        imageSrc: "../../img/2022/shingeki-no-kyojin-the-final-season-part-2.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Shingeki no Kyojin: The Final Season Part 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"22",
      },
      {
        imageSrc: "../../img/2022/sasaki-to-miyano.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Sasaki to Miyano",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"21",
      },
      {
        imageSrc: "../../img/2022/tribe-nine.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Tribe Nine",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"20",
      },
      {
        imageSrc: "../../img/2022/genjitsu-shugi-yuusha-no-oukoku-saikenki-2nd-season.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Genjitsu Shugi Yuusha no Oukoku Saikenki 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"19",
      },
      {
        imageSrc: "../../img/2022/sono-bisque-doll-wa-koi-wo-suru.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Sono Bisque Doll wa Koi wo Suru",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        visto:true,
        num:"18",
      },
      {
        imageSrc: "../../img/2022/baraou-no-souretsu.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Baraou no Souretsu",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"17",
      },
      {
        imageSrc: "../../img/2022/akebi-chan-no-sailor-fuku.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Akebi-chan no Sailor-fuku",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        por_ver:true,
        num:"16",
      },
      {
        imageSrc: "../../img/2022/futsal-boys.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Futsal Boys!!!!!",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"15",
      },
      {
        imageSrc: "../../img/2022/kaijin-kaihatsu-bu-no-kuroitsu-san.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Kaijin Kaihatsu-bu no Kuroitsu-san",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"14",
      },
      {
        imageSrc: "../../img/2022/sabiiro-no-armor-reimei.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Sabiiro no Armor: Reimei",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"13",
      },
      {
        imageSrc: "../../img/2022/shuumatsu-no-harem.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Shuumatsu no Harem",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"12",
      },
      {
        imageSrc: "../../img/2022/karakai-jouzu-no-takagi-san-3.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Karakai Jouzu no Takagi-san 3",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        por_ver:true,
        num:"11",
      },
      {
        imageSrc: "../../img/2022/shikkakumon-no-saikyou-kenja.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Shikkakumon no Saikyou Kenja",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"10",
      },
      {
        imageSrc: "../../img/2022/dolls-frontline.jpg",
        dateAdded: "2022",
        dateOfRelease: "Fecha de emisión",
        name: "Dolls' Frontline",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2022/informacion/",
        num:"9",
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