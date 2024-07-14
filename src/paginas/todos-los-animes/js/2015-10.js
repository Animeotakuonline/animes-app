// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2015/hyakka-ryouran-samurai-after-specials.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Hyakka Ryouran: Samurai After Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"30",
      },
      {
        imageSrc: "../../img/2015/pokemon-pikachu-kore-nan-no-kagi.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Pokemon XY: Pikachu, Kore Nan no Kagi?",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"29",
      },
      {
        imageSrc: "../../img/2015/sengoku-musou.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Sengoku Musou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"28",
      },
      {
        imageSrc: "../../img/2015/seiken-tsukai-no-world-break.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Seiken Tsukai no World Break",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"27",
      },
      {
        imageSrc: "../../img/2015/yoru-no-yatterman.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Yoru no Yatterman",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"26",
      },
      {
        imageSrc: "../../img/2015/durarara-x2-shou.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Durarara!!x2 Shou",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"25",
      },
      {
        imageSrc: "../../img/2015/aldnoahzero-2nd-season.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Aldnoah.Zero 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"24",
      },
      {
        imageSrc: "../../img/2015/shounen-hollywood-holly-stage-for-50.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Shounen Hollywood: Holly Stage for 50",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"23",
      },
      {
        imageSrc: "../../img/2015/rolling-girls.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Rolling☆Girls",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"23",
      },
      {
        imageSrc: "../../img/2015/dog-days-3.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Dog Days'' S3",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"22",
      },
      {
        imageSrc: "../../img/2015/kuroko-no-basket-3.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Kuroko no Basket 3",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"21",
      },
      {
        imageSrc: "../../img/2015/soukyuu-no-fafner-dead-aggressor-exodus.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Soukyuu no Fafner: Dead Aggressor - Exodus",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"20",
      },
      {
        imageSrc: "../../img/2015/death-parade.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Death Parade",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"19",
      },
      {
        imageSrc: "../../img/2015/ansatsu-kyoushitsu-tv.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Ansatsu Kyoushitsu (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"18",
      },
      {
        imageSrc: "../../img/2015/the-idolmster-cinderella-girls.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "The iDOLM@STER Cinderella Girls",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"17",
      },
      {
        imageSrc: "../../img/2015/jojos-bizarre-adventure-stardust-crusaders-2nd-season.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "JoJo's Bizarre Adventure: Stardust Crusaders Egypt Arc",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"16",
      },
      {
        imageSrc: "../../img/2015/saenai-heroine-no-sodatekata.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Saenai Heroine no Sodatekata",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"15",
      },
      {
        imageSrc: "../../img/2015/tokyo-ghoul-2.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Tokyo Ghoul √A",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"14",
      },
      {
        imageSrc: "../../img/2015/koufuku-graffiti.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Koufuku Graffiti",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"13",
      },
      {
        imageSrc: "../../img/2015/juuou-mujin-no-fafnir.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Juuou Mujin no Fafnir",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"12",
      },
      {
        imageSrc: "../../img/2015/kantai-collection-kancolle.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Kantai Collection: KanColle",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"11",
      },
      {
        imageSrc: "../../img/2015/shinmai-maou-no-testament.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Shinmai Maou no Testament",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"10",
      },
      {
        imageSrc: "../../img/2015/military.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Military!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"9",
      },
      {
        imageSrc: "../../img/2015/binan-koukou-chikyuu-bouei-bu-love.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Binan Koukou Chikyuu Bouei-bu Love!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"8",
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