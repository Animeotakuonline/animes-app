// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2007/kara-no-kyoukai-2-satsujin-kousatsu.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Kara no Kyoukai 2: Satsujin Kousatsu",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/bleach-the-diamonddust-rebellion.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Bleach: The DiamondDust Rebellion",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/kara-no-kyoukai-1-fukan-fuukei.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Kara no Kyoukai 2: Satsujin Kousatsu",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/tsubasa-tokyo-revelations.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Tsubasa Chronicle: Tokyo Revelations",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/ghost-hound.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Ghost Hound - Shinreigari",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/kodomo-no-jikan.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Kodomo no Jikan",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/genshiken-2.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Genshiken 2",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/minami-ke.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Minami-ke",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/prism-ark.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Prism Ark",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/ef-a-tale-of-memories.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "ef - a tale of memories.",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2007/mobile-suit-gundam-00.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Mobile Suit Gundam 00",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/shugo-chara.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Shugo Chara!",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/clannad.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Clannad",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2007/shakugan-no-shana-ii.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Shakugan no Shana II",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2007/gyakkyou-burai-kaiji-ultimate-survivor.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Gyakkyou Burai Kaiji Ultimate Survivor",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/myself-yourself.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Myself Yourself",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/majin-tantei-nougami-neuro.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Majin Tantei Nougami Neuro",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/da-capo-ii.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Da Capo II",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/sword-of-the-stranger.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Sword of the Stranger",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/evangelion-1-11-you-are-not-alone.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Evangelion: 1.11 You Are (Not) Alone",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/bokusatsu-tenshi-dokuro-chan-2.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Bokusatsu Tenshi Dokuro-chan 2",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/naruto-shippuuden-movie-1.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Naruto: Shippuuden Movie 1",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/higurashi-no-naku-koro-ni-gaiden-nekogoroshi-hen.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Higurashi no Naku Koro ni Gaiden Nekogoroshi-hen",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2007/baccano.jpg",
    dateAdded: "2007",
    dateOfRelease: "Fecha de emisión",
    name: "Baccano!",
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