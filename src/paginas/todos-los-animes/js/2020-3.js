// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2020/sword-art-online-alicization-war-of-underworld-2nd-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Sword Art Online: Alicization - War of Underworld 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"111",
  },
  {
    imageSrc: "../../img/2020/ninja-collection.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Ninja Collection",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"110",
  },
  {
    imageSrc: "../../img/2020/kanojo-okarishimasu.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Kanojo, Okarishimasu",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"109",
  },
  {
    imageSrc: "../../img/2020/no-guns-life-2nd-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "No Guns Life 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"108",
  },
  {
    imageSrc: "../../img/2020/yahari-ore-no-seishun-love-comedy-wa-machigatteiru-kan.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"107",
  },
  {
    imageSrc: "../../img/2020/uzaki-chan-wa-asobitai.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Uzaki-chan wa Asobitai!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"106",
  },
  {
    imageSrc: "../../img/2020/deca-dence.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Deca-Dence",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"105",
  },
  {
    imageSrc: "../../img/2020/rezero-kara-hajimeru-isekai-seikatsu-2nd-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"104",
  },
  {
    imageSrc: "../../img/2020/umayon.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Umayon",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"103",
  },
  {
    imageSrc: "../../img/2020/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2nd-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Muhyo to Rouji no Mahouritsu Soudan Jimusho 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"102",
  },
  {
    imageSrc: "../../img/2020/the-god-of-high-school.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "The God of High School",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"101",
  },
  {
    imageSrc: "../../img/2020/dokyuu-hentai-hxeros.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Dokyuu Hentai HxEros",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"100",
  },
  {
    imageSrc: "../../img/2020/enen-no-shouboutai-ni-no-shou.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Enen no Shouboutai: Ni no Shou",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"99",
  },
  {
    imageSrc: "../../img/2020/lapis-relights.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Lapis Re:LiGHTs",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"98",
  },
  {
    imageSrc: "../../img/2020/maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Maou Gakuin no Futekigousha",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"97",
  },
  {
    imageSrc: "../../img/2020/peter-grill-to-kenja-no-jikan.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Peter Grill to Kenja no Jikan",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"96",
  },
  {
    imageSrc: "../../img/2020/murenase-seton-gakuen-special.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Murenase! Seton Gakuen Special",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"95",
  },
  {
    imageSrc: "../../img/2020/keishichou-tokumubu-tokushu-kyouakuhan-taisakushitsu-dainanaka-tokunana-ova.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Keishichou Tokumubu Tokushu Kyouakuhan Taisakushitsu Dainanaka: Tokunana OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"94",
  },
  {
    imageSrc: "../../img/2020/baki-2nd-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Baki 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"93",
  },
  {
    imageSrc: "../../img/2020/great-pretender.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Great Pretender",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"92",
  },
  {
    imageSrc: "../../img/2020/quanzhi-fashi-iv.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Quanzhi Fashi IV",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"91",
  },
  {
    imageSrc: "../../img/2020/olympia-kyklos.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Olympia Kyklos",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"90",
  },
  {
    imageSrc: "../../img/2020/kitsutsuki-tanteidokoro.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Kitsutsuki Tanteidokoro",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"89",
  },
  {
    imageSrc: "../../img/2020/shokugeki-no-souma-gou-no-sara.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Shokugeki no Souma: Gou no Sara",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"88",
  },
  
  
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