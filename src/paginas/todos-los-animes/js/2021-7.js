// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2021/yakunara-mug-cup-mo.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Yakunara Mug Cup mo",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"77",
  },
  {
    imageSrc: "../../img/2021/ssssdynazenon.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "SSSS.Dynazenon",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"76",
  },
  {
    imageSrc: "../../img/2021/hetalia-worldstars.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Hetalia World★Stars",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"75",
  },
  {
    imageSrc: "../../img/2021/shaman-king-2021.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Shaman King (2021)",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"74",
  },
  {
    imageSrc: "../../img/2021/jouran-the-princess-of-snow-and-blood.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Jouran: The Princess of Snow and Blood",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"73",
  },
  {
    imageSrc: "../../img/2021/koi-to-yobu-ni-wa-kimochi-warui.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Koi to Yobu ni wa Kimochi Warui",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"72",
  },
  {
    imageSrc: "../../img/2021/mars-red.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Mars Red",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"71",
  },
  {
    imageSrc: "../../img/2021/edens-zero.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Edens Zero",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"70",
  },
  {
    imageSrc: "../../img/2021/boku-no-hero-academia-5th-season.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Boku no Hero Academia 5th Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"69",
  },
  {
    imageSrc: "../../img/2021/godzilla-sp.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Godzilla: S.P",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"68",
  },
  {
    imageSrc: "../../img/2021/home.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Home!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"67",
  },
  {
    imageSrc: "../../img/2021/cardfight-vanguard-overdress.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Cardfight!! Vanguard: overDress",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"66",
  },
  {
    imageSrc: "../../img/2021/b-the-beginning-succession.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "B: The Beginning - Succession",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"65",
  },
  {
    imageSrc: "../../img/2021/evangelion-3010-thrice-upon-a-time.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Evangelion: 3.0+1.0 Thrice Upon a Time",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"64",
  },
  {
    imageSrc: "../../img/2021/ryuukyuu-timeline-mirai-shoujo-to-inishie-no-ou.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Ryuukyuu Timeline: Mirai Shoujo to Inishie no Ou",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"63",
  },
  {
    imageSrc: "../../img/2021/tropical-rouge-precure.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tropical-Rouge! Precure",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"62",
  },
  {
    imageSrc: "../../img/2021/tenkuu-shinpan.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tenkuu Shinpan",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"61",
  },
  {
    imageSrc: "../../img/2021/maiko-san-chi-no-makanai-san.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Maiko-san Chi no Makanai-san",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"60",
  },
  {
    imageSrc: "../../img/2021/tian-guan-cifu-special.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tian Guan Cifu Special",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"59",
  },
  {
    imageSrc: "../../img/2021/kimetsu-gakuen-valentine-hen.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kimetsu Gakuen: Valentine-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"58",
  },
  {
    imageSrc: "../../img/2021/shin-tennis-no-ouji-sama-hyoutei-vs-rikkai-game-of-future.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Shin Tennis no Ouji-sama: Hyoutei vs. Rikkai - Game of Future",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"57",
  },
  {
    imageSrc: "../../img/2021/bishoujo-senshi-sailor-moon-eternal-movie-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Bishoujo Senshi Sailor Moon Eternal Movie 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"56",
  },
  {
    imageSrc: "../../img/2021/princess-principal-crown-handler-movie-1.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Princess Principal: Crown Handler Movie 1",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"55",
  },
  {
    imageSrc: "../../img/2021/majutsushi-orphen-hagure-tabi-kimluck-hen.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Majutsushi Orphen Hagure Tabi: Kimluck-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"54",
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