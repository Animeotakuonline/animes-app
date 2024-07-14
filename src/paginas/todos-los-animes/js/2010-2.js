// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2010/11eyes-ova.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "11eyes OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/strike-witches-2.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Strike Witches 2",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/sekirei-pure-engagement.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Sekirei: Pure Engagement",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/seitokai-yakuindomo.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Seitokai Yakuindomo",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/nodame-cantabile-ova-2.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Nodame Cantabile OVA 2",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/gintama-shinyaku-benizakura-hen.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Gintama: Shinyaku Benizakura-hen",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/magic-kaito.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Magic Kaito",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/k-on-2.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "K-ON!! Second Season",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/nodame-cantabile-finale-special.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Nodame Cantabile Finale Special",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/mayoi-neko-overrun.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Mayoi Neko Overrun!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/senkou-no-night-raid.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Senkou no Night Raid",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/giant-killing.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Giant Killing",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/hakuouki.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Hakuouki Shinsengumi Kitan",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/arakawa-under-the-bridge.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Arakawa Under the Bridge",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/jewelpet-twinkle.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Jewelpet Twinkle☆",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/kaichou-wa-maid-sama.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Kaichou wa Maid-sama!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/trigun-badlands-rumble.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Trigun: Badlands Rumble",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/rainbow-nisha-rokubou-no-shichinin.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Rainbow: Nisha Rokubou no Shichinin",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/heroman.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Heroman",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/b-gata-h-kei.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "B Gata H Kei",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/one-piece-strong-world-episode-0.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "One Piece: Strong World Episode 0",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/ladies-versus-butlers-specials.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Ladies versus Butlers! Specials",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/ladies-versus-butlers-tokuten-disc-music-clip.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Ladies versus Butlers! Tokuten Disc Music Clip",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/ikkitousen-xtreme-xecutor.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Ikkitousen: Xtreme Xecutor",
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