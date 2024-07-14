// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2014/tsukimonogatari.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Tsukimonogatari",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"306",
  },
  {
    imageSrc: "../../img/2014/tales-of-zestiria-doushi-no-yoake.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Tales of Zestiria: Doushi no Yoake",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"305",
  },
  {
    imageSrc: "../../img/2014/kono-danshi-sekika-ni-nayandemasu.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Kono Danshi, Sekika ni Nayandemasu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"304",
  },
  {
    imageSrc: "../../img/2014/ookami-shoujo-to-kuro-ouji-recap.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Ookami Shoujo to Kuro Ouji 12.5",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"303",
  },
  {
    imageSrc: "../../img/2014/garo-honoo-no-kokuin-recap.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Garo: Honoo no Kokuin 12.5",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"302",
  },
  {
    imageSrc: "../../img/2014/the-disappearance-of-conan-edogawa-the-worst-two-days-in-history.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "The Disappearance of Conan Edogawa: The Worst Two Days in History",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"301",
  },
  {
    imageSrc: "../../img/2014/amagi-brilliant-park-specials.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Amagi Brilliant Park Specials",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"300",
  },
  {
    imageSrc: "../../img/2014/daitoshokan-no-hitsujikai-specials.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Daitoshokan no Hitsujikai Specials",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"299",
  },
  {
    imageSrc: "../../img/2014/yama-no-susume-2nd-season-special.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Yama no Susume 2nd Season Special",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"298",
  },
  {
    imageSrc: "../../img/2014/grisaia-no-kajitsu-specials.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Grisaia no Kajitsu Specials",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"297",
  },
  {
    imageSrc: "../../img/2014/dramatical-murder-ova-data_xx_transitory.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "DRAMAtical Murder OVA: Data_xx_Transitory",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"296",
  },
  {
    imageSrc: "../../img/2014/ikkitousen-extravaganza-epoch.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Ikkitousen: Extravaganza Epoch",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"295",
  },
  {
    imageSrc: "../../img/2014/strike-witches-operation-victory-arrow.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Strike Witches: Operation Victory Arrow",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"294",
  },
  {
    imageSrc: "../../img/2014/chuunibyou-demo-koi-ga-shitai-ren-specials.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Chuunibyou demo Koi ga Shitai! Ren Specials",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"293",
  },
  {
    imageSrc: "../../img/2014/brothers-conflict-ova.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Brothers Conflict OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"292",
  },
  {
    imageSrc: "../../img/2014/yamada-kun-to-7-nin-no-majo-ova.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Yamada-kun to 7-nin no Majo (OVA)",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"291",
  },
  
  {
    imageSrc: "../../img/2014/itsudatte-my-santa.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Itsudatte My Santa!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"290",
  },
  {
    imageSrc: "../../img/2014/aikatsu-movie.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Aikatsu! Movie",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"289",
  },
  {
    imageSrc: "../../img/2014/shingeki-no-kyojin-kuinaki-sentaku.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Shingeki no Kyojin: Kuinaki Sentaku",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"288",
  },
  {
    imageSrc: "../../img/2014/boku-wa-imouto-ni-koi-wo-suru.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Boku wa Imouto ni Koi wo Suru",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"287",
  },
  {
    imageSrc: "../../img/2014/date-a-live-ii-encore.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Date A Live II: Encore OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"286",
  },
  {
    imageSrc: "../../img/2014/naruto-shippuuden-movie-7-the-last.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Naruto: Shippuuden Movie 7 - The Last",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"285",
  },
  {
    imageSrc: "../../img/2014/wake-up-girl-zoo.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Wake Up, Girl Zoo!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"284",
  },
  {
    imageSrc: "../../img/2014/kanojo-ga-flag-wo-oraretara-ova.jpg",
    dateAdded: "2014",
    dateOfRelease: "Fecha de emisión",
    name: "Kanojo ga Flag wo Oraretara OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"283",
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