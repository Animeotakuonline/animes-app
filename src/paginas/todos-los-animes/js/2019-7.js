// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2019/grisaia-phantom-trigger-the-animation.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Grisaia: Phantom Trigger The Animation",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"48",
      },
      {
        imageSrc: "../../img/2019/psycho-pass-sinners-of-the-system-case3-onshuu-no-kanata-ni.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Psycho-Pass: Sinners of the System Case.3 - Onshuu no Kanata ni",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"47",
      },
      {
        imageSrc: "../../img/2019/code-geass-fukkatsu-no-lelouch.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Code Geass: Fukkatsu no Lelouch",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"46",
      },
      {
        imageSrc: "../../img/2019/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-movie-orion-no-ya.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Movie: Orion no Ya",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"45",
      },
      {
        imageSrc: "../../img/2019/psycho-pass-sinners-of-the-system-case2-first-guardian.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Psycho-Pass: Sinners of the System Case.2 - First Guardian",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"44",
      },
      {
        imageSrc: "../../img/2019/fight-league-gear-gadget-generators.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Fight League: Gear Gadget Generators",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"43",
      },
      {
        imageSrc: "../../img/2019/oushitsu-kyoushi-heine-movie.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Oushitsu Kyoushi Heine Movie",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"42",
      },
      {
        imageSrc: "../../img/2019/piano-no-mori-tv-2nd-season.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Piano no Mori (TV) 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"41",
      },
      {
        imageSrc: "../../img/2019/youjo-senki-movie-manner-eizou.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Youjo Senki Movie: Manner Eizou",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"40",
      },
      {
        imageSrc: "../../img/2019/wei-kanjian-erduo-la-2.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Wei, Kanjian Erduo La! 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"39",
      },
      {
        imageSrc: "../../img/2019/kemono-friends-2.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Kemono Friends 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"38",
      },
      {
        imageSrc: "../../img/2019/koi-to-uso-ova.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Koi to Uso OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"37",
      },
      {
        imageSrc: "../../img/2019/virtual-san-wa-miteiru.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Virtual-san wa Miteiru",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"36",
      },
      {
        imageSrc: "../../img/2019/eromanga-sensei-ova.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Eromanga-sensei OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"35",
      },
      {
        imageSrc: "../../img/2019/kouya-no-kotobuki-hikoutai.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Kouya no Kotobuki Hikoutai",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"34",
      },
      {
        imageSrc: "../../img/2019/kaguya-sama-wa-kokurasetai-tensai-tachi-no-renai-zunousen.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"33",
      },
      {
        imageSrc: "../../img/2019/endro.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Endro~!",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"32",
      },
      {
        imageSrc: "../../img/2019/bermuda-triangle-colorful-pastrale.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Bermuda Triangle: Colorful Pastrale",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"31",
      },
      {
        imageSrc: "../../img/2019/date-a-live-iii.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Date A Live Ⅲ",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"30",
      },
      {
        imageSrc: "../../img/2019/mahou-shoujo-tokushusen-asuka.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Mahou Shoujo Tokushusen Asuka",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"29",
      },
      {
        imageSrc: "../../img/2019/domestic-na-kanojo.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Domestic na Kanojo",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"28",
      },
      {
        imageSrc: "../../img/2019/grimms-notes-the-animation.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Grimms Notes The Animation",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"27",
      },
      {
        imageSrc: "../../img/2019/girly-air-force.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Girly Air Force",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"26",
      },
      {
        imageSrc: "../../img/2019/gotoubun-no-hanayome.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Gotoubun no Hanayome",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"25",
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