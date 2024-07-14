// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2019/seishun-buta-yarou-wa-yumemiru-shoujo-no-yume-wo-minai.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"96",
      },
      {
        imageSrc: "../../img/2019/fatestay-night-movie-heavens-feel-ii-lost-butterfly.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Fate/stay night Movie: Heaven's Feel - II. Lost Butterfly",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        por_ver:true,
        num:"95",
      },
      {
        imageSrc: "../../img/2019/love-live-sunshine-the-school-idol-movie-over-the-rainbow.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Love Live! Sunshine!! The School Idol Movie: Over the Rainbow",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"94",
      },
      {
        imageSrc: "../../img/2019/shingeki-no-kyojin-season-3-part-2.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Shingeki no Kyojin Season 3 Part 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"93",
      },
      {
        imageSrc: "../../img/2019/promare.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Promare",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"92",
      },
      {
        imageSrc: "../../img/2019/miru-tights.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Miru Tights",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"91",
      },
      {
        imageSrc: "../../img/2019/koutetsujou-no-kabaneri-movie-3-unato-kessen.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Koutetsujou no Kabaneri Movie 3: Unato Kessen",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"90",
      },
      {
        imageSrc: "../../img/2019/tsurune-kazemai-koukou-kyuudoubu-yabai.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Tsurune: Kazemai Koukou Kyuudoubu - Yabai",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"89",
      },
      {
        imageSrc: "../../img/2019/wotaku-ni-koi-wa-muzukashii-youth.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Wotaku ni Koi wa Muzukashii: Youth",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"88",
      },
      {
        imageSrc: "../../img/2019/mobile-suit-gundam-the-origin-advent-of-the-red-comet.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "MOBILE SUIT GUNDAM THE ORIGIN Advent of the Red Comet",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"87",
      },
      {
        imageSrc: "../../img/2019/birthday-wonderland.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Birthday Wonderland",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"86",
      },
      {
        imageSrc: "../../img/2019/king-of-prism-shiny-seven-stars.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "King of Prism: Shiny Seven Stars",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"85",
      },
      {
        imageSrc: "../../img/2019/sarazanmai.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Sarazanmai",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"84",
      },
      {
        imageSrc: "../../img/2019/bungou-stray-dogs-3rd-season.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Bungou Stray Dogs 3rd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"83",
      },
      {
        imageSrc: "../../img/2019/carole-tuesday.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Carole & Tuesday",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"82",
      },
      {
        imageSrc: "../../img/2019/kenja-no-mago.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Kenja no Mago",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"81",
      },
      {
        imageSrc: "../../img/2019/sewayaki-kitsune-no-senko-san.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Sewayaki Kitsune no Senko-san",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"80",
      },
      {
        imageSrc: "../../img/2019/isekai-quartet.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Isekai Quartet",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"79",
      },
      {
        imageSrc: "../../img/2019/strike-witches-501-butai-hasshin-shimasu.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Strike Witches: 501 Butai Hasshin Shimasu!",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"78",
      },
      {
        imageSrc: "../../img/2019/one-punch-man-2nd-season.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "One Punch Man 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"77",
      },
      {
        imageSrc: "../../img/2019/mayonaka-no-occult-koumuin.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Mayonaka no Occult Koumuin",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"76",
      },
      {
        imageSrc: "../../img/2019/fairy-gone.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Fairy Gone",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"75",
      },
      {
        imageSrc: "../../img/2019/nande-koko-ni-sensei-ga.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Nande Koko ni Sensei ga!?",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"74",
      },
      {
        imageSrc: "../../img/2019/araiya-san-ore-to-aitsu-ga-onnayu-de.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Araiya-san!: Ore to Aitsu ga Onnayu de!?",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"73",
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