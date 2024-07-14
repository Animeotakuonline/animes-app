// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2004/kujibiki-unbalance.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Kujibiki Unbalance",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/tales-of-phantasia-ovas.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Tales of Phantasia: The Animation",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/black-jack.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Black Jack",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/genshiken.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Genshiken",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/mobile-suit-gundam-seed-destiny.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Mobile Suit Gundam Seed Destiny",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/rozen-maiden.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Rozen Maiden",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/beck.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Beck",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/gankutsuou-el-conde-de-montecristo.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Gankutsuou",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/yugioh-duel-monsters-gx.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Yu Gi Oh!: Duel Monsters GX",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/bleach.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Bleach",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/school-rumble.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "School Rumble",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/mahou-shoujo-lyrical-nanoha.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Mahou Shoujo Lyrical Nanoha",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2004/elfen-lied.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Elfen Lied",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2004/dears.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "DearS",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/2x2-shinobuden.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "2x2=Shinobuden",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/girls-bravo-first-season.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Girls Bravo: First Season",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/samurai-7.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Samurai 7",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/green-green-thirteen-erolutions.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Green Green Thirteen: Erolutions",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/samurai-champloo.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Samurai Champloo",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/bakuretsu-tenshi.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Bakuretsu Tenshi",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/onegai-twins-ova.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Onegai Twins OVA",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/initial-d-fourth-stage.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Initial D Fourth Stage",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/gantz.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Gantz",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2004/monster.jpg",
    dateAdded: "2004",
    dateOfRelease: "Fecha de emisión",
    name: "Monster",
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