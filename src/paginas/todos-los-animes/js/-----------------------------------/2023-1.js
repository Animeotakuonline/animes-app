// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2023/Kawagoe-Boys-Sing.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kawagoe Boys Sing",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"254",
  },
  {
    imageSrc: "../../img/2023/kimi-no-koto-ga-daidaidaidaidaisuki-na-100-nin-no-kanojo.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"253",
  },
  {
    imageSrc: "../../img/2023/nanatsu-no-taizai-mokushiroku-no-yonkishi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Nanatsu no Taizai: Mokushiroku no Yonkishi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"252",
  },
  {
    imageSrc: "../../img/2023/tearmoon-teikoku-monogatari-dantoudai-kara-hajimaru-hime-no-tensei-gyakuten-story.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tearmoon Teikoku Monogatari: Dantoudai kara Hajimaru, Hime no Tensei Gyakuten Story",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    visto: true,
    num:"251",
  },
  {
    imageSrc: "../../img/2023/kikansha-no-mahou-wa-tokubetsu-desu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kikansha no Mahou wa Tokubetsu desu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"250",
  },
  {
    imageSrc: "../../img/2023/buta-no-liver-wa-kanetsu-shiro.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Buta no Liver wa Kanetsu Shiro",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"249",
  },
  {
    imageSrc: "../../img/2023/bokura-no-ameiro-protocol.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Bokura no Ameiro Protocol",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"248",
  },
  {
    imageSrc: "../../img/2023/potion-danomi-de-ikinobimasu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Potion-danomi de Ikinobimasu!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"247",
  },
  {
    imageSrc: "../../img/2023/the-idolmster-million-live.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "The iDOLM@STER Million Live!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"246",
  },
  {
    imageSrc: "../../img/2023/goblin-slayer-ii.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Goblin Slayer II",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"245",
  },
  {
    imageSrc: "../../img/2023/spy-x-family-season-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Spy x Family Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"244",
  },
  {
    imageSrc: "../../img/2023/saihate-no-paladin-tetsusabi-no-yama-no-ou.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Saihate no Paladin: Tetsusabi no Yama no Ou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"243",
  },
  {
    imageSrc: "../../img/2023/undead-unluck.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Undead Unluck",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"242",
  },
  {
    imageSrc: "../../img/2023/kanojo-mo-kanojo-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kanojo mo Kanojo 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"241",
  },
  {
    imageSrc: "../../img/2023/hametsu-no-oukoku.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Hametsu no Oukoku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"240",
  },
  {
    imageSrc: "../../img/2023/hikikomari-kyuuketsuki-no-monmon.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Hikikomari Kyuuketsuki no Monmon",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"239",
  },
  
  //a partir de abajo 41
  {
    imageSrc: "../../img/2023/hypnosis-mic-division-rap-battle-rhyme-anima-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Hypnosis Mic: Division Rap Battle - Rhyme Anima +",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"238",
  },
  {
    imageSrc: "../../img/2023/atarashii-joushi-wa-do-tennen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Atarashii Joushi wa Do Tennen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"237",
  },
  {
    imageSrc: "../../img/2023/arknights-fuyukomori-kaerimichi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Arknights: Fuyukomori Kaerimichi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"236",
  },
  {
    imageSrc: "../../img/2023/kibou-no-chikara-otona-precure-23.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kibou no Chikara: Otona Precure '23",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"235",
  },
  {
    imageSrc: "../../img/2023/tate-no-yuusha-no-nariagari-season-3.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tate no Yuusha no Nariagari Season 3",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"234",
  },
  {
    imageSrc: "../../img/2023/keikenzumi-na-kimi-to-keiken-zero-na-ore-ga-otsukiai-suru-hanashi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi.",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"233",
  },
  {
    imageSrc: "../../img/2023/under-ninja.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Under Ninja",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"232",
  },
  {
    imageSrc: "../../img/2023/boukensha-ni-naritai-to-miyako-ni-deteitta-musume-ga-s-rank-ni-natteta.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Boukensha ni Naritai to Miyako ni Deteitta Musume ga S-Rank ni Natteta",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",/*------------------------------------------------ */
    visto: true,
    num:"231",
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