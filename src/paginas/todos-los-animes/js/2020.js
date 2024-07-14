// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2020/fategrand-carnival.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Fate/Grand Carnival",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2020/informacion/",
    num:"183",
  },
  {
    imageSrc: "../../img/2020/skate-leadingstars.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Skate-Leading☆Stars",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"182",
  },
  {
    imageSrc: "../../img/2020/josee-to-tora-to-sakana-tachi.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Josee to Tora to Sakana-tachi",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"181",
  },
  {
    imageSrc: "../../img/2020/yes-ka-no-ka-hanbun-ka.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Yes ka No ka Hanbun ka",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"180",
  },
  {
    imageSrc: "../../img/2020/shingeki-no-kyojin-the-final-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Shingeki no Kyojin: The Final Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"179",
  },
  {
    imageSrc: "../../img/2020/fategrand-order-shinsei-entaku-ryouiki-camelot-1-wandering-agateram.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Fate/Grand Order: Shinsei Entaku Ryouiki Camelot 1 - Wandering; Agateram",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"178",
  },
  {
    imageSrc: "../../img/2020/kimi-wa-kanata.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Kimi wa Kanata",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"177",
  },
  {
    imageSrc: "../../img/2020/grisaia-phantom-trigger-the-animation-stargazer.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Grisaia: Phantom Trigger The Animation - Stargazer",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"176",
  },
  {
    imageSrc: "../../img/2020/hanhua-riji-2nd-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Hanhua Riji 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"175",
  },
  {
    imageSrc: "../../img/2020/date-a-bullet-nightmare-or-queen.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Date A Bullet: Nightmare or Queen",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"174",
  },
  {
    imageSrc: "../../img/2020/dokyuu-hentai-hxeros-ova.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Dokyuu Hentai HxEros OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"173",
  },
  {
    imageSrc: "../../img/2020/tian-guan-cifu.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Tian Guan Cifu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"172",
  },
  {
    imageSrc: "../../img/2020/toji-no-miko-kizamishi-issen-no-tomoshibi-ova.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Toji no Miko: Kizamishi Issen no Tomoshibi OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"171",
  },
  {
    imageSrc: "../../img/2020/d4dj-first-mix.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "D4DJ First Mix",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"170",
  },
  {
    imageSrc: "../../img/2020/kimetsu-no-yaiba-movie-mugen-ressha-hen.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Kimetsu no Yaiba Movie: Mugen Ressha-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"169",
  },
  {
    imageSrc: "../../img/2020/dogeza-de-tanondemita.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Dogeza de Tanondemita",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"168",
  },
  {
    imageSrc: "../../img/2020/a3-season-autumn-winter.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "A3! Season Autumn & Winter",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"167",
  },
  {
    imageSrc: "../../img/2020/osomatsu-san-3rd-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Osomatsu-san 3rd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"166",
  },
  {
    imageSrc: "../../img/2020/magatsu-wahrheit-zuerst.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Magatsu Wahrheit: Zuerst",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"165",
  },
  {
    imageSrc: "../../img/2020/yuukoku-no-moriarty.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Yuukoku no Moriarty",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"164",
  },
  {
    imageSrc: "../../img/2020/taisou-zamurai.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Taisou Zamurai",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"163",
  },
  {
    imageSrc: "../../img/2020/kamisama-ni-natta-hi.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Kamisama ni Natta Hi",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"162",
  },
  {
    imageSrc: "../../img/2020/maesetsu.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Maesetsu!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"161",
  },
  {
    imageSrc: "../../img/2020/boukyaku-battery.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Boukyaku Battery",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"160",
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