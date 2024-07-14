// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2010/hetalia-world-series.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Hetalia World Series",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/kiss-x-sis-tv.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Kiss x Sis (TV)",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/angel-beats.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Angel Beats!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/one-piece-recap.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "One Piece Recap",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/working.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Working!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/katekyo-hitman-reborn-special.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Katekyo Hitman Reborn! Special",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/yondemasu-yo-azazel-san-ova.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Yondemasu yo, Azazel-san OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/suzumiya-haruhi-no-shoushitsu.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Suzumiya Haruhi no Shoushitsu",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/katanagatari.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Katanagatari",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/fate-stay-night-unlimited-blade-works.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Fate/stay night: Unlimited Blade Works",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/mahou-shoujo-lyrical-nanoha-the-movie-1st.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Mahou Shoujo Lyrical Nanoha: The Movie 1st",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/k-on-special-live-house.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "K-ON! Special: Live House!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/nodame-cantabile-finale.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Nodame Cantabile Finale",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/hanamaru-kindergarten.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Hanamaru Youchien",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/seikon-no-qwaser.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Seikon no Qwaser",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/durarara.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Durarara!!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/ookami-kakushi.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Ookami Kakushi",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/dance-in-the-vampire-bund.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Dance in the Vampire Bund",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/omamori-himari.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Omamori Himari",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/baka-to-test-to-shoukanjuu.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Baka to Test to Shoukanjuu",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/so-ra-no-wo-to.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Sora no Woto",
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