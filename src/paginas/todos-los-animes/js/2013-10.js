// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2013/senran-kagura.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Senran Kagura",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"10",
      },
      {
        imageSrc: "../../img/2013/ishida-to-asakura.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Ishida to Asakura",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"9",
      },
      {
        imageSrc: "../../img/2013/minami-ke-tadaima.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Minami-ke Tadaima",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"8",
      },
      {
        imageSrc: "../../img/2013/maoyuu-maou-yuusha.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Maoyuu Maou Yuusha",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"7",
      },
      {
        imageSrc: "../../img/2013/da-capo-iii-episode-0.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Da Capo III Episode 0",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"6",
      },
      {
        imageSrc: "../../img/2013/da-capo-iii.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Da Capo III",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"5",
      },
      {
        imageSrc: "../../img/2013/cuticle-tantei-inaba.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Cuticle Tantei Inaba",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"4",
      },
      {
        imageSrc: "../../img/2013/mangirl-asobu-henshuu-girl.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Mangirl!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"3",
      },
      {
        imageSrc: "../../img/2013/ai-mai-mi.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Ai Mai Mi",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"2",
      },
      {
        imageSrc: "../../img/2013/nekomonogatari-kuro.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Nekomonogatari: Kuro",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"1",
      },
      {
        imageSrc: "../../img/2013/yama-no-susume.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Yama no Susume",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"1",
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