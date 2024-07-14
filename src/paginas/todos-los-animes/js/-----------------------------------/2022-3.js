// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
    imageSrc: "../../img/2022/yowai-5000-nen-no-soushoku-dragon-iwarenaki-jaryuu-nintei.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Yowai 5000-nen no Soushoku Dragon, Iwarenaki Jaryuu Nintei",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"152",
  },
  {
    imageSrc: "../../img/2022/sasaki-to-miyano-koi-ni-kizuku-mae-no-chotto-shita-hanashi.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Sasaki to Miyano: Koi ni Kizuku Mae no Chotto Shita Hanashi.",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"151",
  },
  {
    imageSrc: "../../img/2022/saikin-yatotta-maid-ga-ayashii.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Saikin Yatotta Maid ga Ayashii",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"150",
  },
  {
    imageSrc: "../../img/2022/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-iv-shin-shou-meikyuu-hen.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou - Meikyuu-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"149",
  },
  {
    imageSrc: "../../img/2022/love-live-superstar-2nd-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Love Live! Superstar!! 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"148",
  },
  {
    imageSrc: "../../img/2022/cang-lan-jue.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Cang Lan Jue",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"147",
  },
  {
    imageSrc: "../../img/2022/hataraku-maou-sama-2.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Hataraku Maou-sama!!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"146",
  },
  {
    imageSrc: "../../img/2022/shine-post.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Shine Post",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"145",
  },
  {
    imageSrc: "../../img/2022/orient-awajishima-gekitou-hen.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Orient: Awajishima Gekitou-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"144",
  },
  {
    imageSrc: "../../img/2022/isekai-yakkyoku.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai Yakkyoku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"143",
  },
  {
    imageSrc: "../../img/2022/hanabi-chan-wa-okuregachi.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Hanabi-chan wa Okuregachi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"142",
  },
  {
    imageSrc: "../../img/2022/kuro-no-shoukanshi.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kuro no Shoukanshi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"141",
  },
  {
    imageSrc: "../../img/2022/extreme-hearts.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Extreme Hearts",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"140",
  },
  {
    imageSrc: "../../img/2022/kj-file.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "KJ File",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"139",
  },
  {
    imageSrc: "../../img/2022/bucchigire.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Bucchigire!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"138",
  },
  {
    imageSrc: "../../img/2022/dr-stone-ryuusui.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Dr. Stone: Ryuusui",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"137",
  },
  {
    imageSrc: "../../img/2022/shadows-house-2nd-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Shadows House 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"136",
  },
  {
    imageSrc: "../../img/2022/soredemo-ayumu-wa-yosetekuru.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Soredemo Ayumu wa Yosetekuru",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    por_ver:true,
    num:"135",
  },
  {
    imageSrc: "../../img/2022/hoshi-no-samidare.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Hoshi no Samidare",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"134",
  },
  {
    imageSrc: "../../img/2022/yofukashi-no-uta.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Yofukashi no Utae",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"133",
  },
  {
    imageSrc: "../../img/2022/shin-tennis-no-ouji-sama-u-17-world-cup.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Shin Tennis no Ouji-sama: U-17 World Cup",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"132",
  },
  {
    imageSrc: "../../img/2022/made-in-abyss-retsujitsu-no-ougonkyou.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Made in Abyss: Retsujitsu no Ougonkyou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"131",
  },
  {
    imageSrc: "../../img/2022/isekai-meikyuu-de-harem-wo.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai Meikyuu de Harem wo",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"130",
  },
  {
    imageSrc: "../../img/2022/kumichou-musume-to-sewagakari.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kumichou Musume to Sewagakari",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"129",
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