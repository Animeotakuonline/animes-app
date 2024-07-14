// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2014/gin-no-saji-2nd-season.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Gin no Saji 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"18",
      },
      {
        imageSrc: "../../img/2014/youkai-watch.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Youkai Watch",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"18",
      },
      {
        imageSrc: "../../img/2014/super-sonico-the-animation.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Super Sonico The Animation",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"17",
      },
      {
        imageSrc: "../../img/2014/wooser-no-sono-higurashi-2-kakusei-hen.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Wooser no Sono Higurashi 2 Kakusei-hen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"16",
      },
      {
        imageSrc: "../../img/2014/hamatora-the-animation.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Hamatora The Animation",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"15",
      },
      {
        imageSrc: "../../img/2014/d-frag.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "D-Frag!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"14",
      },
      {
        imageSrc: "../../img/2014/nobunaga-the-fool.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Nobunaga the Fool",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"13",
      },
      {
        imageSrc: "../../img/2014/toaru-hikuushi-e-no-koiuta.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Toaru Hikuushi e no Koiuta",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"12",
      },
      {
        imageSrc: "../../img/2014/nobunagun.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Nobunagun",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"11",
      },
      {
        imageSrc: "../../img/2014/noragami.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Noragami",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"10",
      },
      {
        imageSrc: "../../img/2014/minna-atsumare-falcom-gakuen.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Minna Atsumare! Falcom Gakuen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"9",
      },
      {
        imageSrc: "../../img/2014/saikin-imouto-no-yousu-ga-chotto-okashiinda-ga.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "ImoCho",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"8",
      },
      {
        imageSrc: "../../img/2014/saki-zenkoku-hen.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Saki: Zenkoku-hen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"7",
      },
      {
        imageSrc: "../../img/2014/witch-craft-works.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Witch Craft Works",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"6",
      },
      {
        imageSrc: "../../img/2014/tonari-no-seki-kun.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Tonari no Seki-kun",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"5",
      },
      {
        imageSrc: "../../img/2014/seitokai-yakuindomo-2.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Seitokai Yakuindomo* S2",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"4",
      },
      {
        imageSrc: "../../img/2014/mushishi-special-hihamukage.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mushishi Special: Hihamukage",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"3",
      },
      {
        imageSrc: "../../img/2014/spacedandy.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Space☆Dandy",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"2",
      },
      {
        imageSrc: "../../img/2014/robot-girls-z.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Robot Girls Z",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
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