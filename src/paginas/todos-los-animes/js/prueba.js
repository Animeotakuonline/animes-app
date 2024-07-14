const cardsData = [
  {
    imageSrc: "../../img/2024/kimetsu-no-yaiba-hashira-geiko-hen.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 12 de mayo del 2024",
    name: "Kimetsu no Yaiba: Hashira Geiko-hen",
    status: "Estado: por estrenar",
    availability: "Disponible 0 capitulos de ??",
    readMoreLink: "../2024/informacion/kimetsu-no-yaiba-hashira-geiko-hen.html",
    por_ver: true,      
    num:"128",
  },
  {
    imageSrc: "../../img/2024/boku-no-hero-academia-7th-season.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 04 de mayo del 2024",
    name: "Boku no Hero Academia 7th Season",
    status: "Estado: por estrenar",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/Boku-no-Hero-Academia-7th-Season.html",
    por_ver: true,
    num:"127",
  },
  // Agrega más objetos según sea necesario
];
// Función para agregar una tarjeta al contenedor
function addCard(cardData, index) {
  const cardsContainer = document.getElementById("cardsContainer");
  
  // Modifica la condición para incluir las tarjetas deseadas
  const visto = cardData.visto || false;
  const por_ver = cardData.por_ver || false;
  const mirando = cardData.mirando || false;
  
  
  const cardHTML = `
  <div class="p-4 sm:w-1/2 lg:w-1/4 ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'} mx-auto">
  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <a href="${cardData.readMoreLink}">
    <img class="lg:h-72 md:h-48 w-full object-cover object-center" src="${cardData.imageSrc}" alt="blog">
    </a>
    <div class="p-6">
      <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateAdded}</h2>
      <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateOfRelease}</h2>
      <h1 class="text-2xl font-semibold mb-3">${cardData.name}</h1>
      <h3 class="text-black hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm mr-2 mb-2">${cardData.status}</h3>
      <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-3">
          <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            ${cardData.availability}
          </span>
        </div>
      </li>
      <div class="flex items-center flex-wrap">
        <a href="${cardData.readMoreLink}" class="${visto ? 'text-orange-400' : por_ver ? 'text-orange-400' : mirando ? 'text-orange-400' : 'text-blue-600'} inline-flex items-center md:mb-2 lg:mb-0">Leer Más
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <p></p>
      </div>
  
      <div class="flex items-center flex-wrap">
  <p ${cardData.num} class="${visto ? 'text-white' : por_ver ? 'text-white' : mirando ? 'text-white' : 'text-black-600'} inline-flex items-center md:mb-2 lg:mb-0">#${cardData.num}
  
  </div>
  
    </div>
  </div>
  </div>
  `;
  
  
  
  cardsContainer.innerHTML += cardHTML;
  }
  
  // Agrega las tarjetas iniciales con índice
  cardsData.forEach((data, index) => addCard(data, index));
  
  // Evento para agregar una nueva tarjeta al hacer clic en el botón
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
  
  // Cerrar la lista desplegable si se hace clic fuera de ella
  document.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.add('hidden');
    }
  });
  });
  