// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2013/toaru-kagaku-no-railgun-s.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Toaru Kagaku no Railgun S",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"82",
      },
      {
        imageSrc: "../../img/2013/kakumeiki-valvrave.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kakumeiki Valvrave",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"81",
      },
      {
        imageSrc: "../../img/2013/yuyushiki.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Yuyushiki",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"80",
      },
      {
        imageSrc: "../../img/2013/puchitto-gargantia.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Puchitto Gargantia",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"79",
      },
      {
        imageSrc: "../../img/2013/hayate-no-gotoku-cuties.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Hayate no Gotoku! Cuties",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"78",
      },
      {
        imageSrc: "../../img/2013/arata-kangatari.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Arata Kangatari",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"77",
      },
      {
        imageSrc: "../../img/2013/sparrows-hotel.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Sparrow's Hotel",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"76",
      },
      {
        imageSrc: "../../img/2013/haiyore-nyaruko-san-w.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Haiyore! Nyaruko-san W",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"75",
      },
      {
        imageSrc: "../../img/2013/mushibugyou.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Mushibugyou",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"74",
      },
      {
        imageSrc: "../../img/2013/aiura.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Aiura",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"73",
      },
      {
        imageSrc: "../../img/2013/ore-no-imouto-ga-konnani-kawaii-wake-ga-nai-2.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "OreImo 2",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"72",
      },
      {
        imageSrc: "../../img/2013/shingeki-no-kyojin.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Shingeki no Kyojin",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"71",
      },
      {
        imageSrc: "../../img/2013/yondemasu-yo-azazel-san-z.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Yondemasu yo, Azazel-san. Z",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"70",
      },
      {
        imageSrc: "../../img/2013/namiuchigiwa-no-muromi-san.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Namiuchigiwa no Muromi-san",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"69",
      },
      {
        imageSrc: "../../img/2013/suisei-no-gargantia.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Suisei no Gargantia",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"68",
      },
      {
        imageSrc: "../../img/2013/dream-9-toriko-one-piece-dragon-ball-z-super-collaboration-special.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Toriko & One Piece & Dragon Ball Z Super Collaboration",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"67",
      },
      {
        imageSrc: "../../img/2013/hyakka-ryouran-samurai-bride.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Hyakka Ryouran: Samurai Bride",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"66",
      },
      {
        imageSrc: "../../img/2013/zettai-bouei-leviathan.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Zettai Bouei Leviathan",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"65",
      },
      {
        imageSrc: "../../img/2013/devil-survivor-2-the-animation.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Devil Survivor 2 The Animation",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"64",
      },
      {
        imageSrc: "../../img/2013/photo-kano.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Photokano",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"63",
      },
      {
        imageSrc: "../../img/2013/yahari-ore-no-seishun-love-come-wa-machigatteiru.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Oregairu",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"62",
      },
      {
        imageSrc: "../../img/2013/karneval-tv.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Karneval",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"61",
      },
      {
        imageSrc: "../../img/2013/aku-no-hana.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Aku no Hana",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"60",
      },
      {
        imageSrc: "../../img/2013/dansai-bunri-no-crime-edge.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Dansai Bunri no Crime Edge",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"59",
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