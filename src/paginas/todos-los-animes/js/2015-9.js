// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2015/omoide-no-marnie.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Omoide no Marnie",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"54",
      },
      {
        imageSrc: "../../img/2015/shinmai-maou-no-testament-specials.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Shinmai Maou no Testament Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"53",
      },
      {
        imageSrc: "../../img/2015/new-initial-d-movie-legend-1-kakusei.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "New Initial D Movie: Legend 1 - Kakusei",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"52",
      },
      {
        imageSrc: "../../img/2015/shingeki-no-kyojin-movie-1-guren-no-yumiya.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Shingeki no Kyojin Movie 1: Guren no Yumiya",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"51",
      },
      {
        imageSrc: "../../img/2015/senran-kagura-estival-versus-shoujo-tachi-no-sentaku.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Senran Kagura: Estival Versus - Shoujo-tachi no Sentaku",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"50",
      },
      {
        imageSrc: "../../img/2015/trinity-seven-ova.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Trinity Seven OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"49",
      },
      {
        imageSrc: "../../img/2015/ongaku-shoujo.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Ongaku Shoujo",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"48",
      },
      {
        imageSrc: "../../img/2015/aki-no-kanade.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Aki no Kanade",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"47",
      },
      {
        imageSrc: "../../img/2015/military-ova.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Military! OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"46",
      },
      {
        imageSrc: "../../img/2015/free-eternal-summer-special.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Free!: Eternal Summer OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"45",
      },
      {
        imageSrc: "../../img/2015/high-school-dxd-new-oppai-tsutsumimasu.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "High School DxD New: Oppai, Tsutsumimasu!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"44",
      },
      {
        imageSrc: "../../img/2015/etotama.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Etotama",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"43",
      },
      {
        imageSrc: "../../img/2015/haikyuu-oad.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Haikyuu!! OAD",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"42",
      },
      {
        imageSrc: "../../img/2015/hitsugi-no-chaika-ova.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Hitsugi no Chaika OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"41",
      },
      {
        imageSrc: "../../img/2015/mobile-suit-gundam-the-origin.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Mobile Suit Gundam: The Origin",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"40",
      },
      {
        imageSrc: "../../img/2015/diabolik-lovers-ova.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Diabolik Lovers OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"39",
      },
      {
        imageSrc: "../../img/2015/shirobako-ova.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Shirobako OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"38",
      },
      {
        imageSrc: "../../img/2015/hoozuki-no-reitetsu-ova.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Hoozuki no Reitetsu OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"37",
      },
      {
        imageSrc: "../../img/2015/yuru-yuri-nachuyachumi.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Yuru Yuri Nachuyachumi!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"36",
      },
      {
        imageSrc: "../../img/2015/anime-de-wakaru-shinryounaika.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Anime de Wakaru Shinryounaika",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"35",
      },
      {
        imageSrc: "../../img/2015/go-princess-precure.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Go! Princess Precure",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"34",
      },
      {
        imageSrc: "../../img/2015/bokura-wa-minna-kawaisou-hajimete-no.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Bokura wa Minna Kawaisou: Hajimete no",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"33",
      },
      {
        imageSrc: "../../img/2015/isuca.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Isuca",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"32",
      },
      {
        imageSrc: "../../img/2015/hyakka-ryouran-samurai-after.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Hyakka Ryouran: Samurai After",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"31",
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