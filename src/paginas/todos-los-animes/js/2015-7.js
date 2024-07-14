// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2015/dragon-ball-z-movie-15-fukkatsu-no-f.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Dragon Ball Z Movie 15: Fukkatsu no F",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"101",
      },
      {
        imageSrc: "../../img/2015/ninja-slayer-from-animation.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Ninja Slayer From Animation",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"101",
      },
      {
        imageSrc: "../../img/2015/k-missing-kings.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "K: Missing Kings",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"100",
      },
      {
        imageSrc: "../../img/2015/kyoukai-no-kanata-movie-ill-be-here-kako-hen.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Kyoukai no Kanata Movie: I´ll Be Here - Kako-hen",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"99",
      },
      {
        imageSrc: "../../img/2015/yamada-kun-to-7-nin-no-majo-tv.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Yamada-kun to 7-nin no Majo (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"98",
      },
      {
        imageSrc: "../../img/2015/grisaia-no-meikyuu.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Grisaia no Meikyuu",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"97",
      },
      {
        imageSrc: "../../img/2015/sidonia-no-kishi-daikyuu-wakusei-seneki.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Sidonia no Kishi S2",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"96",
      },
      {
        imageSrc: "../../img/2015/saint-seiya-soul-of-gold.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Saint Seiya: Soul of Gold",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"95",
      },
      {
        imageSrc: "../../img/2015/punchline.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Punchline",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"94",
      },
      {
        imageSrc: "../../img/2015/urawa-no-usagi-chan.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Urawa no Usagi-chan",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"93",
      },
      {
        imageSrc: "../../img/2015/gintama-2015.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Gintama° 2015",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"92",
      },
      {
        imageSrc: "../../img/2015/triage-x.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Triage X",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"91",
      },
      {
        imageSrc: "../../img/2015/ore-monogatari.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Ore Monogatari!!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"90",
      },
      {
        imageSrc: "../../img/2015/houkago-no-pleiades-tv.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Houkago no Pleiades (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"89",
      },
      {
        imageSrc: "../../img/2015/ai-mai-mii-mousou-catastrophe-special.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Ai Mai Mii: Mousou Catastrophe Special",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"88",
      },
      {
        imageSrc: "../../img/2015/hibike-euphonium.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Hibike! Euphonium",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"87",
      },
      {
        imageSrc: "../../img/2015/diamond-no-ace-second-season.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Diamond no Ace S2",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"86",
      },
      {
        imageSrc: "../../img/2015/mikagura-gakuen-kumikyoku.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Mikagura Gakuen Kumikyoku",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"85",
      },
      {
        imageSrc: "../../img/2015/kaitou-joker-2nd-season.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Kaitou Joker 2",
        availability: "Disponible X capitulos",
        num:"84",
      },
      {
        imageSrc: "../../img/2015/teekyuu-4.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Teekyuu 4",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"83",
      },
      {
        imageSrc: "../../img/2015/ame-iro-cocoa.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Ame-iro Cocoa",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"82",
      },
      {
        imageSrc: "../../img/2015/takamiya-nasuno-desu-teekyuu-spin-off.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Takamiya Nasuno Desu!: Teekyuu Spin-off",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"81",
      },
      {
        imageSrc: "../../img/2015/baby-steps-2.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Baby Steps 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"80",
      },
      {
        imageSrc: "../../img/2015/show-by-rock.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Show By Rock!!",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"79",
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