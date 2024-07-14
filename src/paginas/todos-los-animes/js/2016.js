// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
      imageSrc: "../../img/2016/fategrand-order-first-order.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Fate/Grand Order: First Order",
      status: "Estado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"258",
    },
    {
      imageSrc: "../../img/2016/kamisama-hajimemashita-kamisama-shiawase-ni-naru.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Kamisama Hajimemashita: Kamisama, Shiawase ni Naru",
      status: "Estado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"257",
    },
    {
      imageSrc: "../../img/2016/koro-sensei-quest.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Koro-sensei Quest!",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"256",
    },
    {
      imageSrc: "../../img/2016/chain-chronicle-haecceitas-no-hikari.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Chain Chronicle: Haecceitas no Hikari",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"255",
    },
    {
      imageSrc: "../../img/2016/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-ova.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Danmachi OVA",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"254",
    },
    {
      imageSrc: "../../img/2016/strike-the-blood-ii.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Strike the Blood II",
      status: "Estado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"253",
    },
    {
      imageSrc: "../../img/2016/ansatsu-kyoushitsu-365-nichi-no-jikan.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Ansatsu Kyoushitsu: 365-nichi no Jikan",
      status: "Estado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"252",
    },
    {
      imageSrc: "../../img/2016/pokemon-sun-moon.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Pokemon Sun & Moon",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"251",
    },
    {
      imageSrc: "../../img/2016/monster-musume-no-iru-nichijou-ova.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Monster Musume no Iru Nichijou OVA",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"250",
    },
    {
      imageSrc: "../../img/2016/pocket-monsters-xyz-specials.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Pocket Monsters XY&Z Specials",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"249",
    },
    {
      imageSrc: "../../img/2016/yahari-ore-no-seishun-love-comedy-wa-machigatteiru-zoku-ova.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku OVA",
      status: "Estado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"248",
    },
    {
      imageSrc: "../../img/2016/kubikiri-cycle-aoiro-savant-to-zaregototsukai.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Kubikiri Cycle: Aoiro Savant to Zaregototsukai",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"247",
    },
    {
      imageSrc: "../../img/2016/luger-code-1951.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Luger Code 1951",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"246",
    },
    {
      imageSrc: "../../img/2016/fune-wo-amu.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Fune wo Amu",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"245",
    },
    {
      imageSrc: "../../img/2016/masou-gakuen-hxh-special.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Masou Gakuen HxH Special",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"244",
    },
    {
      imageSrc: "../../img/2016/getsuyoubi-no-tawawa.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Getsuyoubi no Tawawa",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"243",
    },
    {
      imageSrc: "../../img/2016/occulticnine.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Occultic;Nine",
      status: "Estado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"242",
    },
    {
      imageSrc: "../../img/2016/sangatsu-no-lion.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Sangatsu no Lion",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"241",
    },
    {
      imageSrc: "../../img/2016/classicaloid.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "ClassicaLoid",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"240",
    },
    {
      imageSrc: "../../img/2016/long-riders.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Long Riders!",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"239",
    },
    {
      imageSrc: "../../img/2016/udon-no-kuni-no-kiniro-kemari.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Udon no Kuni no Kiniro Kemari",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"238",
    },
    {
      imageSrc: "../../img/2016/sengoku-choujuu-giga.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Sengoku Choujuu Giga",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"237",
    },
    {
      imageSrc: "../../img/2016/drifters.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Drifters",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"236",
    },
    {
      imageSrc: "../../img/2016/ajin-2nd-season.jpg",
      dateAdded: "2016",
      dateOfRelease: "Fecha de emisión",
      name: "Ajin 2nd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"235",
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