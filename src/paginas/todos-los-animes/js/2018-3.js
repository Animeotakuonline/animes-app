// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2018/grand-blue.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Grand Blue",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "125",
  },
  {
    imageSrc: "../../img/2018/high-score-girl.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "High Score Girl",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "124",
  },
  {
    imageSrc: "../../img/2018/lord-of-vermilion-guren-no-ou.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Lord of Vermilion: Guren no Ou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "123",
  },
  {
    imageSrc: "../../img/2018/free-dive-to-the-future.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Free!: Dive to the Future",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "122",
  },
  {
    imageSrc: "../../img/2018/angolmois-genkou-kassenki.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Angolmois: Genkou Kassenki",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "121",
  },
  {
    imageSrc: "../../img/2018/overlord-iii.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Overlord III",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "120",
  },
  {
    imageSrc: "../../img/2018/phantom-in-the-twilight.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Phantom in the Twilight",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "119",
  },
  {
    imageSrc: "../../img/2018/kyoto-teramachi-sanjou-no-holmes.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Kyoto Teramachi Sanjou no Holmes",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "118",
  },
  {
    imageSrc: "../../img/2018/mo-dao-zu-shi.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Mo Dao Zu Shi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "118",
  },
  
  {
    imageSrc: "../../img/2018/gintama-shirogane-no-tamashii-hen-2.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Gintama.: Shirogane no Tamashii-hen 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "117",
  },
  {
    imageSrc: "../../img/2018/planet-with.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Planet With",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "116",
  },
  {
    imageSrc: "../../img/2018/hataraku-saibou-tv.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Hataraku Saibou (TV)",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "115",
  },
  {
    imageSrc: "../../img/2018/hyakuren-no-haou-to-seiyaku-no-valkyria.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Hyakuren no Haou to Seiyaku no Valkyria",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "114",
  },
  {
    imageSrc: "../../img/2018/ongaku-shoujo-tv.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Ongaku Shoujo (TV)",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "113",
  },
  {
    imageSrc: "../../img/2018/yami-shibai-6.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Yami Shibai 6",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "112",
  },
  {
    imageSrc: "../../img/2018/asobi-asobase.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Asobi Asobase",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "111",
  },
  {
    imageSrc: "../../img/2018/satsuriku-no-tenshi.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Satsuriku no Tenshi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "110",
  },
  {
    imageSrc: "../../img/2018/harukana-receive.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Harukana Receive",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "109",
  },
  {
    imageSrc: "../../img/2018/chio-chan-no-tsuugakuro.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Chio-chan no Tsuugakuro",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "108",
  },
  {
    imageSrc: "../../img/2018/isekai-maou-to-shoukan-shoujo-no-dorei-majutsu.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai Maou to Shoukan Shoujo no Dorei Majutsu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "107",
  },
  {
    imageSrc: "../../img/2018/sunohara-sou-no-kanrinin-san.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Sunohara-sou no Kanrinin-san",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "106",
  },
  {
    imageSrc: "../../img/2018/shichisei-no-subaru.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Shichisei no Subaru",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "105",
  },
  {
    imageSrc: "../../img/2018/yuragi-sou-no-yuuna-san-ova.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Yuragi-sou no Yuuna-san OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "104",
  },
  {
    imageSrc: "../../img/2018/aru-zombie-shoujo-no-sainan-ona.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Aru Zombie Shoujo no Sainan (ONA)",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "103",
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