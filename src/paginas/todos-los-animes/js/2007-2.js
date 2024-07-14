// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2007/darker-than-black-kuro-no-keiyakusha.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Darker than Black: Kuro no Keiyakusha",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2007/nagasarete-airantou.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Nagasarete Airantou",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2007/claymore.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Claymore",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2007/romeo-x-juliet.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Romeo x Juliet",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2007/shinkyoku-soukai-polyphonica.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Shinkyoku Soukai Polyphonica",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2007/idolmster-xenoglossia.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "iDOLM@STER Xenoglossia",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2007/mahou-shoujo-lyrical-nanoha-strikers.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Mahou Shoujo Lyrical Nanoha StrikerS",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2007/heroic-age.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Heroic Age",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2007/seto-no-hanayome.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Seto no Hanayome",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2007/tengen-toppa.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Tengen Toppa Gurren Lagann",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2007/hayate-no-gotoku.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Hayate no Gotoku!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2007/hitohira.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Hitohira",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2007/petit-eva-evangelion-school.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Evangelion@School",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2007/ikkitousen-dragon-destiny.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Ikkitousen: Dragon Destiny",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2007/naruto-shippuden.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Naruto Shippuden",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2007/venus-versus-virus.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Venus Versus Virus",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2007/nodame-cantabile.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Nodame Cantabile",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2007/afro-samurai.jpg",
        dateAdded: "2007",
        dateOfRelease: "Fecha de emisión",
        name: "Afro Samurai",
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