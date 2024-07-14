// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  
  {
    imageSrc: "../../img/2024/madougushi-dahliya-wa-utsumukanai.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Madougushi Dahliya wa Utsumukanai",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"170",
  },
  {
    imageSrc: "../../img/2024/mob-kara-hajimaru-tansaku-eiyuutan.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Mob kara Hajimaru Tansaku Eiyuutan",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"169",
  },
  {
    imageSrc: "../../img/2024/kono-sekai-wa-fukanzen-sugiru.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Kono Sekai wa Fukanzen Sugiru",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"168",
  },
  {
    imageSrc: "../../img/2024/dungeon-no-naka-no-hito.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Dungeon no Naka no Hito",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"167",
  },
  {
    imageSrc: "../../img/2024/tensui-no-sakuna-hime.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Tensui no Sakuna-hime",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"166",
  },
  {
    imageSrc: "../../img/2024/grendizer-u.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Grendizer U",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"165",
  },
  {
    imageSrc: "../../img/2024/cardfight-vanguard-divinez-season-2.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Cardfight!! Vanguard: Divinez Season 2",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"164",
  },
  {
    imageSrc: "../../img/2024/nierautomata-ver11a-part-2.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "NieR:Automata Ver1.1a Part 2",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"163",
  },
  {
    imageSrc: "../../img/2024/25-jigen-no-ririsa.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "2.5-jigen no Ririsa",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"162",
  },
  {
    imageSrc: "../../img/2024/giji-harem.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Giji Harem",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"161",
  },
  {
    imageSrc: "../../img/2024/megami-no-caf-terrace-2nd-season.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Megami no Cafe Terrace 2nd Season",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"160",
  },
  {
    imageSrc: "../../img/2024/senpai-wa-otokonoko.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Senpai wa Otokonoko",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"159",
  },
  {
    imageSrc: "../../img/2024/hazurewaku-no-joutai-ijou-skill-de-saikyou-ni-natta-ore-ga-subete-wo-juurin-suru-made.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Hazurewaku no 'Joutai Ijou Skill' de Saikyou ni Natta Ore ga Subete wo Juurin suru made",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"158",
  },
  {
    imageSrc: "../../img/2024/ore-wa-subete-wo-parry-suru-gyaku-kanchigai-no-sekai-saikyou-wa-boukensha-ni-naritai.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Ore wa Subete wo 'Parry' suru: Gyaku Kanchigai no Sekai Saikyou wa Boukensha ni Naritai",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"157",
  },
  {
    imageSrc: "../../img/2024/gimai-seikatsu.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Gimai Seikatsu",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"156",
  },
  {
    imageSrc: "../../img/2024/tasogare-out-focus.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Tasogare Out Focus",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"155",
  },
  {
    imageSrc: "../../img/2024/ramen-akaneko.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Ramen Akaneko",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"154",
  },
  {
    imageSrc: "../../img/2024/oshi-no-ko-2nd-season.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "'Oshi no Ko' 2nd Season",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"153",
  },
  {
    imageSrc: "../../img/2024/tokidoki-bosotto-russia-go-de-dereru-tonari-no-alya-san.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"152",
  },
  {
    imageSrc: "../../img/2024/maougun-saikyou-no-majutsushi-wa-ningen-datta.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Maougun Saikyou no Majutsushi wa Ningen datta",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"151",
  },
  {
    imageSrc: "../../img/2024/tasuuketsu.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Tasuuketsu",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"150",
  },
  {
    imageSrc: "../../img/2024/boku-no-tsuma-wa-kanjou-ga-nai.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Boku no Tsuma wa Kanjou ga Nai",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"149",
  },
  {
    imageSrc: "../../img/2024/shy-2nd-season.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Shy 2nd Season",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"148",
  },
  {
    imageSrc: "../../img/2024/shinmai-ossan-boukensha-saikyou-party-ni-shinu-hodo-kitaerarete-muteki-ni-naru.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"147",
  },





    
  // Agreg
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