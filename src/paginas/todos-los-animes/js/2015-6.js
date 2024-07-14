// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2015/miss-monochrome-the-animation-2.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Miss Monochrome: The Animation 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"126",
      },
      {
        imageSrc: "../../img/2015/wakaba-girl.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Wakaba*Girl",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"125",
      },
      {
        imageSrc: "../../img/2015/little-witch-academia-mahou-shikake-no-parade.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Little Witch Academia Movie",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"124",
      },
      {
        imageSrc: "../../img/2015/chaos-dragon-sekiryuu-seneki.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Chaos Dragon: Sekiryuu Seneki",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"123",
      },
      {
        imageSrc: "../../img/2015/ranpo-kitan-game-of-laplace.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Ranpo Kitan: Game of Laplace",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"122",
      },
      {
        imageSrc: "../../img/2015/joukamachi-no-dandelion.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Joukamachi no Dandelion",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"121",
      },
      {
        imageSrc: "../../img/2015/sousei-no-aquarion-evol.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Sousei no Aquarion Evol",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"120",
      },
      {
        imageSrc: "../../img/2015/gangstaa.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Gangsta",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"119",
      },
      {
        imageSrc: "../../img/2015/okusama-ga-seitokaichou.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Okusama ga Seitokaichou!",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"118",
      },
      {
        imageSrc: "../../img/2015/to-love-ru-darkness-2nd.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "To LOVE-Ru Darkness 2nd",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"117",
      },
      {
        imageSrc: "../../img/2015/amagi-brilliant-park-ova.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Amagi Brilliant Park OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"116",
      },
      {
        imageSrc: "../../img/2015/shinmai-maou-no-testament-ova.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Shinmai Maou no Testament OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"115",
      },
      {
        imageSrc: "../../img/2015/gatchaman-crowds-insight-inbound.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Gatchaman Crowds Insight: Inbound",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"114",
      },
      {
        imageSrc: "../../img/2015/pokemon-xy-pikachu-the-movie-1-jikan-special.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Pokemon XY: Cosplay Pikachu Special",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"113",
      },
      {
        imageSrc: "../../img/2015/nanatsu-no-taizai-ova.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Nanatsu no Taizai OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"112",
      },
      {
        imageSrc: "../../img/2015/hibike-euphonium-specials.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Hibike! Euphonium: Suisougaku-bu no Nichijou",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"111",
      },
      {
        imageSrc: "../../img/2015/kekkai-sensen.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Kekkai Sensen 10.5",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"110",
      },
      {
        imageSrc: "../../img/2015/haiyore-nyaruko-san-f.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Haiyore! Nyaruko-san F",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"109",
      },
      {
        imageSrc: "../../img/2015/ookami-shoujo-to-kuro-ouji-ova.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Ookami Shoujo to Kuro Ouji OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"108",
      },
      {
        imageSrc: "../../img/2015/robot-girls-z-plus.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Robot Girls Z Plus",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"107",
      },
      {
        imageSrc: "../../img/2015/shigatsu-wa-kimi-no-uso-ova.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Shigatsu wa Kimi no Uso: Moments",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"106",
      },
      {
        imageSrc: "../../img/2015/etotama-specials.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Etotama Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"105",
      },
      {
        imageSrc: "../../img/2015/ansatsu-kyoushitsu-tv-deai-no-jikan.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Ansatsu Kyoushitsu (TV): Deai no Jikan",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"104",
      },
      {
        imageSrc: "../../img/2015/grisaia-no-rakuen.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Grisaia no Rakuen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"103",
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