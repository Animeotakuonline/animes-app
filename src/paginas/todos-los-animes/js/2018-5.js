// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2018/sword-art-online-alternative-gun-gale-online.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Sword Art Online Alternative: Gun Gale Online",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "79",
  },
  {
    imageSrc: "../../img/2018/cutie-honey-universe.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Cutie Honey Universe",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "78",
  },
  {
    imageSrc: "../../img/2018/caligula.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Caligula",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "77",
  },
  {
    imageSrc: "../../img/2018/shokugeki-no-souma-san-no-sara-toutsuki-ressha-hen.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Shokugeki no Souma: San no Sara - Toutsuki Ressha-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "76",
  },
  {
    imageSrc: "../../img/2018/nil-admirari-no-tenbin-teito-genwaku-kitan.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Nil Admirari no Tenbin: Teito Genwaku Kitan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "75",
  },
  {
    imageSrc: "../../img/2018/binan-koukou-chikyuu-boueibu-happy-kiss.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Binan Koukou Chikyuu Boueibu Happy Kiss!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "74",
  },
  {
    imageSrc: "../../img/2018/boku-no-hero-academia-3rd-season.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Boku no Hero Academia 3rd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "73",
  },
  {
    imageSrc: "../../img/2018/major-2nd-tv.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Major 2nd (TV)",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "72",
  },
  {
    imageSrc: "../../img/2018/hinamatsuri.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Hinamatsuri",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "71",
  },
  {
    imageSrc: "../../img/2018/devils-line.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Devils Line",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "70",
  },
  {
    imageSrc: "../../img/2018/persona-5-the-animation.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Persona 5 the Animation",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "69",
  },
  {
    imageSrc: "../../img/2018/hoozuki-no-reitetsu-2nd-season-sono-ni.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Hoozuki no Reitetsu 2nd Season: Sono Ni",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "68",
  },
  {
    imageSrc: "../../img/2018/amanchu-advance.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Amanchu! Advance",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "67",
  },
  {
    imageSrc: "../../img/2018/nobunaga-no-shinobi-anegawa-ishiyamahen.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Nobunaga no Shinobi: Anegawa Ishiyama-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "66",
  },
  {
    imageSrc: "../../img/2018/gurazeni.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Gurazeni",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "65",
  },
  {
    imageSrc: "../../img/2018/akkun-to-kanojo.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Akkun to Kanojo",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "64",
  },
  {
    imageSrc: "../../img/2018/lostorage-conflated-wixoss.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Lostorage Conflated WIXOSS",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "63",
  },
  {
    imageSrc: "../../img/2018/megalo-box.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Megalo Box",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "62",
  },
  {
    imageSrc: "../../img/2018/comic-girls.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Comic Girls",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "61",
  },
  {
    imageSrc: "../../img/2018/saredo-tsumibito-wa-ryuu-to-odoru.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Saredo Tsumibito wa Ryuu to Odoru",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "60",
  },
  {
    imageSrc: "../../img/2018/captain-tsubasa-2018.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Captain Tsubasa (2018)",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "59",
  },
  {
    imageSrc: "../../img/2018/gundam-build-divers.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Gundam Build Divers",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "58",
  },
  {
    imageSrc: "../../img/2018/ginga-eiyuu-densetsu-die-neue-these-kaikou.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Ginga Eiyuu Densetsu: Die Neue These - Kaikou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "57",
  },
  {
    imageSrc: "../../img/2018/tokyo-ghoulre.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Tokyo Ghoul:re",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "56",
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