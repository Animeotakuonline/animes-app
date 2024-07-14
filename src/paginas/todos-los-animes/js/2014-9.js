// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2014/baby-steps.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Baby Steps",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"90",
      },
      {
        imageSrc: "../../img/2014/gokukoku-no-brynhildr.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Gokukoku no Brynhildr",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"89",
      },
      {
        imageSrc: "../../img/2014/break-blade-tv.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Break Blade (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"88",
      },
      {
        imageSrc: "../../img/2014/dragon-ball-kai-2014.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Dragon Ball Kai (2014)",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"87",
      },
      {
        imageSrc: "../../img/2014/kamigami-no-asobi.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kamigami no Asobi",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"86",
      },
      {
        imageSrc: "../../img/2014/kenzen-robo-daimidaler.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kenzen Robo Daimidaler",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"85",
      },
      {
        imageSrc: "../../img/2014/soredemo-sekai-wa-utsukushii.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Soredemo Sekai wa Utsukushii",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"84",
      },
      {
        imageSrc: "../../img/2014/kiniro-no-corda-bluesky.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kiniro no Corda: Blue♪Sky",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"83",
      },
      {
        imageSrc: "../../img/2014/kindaichi-shounen-no-jikenbo-returns.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kindaichi Shounen no Jikenbo Returns",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"82",
      },
      {
        imageSrc: "../../img/2014/mahouka-koukou-no-rettousei.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mahouka Koukou no Rettousei",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"81",
      },
      {
        imageSrc: "../../img/2014/seikoku-no-dragonar.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Seikoku no Dragonar",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"80",
      },
      {
        imageSrc: "../../img/2014/captain-earth.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Captain Earth",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"79",
      },
      {
        imageSrc: "../../img/2014/abarenbou-kishi-matsutarou.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Abarenbou Kishi!! Matsutarou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"78",
      },
      {
        imageSrc: "../../img/2014/lady-jewelpet.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Lady Jewelpet",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"77",
      },
      {
        imageSrc: "../../img/2014/jojos-bizarre-adventure-stardust-crusaders.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "JoJo's Bizarre Adventure: Stardust Crusaders",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"76",
      },
      {
        imageSrc: "../../img/2014/fairy-tail-2014.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Fairy Tail S2",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"75",
      },
      {
        imageSrc: "../../img/2014/bokura-wa-minna-kawaisou.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Bokura wa Minna Kawaisou",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"74",
      },
      {
        imageSrc: "../../img/2014/mushishi-zoku-shou.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mushishi Zoku Shou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"73",
      },
      {
        imageSrc: "../../img/2014/akuma-no-riddle.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Akuma no Riddle",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"72",
      },
      {
        imageSrc: "../../img/2014/selector-infected-wixoss.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Selector Infected WIXOSS",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"71",
      },
      {
        imageSrc: "../../img/2014/blade-and-soul.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Blade and Soul",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"70",
      },
      {
        imageSrc: "../../img/2014/pocket-monsters-xy-special-episode-the-strongest-mega-evolution-act-i.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Pokemon XY: Mega Evolution",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"69",
      },
      {
        imageSrc: "../../img/2014/12-sai-kiss-kirai-suki.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "12-sai.: Kiss, Kirai, Suki",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"68",
      },
      {
        imageSrc: "../../img/2014/marvel-disk-wars-the-avengers.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Marvel Disk Wars: The Avengers endgame",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"67",
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