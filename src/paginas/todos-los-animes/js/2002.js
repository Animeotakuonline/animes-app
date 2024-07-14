// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2002/macross-zero.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Macross Zero",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/green-green-ova.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Green Green OVA",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/pokemon-advance.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Pokemon Advance",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/saint-seiya-saga-de-hades-sanctuary.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Saint Seiya Saga de Hades Sanctuary",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/onegai-teacher-ova.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Onegai Teacher OVA",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/get-backers.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "GetBackers",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/mobile-suit-gundam-seed.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Mobile Suit Gundam Seed",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/naruto.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Naruto",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/hungry-heart.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Hungry Heart: Wild Striker",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/futari-ecchi.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Futari Ecchi",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/saikano.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Saikano",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/samurai-deeper-kyo.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Samurai Deeper Kyo",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/ai-yori-aoshi.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Ai Yori Aoshi",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/juuni-kokuki.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Juuni Kokuki",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/azumanga-daioh.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Azumanga Daioh",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/digimon-frontier.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Digimon Frontier",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/full-moon-wo-sagashite.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Full Moon wo Sagashite",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/tenshi-na-konamaiki.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Tenshi na Konamaiki",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/hack-sign.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: ".hack//Sign",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/abenobashi-mahou-shoutengai.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Abenobashi Mahou Shoutengai",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/chobits.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Chobits",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/tenchi-muyo-gxp.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Tenchi Muyo! GXP",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/kigeki-comedy.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Sweat Punch",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2002/love-hina-again.jpg",
    dateAdded: "2002",
    dateOfRelease: "Fecha de emisión",
    name: "Love Hina Again",
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