// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
      imageSrc: "../../img/2012/kokoro-connect-michi-random.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Kokoro Connect: Michi Random",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/ao-no-exorcist-movie.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Ao no Exorcist Movie",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/onii-chan-dakedo-ai-sae-areba-kankeinai-yo-ne-specials.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "OniAi Specials",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/sukitte-ii-na-yo.-specials.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Sukitte Ii na yo Specials",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/inferno-cop.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Inferno Cop",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/saki-achiga-hen-episode-of-side-a-specials.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Saki: Achiga-hen - Episode of Side-A Specials",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/one-piece-special-glorious-island.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "One Piece Special: Glorious Island",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/akb0048-next-stage.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "AKB0048 Next Stage",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/boku-no-imouto-wa-osaka-okan.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Boku no Imouto wa 'Osaka Okan'",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/girls-und-panzer-specials.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Girls und Panzer",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/junjou-romantica-ova.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Junjou Romantica OVA",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/chuunibyou-demo-koi-ga-shitai-depth-of-field-ai-to-nikushimi-gekijyo.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Chuu-ni Byou!: Depth of Field - Ai to Nikushimi Gekijyo",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/tasogare-otome-x-amnesia-special.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Tasogare Otome x Amnesia Special",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/one-piece-episode-of-luffy-hand-island-no-bouken.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Nombre del anime",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/one-piece-film-z.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "One Piece: Episode of Luffy - Hand Island no Bouken",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/acchi-kocchi-placeprincess.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Acchi Kocchi: Place=Princess",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/saintonii-san.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Saint☆Onii-san",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/ebiten-kouritsu-ebisugawa-koukou-tenmonbu-specials.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Ebiten: Kouritsu Ebisugawa Koukou Tenmonbu Specials",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/haiyore-nyaruko-san-yasashii-teki-no-shitome-kata.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Haiyore! Nyaruko-san: Yasashii Teki no Shitome-kata",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/evangelion-3-33-you-can-not-redo.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Evangelion: 3.33 You Can (Not) Redo",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/girls-und-panzer-shoukai-shimasu.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Girls und Panzer: Shoukai Shimasu!",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/sword-art-offline.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Sword Art Offline",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/kono-danshi-ningyo-hiroimashita.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Kono Danshi, Ningyo Hiroimashita.",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"#",
    },
    {
      imageSrc: "../../img/2012/arata-naru-sekai-mirai-hen.jpg",
      dateAdded: "2012",
      dateOfRelease: "Fecha de emisión",
      name: "Arata naru Sekai: Mirai-hen",
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