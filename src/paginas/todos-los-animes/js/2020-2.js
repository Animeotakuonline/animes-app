// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2020/love-live-nijigasaki-gakuen-school-idol-doukoukai.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Love Live! Nijigasaki Gakuen School Idol Doukoukai",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"135",
      },
      {
        imageSrc: "../../img/2020/senyoku-no-sigrdrifa.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Senyoku no Sigrdrifa",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"134",
      },
      {
        imageSrc: "../../img/2020/dragon-quest-dai-no-daibouken-2020.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Dragon Quest: Dai no Daibouken (2020)",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"133",
      },
      {
        imageSrc: "../../img/2020/assault-lily-bouquet.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Assault Lily: Bouquet",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"132",
      },
      {
        imageSrc: "../../img/2020/burn-the-witch.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Burn the Witch",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"131", 
      },
      {
        imageSrc: "../../img/2020/majo-no-tabitabi.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Majo no Tabitabi",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"130",
      },
      {
        imageSrc: "../../img/2020/100-man-no-inochi-no-ue-ni-ore-wa-tatteiru.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "100-man no Inochi no Ue ni Ore wa Tatteiru",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"129",
      },
      {
        imageSrc: "../../img/2020/bem-movie-become-human.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Bem Movie: Become Human",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"128",
      }, 
      {
        imageSrc: "../../img/2020/higurashi-no-naku-koro-ni-2020.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Higurashi no Naku Koro ni (2020)",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"127",
      },
      {
        imageSrc: "../../img/2020/quanzhi-gaoshou-2.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Quanzhi Gaoshou 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"126",
      },
      {
        imageSrc: "../../img/2020/ochikobore-fruit-tart.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Ochikobore Fruit Tart",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"125",
      },
      
      
      {
        imageSrc: "../../img/2020/kuma-kuma-kuma-bear.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Kuma Kuma Kuma Bear",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"124",
      },
      {
        imageSrc: "../../img/2020/omoi-omoware-furi-furare.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Omoi, Omoware, Furi, Furare",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"123",
      },
      {
        imageSrc: "../../img/2020/violet-evergarden-movie.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Violet Evergarden Movie",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"122",
      },
      {
        imageSrc: "../../img/2020/umibe-no-tranger.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Umibe no Etranger",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"121",
      },
      {
        imageSrc: "../../img/2020/chuan-shu-zijiu-zhinan.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Chuan Shu Zijiu Zhinan",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"120",
      },

      {
        imageSrc: "../../img/2020/ore-wo-suki-nano-wa-omae-dake-ka-yo-oretachi-no-game-set.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Ore wo Suki nano wa Omae dake ka yo: Oretachi no Game Set",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"119",
      },
      {
        imageSrc: "../../img/2020/given-movie.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Given Movie",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"118",
      },
      {
        imageSrc: "../../img/2020/boku-no-hero-academia-ikinokore-kesshi-no-survival-kunren.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Boku no Hero Academia: Ikinokore! Kesshi no Survival Kunren",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"117",
      },
      {
        imageSrc: "../../img/2020/fatestay-night-movie-heavens-feel-iii-spring-song.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Fate/stay night Movie: Heaven's Feel - III. Spring Song",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"116",
      },
      {
        imageSrc: "../../img/2020/date-a-bullet-dead-or-bullet.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Date A Bullet: Dead or Bullet",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"115",
      },
      {
        imageSrc: "../../img/2020/koi-to-producer-evollove.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Koi to Producer: EVOL×LOVE",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"114",
      },
      {
        imageSrc: "../../img/2020/gibiate.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Gibiate",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"113",
      },
      {
        imageSrc: "../../img/2020/monster-musume-no-oishasan.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Monster Musume no Oishasan",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"112",
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