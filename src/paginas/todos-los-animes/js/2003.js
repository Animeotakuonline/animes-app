// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2003/naruto-takigakure-no-shitou-ore-ga-eiyuu-dattebayo.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo!",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/chrno-crusade.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Chrno Crusade",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/maburaho.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Maburaho",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/ai-yori-aoshi-enishi.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Ai Yori Aoshi: Enishi",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/shigetsutan-tsukihime.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Shingetsutan Tsukihime",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/gunslinger-girl.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Gunslinger Girl",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/gungrave.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Gungrave",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/kimi-ga-nozomu-eien.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Kimi ga Nozomu Eien",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/kousetsu-hyaku-monogatari.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Hundred Stories",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/fullmetal-alchemist.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Fullmetal Alchemist",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/tokio-good-fathers.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Tokyo Godfathers",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/full-metal-panic-fumoffu.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Full Metal Panic? Fumoffu",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/ikkitousen.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Ikkitousen",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/onegai-twins.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Onegai Twins",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/green-green.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Green Green",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/da-capo.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Da Capo",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/cinderella-boy.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Cinderella Boy",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/naruto-akaki-yotsuba-no-clover-wo-sagase.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Naruto: Akaki Yotsuba no Clover wo Sagase",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/ninja-scroll.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Ninja Scroll: The Series",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/tantei-gakuen-q.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Tantei Gakuen Q",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/last-exile.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Last Exile",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/zatch-bell.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Konjiki no Gash Bell!!",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/witchblade.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Witchblade",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2003/matantei-loki-ragnarok.jpg",
    dateAdded: "2003",
    dateOfRelease: "Fecha de emisión",
    name: "Matantei Loki Ragnarok",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
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