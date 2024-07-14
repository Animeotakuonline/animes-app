// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    
      {
        imageSrc: "../../img/2012/hori-san-to-miyamura-kun.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Hori-san to Miyamura-kun",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/hashi-no-mukou.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Hashi no Mukou",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/accel-world-ex.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Accel World EX",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/highschool-dxd-ova.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Highschool DxD OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/one-piece-episode-of-nami.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "One Piece: Episode of Nami",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/dakara-boku-wa-h-ga-dekinai-recap.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Dakara Boku wa, H ga Dekinai Recap",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/nazo-no-kanojo-x-ova.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Nazo no Kanojo X OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/persona-4-the-animation-no-one-is-alone.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Persona 4 The Animation: No One is Alone",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/nogizaka-haruka-no-himitsu-finale.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Nogizaka Haruka no Himitsu: Finale",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/fairy-tail-houou-no-miko.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Fairy Tail: Houou no Miko",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/tantei-opera-milky-holmes-alternative.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Tantei Opera Milky Holmes: Alternative",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/to-love-ru-darkness-ova.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "To LOVE-Ru Darkness OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/shinryaku-ika-musume-ova.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Shinryaku!! Ika Musume OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/dantalian-no-shoka-ibarahime.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Dantalian no Shoka: Ibarahime",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/corpse-party-missing-footage.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Corpse Party: Missing Footage",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/naruto-shippuuden-movie-6-road-to-ninja.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Naruto: Shippuuden Movie 6 - Road to Ninja",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/code-geass-nunnally-in-wonderland.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Code Geass: Nunnally in Wonderland",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/guilty-crown-lost-christmas.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Guilty Crown: Lost Christmas",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/accel-world-specials.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Accel World Specials",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/ijime.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Ijime",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/mahou-shoujo-lyrical-nanoha-the-movie-2nd-as.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Mahou Shoujo Lyrical Nanoha: The Movie 2nd A's",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/ebiten-kouritsu-ebisugawa-koukou-tenmonbu.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Ebiten: Kouritsu Ebisugawa Koukou Tenmonbu",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/papa-no-iukoto-wo-kikinasai-pokkapoka.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Papa no Iukoto wo Kikinasai!: Pokkapoka",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/oda-nobuna-no-yabou.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Oda Nobuna no Yabou",
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