// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2014/terra-formars-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Terra Formars OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"186",
      },
      {
        imageSrc: "../../img/2014/nozo-x-kimi.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Nozo x Kimi",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"185",
      },
      {
        imageSrc: "../../img/2014/hanamonogatari.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Hanamonogatari",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"184",
      },
      {
        imageSrc: "../../img/2014/hunter-x-hunter-the-last-mission.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Hunter x Hunter: The Last Mission",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"183",
      },
      {
        imageSrc: "../../img/2014/kenzen-robo-daimidaler-specials.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kenzen Robo Daimidaler Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"182",
      },
      {
        imageSrc: "../../img/2014/space-dandy-picture-drama.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Space☆Dandy Picture Drama",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"181",
      },
      {
        imageSrc: "../../img/2014/non-non-biyori-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Non Non Biyori OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"180",
      },
      {
        imageSrc: "../../img/2014/pokemon-xy-hakai-no-mayu-to-diancie.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Pokemon XY: Hakai no Mayu to Diancie",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"179",
      },
      {
        imageSrc: "../../img/2014/inugami-san-to-nekoyama-san-special.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Inugami-san to Nekoyama-san: Nekoyama-san to Onsen Ryokou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"178",
      },
      {
        imageSrc: "../../img/2014/girls-und-panzer-kore-ga-hontou-no-anzio-sen-desu.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Girls und Panzer: Kore ga Hontou no Anzio-sen Desu!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"177",
      },
      {
        imageSrc: "../../img/2014/sengoku-basara-judge-end.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Sengoku Basara: Judge End",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"176",
      },
      {
        imageSrc: "../../img/2014/seirei-tsukai-no-blade-dance.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Seirei Tsukai no Blade Dance",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"175",
      },
      {
        imageSrc: "../../img/2014/ghost-in-the-shell-arise-border3-ghost-tears.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Ghost in the Shell: Arise - Border:3 Ghost Tears",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"174",
      },
      {
        imageSrc: "../../img/2014/nobunaga-concerto.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Nobunaga Concerto",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"173",
      },
      {
        imageSrc: "../../img/2014/tokyo-esp.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Tokyo ESP",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"172",
      },
      {
        imageSrc: "../../img/2014/rokujouma-no-shinryakusha.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Rokujouma no Shinryakusha!?",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"171",
      },
      {
        imageSrc: "../../img/2014/zankyou-no-terror.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Zankyou no Terror",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"170",
      },
      {
        imageSrc: "../../img/2014/persona-4-the-golden-animation.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Persona 4 The Golden Animation",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"169",
      },
      {
        imageSrc: "../../img/2014/kuroshitsuji-book-of-circus.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kuroshitsuji: Book of Circus",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"168",
      },
      {
        imageSrc: "../../img/2014/love-stage.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Love Stage!!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"167",
      },
      {
        imageSrc: "../../img/2014/shin-strange.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Shin Strange+",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"166",
      },
      {
        imageSrc: "../../img/2014/ai-mai-mi-mousou-catastrophe.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Ai Mai Mi: Mousou Catastrophe",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"165",
      },
      {
        imageSrc: "../../img/2014/fate-kaleid-liner-prisma-illya-2wei.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Fate/kaleid liner Prisma☆Illya 2wei!",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"164",
      },
      {
        imageSrc: "../../img/2014/yama-no-susume-second-season.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Yama no Susume: Second Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"163",
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