// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2024/yami-shibai-12.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 14 de enero del 2024",
    name: "Yami Shibai 12",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"50",
  },
  {
    imageSrc: "../../img/2024/kingdom-5th-season.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 13 de abril del 2024",
    name: "Kingdom 5th Season",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"49",
  },
  
  {
    imageSrc: "../../img/2024/bucchigiri.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 13 de enero del 2024",
    name: "Bucchigiri?!",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"48",
  },
  {
    imageSrc: "../../img/2024/cardfight-vanguard-divinez.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 13 de enero del 2024",
    name: "Cardfight!! Vanguard: Divinez",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"47",
  },
  {
    imageSrc: "../../img/2024/wangzhe-rongyao-rongyao-zhi-zhang.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 13 de enero del 2024",
    name: "Wangzhe Rongyao: Rongyao Zhi Zhang",
    status: "Estado: concluido",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    num:"46",
  }, 
  {
    imageSrc: "../../img/2024/meitou-isekai-no-yu-kaitakuki-around-40-onsen-mania-no-tensei-saki-wa-nonbiri-onsen-tengoku-deshita.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 12 de enero del 2024",
    name: "Meitou &quot;Isekai no Yu&quot; Kaitakuki: Around 40 Onsen Mania no Tensei Saki wa, Nonbiri Onsen Tengoku deshita",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"45",
  },
  
  {
    imageSrc: "../../img/2024/majo-to-yajuu.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 12 de enero del 2024",
    name: "Majo to Yajuu",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"44",
  },
  {
    imageSrc: "../../img/2024/urusei-yatsura-2022-2nd-season.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 12 de enero del 2024",
    name: "Urusei Yatsura (2022) 2nd Season",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"43",
  },
  
  {
    imageSrc: "../../img/2024/saijaku-tamer-wa-gomi-hiroi-no-tabi-wo-hajimemashita.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 12 de enero del 2024",
    name: "Saijaku Tamer wa Gomi Hiroi no Tabi wo Hajimemashita",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"42",
    visto:true,
  },
  {
    imageSrc: "../../img/2024/snack-basue.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 12 de enero del 2024",
    name: "Snack Basue",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"41",
  },
    {
      imageSrc: "../../img/2024/gekkan-mousou-kagaku.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 11 de enero del 2024",
      name: "Gekkan Mousou Kagaku",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      num:"40",
    },
    {
      imageSrc: "../../img/2024/yuuki-bakuhatsu-bang-bravern.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 11 de enero del 2024",
      name: "Yuuki Bakuhatsu Bang Bravern",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      num:"39",
    },
  
    {
      imageSrc: "../../img/2024/metallic-rouge.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 10 de enero del 2024",
      name: "Metallic Rouge",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      num:"38",
    },  
    {
      imageSrc: "../../img/2024/gekai-elise.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 10 de enero del 2024",
      name: "Gekai Elise",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      num:"37",
      visto:true,
    },
    {
      imageSrc: "../../img/2024/sengoku-youko.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 10 de enero del 2024",
      name: "Sengoku Youko",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      num:"36",
    },
    {
      imageSrc: "../../img/2024/30-sai-made-doutei-dato-mahoutsukai-ni-nareru-rashii.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 10 de enero del 2024",
      name: "30-sai made Doutei dato Mahoutsukai ni Nareru Rashii",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      num:"35",
    },
    {
      imageSrc: "../../img/2024/synduality-noir-part-2.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 09 de enero del 2024",
      name: "Synduality: Noir Part 2",
      status: "Estado: concluido",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      num:"34",
    },
    {
      imageSrc: "../../img/2024/akuyaku-reijou-level-99-watashi-wa-ura-boss-desu-ga-maou-dewa-arimasen.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 09 de enero del 2024",
      name: "Akuyaku Reijou Level 99: Watashi wa Ura-Boss desu ga Maou dewa Arimasen",
      status: "Estado: concluido",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      visto:true,
      num:"33",
    },
  
    {
      imageSrc: "../../img/2024/shaman-king-flowers.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 09 de enero del 2024",
      name: "Shaman King: Flowers",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      num:"32",
    },
    {
      imageSrc: "../../img/2024/tsuki-ga-michibiku-isekai-douchuu-2nd-season.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 08 de enero del 2024",
      name: "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      visto:true,
      num:"31",
    },
  
    {
      imageSrc: "../../img/2024/dosanko-gal-wa-namara-menkoi.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 08 de enero del 2024",
      name: "Dosanko Gal wa Namara Menkoi",
      status: "Estado: concluido",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      num:"30",
    },
    {
      imageSrc: "../../img/2024/oroka-na-tenshi-wa-akuma-to-odoru.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 08 de enero del 2024",
      name: "Oroka na Tenshi wa Akuma to Odoru",
      status: "Estado: concluido",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      visto: true,
      num:"29",
    },
  
    {
      imageSrc: "../../img/2024/high-card-season-2.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 08 de enero del 2024",
      name: "High Card Season 2",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      num:"28",
    },
    {
      imageSrc: "../../img/2024/nozomanu-fushi-no-boukensha.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 08 de enero del 2024",
      name: "Nozomanu Fushi no Boukensha",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      num:"27",
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