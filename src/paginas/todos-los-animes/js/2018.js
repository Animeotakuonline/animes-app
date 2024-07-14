// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2018/persona-5-the-animation-dark-sun.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Persona 5 the Animation: Dark Sun",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "197",
  },
  {
    imageSrc: "../../img/2018/meng-qi-shi-shen.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Meng Qi Shi Shen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "196",
  },
  {
    imageSrc: "../../img/2018/strike-the-blood-iii.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Strike the Blood III",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "195",
  },
  {
    imageSrc: "../../img/2018/shingeki-no-bahamut-manaria-friends.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Shingeki no Bahamut Manaria Friends",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "194",
  },
  {
    imageSrc: "../../img/2018/uma-musume-pretty-derby-bnw-no-chikai.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Uma Musume: Pretty Derby - BNW no Chikai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "193",
  },
  {
    imageSrc: "../../img/2018/saint-seiya-saintia-shou.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Saint Seiya: Saintia Shou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "192",
  },
  {
    imageSrc: "../../img/2018/karakuri-circus.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Karakuri Circus",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "191",
  },
  {
    imageSrc: "../../img/2018/hangyakusei-million-arthur.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Hangyakusei Million Arthur",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "190",
  },
  {
    imageSrc: "../../img/2018/tsurune-kazemai-koukou-kyuudoubu.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Tsurune: Kazemai Koukou Kyuudoubu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "189",
  },
  {
    imageSrc: "../../img/2018/youkoso-japari-park.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Youkoso Japari Park",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "188",
  },
  {
    imageSrc: "../../img/2018/kitsune-no-koe.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Kitsune no Koe",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "187",
  },
  {
    imageSrc: "../../img/2018/senran-kagura-shinovi-master-tokyo-youma-hen.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Senran Kagura Shinovi Master: Tokyo Youma-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "186",
  },
  {
    imageSrc: "../../img/2018/quanzhi-fashi-iii.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Quanzhi Fashi III",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "185",
  },
  {
    imageSrc: "../../img/2018/ore-ga-suki-nano-wa-imouto-dakedo-imouto-ja-nai.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Ore ga Suki nano wa Imouto dakedo Imouto ja Nai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "184",
  },
  {
    imageSrc: "../../img/2018/merc-storia-mukiryoku-no-shounen-to-bin-no-naka-no-shoujo.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Merc Storia: Mukiryoku no Shounen to Bin no Naka no Shoujo",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "183",
  },
  {
    imageSrc: "../../img/2018/conception.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Conception",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "182",
  },
  {
    imageSrc: "../../img/2018/beelzebub-jou-no-okinimesu-mama.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Beelzebub-jou no Okinimesu mama",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "181",
  },
  {
    imageSrc: "../../img/2018/the-idolmster-sidem-wake-atte-mini.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "The iDOLM@STER SideM: Wake Atte Mini!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "180",
  },
  {
    imageSrc: "../../img/2018/tokyo-ghoulre-2nd-season.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Tokyo Ghoul:re 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "179",
  },
  {
    imageSrc: "../../img/2018/rezero-kara-hajimeru-isekai-seikatsu-memory-snow.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Re:Zero kara Hajimeru Isekai Seikatsu: Memory Snow",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "178",
  },
  {
    imageSrc: "../../img/2018/mahou-shoujo-lyrical-nanoha-detonation.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Mahou Shoujo Lyrical Nanoha: Detonation",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "177",
  },  
  {
    imageSrc: "../../img/2018/golden-kamuy-2nd-season.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Golden Kamuy 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "176",
  },
  {
    imageSrc: "../../img/2018/mahou-shoujo-lyrical-nanoha-reflection.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Mahou Shoujo Lyrical Nanoha: Reflection",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "175",
  },
  {
    imageSrc: "../../img/2018/zoku-owarimonogatari.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Zoku Owarimonogatari",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "174",
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