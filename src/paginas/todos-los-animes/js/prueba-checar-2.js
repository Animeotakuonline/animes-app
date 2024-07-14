const cardsData = [
    {
      id: "yami-shibai-13",
      imageSrc: "../../img/2024/yami-shibai-13.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: ",
      name: "Yami Shibai 13",
      status: "Estado: ",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/yami-shibai-13.html",
      num:"192",
    },
    {
      imageSrc: "../../img/2024/atri-my-dear-moments.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: ",
      name: "Atri: My Dear Moments",
      status: "Estado: ",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/atri-my-dear-moments.html",
      num:"191",
    },
    // Añade más tarjetas según sea necesario
  ];
  
  // Función para agregar una tarjeta al contenedor
  function addCard(cardData) {
    const container = document.getElementById('cardsContainer');
    if (!container) return;
  
    const visto = cardData.visto || false;
    const por_ver = cardData.por_ver || false;
    const mirando = cardData.mirando || false;
  
    const cardHTML = `
      <div id="${cardData.id}" class="p-4 w-full">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'}">
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
          </div>
        </div>
      </div>
    `;
  
    container.innerHTML += cardHTML;
  }
  
  function displayCardsByIds(ids) {
    ids.forEach(id => {
      const cardData = cardsData.find(card => card.id === id);
      if (cardData) addCard(cardData);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('cardsContainer');
    const cardIds = container.getAttribute('data-card-ids').split(',');
  
    // Llamada a la función para mostrar las tarjetas específicas
    displayCardsByIds(cardIds);
  });
  