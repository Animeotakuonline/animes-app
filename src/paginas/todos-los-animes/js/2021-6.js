// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2021/subarashiki-kono-sekai-the-animation.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Subarashiki Kono Sekai The Animation",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"101",
  },
  {
    imageSrc: "../../img/2021/slime-taoshite-300-nen-shiranai-uchi-ni-level-max-ni-nattemashita.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"100",
  },
  {
    imageSrc: "../../img/2021/bakuten.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Bakuten!!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"99",
  },
  {
    imageSrc: "../../img/2021/isekai-maou-to-shoukan-shoujo-no-dorei-majutsu-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai Maou to Shoukan Shoujo no Dorei Majutsu Ω",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"98",
  },
  {
    imageSrc: "../../img/2021/sd-gundam-world-heroes.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "SD Gundam World Heroes",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"97",
  },
  {
    imageSrc: "../../img/2021/fairy-ranmaru-anata-no-kokoro-otasuke-shimasu.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Fairy Ranmaru: Anata no Kokoro Otasuke Shimasu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"96",
  },
  {
    imageSrc: "../../img/2021/zombieland-saga-revenge.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Zombieland Saga: Revenge",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"95",
  },
  {
    imageSrc: "../../img/2021/kyuukyoku-shinka-shita-full-dive-rpg-ga-genjitsu-yori-mo-kusoge-dattara.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kyuukyoku Shinka shita Full Dive RPG ga Genjitsu yori mo Kusoge Dattara",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"94",
  },
  {
    imageSrc: "../../img/2021/super-cub.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Super Cub",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"93",
  },
  {
    imageSrc: "../../img/2021/mini-dragon.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Mini Dragon",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"92",
  },
  {
    imageSrc: "../../img/2021/gokushufudou.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Gokushufudou",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"91",
  },
  {
    imageSrc: "../../img/2021/fruits-basket-the-final.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Fruits Basket: The Final",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"90",
  },
  {
    imageSrc: "../../img/2021/odd-taxi.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Odd Taxi",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"89",
  },
  {
    imageSrc: "../../img/2021/tensura-nikki-tensei-shitara-slime-datta-ken.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tensura Nikki: Tensei shitara Slime Datta Ken",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"88",
  },
  {
    imageSrc: "../../img/2021/seijo-no-maryoku-wa-bannou-desu.jpg",
    dateAdd7ed: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Seijo no Maryoku wa Bannou Desu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"87",
  },
  {
    imageSrc: "../../img/2021/seven-knights-revolution-eiyuu-no-keishousha.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Seven Knights Revolution: Eiyuu no Keishousha",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"86",
  },
  {
    imageSrc: "../../img/2021/hige-wo-soru-soshite-joshikousei-wo-hirou.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Hige wo Soru. Soshite Joshikousei wo Hirou.",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"85",
  },
  {
    imageSrc: "../../img/2021/nomad-megalo-box-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Nomad: Megalo Box 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"84",
  },
  {
    imageSrc: "../../img/2021/dragon-ie-wo-kau.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Dragon, Ie wo Kau.",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"83",
  },
  {
    imageSrc: "../../img/2021/sayonara-watashi-no-cramer.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Sayonara Watashi no Cramer",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"82",
  },
  {
    imageSrc: "../../img/2021/sentouin-hakenshimasu.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Sentouin, Hakenshimasu!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"81",
  },
  {
    imageSrc: "../../img/2021/shakunetsu-kabaddi.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Shakunetsu Kabaddi",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"80",
  },
  {
    imageSrc: "../../img/2021/mashiro-no-oto.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Mashiro no Oto",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"79",
  },
  {
    imageSrc: "../../img/2021/vivy-fluorite-eyes-song.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Vivy: Fluorite Eye's Song",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"78",
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