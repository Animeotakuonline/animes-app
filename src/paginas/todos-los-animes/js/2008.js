// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2008/maria-holic.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Maria†Holic",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2008/da-capo-if.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Da Capo If",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/kiss-x-sis.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Kiss x Sis",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/one-piece-romance-dawn.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "One Piece: Romance Dawn",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/seto-no-hanayome-ova.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Seto no Hanayome OVA",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/michiko-to-hatchin.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Michiko to Hatchin",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/junjou-romantica-2.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Junjou Romantica 2",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/nodame-cantabile-paris-hen.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Nodame Cantabile Paris Chapter",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/chaos-head.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "ChaoS;HEAd",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/one-outs.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "One Outs",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/kurozuka.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Kurozuka",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/ef-a-tale-of-melodies-blu-ray.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "ef - a tale of melodies",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2008/skip-beat.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Skip Beat!",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/vampire-knight-guilty.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Vampire Knight Guilty",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/ga-rei-zero.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Ga-Rei: Zero",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/inazuma-eleven.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Inazuma Eleven",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/macademi-wasshoi.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Macademi WAsshoi!",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/kyou-no-go-no-ni-2008.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Kyou no Go no Ni (2008)",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/mobile-suit-gundam-00-second-season.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Mobile Suit Gundam 00 S2",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/toaru-majutsu-no-index.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Toaru Majutsu no Index",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2008/kannagi.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Kannagi",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2008/shugo-chara-doki.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Shugo Chara!! Doki",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2008/jigoku-shoujo-mitsuganae.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Jigoku Shoujo Mitsuganae",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2008/kurogane-no-linebarrels.jpg",
    dateAdded: "2008",
    dateOfRelease: "Fecha de emisión",
    name: "Kurogane no Linebarrels",
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