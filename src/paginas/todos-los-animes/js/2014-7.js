// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2014/futsuu-no-joshikousei-ga-locodol-yatte-mita.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "[Locodol]",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"138",
      },
      {
        imageSrc: "../../img/2014/rail-wars.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Rail Wars!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"137",
      },
      {
        imageSrc: "../../img/2014/barakamon-mijikamon.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Barakamon: Mijikamon",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"136",
      },
      {
        imageSrc: "../../img/2014/free-eternal-summer.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Free!: Eternal Summer",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"135",
      },
      {
        imageSrc: "../../img/2014/bakumatsu-rock.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Bakumatsu Rock",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"134",
      },
      {
        imageSrc: "../../img/2014/kyoukai-no-kanata-episode-0-shinonome.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kyoukai no Kanata: Shinonome",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"133",
      },
      {
        imageSrc: "../../img/2014/saikin-imouto-no-yousu-ga-chotto-okashiinda-ga-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "ImoCho. OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"132",
      },
      {
        imageSrc: "../../img/2014/inari-konkon-koi-iroha-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Inari, Konkon, Koi Iroha. OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"131",
      },
      {
        imageSrc: "../../img/2014/no-game-no-life-specials.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "No Game No Life Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"130",
      },
      {
        imageSrc: "../../img/2014/blade-soul-specials.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Blade & Soul Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"129",
      },
      {
        imageSrc: "../../img/2014/mangaka-san-to-assistant-san-specials.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mangaka-san to Assistant-san Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"128",
      },
      {
        imageSrc: "../../img/2014/sabagebu.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Sabagebu!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"127",
      },
      {
        imageSrc: "../../img/2014/saint-seiya-legend-of-sanctuary.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Saint Seiya: Legend of Sanctuary",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"126",
      },
      {
        imageSrc: "../../img/2014/kuroko-no-basket-mou-ikkai-yarimasen-ka.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kuroko no Basket: Mou Ikkai Yarimasen ka",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"125",
      },
      {
        imageSrc: "../../img/2014/isshuukan-friends-specials.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Isshuukan Friends. Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"124",
      },
      {
        imageSrc: "../../img/2014/miss-monochrome-supporter.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Miss Monochrome: Supporter",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"123",
      },
      {
        imageSrc: "../../img/2014/hayate-no-gotoku-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Hayate no Gotoku! OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"122",
      },
      {
        imageSrc: "../../img/2014/persona-3-the-movie-2-midsummer-knights-dream.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Persona 3 the Movie 2: Midsummer Knight's Dream",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"121",
      },
      {
        imageSrc: "../../img/2014/tamayura-more-aggressive-tsuitachi-dake-no-shuugakuryokou-nanode.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Tamayura: More Aggressive - Tsuitachi Dake no Shuugakuryokou, Nanode",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"120",
      },
      {
        imageSrc: "../../img/2014/tonari-no-seki-kun-specials.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Tonari no Seki-kun Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"119",
      },
      {
        imageSrc: "../../img/2014/noucome-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Noucome OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"118",
      },
      {
        imageSrc: "../../img/2014/magi-sinbad-no-bouken.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Magi: Sinbad no Bouken",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"117",
      },
      {
        imageSrc: "../../img/2014/initial-d-final-stage.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Initial D Final Stage",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"116",
      },
      {
        imageSrc: "../../img/2014/seitokai-yakuindomo-2-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Seitokai Yakuindomo* S2 OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"115",
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