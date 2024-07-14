// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2013/is-infinite-stratos-2.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "IS: Infinite Stratos 2",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"178",
      },
      {
        imageSrc: "../../img/2013/kyoukai-no-kanata.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kyoukai no Kanata",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"177",
      },
      {
        imageSrc: "../../img/2013/coppelion.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Coppelion",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"176",
      },
      {
        imageSrc: "../../img/2013/pokemon-the-origin.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Pokemon: The Origin",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"175",
      },
      {
        imageSrc: "../../img/2013/recorder-to-randoseru-mi-special.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Recorder to Randoseru Mi☆ Special",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"174",
      },
      {
        imageSrc: "../../img/2013/miss-monochrome.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Miss Monochrome",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"173",
      },
      {
        imageSrc: "../../img/2013/kara-no-kyoukai-mirai-fukuin.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kara no Kyoukai: Mirai Fukuin",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"172",
      },
      {
        imageSrc: "../../img/2013/fatekaleid-liner-prismaillya-specials.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Fate/kaleid liner Prisma☆Illya Specials",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"171",
      },
      {
        imageSrc: "../../img/2013/amnesia-ova.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Amnesia OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"170",
      },
      {
        imageSrc: "../../img/2013/yahari-ore-no-seishun-love-comedy-wa-machigatteiru-ova.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Oregairu OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"169",
      },
      {
        imageSrc: "../../img/2013/diabolik-lovers.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Diabolik Lovers",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"168",
      },
      {
        imageSrc: "../../img/2013/super-seisyun-brothers.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Super Seisyun Brothers",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"167",
      },
      {
        imageSrc: "../../img/2013/takanashi-rikka-kai-chuunibyou-demo-koi-ga-shitai-movie.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Takanashi Rikka Kai: Chuunibyou demo Koi ga Shitai! Movie",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"166",
      },
      {
        imageSrc: "../../img/2013/chihayafuru-2-waga-mi-yo-ni-furu-nagame-seshi-ma-ni.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Chihayafuru 2: Waga Mi Yo ni Furu Nagame Seshi Ma ni",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"165",
      },
      {
        imageSrc: "../../img/2013/free-specials.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Free! Specials",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"164",
      },
      {
        imageSrc: "../../img/2013/captain-harlock.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Captain Harlock",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"163",
      },
      {
        imageSrc: "../../img/2013/ano-hi-mita-hana-no-namae-wo-bokutachi-wa-mada-shiranai-movie.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai. Movie",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"162",
      },
      {
        imageSrc: "../../img/2013/suisei-no-gargantia-specials.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Suisei no Gargantia OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"161",
      },
      {
        imageSrc: "../../img/2013/little-busters-sekai-no-saitou-wa-ore-ga-mamoru.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Little Busters!: Sekai no Saitou wa Ore ga Mamoru!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,//tambien Little Busters! la serie
        num:"160",
      },
      {
        imageSrc: "../../img/2013/one-piece-episode-of-merry-mou-hitori-no-nakama-no-monogatari.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "One Piece: Episode of Merry - Mou Hitori no Nakama no Monogatari",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"159",
      },
      {
        imageSrc: "../../img/2013/kamisama-hajimemashita-ova.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kamisama Hajimemashita OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"158",
      },
      {
        imageSrc: "../../img/2013/ore-no-imouto-ga-konnani-kawaii-wake-ga-nai-specials.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Oreimo 2 Specials",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"157",
      },
      {
        imageSrc: "../../img/2013/fairy-tail-x-rave.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Fairy Tail x Rave",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"156",
      },
      {
        imageSrc: "../../img/2013/yowamushi-pedal-special-ride.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Yowamushi Pedal: Special Ride",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"155",
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
    <div class="p-4 w-full sm:w-1/2 lg:w-1/4 ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'} mx-auto card-container">
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