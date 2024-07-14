// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2024/delicos-nursery.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Delico's Nursery",
    status: "Estado: por estrenar",
    availability: "Disponible 0 capitulos",
    readMoreLink: "../2024/informacion/delicos-nursery.html",
    num:"194",
  },
  {
    imageSrc: "../../img/2024/sengoku-youko-senma-konton-hen.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Sengoku Youko: Senma Konton-hen",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/sengoku-youko-senma-konton-hen.html",
    num:"193",
  },
  {
    id: "yami-shibai-13",
    imageSrc: "../../img/2024/yami-shibai-13.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Yami Shibai 13",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/yami-shibai-13.html",
    num:"192",
  },
  {
    imageSrc: "../../img/2024/atri-my-dear-moments.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Atri: My Dear Moments",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/atri-my-dear-moments.html",
    num:"191",
  },
  {
    imageSrc: "../../img/2024/make-heroine-ga-oosugiru.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Make Heroine ga Oosugiru!",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/make-heroine-ga-oosugiru.html",
    num:"190",
  },
  {
    imageSrc: "../../img/2024/kinnikuman-kanpeki-chujin-shiso-hen.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Kinnikuman: Kanpeki Chоujin Shiso-hen",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/kinnikuman-kanpeki-chujin-shiso-hen.html",
    num:"189",
  },
  {
    imageSrc: "../../img/2024/naze-boku-no-sekai-wo-daremo-oboeteinai-no-ka.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Naze Boku no Sekai wo Daremo Oboeteinai no ka?",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/naze-boku-no-sekai-wo-daremo-oboeteinai-no-ka.html",
    num:"188",
  },
  {
    imageSrc: "../../img/2024/bye-bye-earth.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Bye Bye, Earth",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/bye-bye-earth.html",
    num:"187",
  },
  {
    imageSrc: "../../img/2024/kimi-to-boku-no-saigo-no-senjou-aruiwa-sekai-ga-hajimaru-seisen-season-ii.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen Season II",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/kimi-to-boku-no-saigo-no-senjou-aruiwa-sekai-ga-hajimaru-seisen-season-ii.html",
    num:"186",
  },
  {
    imageSrc: "../../img/2024/koi-wa-futago-de-warikirenai.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Koi wa Futago de Warikirenai",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/koi-wa-futago-de-warikirenai.html",
    num:"185",
  },
  {
    imageSrc: "../../img/2024/isekai-shikkaku.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Isekai Shikkaku",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/isekai-shikkaku.html",
    num:"184",
  },
  {
    imageSrc: "../../img/2024/katsute-mahou-shoujo-to-aku-wa-tekitai-shiteita.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Katsute Mahou Shoujo to Aku wa Tekitai shiteita",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/katsute-mahou-shoujo-to-aku-wa-tekitai-shiteita.html",
    num:"183",
  },
  {
    imageSrc: "../../img/2024/isekai-yururi-kikou-kosodateshinagara-boukensha-shimasu.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Isekai Yururi Kikou: Kosodateshinagara Boukensha Shimasu",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/isekai-yururi-kikou-kosodateshinagara-boukensha-shimasu.html",
    num:"182",
  },
  {
    imageSrc: "../../img/2024/vtuber-nandaga-haishin-kiri-wasuretara-densetsu-ni-natteta.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "VTuber Nandaga Haishin Kiri Wasuretara Densetsu ni Natteta",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/vtuber-nandaga-haishin-kiri-wasuretara-densetsu-ni-natteta.html",
    num:"181",
  },
  {
    imageSrc: "../../img/2024/mayonaka-punch.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Mayonaka Punch",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/mayonaka-punch.html",
    num:"180",
  },
  {
    imageSrc: "../../img/2024/kami-no-tou-ouji-no-kikan.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Kami no Tou: Ouji no Kikan",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/kami-no-tou-ouji-no-kikan.html",
    num:"179",
  },
  {
    imageSrc: "../../img/2024/fairy-tail-100-nen-quest.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Fairy Tail: 100-nen Quest",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/fairy-tail-100-nen-quest.html",
    num:"178",
  },
  {
    imageSrc: "../../img/2024/shikanoko-nokonoko-koshitantan.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Shikanoko Nokonoko Koshitantan",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/shikanoko-nokonoko-koshitantan.html",
    num:"177",
  },
  {
    imageSrc: "../../img/2024/shoushimin-series.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Shoushimin Series",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/shoushimin-series.html",
    num:"176",
  },
  {
    imageSrc: "../../img/2024/tsue-to-tsurugi-no-wistoria.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Tsue to Tsurugi no Wistoria",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/tsue-to-tsurugi-no-wistoria.html",
    num:"175",
  },
  {
    imageSrc: "../../img/2024/Elf-san-wa-Yaserarenai.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Elf-san wa Yaserarenai",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/Elf-san-wa-Yaserarenai.html",
    num:"174",
  },
  {
    imageSrc: "../../img/2024/na-nare-hana-nare.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Na Nare Hana Nare",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/na-nare-hana-nare.html",
    num:"173",
  },
  {
    imageSrc: "../../img/2024/0-saiji-start-dash-monogatari.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "0-saiji Start Dash Monogatari",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/0-saiji-start-dash-monogatari.html",
    num:"172",
  },
  {
    imageSrc: "../../img/2024/nige-jouzu-no-wakagimi.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Nige Jouzu no Wakagimi",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/nige-jouzu-no-wakagimi.html",
    num:"171",
  }, 

  // Agrega más objetos según sea necesario
];

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