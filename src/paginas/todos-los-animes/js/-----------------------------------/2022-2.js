// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
   {
    imageSrc: "../../img/2022/shinmai-renkinjutsushi-no-tenpo-keiei.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Shinmai Renkinjutsushi no Tenpo Keiei",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"176",
  },
  {
    imageSrc: "../../img/2022/poputepipikku-2nd-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Poputepipikku 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"175",
  },
  {
    imageSrc: "../../img/2022/idolish7-third-beat-part-2.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "IDOLiSH7: Third Beat! Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"174",
  },
  {
    imageSrc: "../../img/2022/koukyuu-no-karasu.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Koukyuu no Karasu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"173",
  },
  {
    imageSrc: "../../img/2022/yuusha-party-wo-tsuihou-sareta-beast-tamer-saikyoushu-no-nekomimi-shoujo-to-deau.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Yuusha Party wo Tsuihou sareta Beast Tamer, Saikyoushu no Nekomimi Shoujo to Deau",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"172",
  },
  {
    imageSrc: "../../img/2022/mobile-suit-gundam-the-witch-from-mercury.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Mobile Suit Gundam: The Witch from Mercury",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"171",
  },
  {
    imageSrc: "../../img/2022/c-danchi.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "C Danchi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"170",
  },
  {
    imageSrc: "../../img/2022/berserk-ougon-jidai-hen-memorial-edition.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Berserk: Ougon Jidai-hen - Memorial Edition",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"169",
  },
  {
    imageSrc: "../../img/2022/spy-x-family-part-2.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Spy x Family Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"168",
  },
  {
    imageSrc: "../../img/2022/boku-no-hero-academia-6th-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Boku no Hero Academia 6th Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"167",
  },
  {
    imageSrc: "../../img/2022/uzaki-chan-wa-asobitai-double.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Uzaki-chan wa Asobitai! Double",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"166",
  },
  {
    imageSrc: "../../img/2022/noumin-kanren-no-skill-bakka-agetetara-nazeka-tsuyoku-natta.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Noumin Kanren no Skill bakka Agetetara Nazeka Tsuyoku Natta.",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"165",
  },
  {
    imageSrc: "../../img/2022/uchi-no-shishou-wa-shippo-ga-nai.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Uchi no Shishou wa Shippo ga Nai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"164",
  },
  {
    imageSrc: "../../img/2022/the-daily-life-of-the-inmortal-king-3nd-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "The Daily Life of the Immortal King 3",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"163",
  },
  {
    imageSrc: "../../img/2022/ginga-eiyuu-densetsu-die-neue-these-sakubou.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Ginga Eiyuu Densetsu: Die Neue These - Sakubou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"162",
  },
  {
    imageSrc: "../../img/2022/akuyaku-reijou-nanode-last-boss-wo-kattemimashita.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Akuyaku Reijou nanode Last Boss wo Kattemimashita",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"161",
  },
  {
    imageSrc: "../../img/2022/ame-wo-tsugeru-hyouryuu-danchi.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Ame wo Tsugeru Hyouryuu Danchi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"160",
  },
  {
    imageSrc: "../../img/2022/cyberpunk-edgerunners.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Cyberpunk: Edgerunners",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"159",
  },
  {
    imageSrc: "../../img/2022/tian-mei-de-yao-hen.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Tian Mei De Yao Hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"158",
  },
  {
    imageSrc: "../../img/2022/d4dj-double-mix.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "D4DJ Double Mix",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"157",
  },
  {
    imageSrc: "../../img/2022/one-piece-film-red.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "One Piece Film: Red",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"156",
  },
  {
    imageSrc: "../../img/2022/kakegurui-twin.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kakegurui Twin",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"155",
  },
  {
    imageSrc: "../../img/2022/fuuto-tantei.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Fuuto Tantei",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"154",
  },
  {
    imageSrc: "../../img/2022/hanhua-riji-3rd-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Hanhua Riji 3rd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"153",
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