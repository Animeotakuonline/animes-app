// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2009/nyan-koi.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Nyan Koi!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/asura-cryin-2.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Asura Cryin' 2",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/god-eater-prologue.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "God Eater Prologue",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2009/queens-blade-gyokuza-wo-tsugu-mono.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Queen's Blade: Gyokuza wo Tsugu Mono",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/mahou-sensei-negima-mou-hitotsu-no-sekai.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Mahou Sensei Negima! Mou Hitotsu no Sekai",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2009/fullmetal-alchemist-brotherhood-ovas.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Fullmetal Alchemist: Brotherhood Ovas (Specials)",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/naruto-shippuuden-movie-3-hi-no-ishi-wo-tsugu-mono.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Naruto: Shippuuden Movie 3 - Hi no Ishi wo Tsugu Mono",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2009/cencoroll.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Cencoroll",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/evangelion-2-22-you-can-not-advance.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Evangelion: 2.22 You Can (Not) Advance",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/hatsukoi-limited-gentei-shoujo.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Hatsukoi Limited: Gentei Shoujo",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/tokyo-magnitude-80.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Tokyo Magnitude 8.0",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2009/spice-and-wolf-2.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Spice and Wolf II",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/sora-no-manimani.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Sora no Manimani",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/princess-lover.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Princess Lover!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/kanamemo.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Kanamemo",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/canaan.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Canaan",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/bakemonogatari.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Bakemonogatari",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/needless.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Needless",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/umineko-no-naku-koro-ni.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Umineko no Naku Koro ni",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/taishou-yakyuu-musume.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Taishou Yakyuu Musume.",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/aoi-hana.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Aoi Hana",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/clannad-another-world-kyou-chapter.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Clannad: Another World, Kyou Chapter",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2009/fight-ippatsu-juuden-chan.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Fight Ippatsu! Juuden-Chan!!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2009/saint-seiya-lost-canvas.jpg",
        dateAdded: "2009",
        dateOfRelease: "Fecha de emisión",
        name: "Saint Seiya: The Lost Canvas",
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